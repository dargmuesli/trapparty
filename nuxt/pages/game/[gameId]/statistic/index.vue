<template>
  <div v-if="!isLoaded">
    <LoaderIndicatorSpinner class="h-16 w-16" />
  </div>
  <div v-else-if="games && games.length > 0" class="flex flex-col gap-4">
    <h1 class="m-0">{{ t('games') }}</h1>
    <ol class="list-decimal">
      <StatisticGame v-for="game in games" :key="game.id" :game="game" />
    </ol>
  </div>
  <div v-else>
    {{ t('gamesNone') }}
  </div>
</template>

<script setup lang="ts">
import consola from 'consola'

import EVENT_BY_NAME_QUERY from '~/gql/query/event/eventByName.gql'
import GAMES_ALL_QUERY from '~/gql/query/game/allGames.gql'

const { t } = useI18n()

// data
const games = ref<Array<any>>()
const isLoaded = ref(false)
const title = t('title')

onMounted(async () => {
  const eventResult = await $apollo
    .query({
      query: EVENT_BY_NAME_QUERY,
      variables: {
        eventName: '2021',
      },
    })
    .catch((error) => {
      graphqlError = error.message
      consola.error(error)
    })

  if (!eventResult) return loadingStop()
  const event = eventResult.data.eventByName

  const gamesResult = await $apollo
    .query({
      query: GAMES_ALL_QUERY,
      variables: {
        eventId: +event.id,
        type: 'RANDOM_FACTS',
      },
    })
    .catch((error) => {
      graphqlError = error.message
      consola.error(error)
    })

  if (!gamesResult) return loadingStop()

  games.value = gamesResult.data.allGames.nodes

  loadingStop()
})

// methods
function loadingStop() {
  isLoaded.value = true
}

// initialization
useHeadDefault(title)
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
</i18n>
