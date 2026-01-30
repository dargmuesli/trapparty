<template>
  <VioLoader :api="api">
    <section class="mb-4 text-center">
      <h1>{{ t('title') }}</h1>
      <div
        class="grid grid-cols-1 place-content-center gap-4 text-white lg:grid-cols-2"
      >
        <div class="flex-col rounded-sm bg-gray-700 p-2">
          <div class="text-4xl">
            {{ numberFormat(donationAmountTeamSum) }}
          </div>
          <div class="font-bold">{{ t('donationTeam') }}</div>
        </div>
        <div class="flex-col rounded-sm bg-gray-700 p-2">
          <div class="text-4xl">
            {{ numberFormat(trapPartyEvent.commonDonationAmount || 0) }}
          </div>
          <div class="font-bold">{{ t('donationCommon') }}</div>
        </div>
        <div class="flex-col rounded-sm bg-gray-700 p-4 lg:col-span-2">
          <div class="text-6xl">
            {{ numberFormat(donationAmountSum) }}
          </div>
          <div class="font-bold">{{ t('donationTotal') }}</div>
        </div>
      </div>
    </section>
    <section>
      <h1 class="text-center">{{ t('titleDistribution') }}</h1>
      <div class="overflow-auto">
        <table class="m-auto">
          <VioLayoutThead>
            <tr>
              <td />
              <th
                v-for="charityOrganization in charityOrganizations"
                :key="`header-${charityOrganization.id || Math.random()}`"
                class="border border-gray-700 p-2"
                scope="col"
              >
                {{ charityOrganization.name }}
              </th>
              <td />
            </tr>
          </VioLayoutThead>
          <VioLayoutTbody>
            <tr
              v-for="(team, teamIndex) in [
                ...teams,
                {
                  id: -1,
                  name: 'Stream',
                  donationAmount: trapPartyEvent.commonDonationAmount,
                } as TeamItemFragment,
              ]"
              :key="team.id"
            >
              <th class="border border-gray-700 p-2 font-bold" scope="row">
                {{ `${team.name}${team.emoji ? ' ' + team.emoji : ''}` }}
              </th>
              <td
                v-for="(
                  charityOrganization, charityOrganizationIndex
                ) in charityOrganizations"
                :key="`data-${charityOrganization.id || Math.random()}`"
                class="border border-gray-700 p-2"
                :class="{
                  'font-bold':
                    getCharityOrganizationItem(
                      team.charityOrganizationByCharityOrganizationId,
                    )?.id === charityOrganization.id,
                }"
              >
                {{
                  numberFormat(
                    distributionMatrix[teamIndex]
                      ? distributionMatrix[teamIndex][charityOrganizationIndex]
                      : undefined,
                  )
                }}
              </td>
              <td class="border border-gray-700 p-2 font-bold">
                {{ numberFormat(team.donationAmount || 0) }}
              </td>
            </tr>
            <tr>
              <td />
              <td
                v-for="(
                  charityOrganization, charityOrganizationIndex
                ) in charityOrganizations"
                :key="`total-${charityOrganization.id || Math.random()}`"
                class="border border-gray-700 p-2 font-bold"
              >
                {{
                  numberFormat(
                    distributionMatrixTotalsVertical[charityOrganizationIndex],
                  )
                }}
              </td>
              <td class="border border-gray-700 p-2 font-bold">
                {{ numberFormat(donationAmountSum) }}
              </td>
            </tr>
          </VioLayoutTbody>
        </table>
      </div>
    </section>
  </VioLoader>
</template>

<script setup lang="ts">
import { consola } from 'consola'

import type {
  CharityOrganizationItemFragment,
  Event as TrapPartyEvent,
  TeamItemFragment,
} from '~~/gql/generated/graphql'
import { useStatsQuery } from '~~/gql/documents/queries/stats'
import { getTeamItem } from '~~/gql/documents/fragments/teamItem'
import { getCharityOrganizationItem } from '~~/gql/documents/fragments/charityOrganizationItem'

interface Props {
  trapPartyEvent: Pick<TrapPartyEvent, 'id' | 'commonDonationAmount'>
}
const props = withDefaults(defineProps<Props>(), {})
const trapPartyEventIdProp = toRef(() => props.trapPartyEvent.id)

const { t } = useI18n()

