<template>
  <VioLoader :api="api">
    <ChartBaseBar
      v-if="data"
      id="chart-team-score"
      :data="data"
      :height="height"
      :horizontal="horizontal"
      :options-additional="optionsDefault"
    />
  </VioLoader>
</template>

<script setup lang="ts">
import type { ChartData, ChartOptions } from 'chart.js'
import Color from 'color'
import { consola } from 'consola'
import Rainbow from 'rainbowvis.js'

import { useStatsQuery } from '~~/gql/documents/queries/stats'
import { getTeamItem } from '~~/gql/documents/fragments/teamItem'

interface Props {
  eventId: number
  height?: number
  options?: ChartOptions<'bar'>
  title?: string
}
const props = withDefaults(defineProps<Props>(), {
  height: undefined,
  options: undefined,
  title: undefined,
})
const eventIdProp = toRef(() => props.eventId)
const titleProp = toRef(() => props.title)

const { t } = useI18n()

// queries
const statsQuery = await useStatsQuery({
  eventId: eventIdProp.value,
})

// api data
const api = computed(() =>
  reactive({
    data: {
      ...statsQuery.data.value,
    },
    ...getApiMeta([statsQuery]),
  }),
)
const allTeams = computed(() => statsQuery.data.value?.allTeams)
const allGames = computed(() => statsQuery.data.value?.allGames)

// data
const data = ref<ChartData<'bar', number[], unknown> | null>(null)
const horizontal = ref(true)
const optionsDefault = ref<ChartOptions<'bar'>>({
  plugins: {
    title: {
      text: titleProp.value || t('title'),
    },
  },
})

// methods
const init = () => {
  const rainbow = new Rainbow()
  const labels = []
  const datasets = []

  if (!allTeams.value || !allGames.value) return

  for (let i = 0; i < allTeams.value.nodes.length; i++) {
    const team = getTeamItem(allTeams.value.nodes[i])

    if (!team) continue

    labels.push(`${team.name} ${team.emoji}`)
  }

  for (let i = 0; i < allGames.value.nodes.length; i++) {
    const game = allGames.value.nodes[i]
    const scores = []

    if (!game) continue

    for (let j = 0; j < game.gameTeamScoresByGameId.nodes.length; j++) {
      const teamScoreObject = game.gameTeamScoresByGameId.nodes[j]

      if (!teamScoreObject) continue

      scores.push(teamScoreObject.score)
    }

    datasets.push({
      label: game.name,
      data: scores,
      backgroundColor: Color(
        `#${rainbow.colorAt((100 / (allGames.value.totalCount - 1)) * i)}`,
      )
        .desaturate(0.5)
        .darken(0.25)
        .hex(),
    })
  }

  data.value = {
    labels,
    datasets,
  }
}

// lifecycle
onMounted(() => {
  window.addEventListener(
    'resize',
    (e) =>
      (horizontal.value =
        (e?.target as Window).outerWidth < CHART_DIRECTION_BREAKPOINT),
  )

  window.dispatchEvent(new Event('resize'))
})
watch(statsQuery.error, (currentValue, _oldValue) => {
  if (currentValue) consola.error(currentValue)
})

// initialization
init()
</script>

<i18n lang="yaml">
de:
  title: Punkte
en:
  title: Score
</i18n>
