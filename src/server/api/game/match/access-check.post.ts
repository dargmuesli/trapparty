export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  const body = (await readBody(event)) as Record<string, unknown>

  const token = body.token as string | undefined
  const adminToken = runtimeConfig?.trapparty?.admin?.token as
    | string
    | undefined

  if (!adminToken) {
    throw createError({
      status: 500,
      statusText: 'Admin token not configured',
    })
  }

  if (!token || typeof token !== 'string') {
    throw createError({
      status: 400,
      statusText: 'playerId is required',
    })
  }

  const allowed = token === adminToken

  return {
    allowed,
  }
})
