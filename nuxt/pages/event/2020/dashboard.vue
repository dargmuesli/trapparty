<template>
  <Loader :api="api" class="section-wrapper">
    <div v-if="store.participationData">
      <section>
        <CardStateInfo>
          <span>
            <i18n-t keypath="intentionDescription">
              <span class="font-bold">{{ intention }}</span>
            </i18n-t>
          </span>
          <ButtonColored :aria-label="t('roleChange')" to="/event/2020">
            {{ t('roleChange') }}
          </ButtonColored>
        </CardStateInfo>
      </section>
      <section class="mt-8 text-center">
        <span
          v-if="
            store.participationData.role === 'player' &&
            participationDataPlayer?.name
          "
          class="text-2xl"
        >
          {{ t('hello', { name: participationDataPlayer.name }) }}
        </span>
        <h1>{{ title }}</h1>
      </section>
      <section
        v-if="store.participationData.role === 'player'"
        class="custom-prose-scheme"
      >
        <h2>{{ t('teamTitle') }}</h2>
        <section>
          <h3>{{ t('teamCommunicationTitle') }}</h3>
          <p>
            {{ t('teamCommunicationDescription1') }}
            <i18n-t
              v-if="participationDataPlayer?.teamByTeamId?.name"
              keypath="teamDataName"
            >
              <span class="font-bold">
                {{ participationDataPlayer.teamByTeamId.name }}
              </span>
            </i18n-t>
            <span v-else class="unready inline-block">
              {{ t('teamDataNameDataless') }}
            </span>
          </p>
          <p>
            <ButtonColored
              :aria-label="t('discordInstall')"
              class="mr-4"
              to="https://discord.com/download"
            >
              {{ t('discordInstall') }}
              <template #prefix>
                <IconDownload />
              </template>
            </ButtonColored>
            <ButtonColored
              v-if="
                participationDataPlayer?.teamByTeamId?.eventByEventId
                  ?.discordInviteCode
              "
              :aria-label="t('discordJoin')"
              class="ml-4"
              :to="`https://discord.gg/${participationDataPlayer.teamByTeamId.eventByEventId.discordInviteCode}`"
            >
              {{ t('discordJoin') }}
              <template #prefix>
                <IconSignIn />
              </template>
            </ButtonColored>
            <span v-else class="unready inline-block">
              {{ t('dataless', { what: t('datalessDiscordCode') }) }}
            </span>
          </p>
          <p v-if="participationDataPlayer?.teamByTeamId?.emoji">
            {{
              t('teamCommunicationDescription2', {
                emojiPrefix: participationDataPlayer.teamByTeamId.emoji
                  ? participationDataPlayer.teamByTeamId.emoji + '-'
                  : '',
              })
            }}
          </p>
          <ButtonColored
            :aria-label="t('discordTutorial')"
            class="ml-4"
            :icon-id="['fab', 'youtube']"
            to="https://youtu.be/NJijHNL4yEo"
          >
            {{ t('discordTutorial') }}
          </ButtonColored>
        </section>
        <section>
          <h3>{{ t('donationTitle') }}</h3>
          <p>
            {{ t('donationDescription') }}
            {{ t('donationDescriptionTeam') }}
          </p>
          <i18n-t
            v-if="
              participationDataPlayer?.teamByTeamId
                ?.charityOrganizationByCharityOrganizationId?.name
            "
            keypath="teamDataCharityOrganisation"
            tag="p"
          >
            <span class="font-bold">
              <a
                v-if="
                  participationDataPlayer.teamByTeamId
                    .charityOrganizationByCharityOrganizationId.url
                "
                :href="
                  participationDataPlayer.teamByTeamId
                    .charityOrganizationByCharityOrganizationId.url
                "
              >
                {{
                  participationDataPlayer.teamByTeamId
                    .charityOrganizationByCharityOrganizationId.name
                }}
              </a>
              <span v-else class="inline-block">
                {{
                  participationDataPlayer.teamByTeamId
                    .charityOrganizationByCharityOrganizationId.name
                }}
              </span>
            </span>
          </i18n-t>
          <p v-else>
            <span class="unready inline-block">
              {{ t('teamDataCharityOrganisationDataless') }}
            </span>
          </p>
          <p v-if="participationDataPlayer?.teamByTeamId?.donationUrl">
            <ButtonShare
              :url="participationDataPlayer.teamByTeamId.donationUrl"
            >
              <ButtonColored
                :aria-label="t('donationButtonTeam')"
                :to="participationDataPlayer.teamByTeamId.donationUrl"
              >
                {{ t('donationButtonTeam') }}
                <template #prefix>
                  <IconHeart />
                </template>
              </ButtonColored>
              <template #unready>
                {{ t('dataless', { what: t('datalessDonationTeam') }) }}
              </template>
            </ButtonShare>
          </p>
        </section>
      </section>
      <section
        v-if="store.participationData.role === 'watcher'"
        class="custom-prose-scheme"
      >
        <h2>{{ t('donationTitle') }}</h2>
        <p>
          {{ t('donationDescription') }}
          {{ t('donationDescriptionCommon') }}
        </p>
        <p v-if="trapPartyEvent?.commonDonationUrl">
          <ButtonShare :url="trapPartyEvent.commonDonationUrl">
            <ButtonColored
              :aria-label="t('donationButtonCommon')"
              :to="trapPartyEvent.commonDonationUrl"
            >
              {{ t('donationButtonCommon') }}
              <template #prefix>
                <IconHeart />
              </template>
            </ButtonColored>
            <template #unready>
              {{ t('dataless', { what: t('datalessDonationCommon') }) }}
            </template>
          </ButtonShare>
        </p>
      </section>
      <section class="custom-prose-scheme">
        <h2>{{ t('streamTitle') }}</h2>
        <p>
          {{ t('streamDescription') }}
          <span v-if="store.participationData.role === 'player'">
            {{ t('streamDescriptionPlayer') }}
          </span>
        </p>
        <p>
          <span v-if="trapPartyEvent?.streamUrl">
            <ButtonColored
              :aria-label="t('streamGoto')"
              class="mr-4"
              :to="trapPartyEvent.streamUrl"
            >
              {{ t('streamGoto') }}
              <template #prefix>
                <IconTv />
              </template>
            </ButtonColored>
            <i18n-t
              v-if="trapPartyEvent.start"
              keypath="streamDescriptionStart"
            >
              <span class="font-bold">
                {{
                  t('startDuration', {
                    start: $moment(trapPartyEvent.start).format('lll'),
                    duration: $moment(trapPartyEvent.start).fromNow(),
                  })
                }}
              </span>
            </i18n-t>
          </span>
          <span v-else class="unready inline-block">
            {{ t('dataless', { what: t('datalessStream') }) }}
          </span>
        </p>
        <p>
          <ButtonColored
            :aria-label="t('statisticsGoTo')"
            to="/event/2020/statistics"
          >
            {{ t('statisticsGoTo') }}
            <template #prefix>
              <IconChartBar />
            </template>
          </ButtonColored>
        </p>
      </section>
    </div>
    <CardStateAlert v-else>
      {{ t('participationDataless') }}
      <ButtonHome />
    </CardStateAlert>
  </Loader>
