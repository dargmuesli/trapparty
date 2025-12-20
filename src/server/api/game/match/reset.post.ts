export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  const body = (await readBody(event)) as Record<string, unknown>

  const token = body.token as string | undefined
  const playerId = body.playerId as string | undefined
  const adminToken =
    (runtimeConfig?.trapparty?.admin?.token as string | undefined) || ''

  const provided = token ?? playerId ?? ''
  if (!adminToken || provided !== adminToken) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized: invalid admin credentials',
    })
  }

  const storage = useStorage('fs')
  await storage.setItem('game:match:tries', [])

  return {
    ok: true,
    message: 'All match tries have been reset',
  }
})
