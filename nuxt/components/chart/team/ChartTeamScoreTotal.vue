<template>
  <Loader :api="api">
    <ChartBaseBar
      v-if="data"
      id="chart-team-score-total"
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
import { consola } from 'consola'
import Rainbow from 'rainbowvis.js'

import { useStatsQuery } from '~/gql/documents/queries/stats'
import { getTeamItem } from '~/gql/documents/fragments/teamItem'

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
  eventId: props.eventId,
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
const init = () => {
  const rainbow = new Rainbow()
  const labels = []
  const datasets = []
  const donationsPerHead = []
  const scoresTeam: number[] = []
  const scoresTeamTotal = []

  if (!allTeams.value || !allGames.value || !teamPlayerCount.value) return

  for (let i = 0; i < allTeams.value.nodes.length; i++) {
    const team = getTeamItem(allTeams.value.nodes[i])
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
        : team.donationAmount / teamPlayerCountObject.playerCount,
    )
  }

  for (let i = 0; i < allGames.value.nodes.length; i++) {
    const game = allGames.value.nodes[i]

    if (!game) continue

    for (let j = 0; j < game.gameTeamScoresByGameId.nodes.length; j++) {
      const teamScoreObject = game.gameTeamScoresByGameId.nodes[j]

      if (!teamScoreObject) continue

      if (typeof scoresTeam[j] === 'undefined') {
        scoresTeam.push(teamScoreObject.score)
      } else {
        scoresTeam[j] = scoresTeam[j] + teamScoreObject.score
      }
    }
  }

  let donationsPerHeadLargest = 0

  for (let i = 0; i < donationsPerHead.length; i++) {
    if (donationsPerHead[i] > donationsPerHeadLargest) {
      donationsPerHeadLargest = donationsPerHead[i]
    }
  }

  for (let i = 0; i < scoresTeam.length; i++) {
    scoresTeamTotal.push(
      (scoresTeam[i] / 100) *
        (100 / donationsPerHeadLargest) *
        donationsPerHead[i],
    )
  }

  datasets.push({
    label: t('title'),
    data: scoresTeamTotal,
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
  title: Gesamtwertung
en:
  title: Total score
</i18n>