</template>

<script setup lang="ts">
import consola from 'consola'

import { useStore } from '~/store'
import {
  useEventByNameQuery,
  usePlayerByInvitationCodeFnQuery,
} from '~/gql/generated'

definePageMeta({
  middleware: [
    function (_to: any, _from: any) {
      const { $localePath } = useNuxtApp()
      const store = useStore()

      if (store.participationData === null) {
        return navigateTo($localePath('/'))
      }
    },
  ],
})

const store = useStore()
const { t } = useI18n()

// queries
const playerByInvitationCodeFnQuery =
  store.participationData.role === 'player' &&
  store.participationData?.invitationCode
    ? await usePlayerByInvitationCodeFnQuery({
        variables: {
          invitationCode: store.participationData?.invitationCode,
        },
      })
    : { data: ref(), error: ref(), fetching: ref(false) }
const eventByNameQuery = await useEventByNameQuery({
  variables: {
    eventName: '2020',
  },
})

// api data
const api = computed(() =>
  reactive({
    data: {
      ...playerByInvitationCodeFnQuery.data.value,
      ...eventByNameQuery.data.value,
    },
    ...getApiMeta([playerByInvitationCodeFnQuery, eventByNameQuery]),
  })
)

const participationDataPlayer = computed(
  () =>
    playerByInvitationCodeFnQuery.data.value?.playerByInvitationCodeFn?.nodes[0]
)
const participationDataWatcher = computed(
  () => eventByNameQuery.data.value?.eventByName
)

// data
// participationData: {
//   eventByEventId: {
//     discordInviteCode: '1234abcd',
//     streamUrl: 'https://example.com',
//     commonDonationUrl: 'https://example.com',
//     start: 'bald',
//   },
//   name: 'Jonas',
//   teamByTeamId: {
//     name: 'Die Landratten',
//     charityOrganizationByCharityOrganizationId: {
//       name: 'DRK',
//       url: 'https://example.com',
//     },
//     donationUrl: 'https://example.com',
//   },
// },
const title = t('title')

