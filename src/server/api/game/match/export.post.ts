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

type ExportFilterType = 'all' | 'success' | 'failed'

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  const body = (await readBody(event)) as Record<string, unknown>

  const token = body.token as string | undefined
  const playerId = body.playerId as string | undefined
  const filterType = (body.filterType as ExportFilterType) || 'all'
  const adminToken =
    (runtimeConfig?.trapparty?.admin?.token as string | undefined) || ''

  const provided = token ?? playerId ?? ''
  if (!adminToken || provided !== adminToken) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized: invalid admin credentials',
    })
  }

  if (!['all', 'success', 'failed'].includes(filterType)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid filterType. Must be all, success, or failed',
    })
  }

  const storage = useStorage('fs')
  const config =
    (await storage.getItem<GameConfig>('game:match:config')) || null
  const tries = (await storage.getItem<MatchTry[]>('game:match:tries')) || []

  if (!config) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Game not configured',
    })
  }

  // Filter tries based on success/failure
  let filteredTries = tries
  if (filterType === 'success') {
    filteredTries = tries.filter((t) => t.value > 0)
  } else if (filterType === 'failed') {
    filteredTries = tries.filter((t) => t.value === 0)
  }

  const totalMatches = filteredTries.reduce(
    (acc, t) => acc + (typeof t.value === 'number' ? t.value : 0),
    0,
  )

  return {
    exportedAt: new Date().toISOString(),
    filterType,
    config,
    stats: {
      totalTries: filteredTries.length,
      totalMatches,
    },
    data: filteredTries.map((t) => ({
      playerA: t.a,
      playerB: t.b,
      timestamp: new Date(t.ts).toISOString(),
      matchValue: t.value,
      isSuccess: t.value > 0,
    })),
  }
})
