<template>
  <div v-if="store.participationData.role !== 'player'">
    {{ t('playerNone') }}
  </div>
  <div v-else-if="!game">
    {{ t('gameNone') }}
  </div>
  <div v-else-if="!game.isActive">
    {{ t('gameActiveNone') }}
  </div>
  <div v-else class="flex flex-col gap-4">
    <!-- <span class="text-gray-500">
      {{ t('gameType', { type: gameTypeReadable }) }}
    </span> -->
    <div
      class="flex flex-col items-start justify-between md:flex-row md:items-center"
    >
      <GameTitle :game="game" />
      <Button
        :aria-label="t('gameLinkStatistic')"
        :to="localePath(`/game/${game.id}/statistic`)"
      >
        {{ t('gameLinkStatistic') }}
      </Button>
    </div>
    <GameRandomFacts v-if="game.type === 'RANDOM_FACTS'" :game-id="game.id" />
    <div v-else>
      {{ t('gameTypeUnexpected') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import consola from 'consola'

import GAME_BY_ID_QUERY from '~/gql/query/game/gameById.gql'
import { useStore } from '~/store'
// import { Game, GameType } from '~/types/trapparty'

const localePath = useLocalePath()
const { t } = useI18n()
const store = useStore()

// apollo: {
//   game() {
//     return {
//       query: GAME_BY_ID_QUERY,
//       variables: {
//         gameId: +route.params.gameId,
//       },
//       update: (data) => data.gameById,
//       error(error: any) {
//         graphqlError = error.message
//         consola.error(error.message)
//       },
//     }
//   },
// },
// data
// questionerName: 'Jonas Thelemann',
const title = t('title')

// // computations
// const gameTypeReadable = computed(() => {
//   if (!game) return

//   switch ((game as Game).type) {
//     case GameType.RANDOM_FACTS:
//       return t('gameTypeRandomFacts')
//     case GameType.TEAM_SCORE:
//       return t('gameTypeTeamScore')
//     default:
//       consola.error(t('gameTypeUnexpected'))
//       return undefined
//   }
// })

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
  gameActiveNone: Spiel ist nicht aktiv.
  gameLinkStatistic: Zur Statistik
  gameNone: Kein Spiel vorhanden.
  # gameType: 'Spielmodus: {type}'
  # gameTypeRandomFacts: random facts
  # gameTypeTeamScore: team score
  gameTypeUnexpected: Spieltyp konnte nicht angezeigt werden.
  playerNone: Du siehst nicht aus wie ein Spieler 🤔
  title: Spiel
</i18n>