// computations
const trapPartyEvent = computed(() => {
  switch (store.participationData?.role) {
    case 'player':
      return participationDataPlayer.value?.teamByTeamId?.eventByEventId
    case 'watcher':
      return participationDataWatcher.value
    default:
      throw createError(t('errorUnexpectedParticipationRole'))
  }
})
const intention = computed(() => {
  switch (store.participationData?.role) {
    case 'player':
      return t('intentionRolePlayer')
    case 'watcher':
      return t('intentionRoleAnonymous')
    default:
      throw createError(t('errorUnexpectedParticipationRole'))
  }
})

// lifecycle
watch(playerByInvitationCodeFnQuery.error, (currentValue, _oldValue) => {
  if (currentValue) consola.error(currentValue)
})
watch(eventByNameQuery.error, (currentValue, _oldValue) => {
  if (currentValue) consola.error(currentValue)
})

// initialization
useHeadDefault(title)
</script>

<script lang="ts">
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
.section-wrapper > section {
  margin-bottom: 2rem;
}

.section-wrapper > section > section {
  margin-bottom: 1.5rem;
}
</style>

<i18n lang="yaml">
de:
  dataless: '{what} ist noch nicht verfügbar.'
  datalessDiscordCode: Der Teilnahmecode für den Discord-Server
  datalessDonationCommon: Der Link zur Spendenseite für Zuschauer ohne Team
  datalessDonationTeam: Der Link zur Spendenseite deines Teams
  datalessStream: Der Link zum Stream
  discordInstall: Discord installieren
  discordJoin: Server beitreten
  discordTutorial: Videoanleitung vom Weihnachtsmann
  donationButtonCommon: Für alle Organisationen spenden
  donationButtonTeam: Zum Spendenkonto deines Teams
  donationTitle: Gutes Tun ❤️
  donationDescription: In diesem Jahr spenden wir gemeinsam für mehrere Organisationen.
  donationDescriptionCommon: 'Da du angeklickt hast, dass du nur zuschauen möchtest, wird deine Spende gleichmäßig auf alle Organisationen verteilt, für die die verschiedenen Teams im Stream kämpfen!'
  donationDescriptionTeam: 'Im Stream könnt ihr mehr Spenden für die von euch gewählte wohltätige Organisation sammeln und müsst den von euch gesammelten Spendenbetrag verteidigen. Der von euch gesammelte Betrag kann also auch zu Teilen wohltätigen Organisationen zugutekommen, die anderen Teams am Herzen liegen.'
  errorUnexpectedParticipationRole: 'Error: Unexpected participation role!'
  hello: Hallo {name}!
  intentionDescription: 'Du hast dich entschieden, bei der kommenden TrapParty {0}.'
  intentionRoleAnonymous: anonym teilzunehmen
  intentionRolePlayer: mitzumachen
  participationDataless: Konnte keine Teilnahmedaten laden.
  roleChange: Wahl ändern
  startDuration: '{start} ({duration})'
  statisticsGoTo: Zu den Statistiken
  streamTitle: Zuschauen 📺
  streamDescription: 'Es erwartet dich eine Late-Night-Show mit Spiel, Spaß und Spannung 🥳'
  streamDescriptionPlayer: Als Spieler schaust du den Stream während du gleichzeitig mit deinen Teammitgliedern auf Discord bist.
  streamDescriptionStart: 'Geplanter Start: {0}'
  streamGoto: Zum Stream
  teamCommunicationTitle: Kommunikation 📞
  teamCommunicationDescription1: 'Für diese Veranstaltung wurde ein Discord-Server eingerichtet, über den alle Gäste mit ihren Teammitgliedern und anderen Teilnehmenden kommunizieren können.'
  teamCommunicationDescription2: 'Wenn du dem Server beigetreten bist, musst du im Textkanal "wähle-eine-gruppe" unter der einzigen Nachricht dort auf das {emojiPrefix}Emoji deines Teams klicken. Damit erhältst du Zugriff auf den Text- & Sprachkanal deines Teams, in denen du dich mit deinem Team austauschen kannst.'
  teamTitle: Dein Team 👪
  teamDataName: 'Du bist im Team "{0}"!'
  teamDataNameDataless: Ihr müsst euch noch auf einen eigenen Teamnamen einigen.
  teamDataCharityOrganisation: 'Ihr spendet für {0}.'
  teamDataCharityOrganisationDataless: 'Ihr müsst euch noch auf eine Wohltätigkeitsorganisation einigen, für die ihr Spenden sammeln wollt.'
  title: "So funktioniert's"
</i18n>
