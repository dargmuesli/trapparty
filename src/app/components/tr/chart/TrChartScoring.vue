<template>
  <section>
    <h1 class="text-center">
      {{ t('title') }}
    </h1>
    <TrChartTeamScore :event-id="eventId" />
    <TrChartTeamDonationAmount :event-id="eventId" />
    <TrChartTeamScoreTotal :event-id="eventId" />
  </section>
</template>

<script setup lang="ts">
const { eventId } = defineProps<{
  eventId: number
}>()

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  title: Teamwertung
en:
  title: Team score
</i18n>
