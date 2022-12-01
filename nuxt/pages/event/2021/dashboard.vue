<template>
  <Loader :api="api">
    <div v-if="games && games.length > 0">
      <h1>
        {{ title }}
      </h1>
      <h2>
        {{ t('games') }}
      </h2>
      <ul class="flex flex-col gap-4">
        <li
          v-for="game in games"
          :key="game.id"
          class="rounded border border-gray-900 px-8 py-4 dark:border-white md:px-16 md:py-8"
        >
          <GameTitle :game="game" />
          <div class="flex gap-4">
            <Button
              v-if="game.isActive && store.participationData?.role === 'player'"
              :aria-label="t('gameLink')"
              :to="localePath(`/game/${game.id}`)"
            >
              {{ t('gameLink') }}
            </Button>
            <Button
              :aria-label="t('gameLinkStatistic')"
              :to="localePath(`/game/${game.id}/statistic`)"
            >
              {{ t('gameLinkStatistic') }}
            </Button>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>{{ t('gamesNone') }}</div>
  </Loader>
</template>

<script setup lang="ts">
import consola from 'consola'

import GAMES_ALL_QUERY from '~/gql/query/game/allGames.gql'
import { useEventByNameQuery, AllGamesQuery } from '~/gql/generated'
import { useStore } from '~/store'

const { $urql } = useNuxtApp()
const localePath = useLocalePath()
const { t } = useI18n()
const store = useStore()

// queries
const eventByNameQuery = await useEventByNameQuery({
  variables: {
    eventName: '2021',
  },
})

// api data
const api = computed(() =>
  reactive({
    data: {
      ...eventByNameQuery.data.value,
    },
    ...getApiMeta([eventByNameQuery]),
  })
)
const trapPartyEvent = computed(() => eventByNameQuery.data.value?.eventByName)

// data
const games = ref<
  NonNullable<ArrayElement<NonNullable<AllGamesQuery['allGames']>['nodes']>>[]
>([])
const title = t('title')

// lifecycle
watch(
  () => trapPartyEvent.value,
  async (currentValue, _oldValue) => {
    if (!currentValue) return

    const result = await $urql.value
      .query<AllGamesQuery>(GAMES_ALL_QUERY, {
        eventId: currentValue.id,
      })
      .toPromise()

    if (result.error) {
      api.value.errors.push(result.error)
      consola.error(result.error)
    }

    const allGames = arrayRemoveNulls(result.data?.allGames?.nodes)

    games.value = allGames
  }
)

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
  gameLink: Zum Spiel
  gameLinkStatistic: Zur Statistik
  title: TrapParty 2021
</i18n>
