<template>
  <Loader :api="api">
    <ul
      v-if="leaderboard.length"
      class="flex flex-col gap-2 sm:text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl"
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
import { consola } from 'consola'

import { getGameRandomFactsRoundItem } from '~/gql/documents/fragments/gameRandomFactsRoundItem'
import { useAllGameRandomFactsRoundsQuery } from '~/gql/documents/queries/game/allGameRandomFactsRounds'
import {
  GameRandomFactsRoundItemFragment,
  GameRandomFactsVoteItemFragment,
} from '~/gql/generated/graphql'
import { getGameRandomFactsVoteItem } from '~/gql/documents/fragments/gameRandomFactsVoteItem'
import { useGameRandomFactsVotesQuery } from '~/gql/documents/queries/game/allGameRandomFactsVotes'

export interface Props {
  gameId: number
}
const props = withDefaults(defineProps<Props>(), {})

const { t } = useI18n()

// data
const highscores = ref<number[]>([])
const leaderboard = ref<Array<[string, number]>>([])
const rounds = ref<GameRandomFactsRoundItemFragment[]>([])
const votes = ref<GameRandomFactsVoteItemFragment[]>([])

// queries
const allGameRandomFactsRoundsQuery = await useAllGameRandomFactsRoundsQuery({
  gameId: props.gameId,
})

// api data
const api = computed(() =>
  reactive({
    data: {
      ...allGameRandomFactsRoundsQuery.data.value,
    },
    ...getApiMeta([allGameRandomFactsRoundsQuery]),
  }),
)
const allGameRandomFactsRoundsResult = computed(
  () => allGameRandomFactsRoundsQuery.data.value?.allGameRandomFactsRounds,
)

// method
const init = async () => {
  // TODO: use single query
  rounds.value = arrayRemoveNulls(
    allGameRandomFactsRoundsResult.value?.nodes.map((x) =>
      getGameRandomFactsRoundItem(x),
    ),
  )

  const leaderboardObject = {} as Record<string, number>

  for (const round of rounds.value) {
    const result = await useGameRandomFactsVotesQuery({
      roundId: round.id,
    }).executeQuery({
      fetchPolicy: 'network-only',
    })

    if (result.error.value) {
      api.value.errors.push(result.error.value)
      consola.error(result.error.value)
    }

    if (!result) return
    votes.value = arrayRemoveNulls(
      result.data.value?.allGameRandomFactsVotes?.nodes.map((x) =>
        getGameRandomFactsVoteItem(x),
      ),
    )

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
    ([, a], [, b]) => b - a,
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
en:
  statisticNone: No statistics available.
</i18n>
