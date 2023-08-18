<template>
  <LoaderIndicator class="animate-pulse">
    {{ t('globalStatusLoading') }}
  </LoaderIndicator>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
