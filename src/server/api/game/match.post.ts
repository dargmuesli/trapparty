export interface GameConfig {
  startAt: string // ISO timestamp
  endAt: string // ISO timestamp
  players: string[] // UUIDs of currently participating players
  targetMatches: number // target number of matches by end
}

export interface MatchTry {
  a: string // player UUID
  b: string // other player UUID
  ts: number // timestamp (ms since epoch)
  value: number // awarded match value for this try (>= 0)
}

type AdminUpdateBody = {
  token?: string
  playerId?: string
  startAt?: string
  endAt?: string
  players?: string[]
  targetMatches?: number
}

type PlayerTryBody = {
  playerId?: string
  otherPlayerId?: string
}

const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

async function getConfig() {
  const storage = useStorage('fs')
  const cfg = (await storage.getItem<GameConfig>('game:match:config')) || null
  return cfg
}

async function setConfig(cfg: GameConfig) {
  const storage = useStorage('fs')
  await storage.setItem('game:match:config', cfg)
}

async function getTries() {
  const storage = useStorage('fs')
  const tries = (await storage.getItem<MatchTry[]>('game:match:tries')) || []
  return tries
}

async function addTry(entry: MatchTry) {
  const storage = useStorage('fs')
  const tries = (await storage.getItem<MatchTry[]>('game:match:tries')) || []
  tries.push(entry)
  await storage.setItem('game:match:tries', tries)
  return tries
}

function isUuid(id: unknown): id is string {
  return typeof id === 'string' && UUID_REGEX.test(id)
}

function parseIso(ts?: string) {
  if (!ts) return NaN
  const t = Date.parse(ts)
  return Number.isFinite(t) ? t : NaN
}