// queries
const statsQuery = await useStatsQuery({
  eventId: trapPartyEventIdProp.value,
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

// constants
const DONATION_DISTRIBUTION_PERCENTAGE = 0.5

// data
const charityOrganizations = ref<CharityOrganizationItemFragment[]>([])
const charityOrganizationWeigths = ref<number[]>([])
const distributionMatrix = ref<number[][]>([])
const distributionMatrixTotalsVertical = ref<number[]>([])
const loading = ref(true)
const teams = ref<TeamItemFragment[]>([])

// methods
const init = () => {
  const donationsPerHead = []

  if (!allTeams.value || !allGames.value || !teamPlayerCount.value) return

  for (let i = 0; i < allTeams.value.nodes.length; i++) {
    const team = arrayRemoveNulls(
      allTeams.value.nodes.map((x) => getTeamItem(x)),
    )[i]
    if (!team) continue
    const teamPlayerCountObject = teamPlayerCount.value.nodes[i]
    const charityOrganization = getCharityOrganizationItem(
      team.charityOrganizationByCharityOrganizationId,
    )

    if (!team || !charityOrganization || !teamPlayerCountObject) continue

    teams.value.push(team)
    charityOrganizations.value.push(charityOrganization)
    donationsPerHead.push(
      typeof teamPlayerCountObject === 'undefined'
        ? 0
        : (team.donationAmount || 0) / teamPlayerCountObject.playerCount,
    )
  }

  const teamScores: number[] = []

  for (let i = 0; i < allGames.value.nodes.length; i++) {
    const game = allGames.value.nodes[i]

    if (!game) continue

    for (let j = 0; j < game.gameTeamScoresByGameId.nodes.length; j++) {
      const teamScoreObject = game.gameTeamScoresByGameId.nodes[j]

      if (!teamScoreObject) continue

      if (typeof teamScores[j] === 'undefined') {
        teamScores.push(teamScoreObject.score)
      } else {
        teamScores[j] = (teamScores[j] || 0) + teamScoreObject.score
      }
    }
  }

  let donationsPerHeadLargest = 0

  for (const donation of donationsPerHead) {
    if (donation > donationsPerHeadLargest) {
      donationsPerHeadLargest = donation
    }
  }

  const teamScoreNormalizeds: number[] = []

  for (const [index, teamScore] of teamScores.entries()) {
    const teamScoreNormalized =
      (teamScore / 100) *
      (100 / donationsPerHeadLargest) *
      (donationsPerHead[index] || 1)

    teamScoreNormalizeds.push(teamScoreNormalized)
  }

  const teamScoresNormalizedSum = teamScoreNormalizeds.length
    ? teamScoreNormalizeds.reduce((previous, current) => previous + current, 0)
    : 0

  for (const teamScoreNormalized of teamScoreNormalizeds) {
    charityOrganizationWeigths.value.push(
      (1 / teamScoresNormalizedSum) * teamScoreNormalized,
    )
  }

  const teamsWithStream = [
    ...teams.value,
    {
      name: 'Stream',
      donationAmount: props.trapPartyEvent.commonDonationAmount,
    } as TeamItemFragment,
  ]

  for (const [i, team] of teamsWithStream.entries()) {
    const teamDonationWeighting =
      team.name === 'Stream' ? 1.0 : DONATION_DISTRIBUTION_PERCENTAGE

    if (distributionMatrix.value[i] === undefined) {
      distributionMatrix.value.push([])
    }

    for (const [
      j,
      charityOrganization,
    ] of charityOrganizations.value.entries()) {
      const teamCharityDonation =
        !charityOrganization || !team.charityOrganizationByCharityOrganizationId
          ? 0
          : (team.donationAmount || 0) *
              teamDonationWeighting *
              (charityOrganizationWeigths.value[j] || 1) +
            (getCharityOrganizationItem(
              team.charityOrganizationByCharityOrganizationId,
            )?.id === charityOrganization.id
              ? (team.donationAmount || 0) * DONATION_DISTRIBUTION_PERCENTAGE
              : 0)

      distributionMatrix.value[i]?.push(teamCharityDonation)

      if (distributionMatrixTotalsVertical.value[j] === undefined) {
        distributionMatrixTotalsVertical.value.push(teamCharityDonation)
      } else {
        distributionMatrixTotalsVertical.value[j] += teamCharityDonation
      }
    }

    loading.value = false
  }
}
const numberFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
})
const numberFormat = (n?: number) => (n ? numberFormatter.format(n) : undefined)

// computations
const donationAmountSum = computed(() => {
  return (
    (props.trapPartyEvent.commonDonationAmount || 0) +
    donationAmountTeamSum.value
  )
})
const donationAmountTeamSum = computed(() => {
  return teams.value.length
    ? teams.value.reduce(
        (previous, current) => previous + (current.donationAmount || 0),
        0,
      )
    : 0
})

// lifecycle
watch(statsQuery.error, (currentValue, _oldValue) => {
  if (currentValue) consola.error(currentValue)
})

// initialization
init()
</script>

<script lang="ts">
export default {
  name: 'TrapPartyDonation',
}
</script>

<i18n lang="yaml">
de:
  title: Spenden
  titleDistribution: Spendenverteilung auf Organisationen
  donationCommon: Stream-Spenden
  donationTeam: Team-Spenden
  donationTotal: Spenden insgesamt
en:
  title: Donations
  titleDistribution: Distribution of donations to organizations
  donationCommon: Stream donations
  donationTeam: Team donations
  donationTotal: Total donations
</i18n>
