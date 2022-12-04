<template>
  <Loader :api="api">
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
  </Loader>
</template>

<script setup lang="ts">
import consola from 'consola'

import GAME_RANDOM_FACTS_VOTES_ALL_QUERY from '~/gql/query/game/allGameRandomFactsVotes.gql'

import {
  AllGameRandomFactsRoundsQuery,
  GameRandomFactsVotesQuery,
  useAllGameRandomFactsRoundsQuery,
} from '~/gql/generated'

export interface Props {
  gameId: number
}
const props = withDefaults(defineProps<Props>(), {})

const { $urql } = useNuxtApp()
const { t } = useI18n()

// data
const highscores = ref<number[]>([])
const leaderboard = ref<Array<[string, number]>>([])
const rounds = ref<
  NonNullable<
    ArrayElement<
      NonNullable<
        AllGameRandomFactsRoundsQuery['allGameRandomFactsRounds']
      >['nodes']
    >
  >[]
>([])
const votes = ref<
  NonNullable<
    ArrayElement<
      NonNullable<GameRandomFactsVotesQuery['allGameRandomFactsVotes']>['nodes']
    >
  >[]
>([])

// queries
const allGameRandomFactsRoundsQuery = await useAllGameRandomFactsRoundsQuery({
  variables: {
    gameId: props.gameId,
  },
})

// api data
const api = computed(() =>
  reactive({
    data: {
      ...allGameRandomFactsRoundsQuery.data.value,
    },
    ...getApiMeta([allGameRandomFactsRoundsQuery]),
  })
)
const allGameRandomFactsRoundsResult = computed(
  () => allGameRandomFactsRoundsQuery.data.value?.allGameRandomFactsRounds
)

// method
async function init() {
  // TODO: use single query
  rounds.value = arrayRemoveNulls(allGameRandomFactsRoundsResult.value?.nodes)

  const leaderboardObject = {} as Record<string, number>

  for (const round of rounds.value) {
    const result = await $urql.value
      .query<GameRandomFactsVotesQuery>(
        GAME_RANDOM_FACTS_VOTES_ALL_QUERY,
        {
          roundId: +round.id,
        },
        {
          fetchPolicy: 'network-only',
        }
      )
      .toPromise()

    if (result.error) {
      api.value.errors.push(result.error)
      consola.error(result.error)
    }

    if (!result) return
    votes.value = arrayRemoveNulls(result.data?.allGameRandomFactsVotes?.nodes)

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

  for (const [, value] of Object.values(leaderboard.value)) {
    if (
      highscores.value[highscores.value.length] === undefined &&
      (highscores.value.length === 0 ||
        highscores.value[highscores.value.length - 1] !== value)
    ) {
      highscores.value.push(value)
    }

    if (highscores.value.length === 3) break
  }
}

// lifecycle
await init()
</script>

<i18n lang="yaml">
de:
  statisticNone: Keine Statistik vorhanden.
</i18n>
