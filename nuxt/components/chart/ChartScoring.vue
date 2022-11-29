<template>
  <section>
    <h1 class="text-center">
      {{ t('title') }}
    </h1>
    <ChartTeamScore :trap-party-event="event" />
    <ChartTeamDonationAmount :trap-party-event="event" />
    <ChartTeamScoreTotal :trap-party-event="event" />
  </section>
</template>

<script setup lang="ts">
import { Event as TrapPartyEvent } from '~/types/trapparty'
export interface Props {
  event: TrapPartyEvent
}
withDefaults(defineProps<Props>(), {})

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  title: Teamwertung
</i18n>
