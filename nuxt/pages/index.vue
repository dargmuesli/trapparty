<template>
  <Loader :api="api" class="flex flex-1 flex-col">
    <div class="flex flex-1 flex-col">
      <section v-if="eventsUpcoming.length">
        <h2>
          {{ t('titleEventsUpcoming') }}
        </h2>
        <ul>
          <li
            v-for="eventUpcoming in eventsUpcoming"
            :key="eventUpcoming.id"
            class="text-xl"
          >
            <AppLink
              :aria-label="`${t('title')} ${eventUpcoming.name}`"
              :to="localePath(`/event/${eventUpcoming.name}`)"
            >
              {{ `${t('title')} ${eventUpcoming.name}` }}
            </AppLink>
          </li>
        </ul>
      </section>
      <section v-if="eventCurrent">
        <h2>
          {{ t('titleEventCurrent') }}
        </h2>
        <span class="text-xl">
          <AppLink
            :aria-label="`${t('title')} ${eventCurrent.name}`"
            :to="localePath(`/event/${eventCurrent.name}`)"
          >
            {{ `${t('title')} ${eventCurrent.name}` }}
          </AppLink>
        </span>
      </section>
      <div
        class="flex flex-1 flex-col justify-center font-serif gap-8 md:gap-4"
      >
        <div class="flex flex-col items-baseline md:flex-row">
          <h1 class="mb-0 inline text-6xl leading-normal">
            {{ title }}
          </h1>
          <span class="md:mb-4 md:ml-4 text-xl">
            {{ t('transcription') }}
          </span>
        </div>
        <i18n-t class="text-xl md:text-2xl" keypath="description" tag="p">
          <template #author>
            <AppLink
              :aria-label="t('authorName')"
              to="https://jonas-thelemann.de"
              :title="t('authorLinkTitle')"
            >
              {{ t('authorName') }}
            </AppLink>
          </template>
        </i18n-t>
      </div>
      <section v-if="eventsPast.length">
        <h2>
          {{ t('titleEventsPast') }}
        </h2>
        <ul>
          <li
            v-for="eventPast in eventsPast"
            :key="eventPast.id"
            class="text-xl"
          >
            <AppLink
              :aria-label="`${t('title')} ${eventPast.name}`"
              :to="localePath(`/event/${eventPast.name}`)"
            >
              {{ `${t('title')} ${eventPast.name}` }}
            </AppLink>
          </li>
        </ul>
      </section>
    </div>
  </Loader>
</template>

<script setup lang="ts">
import { useAllEventsQuery } from '~/gql/generated'

const { $moment } = useNuxtApp()
const { t } = useI18n()
const localePath = useLocalePath()

// queries
const allEventsQuery = await useAllEventsQuery()

// api data
const api = computed(() =>
  reactive({
    data: {
      ...allEventsQuery.data.value,
    },
    ...getApiMeta([allEventsQuery]),
  })
)
const allEvents = computed(() => allEventsQuery.data.value?.allEvents?.nodes)

// data
const title = t('title')

// computations
const eventCurrent = computed(() => {
  return arrayRemoveNulls(allEvents.value).filter(
    (event) =>
      $moment().isAfter($moment(event.start)) &&
      $moment().isBefore(
        event.end ? $moment(event.end) : $moment(event.start).add(1, 'day')
      )
  )[0]
})
const eventsPast = computed(() => {
  return arrayRemoveNulls(allEvents.value).filter((event) =>
    $moment().isAfter(
      $moment(
        event.end ? $moment(event.end) : $moment(event.start).add(1, 'day')
      )
    )
  )
})
const eventsUpcoming = computed(() => {
  return arrayRemoveNulls(allEvents.value).filter((event) =>
    $moment().isBefore($moment(event.start))
  )
})

// initialization
useHeadDefault(title)
</script>

<script lang="ts">
export default {
  name: 'IndexPage',
}
</script>

<i18n lang="yaml">
de:
  authorLinkTitle: Jonas Webseite
  authorName: Jonas Thelemann
  description: 'Die TrapParty ist eine große Feier, die seit 2017 jährlich von {author} zum Anlass seines Geburtstags veranstaltet wird. Sie hat das Ziel, den Gästen Freude zu bereiten und ein wohliges Gemeinschaftsgefühl zu schaffen. Auf dieser Seite findest du alle Informationen über diese Feier, die von einigen auch "beste Party des Jahres" genannt wird. Naja, Jonas veranstaltet die Feier ja auch immer kurz vor Weihnachten, wie soll denn da auch noch eine andere Feier diesen Titel strittig machen.'
  title: TrapParty
  titleEventCurrent: Aktuelle TrapParty
  titleEventsPast: Vergangene TrapParties
  titleEventsUpcoming: Zukünftige TrapParties
  transcription: '[træp ˈpɑr-ti]'
en:
  authorLinkTitle: Jonas' website
  authorName: Jonas Thelemann
  description: 'The TrapParty is a big celebration hosted annually by {author} since 2017 to mark his birthday. Its goal is to bring joy to the guests and create a comfortable sense of community. On this page you can find all the information about this celebration, which is also called "best party of the year" by some. Well, Jonas always organizes the party just before Christmas, so how can any other party dispute this title.'
  title: TrapParty
  titleEventCurrent: Current TrapParty
  titleEventsPast: Past TrapParties
  titleEventsUpcoming: Upcoming TrapParties
  transcription: '[træp ˈpɑr-ti]'
</i18n>
