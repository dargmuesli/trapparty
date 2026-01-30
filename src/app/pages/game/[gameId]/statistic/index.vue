<template>
  <div v-if="api.isFetching">
    <VioLoaderIndicatorSpinner class="h-16 w-16" />
  </div>
  <!-- s?.length -->
  <div v-else-if="game" class="flex flex-col gap-4">
    <h1 class="m-0">{{ t('game') }}</h1>
    <ol class="list-decimal">
      <TrStatisticGame :game="game" />
    </ol>
  </div>
  <div v-else>
    {{ t('gameNone') }}
  </div>
</template>

<script setup lang="ts">
// import { consola } from 'consola'

// import { GameType, type GameItemFragment } from '~~/gql/generated/graphql'
import { useGameByIdQuery } from '~~/gql/documents/queries/game/gameById'
import { getGameItem } from '~~/gql/documents/fragments/gameItem'
// import { allGamesQuery } from '~~/gql/documents/queries/game/allGames'

// const { $urql } = useNuxtApp()
const { t } = useI18n()
const route = useRoute()

if (!route.params.gameId) {
  throw createError({
    statusCode: 500,
  })
}

// queries
const gameByIdQuery = await useGameByIdQuery({
  gameId: +route.params.gameId,
})

// api data
const api = computed(() =>
  reactive({
    data: {
      ...gameByIdQuery.data.value,
    },
    ...getApiMeta([gameByIdQuery]),
  }),
)
const game = computed(() => getGameItem(gameByIdQuery.data.value?.gameById))

// data
// const games = ref<GameItemFragment[]>()
// const isLoaded = ref(false)
const title = t('title')

// // methods
// const init = async () => {
//   if (!game.value) return

//   const gamesResult = await $urql.value
//     .query(allGamesQuery, {
//       eventId: game.value.eventId,
//       type: GameType.RandomFacts,
//     })
//     .toPromise()

//   if (gamesResult.error) {
//     api.value.errors.push(gamesResult.error)
//     // TODO: add watcher instead
//     consola.error(gamesResult.error)
//   }

//   if (!gamesResult) return loadingStop()

//   games.value =
//     gamesResult.data?.allGames?.nodes
//       .map((x) => getGameItem(x))
//       .filter(isNeitherNullNorUndefined) || []

//   loadingStop()
// }
// const loadingStop = () => (isLoaded.value = true)

// initialization
useHeadDefault({ title })
// await init()
</script>

<script lang="ts">
export default {
  name: 'IndexPage',
}
</script>

<i18n lang="yaml">
de:
  game: Spiel
  gameNone: Kein Spiele vorhanden.
  title: Statistiken
en:
  game: Game
  gameNone: No games available.
  title: Statistics
</i18n>
