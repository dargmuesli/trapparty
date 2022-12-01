<template>
  <section>
    <h1 class="text-center">
      {{ t('title') }}
    </h1>
    <ChartTeamScore :event-id="eventId" />
    <ChartTeamDonationAmount :event-id="eventId" />
    <ChartTeamScoreTotal :event-id="eventId" />
  </section>
</template>

<script setup lang="ts">
export interface Props {
  eventId: number
}
withDefaults(defineProps<Props>(), {})

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  title: Teamwertung
</i18n>
