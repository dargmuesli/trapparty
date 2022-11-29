<template>
  <div v-if="gameId">
    <ul
      v-if="leaderboard && leaderboard.length > 0"
      class="flex flex-wrap gap-2"
    >
      <StatisticGameRandomFactEntry
        v-for="(array, index) in leaderboard"
        :key="index"
        :highscores="highscores"
        :player-id="+array[0]"
        :value="array[1]"
      />
    </ul>
    <div v-else>
      {{ t('statisticNone') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import consola from 'consola'

import GAME_RANDOM_FACTS_ROUNDS_ALL_QUERY from '~/gql/query/game/allGameRandomFactsRounds.gql'
import GAME_RANDOM_FACTS_VOTES_ALL_QUERY from '~/gql/query/game/allGameRandomFactsVotes.gql'

import { GameRandomFactsRound, GameRandomFactsVote } from '~/types/trapparty'

export interface Props {
  gameId: number
}
const props = withDefaults(defineProps<Props>(), {})

const { t } = useI18n()

// data
const highscores = ref<number[]>([])
const leaderboard = ref<Array<[string, number]>>([])
const rounds = ref<GameRandomFactsRound[]>([])
const votes = ref<GameRandomFactsVote[]>([])

onMounted(async () => {
  if (!props.gameId) return

  const allGameRandomFactsRoundsResult = await $apollo
    .query({
      query: GAME_RANDOM_FACTS_ROUNDS_ALL_QUERY,
      variables: {
        gameId: props.gameId,
      },
      fetchPolicy: 'network-only',
    })
    .catch((error) => {
      graphqlError = error.message
      consola.error(error)
    })

  if (!allGameRandomFactsRoundsResult) return
  rounds.value =
    allGameRandomFactsRoundsResult.data.allGameRandomFactsRounds.nodes

  const leaderboardObject = {} as Record<string, number>

  for (const round of rounds.value) {
    const allGameRandomFactsVotesResult = await $apollo
      .query({
        query: GAME_RANDOM_FACTS_VOTES_ALL_QUERY,
        variables: {
          roundId: +round.id,
        },
        fetchPolicy: 'network-only',
      })
      .catch((error) => {
        graphqlError = error.message
        consola.error(error)
      })

    if (!allGameRandomFactsVotesResult) return
    votes.value =
      allGameRandomFactsVotesResult.data.allGameRandomFactsVotes.nodes

    for (const vote of votes.value) {
      if (!(vote.playerId in leaderboardObject)) {
        leaderboardObject[vote.playerId] = 0
      }

      if (vote.answer === round.answerCorrect) {
        leaderboardObject[vote.playerId] = leaderboardObject[vote.playerId] + 1
      }
    }
  }

  leaderboard.value = Object.entries(leaderboardObject).sort(
    ([, a], [, b]) => b - a
  )

  for (const [, value] of Object.values(leaderboard)) {
    if (
      highscores.value[highscores.value.length] === undefined &&
      (highscores.value.length === 0 ||
        highscores.value[highscores.value.length - 1] !== value)
    ) {
      highscores.value.push(value)
    }

    if (highscores.value.length === 3) break
  }
})
</script>

<i18n lang="yaml">
de:
  statisticNone: Keine Statistik vorhanden.
</i18n>
