export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  const body = (await readBody(event)) as Record<string, unknown>

  const token = body.token as string | undefined
  const adminToken = runtimeConfig?.trapparty?.admin?.token as
    | string
    | undefined

  if (!adminToken) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Admin token not configured',
    })
  }

  if (!token || typeof token !== 'string') {
    throw createError({
      statusCode: 400,
      statusMessage: 'playerId is required',
    })
  }

  const allowed = token === adminToken

  return {
    allowed,
  }
})
