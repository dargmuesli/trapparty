<template>
  <VioLoader :api="api" class="section-wrapper">
    <div v-if="store.participationData">
      <section>
        <VioCardStateInfo>
          <span>
            <i18n-t keypath="intentionDescription">
              <span class="font-bold">{{ intention }}</span>
            </i18n-t>
          </span>
          <VioButtonColored
            :aria-label="t('roleChange')"
            :to="localePath('/event/2020')"
          >
            {{ t('roleChange') }}
          </VioButtonColored>
        </VioCardStateInfo>
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
        class="vio-prose"
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
            <VioButtonColored
              :aria-label="t('discordInstall')"
              class="mr-4"
              to="https://discord.com/download"
            >
              {{ t('discordInstall') }}
              <template #prefix>
                <VioIconDownload />
              </template>
            </VioButtonColored>
            <VioButtonColored
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
                <VioIconSignIn />
              </template>
            </VioButtonColored>
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
          <VioButtonColored
            :aria-label="t('discordTutorial')"
            class="ml-4"
            :icon-id="['fab', 'youtube']"
            to="https://youtu.be/NJijHNL4yEo"
          >
            {{ t('discordTutorial') }}
          </VioButtonColored>
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
            <VioButtonShare
              :url="participationDataPlayer.teamByTeamId.donationUrl"
            >
              <VioButtonColored
                :aria-label="t('donationButtonTeam')"
                :to="participationDataPlayer.teamByTeamId.donationUrl"
              >
                {{ t('donationButtonTeam') }}
                <template #prefix>
                  <VioIconHeart />
                </template>
              </VioButtonColored>
              <template #unready>
                {{ t('dataless', { what: t('datalessDonationTeam') }) }}
              </template>
            </VioButtonShare>
          </p>
        </section>
      </section>
      <section
        v-if="store.participationData.role === 'watcher'"
        class="vio-prose"
      >
        <h2>{{ t('donationTitle') }}</h2>
        <p>
          {{ t('donationDescription') }}
          {{ t('donationDescriptionCommon') }}
        </p>
        <p v-if="trapPartyEvent?.commonDonationUrl">
          <VioButtonShare :url="trapPartyEvent.commonDonationUrl">
            <VioButtonColored
              :aria-label="t('donationButtonCommon')"
              :to="trapPartyEvent.commonDonationUrl"
            >
              {{ t('donationButtonCommon') }}
              <template #prefix>
                <VioIconHeart />
              </template>
            </VioButtonColored>
            <template #unready>
              {{ t('dataless', { what: t('datalessDonationCommon') }) }}
            </template>
          </VioButtonShare>
        </p>
      </section>
      <section class="vio-prose">
        <h2>{{ t('streamTitle') }}</h2>
        <p>
          {{ t('streamDescription') }}
          <span v-if="store.participationData.role === 'player'">
            {{ t('streamDescriptionPlayer') }}
          </span>
        </p>
        <p>
          <span v-if="trapPartyEvent?.streamUrl">
            <VioButtonColored
              :aria-label="t('streamGoto')"
              class="mr-4"
              :to="trapPartyEvent.streamUrl"
            >
              {{ t('streamGoto') }}
              <template #prefix>
                <VioIconTv />
              </template>
            </VioButtonColored>
            <i18n-t
              v-if="trapPartyEvent.start"
              keypath="streamDescriptionStart"
            >
              <span class="font-bold">
                {{
                  t('startDuration', {
                    start: $dayjs(trapPartyEvent.start).format('lll'),
                    duration: $dayjs(trapPartyEvent.start).fromNow(),
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
          <VioButtonColored
            :aria-label="t('statisticsGoTo')"
            :to="localePath('/event/2020/statistics')"
          >
            {{ t('statisticsGoTo') }}
            <template #prefix>
              <VioIconChartBar />
            </template>
          </VioButtonColored>
        </p>
      </section>
    </div>
    <VioCardStateAlert v-else>
      {{ t('participationDataless') }}
      <VioButtonHome />
    </VioCardStateAlert>
  </VioLoader>
</template>

<script setup lang="ts">
import { consola } from 'consola'

import { useStore } from '~/store'
import { useEventByNameQuery } from '~/gql/documents/queries/event/eventByName'
import { usePlayerByInvitationCodeFnQuery } from '~/gql/documents/queries/player/playerByInvitationCodeFn'

definePageMeta({
  middleware: [
    (_to, _from) => {
      const localePath = useLocalePath()
      const store = useStore()

      if (store.participationData === null) {
        return navigateTo(localePath('/'))
      }
    },
  ],
})

const { $dayjs } = useNuxtApp()
const localePath = useLocalePath()
const store = useStore()
const { t } = useI18n()

// queries
const playerByInvitationCodeFnQuery =
  store.participationData.role === 'player' &&
  store.participationData?.invitationCode
    ? await usePlayerByInvitationCodeFnQuery({
        invitationCode: store.participationData?.invitationCode,
      })
    : { data: ref(), error: ref(), fetching: ref(false) }
const eventByNameQuery = await useEventByNameQuery({
  eventName: '2020',
})

// api data
const api = computed(() =>
  reactive({
    data: {
      ...playerByInvitationCodeFnQuery.data.value,
      ...eventByNameQuery.data.value,
    },
    ...getApiMeta([playerByInvitationCodeFnQuery, eventByNameQuery]),
  }),
)

const participationDataPlayer = computed(
  () =>
    playerByInvitationCodeFnQuery.data.value?.playerByInvitationCodeFn
      ?.nodes[0],
)
const participationDataWatcher = computed(
  () => eventByNameQuery.data.value?.eventByName,
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
useHeadDefault({ title })
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
  errorUnexpectedParticipationRole: 'Fehler: Unerwartete Teilnehmerrolle!'
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
en:
  dataless: '{what} is not yet available.'
  datalessDiscordCode: The participation code for the Discord server
  datalessDonationCommon: The link to the donation page for spectators without team
  datalessDonationTeam: The link to your team's donation page
  datalessStream: The link to the stream
  discordInstall: Install Discord
  discordJoin: Join server
  discordTutorial: Video tutorial by Santa Claus
  donationButtonCommon: Donate to all organizations
  donationButtonTeam: To the donation account of your team
  donationTitle: Do good ❤️
  donationDescription: This year we are donating to several organizations together.
  donationDescriptionCommon: 'Since you clicked that you just want to watch, your donation will be split evenly between all the organizations that the different teams in the stream are fighting for!'
  donationDescriptionTeam: 'In the stream, you will be able to collect more donations for your chosen charity and you will have to defend the amount of money you have collected. So the amount you raise can also be divided to benefit charities that other teams care about.'
  errorUnexpectedParticipationRole: 'Error: Unexpected participation role!'
  hello: Hello {name}!
  intentionDescription: 'You have decided to {0} at the upcoming TrapParty.'
  intentionRoleAnonymous: participate anonymously
  intentionRolePlayer: participate
  participationDataless: Could not load participation data.
  roleChange: Change choice
  startDuration: '{start} ({duration})'
  statisticsGoTo: To the statistics
  streamTitle: Watch 📺
  streamDescription: 'You can expect a late-night show with games, fun and excitement 🥳'
  streamDescriptionPlayer: As a player, you watch the stream while on Discord with your teammates at the same time.
  streamDescriptionStart: 'Planned start: {0}'
  streamGoto: To the stream
  teamCommunicationTitle: Communication 📞
  teamCommunicationDescription1: 'A Discord server has been set up for this event, allowing all guests to communicate with their team members and other participants.'
  teamCommunicationDescription2: 'Once you have joined the server, you will need to click on your team''s {emojiPrefix} emoji in the "choose-a-group" text channel under the only message there. This will give you access to your team''s text & voice channel where you can interact with your team.'
  teamTitle: Your team 👪
  teamDataName: 'You are in team "{0}"!'
  teamDataNameDataless: You still need to agree on your own team name.
  teamDataCharityOrganisation: 'You are donating to {0}.'
  teamDataCharityOrganisationDataless: You still need to agree on a charity to fundraise for.
  title: This is how it works
</i18n>
