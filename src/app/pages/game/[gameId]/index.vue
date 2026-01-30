<template>
  <VioLoader :api="api">
    <div v-if="store.participationData?.role !== 'player'">
      {{ t('playerNone') }}
    </div>
    <div v-else-if="!game">
      {{ t('gameNone') }}
    </div>
    <div v-else-if="!game.isActive">
      {{ t('gameActiveNone') }}
    </div>
    <div v-else class="flex flex-col gap-8">
      <!-- <span class="text-gray-500">
        {{ t('gameType', { type: gameTypeReadable }) }}
      </span> -->
      <div
        class="flex flex-col items-start justify-between md:flex-row md:items-center"
      >
        <TrGameTitle :game="game" />
        <VioButtonColored
          :aria-label="t('gameLinkStatistic')"
          :is-primary="false"
          :to="localePath(`/game/${game.id}/statistic`)"
        >
          {{ t('gameLinkStatistic') }}
        </VioButtonColored>
      </div>
      <TrGameRandomFacts
        v-if="game.type === 'RANDOM_FACTS'"
        :game-id="game.id"
      />
      <TrGameEstimationNumeric
        v-if="game.type === 'ESTIMATION_NUMERIC'"
        :game-id="game.id"
      />
      <div v-else>
        {{ t('gameTypeUnexpected') }}
      </div>
    </div>
  </VioLoader>
</template>

<script setup lang="ts">
import { consola } from 'consola'

import { useGameByIdQuery } from '~~/gql/documents/queries/game/gameById'
import { getGameItem } from '~~/gql/documents/fragments/gameItem'

const localePath = useLocalePath()
const { t } = useI18n()
const store = useStore()
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
// questionerName: 'Jonas Thelemann',
const title = t('title')

// // computations
// const gameTypeReadable = computed(() => {
//   if (!game.value) return

//   switch ((game.value as Game).type) {
//     case GameType.RANDOM_FACTS:
//       return t('gameTypeRandomFacts')
//     case GameType.TEAM_SCORE:
//       return t('gameTypeTeamScore')
//     default:
//       consola.error(t('gameTypeUnexpected'))
//       return undefined
//   }
// })

// lifecycle
watch(gameByIdQuery.error, (currentValue, _oldValue) => {
  if (currentValue) consola.error(currentValue)
})

// initialization
useHeadDefault({ title })
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
en:
  gameActiveNone: Game is not active.
  gameLinkStatistic: To the statistics
  gameNone: No game available.
  gameTypeUnexpected: Game type could not be displayed.
  playerNone: You do not look like a player 🤔
  title: Game
</i18n>
