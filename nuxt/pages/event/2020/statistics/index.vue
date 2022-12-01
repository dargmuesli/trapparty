<template>
  <Loader :api="api">
    <div>
      <h1 class="text-center">
        {{ title }}
      </h1>
      <div v-if="trapPartyEvent">
        <p class="text-center">
          {{ t('eventName', { name: trapPartyEvent.name }) }}
        </p>
        <Donation class="mb-8" :trap-party-event="trapPartyEvent" />
        <ChartScoring class="mb-8" :event-id="trapPartyEvent.id" />
      </div>
      <div v-else class="alert">
        {{ t('datalessEvent') }}
      </div>
    </div>
  </Loader>
</template>

<script setup lang="ts">
import { useEventByNameQuery } from '~/gql/generated'

const { t } = useI18n()

// queries
const eventByNameQuery = await useEventByNameQuery({
  variables: {
    eventName: '2020',
  },
})

// api data
const api = computed(() =>
  reactive({
    data: {
      ...eventByNameQuery.data.value,
    },
    ...getApiMeta([eventByNameQuery]),
  })
)
const trapPartyEvent = computed(() => eventByNameQuery.data.value?.eventByName)

// data
const title = t('title')

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
  datalessEvent: Kein Event gefunden!
  eventName: 'Für die Trapparty {name}.'
  title: Statistiken
</i18n>
