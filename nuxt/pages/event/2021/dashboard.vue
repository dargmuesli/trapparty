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
              v-if="game.isActive && store.participationData.role === 'player'"
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

import EVENT_BY_NAME_QUERY from '~/gql/query/event/eventByName.gql'
import GAMES_ALL_QUERY from '~/gql/query/game/allGames.gql'
import { Game } from '~/types/trapparty'

const localePath = useLocalePath()
const { t } = useI18n()

// apollo: {
//   trapPartyEvent() {
//     return {
//       query: EVENT_BY_NAME_QUERY,
//       variables: {
//         eventName: '2021',
//       },
//       update: (data) => data.eventByName,
//       error(error, _vm, _key, _type, _options) {
//         graphqlError = error.message
//       },
//     }
//   },
// },
// data
const games = ref<Game[]>()
const title = t('title')

// lifecycle
watch(
  () => trapPartyEvent,
  (currentValue, _oldValue) => {
    if (!currentValue) return

    $apollo
      .query({
        query: GAMES_ALL_QUERY,
        variables: {
          eventId: currentValue.id,
        },
      })
      .then((data) => {
        games.value = data.data.allGames.nodes
      })
      .catch((error: any) => {
        graphqlError = error.message
        consola.error(error)
      })
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
