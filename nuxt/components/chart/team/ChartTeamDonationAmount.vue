<template>
  <Loader :api="api">
    <ChartBaseBar
      v-if="data"
      id="chart-team-donation-amount"
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
const teamPlayerCount = computed(() => statsQuery.data.value?.teamPlayerCount)

// data
const data = ref<ChartData<'bar', number[], unknown> | null>(null)
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
  const donationsPerHead = []

  if (!allTeams.value || !teamPlayerCount.value) return

  for (let i = 0; i < allTeams.value.nodes.length; i++) {
    const team = allTeams.value.nodes[i]
    const teamPlayerCountObject = teamPlayerCount.value.nodes[i]

    if (
      !team ||
      team.donationAmount === null ||
      team.donationAmount === undefined ||
      !teamPlayerCountObject
    )
      continue

    labels.push(`${team.name} ${team.emoji}`)
    donationsPerHead.push(
      typeof teamPlayerCountObject === 'undefined'
        ? 0
        : team.donationAmount / teamPlayerCountObject.playerCount
    )
  }

  datasets.push({
    label: t('title'),
    data: donationsPerHead,
    backgroundColor: Color(`#${rainbow.colorAt(0)}`)
      .desaturate(0.5)
      .darken(0.25)
      .hex(),
  })

  data.value = {
    labels,
    datasets,
  }
}

// lifecycle
onMounted(() => {
  window.addEventListener('resize', (e) => {
    horizontal.value =
      (e?.target as Window).outerWidth < CHART_DIRECTION_BREAKPOINT
  })

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
  title: Spenden pro Kopf
en:
  title: Donations per capita
</i18n>
