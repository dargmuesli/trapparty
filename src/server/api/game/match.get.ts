export interface GameConfig {
  startAt: string
  endAt: string
  players: string[]
  targetMatches: number
}

export interface MatchTry {
  a: string
  b: string
  ts: number
  value: number
}

function sumMatches(tries: MatchTry[]) {
  return tries.reduce(
    (acc, t) => acc + (typeof t.value === 'number' ? t.value : 0),
    0,
  )
}

export default defineEventHandler(async () => {
  const storage = useStorage('fs')
  const cfg = (await storage.getItem<GameConfig>('game:match:config')) || null
  if (!cfg) {
    throw createError({ statusCode: 404, statusMessage: 'Game not configured' })
  }

  const tries = (await storage.getItem<MatchTry[]>('game:match:tries')) || []
  const nowMs = Date.now()
  const startMs = Date.parse(cfg.startAt)
  const endMs = Date.parse(cfg.endAt)

  const elapsedMs = Math.max(nowMs - startMs, 0)
  const remainingMs = Math.max(endMs - nowMs, 0)
  const triedCount = tries.length
  const matchesSoFar = sumMatches(tries)
  const tryRatePerMs = elapsedMs > 0 ? triedCount / elapsedMs : 0
  const expectedRemainingTries = tryRatePerMs * remainingMs

  return {
    ok: true,
    config: cfg,
    stats: {
      now: new Date(nowMs).toISOString(),
      startAt: cfg.startAt,
      endAt: cfg.endAt,
      triedCount,
      matchesSoFar,
      targetMatches: cfg.targetMatches,
      elapsedMs,
      remainingMs,
      expectedRemainingTries,
    },
  }
})
