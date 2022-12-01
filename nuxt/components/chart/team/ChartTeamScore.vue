<template>
  <Loader :api="api">
    <ChartBaseBar
      v-if="data"
      :data="data"
      :height="height"
      :horizontal="horizontal"
      :options-additional="optionsDefault"
    />
  </Loader>
</template>

<script setup lang="ts">
import type { ChartData, ChartOptions } from 'chart.js'
import Color from 'color'
import consola from 'consola'
import Rainbow from 'rainbowvis.js'

import { useStatsQuery } from '~/gql/generated'

export interface Props {
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

const { t } = useI18n()

// queries
const statsQuery = await useStatsQuery({
  variables: {
    eventId: props.eventId,
  },
})

// api data
const api = computed(() =>
  reactive({
    data: {
      ...statsQuery.data.value,
    },
    ...getApiMeta([statsQuery]),
  })
)
const allTeams = computed(() => statsQuery.data.value?.allTeams)
const allGames = computed(() => statsQuery.data.value?.allGames)

// data
const data = ref<ChartData<'bar'> | null>(null)
const horizontal = ref(true)
const optionsDefault = ref<ChartOptions<'bar'>>({
  plugins: {
    title: {
      text: props.title || t('title'),
    },
  },
})

// methods
function init() {
  const rainbow = new Rainbow()
  const labels = []
  const datasets = []

  if (!allTeams.value || !allGames.value) return

  for (let i = 0; i < allTeams.value.nodes.length; i++) {
    const team = allTeams.value.nodes[i]

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
        `#${rainbow.colorAt((100 / (allGames.value.totalCount - 1)) * i)}`
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
        (e?.target as Window).outerWidth < CHART_DIRECTION_BREAKPOINT)
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
</i18n>
