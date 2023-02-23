<template>
  <EventWelcome event-name="2020">
    <template #disclaimer>
      {{ t('disclaimer') }}
    </template>
  </EventWelcome>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  disclaimer: Für die kommende Veranstaltung sind Coronaschutzmaßnahmen implementiert. Der Kontakt zu entsprechenden Behörden besteht.
en:
  disclaimer: Corona protection measures have been implemented for the upcoming event. We are in contact with the relevant authorities.
</i18n>
