<template>
  <Loader :api="api">
    <div>
      <h1 class="text-center">
        {{ title }}
      </h1>
      <div v-if="event">
        <p class="text-center">
          {{ t('eventName', { name: event.name }) }}
        </p>
        <Donation class="mb-8" :event="event" />
        <ChartScoring class="mb-8" :event="event" />
      </div>
      <div v-else class="alert">
        {{ t('datalessEvent') }}
      </div>
    </div>
  </Loader>
</template>

<script setup lang="ts">
import EVENT_BY_NAME from '~/gql/query/event/eventByName.gql'

const { t } = useI18n()
// apollo: {
//   event() {
//     return {
//       query: EVENT_BY_NAME,
//       variables: {
//         eventName: '2020',
//       },
//       update: (data) => data.eventByName,
//       error(error, _vm, _key, _type, _options) {
//         graphqlError = error.message
//       },
//     }
//   },
// }
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
