<template>
  <VioLoader :api="api">
    <ul
      v-if="leaderboard?.length"
      class="flex flex-col gap-2 sm:text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl"
    >
      <li
        v-for="(leader, index) of leaderboard"
        :key="index"
        :class="[
          'flex items-center justify-between rounded-md px-4 py-2 font-bold',
          index === 0 ? 'bg-yellow-600 text-2xl text-white' : '',
          index === 1 ? 'bg-gray-600 text-2xl text-white' : '',
          index === 2 ? 'bg-orange-600 text-2xl text-white' : '',
          index > 2 ? 'bg-gray-300 text-lg dark:bg-gray-800' : '',
        ]"
      >
        <span>{{ leader?.playerName }}</span>
        <span>{{ leader?.totalPoints }}</span>
      </li>
    </ul>
    <div v-else>
      {{ t('statisticNone') }}
    </div>
  </VioLoader>
</template>

<script setup lang="ts">
import { useAllGameEstimationNumericLeaderboardViewsQuery } from '~~/gql/documents/queries/game/allGameEstimationNumericLeaderboardViews'

interface Props {
  gameId: number
}
const props = withDefaults(defineProps<Props>(), {})
const gameIdProp = toRef(() => props.gameId)

const { t } = useI18n()

// queries
const allGameEstimationNumericLeaderboardViewsQuery =
  await useAllGameEstimationNumericLeaderboardViewsQuery({
    gameId: gameIdProp.value,
  })

// api data
const api = computed(() =>
  reactive({
    data: {
      ...allGameEstimationNumericLeaderboardViewsQuery.data.value,
    },
    ...getApiMeta([allGameEstimationNumericLeaderboardViewsQuery]),
  }),
)
const allGameEstimationNumericLeaderboardViewsResult = computed(
  () =>
    allGameEstimationNumericLeaderboardViewsQuery.data.value
      ?.allGameEstimationNumericLeaderboardViews?.nodes,
)
const leaderboard = allGameEstimationNumericLeaderboardViewsResult
</script>

<i18n lang="yaml">
de:
  statisticNone: Keine Statistik vorhanden.
en:
  statisticNone: No statistics available.
</i18n>
