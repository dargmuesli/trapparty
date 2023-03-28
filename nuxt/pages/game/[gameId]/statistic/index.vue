<template>
  <div v-if="!isLoaded">
    <LoaderIndicatorSpinner class="h-16 w-16" />
  </div>
  <div v-else-if="games && games.length > 0" class="flex flex-col gap-4">
    <h1 class="m-0">{{ t('games') }}</h1>
    <ol class="list-decimal">
      <StatisticGame
        v-for="gameElement in games"
        :key="gameElement.id"
        :game="gameElement"
      />
    </ol>
  </div>
  <div v-else>
    {{ t('gamesNone') }}
  </div>
</template>

<script setup lang="ts">
import consola from 'consola'

import { GameType } from '~/gql/generated/graphql'
import { useGameByIdQuery } from '~/gql/documents/queries/game/gameById'
import { getGameItem } from '~/gql/documents/fragments/gameItem'
import { useAllGamesQuery } from '~/gql/documents/queries/game/allGames'

const { t } = useI18n()
const route = useRoute()

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
  })
)
const game = computed(() => getGameItem(gameByIdQuery.data.value?.gameById))

// data
const games = ref<Array<any>>()
const isLoaded = ref(false)
const title = t('title')

// methods
const init = async () => {
  if (!game.value) return

  const gamesResult = await useAllGamesQuery({
    eventId: game.value.eventId,
    type: GameType.RandomFacts,
  }).executeQuery()

  if (gamesResult.error.value) {
    api.value.errors.push(gamesResult.error.value)
    // TODO: add watcher instead
    consola.error(gamesResult.error)
  }

  if (!gamesResult) return loadingStop()

  games.value = gamesResult.data.value?.allGames?.nodes

  loadingStop()
}
const loadingStop = () => (isLoaded.value = true)

// initialization
useHeadDefault(title)
await init()
</script>

<script lang="ts">
export default {
  name: 'IndexPage',
}
</script>

<i18n lang="yaml">
de:
  games: Spiele
  gamesNone: Keine Spiele vorhanden.
  title: Statistiken
en:
  games: Games
  gamesNone: No games available.
  title: Statistics
</i18n>
