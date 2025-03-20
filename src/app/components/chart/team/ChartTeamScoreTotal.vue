<template>
  <VioLoader :api="api">
    <ChartBaseBar
      v-if="data"
      id="chart-team-score-total"
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
const teamPlayerCount = computed(() => statsQuery.data.value?.teamPlayerCount)

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
        scoresTeam[j] = (scoresTeam[j] || 0) + teamScoreObject.score
      }
    }
  }

  let donationsPerHeadLargest = 0

  for (const donation of donationsPerHead) {
    if (donation > donationsPerHeadLargest) {
      donationsPerHeadLargest = donation
    }
  }

  for (const [i, score] of scoresTeam.entries()) {
    scoresTeamTotal.push(
      (score / 100) *
        (100 / donationsPerHeadLargest) *
        (donationsPerHead[i] || 1),
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