function sumMatches(tries: MatchTry[]) {
  return tries.reduce(
    (acc, t) => acc + (typeof t.value === 'number' ? t.value : 0),
    0,
  )
}

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  const body = (await readBody(event)) as AdminUpdateBody & PlayerTryBody

  // Admin update flow when authorized via token
  const adminToken = runtimeConfig?.trapparty?.admin?.token as
    | string
    | undefined
  const hasToken = typeof body.token === 'string'

  if (hasToken) {
    const provided = hasToken ? body.token : body.playerId
    if (!adminToken || provided !== adminToken) {
      throw createError({
        status: 401,
        statusText: 'Unauthorized: invalid admin credentials',
      })
    }

    const existing =
      (await getConfig()) ||
      ({
        startAt: new Date().toISOString(),
        endAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
        players: [],
        targetMatches: 0,
      } satisfies GameConfig)

    // Validate and apply updates
    const next: GameConfig = { ...existing }

    if (typeof body.startAt === 'string') {
      const startMs = parseIso(body.startAt)
      if (!Number.isFinite(startMs)) {
        throw createError({
          status: 400,
          statusText: 'Invalid startAt ISO timestamp',
        })
      }
      next.startAt = new Date(startMs).toISOString()
    }

    if (typeof body.endAt === 'string') {
      const endMs = parseIso(body.endAt)
      if (!Number.isFinite(endMs)) {
        throw createError({
          status: 400,
          statusText: 'Invalid endAt ISO timestamp',
        })
      }
      next.endAt = new Date(endMs).toISOString()
    }

    const startMs = parseIso(next.startAt)
    const endMs = parseIso(next.endAt)
    if (
      !Number.isFinite(startMs) ||
      !Number.isFinite(endMs) ||
      startMs >= endMs
    ) {
      throw createError({
        status: 400,
        statusText: 'startAt must be before endAt',
      })
    }

    if (Array.isArray(body.players)) {
      const uuids = body.players.filter((p) => isUuid(p))
      if (uuids.length !== body.players.length) {
        throw createError({
          status: 400,
          statusText: 'players must be UUIDs',
        })
      }
      // De-duplicate while preserving order
      const seen = new Set<string>()
      next.players = uuids.filter((p) => {
        if (seen.has(p)) return false
        seen.add(p)
        return true
      })
    }

    if (typeof body.targetMatches === 'number') {
      if (!Number.isFinite(body.targetMatches) || body.targetMatches < 0) {
        throw createError({
          status: 400,
          statusText: 'targetMatches must be a non-negative number',
        })
      }
      next.targetMatches = Math.floor(body.targetMatches)
    }

    await setConfig(next)
    const tries = await getTries()

    return {
      ok: true,
      config: next,
      stats: {
        triedCount: tries.length,
        matchesSoFar: sumMatches(tries),
      },
    }
  }

  // Player try flow
  const cfg = await getConfig()
  if (!cfg) {
    throw createError({ status: 404, statusText: 'Game not configured' })
  }

  const nowMs = Date.now()
  const startMs = parseIso(cfg.startAt)
  const endMs = parseIso(cfg.endAt)
  if (!Number.isFinite(startMs) || !Number.isFinite(endMs)) {
    throw createError({
      status: 500,
      statusText: 'Game configuration timestamps invalid',
    })
  }

  if (nowMs < startMs) {
    return {
      match: 0,
      error: 'game_not_started',
      message: 'The game has not started yet.',
    }
  }
  if (nowMs > endMs) {
    return {
      match: 0,
      error: 'game_ended',
      message: 'The game has already ended.',
    }
  }

  const playerId = body.playerId
  const otherPlayerId = body.otherPlayerId
  if (!isUuid(playerId) || !isUuid(otherPlayerId)) {
    throw createError({
      status: 400,
      statusText: 'playerId and otherPlayerId must be UUIDs',
    })
  }
  if (playerId === otherPlayerId) {
    return {
      match: 0,
      error: 'invalid_pair',
      message: 'Cannot match with yourself.',
    }
  }

  const playerSet = new Set(cfg.players)
  if (!playerSet.has(playerId) || !playerSet.has(otherPlayerId)) {
    return {
      match: 0,
      error: 'not_participating',
      message: 'One or both players are not currently participating.',
    }
  }

  // Load tries and compute extrapolated per-try match value
  const triesBefore = await getTries()
  const alreadyTried = triesBefore.some(
    (t) =>
      (t.a === playerId && t.b === otherPlayerId) ||
      (t.a === otherPlayerId && t.b === playerId),
  )
  if (alreadyTried) {
    return {
      match: 0,
      error: 'duplicate_pair',
      message: 'This player combination has already been tried.',
    }
  }
  const triedCount = triesBefore.length
  const matchesSoFar = sumMatches(triesBefore)

  const elapsedMs = Math.max(nowMs - startMs, 0)
  const remainingMs = Math.max(endMs - nowMs, 0)

  // Use a conservative rate that includes the current try to avoid zero-rate on first attempt
  const tryRatePerMs = elapsedMs > 0 ? (triedCount + 1) / elapsedMs : 0 // tries/ms
  const remainingTries = Math.max(Math.floor(tryRatePerMs * remainingMs), 0)

  // Throttle successful matches to about 1 per minute while still aiming for target
  const triesPerMinute =
    elapsedMs > 0 ? ((triedCount + 1) / elapsedMs) * 60000 : 0
  const remainingMinutes = Math.max(remainingMs / 60000, 0.0001)

  const neededRemainingMatches = Math.max(cfg.targetMatches - matchesSoFar, 0)

  let value: number
  if (neededRemainingMatches <= 0) {
    value = 0 // target already met
  } else if (remainingTries <= 0) {
    // No tries expected before end; allocate all remaining to this try
    value = neededRemainingMatches
  } else {
    // Unified handling: limit successes to ~1/min and adjust per-success value to hit target
    const successProbability = Math.min(
      1,
      triesPerMinute > 0 ? 1 / triesPerMinute : 1,
    )

    const lastSuccessValue = (() => {
      for (let i = triesBefore.length - 1; i >= 0; i--) {
        const v = Math.max(0, triesBefore[i]?.value || 0)
        if (v > 0) return v
      }
      return 0
    })()
    const growthCap = lastSuccessValue > 0 ? lastSuccessValue * 2 : 1

    const requiredPerMinute = neededRemainingMatches / remainingMinutes
    const perSuccessValueRaw = Math.ceil(requiredPerMinute)
    const perSuccessValue = Math.max(
      1,
      Math.min(perSuccessValueRaw, growthCap, neededRemainingMatches),
    )

    const success = Math.random() < successProbability
    value = success ? perSuccessValue : 0
  }

  // Record the try with computed value
  const updatedTries = await addTry({
    a: playerId,
    b: otherPlayerId,
    ts: nowMs,
    value,
  })
  const updatedMatches = sumMatches(updatedTries)

  return {
    match: value,
    stats: {
      triedCount: updatedTries.length,
      matchesSoFar: updatedMatches,
      targetMatches: cfg.targetMatches,
      remainingMs,
      expectedRemainingTries: remainingTries,
    },
  }
})
