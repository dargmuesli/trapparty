export default defineNuxtRouteMiddleware(async () => {
  const store = useStore()
  const playerData = store.participationData

  if (!playerData || playerData.role !== 'player' || !playerData.playerId) {
    return abortNavigation(
      createError({ statusCode: 404, statusMessage: 'Page Not Found' }),
    )
  }

  try {
    const res = await $fetch('/api/game/match/access-check', {
      method: 'POST',
      body: { token: playerData.playerId },
    })
    if (!res || typeof res !== 'object' || !res.allowed) {
      return abortNavigation(
        createError({ statusCode: 404, statusMessage: 'Page Not Found' }),
      )
    }
  } catch {
    return abortNavigation(
      createError({ statusCode: 404, statusMessage: 'Page Not Found' }),
    )
  }
})
