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
import { AllGamesQuery, EventByNameQuery } from '~/gql/generated'

const { $urql } = useNuxtApp()
const { t } = useI18n()

// api data
const api = getApiDataDefault()

// data
const games = ref<Array<any>>()
const isLoaded = ref(false)
const title = t('title')

// methods
async function init() {
  const eventResult = await $urql.value
    .query<EventByNameQuery>(EVENT_BY_NAME_QUERY, {
      eventName: '2021',
    })
    .toPromise()

  if (eventResult.error) {
    api.value.errors.push(eventResult.error)
    // TODO: add watcher instead
    consola.error(eventResult.error)
  }

  if (!eventResult) return loadingStop()
  const trapPartyEvent = eventResult.data?.eventByName

  if (!trapPartyEvent) return

  const gamesResult = await $urql.value
    .query<AllGamesQuery>(GAMES_ALL_QUERY, {
      eventId: +trapPartyEvent.id,
      type: 'RANDOM_FACTS',
    })
    .toPromise()

  if (eventResult.error) {
    api.value.errors.push(eventResult.error)
    // TODO: add watcher instead
    consola.error(eventResult.error)
  }

  if (!gamesResult) return loadingStop()

  games.value = gamesResult.data?.allGames?.nodes

  loadingStop()
}
function loadingStop() {
  isLoaded.value = true
}

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
</i18n>
