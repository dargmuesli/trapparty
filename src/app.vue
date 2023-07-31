<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#fff" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const cookieControl = useCookieControl()

// lifecycle
watch(
  () => cookieControl.cookiesEnabledIds.value,
  (current, previous) => {
    if (
      (!previous?.includes('ga') && current?.includes('ga')) ||
      (previous?.includes('ga') && !current?.includes('ga'))
    ) {
      window.location.reload()
    }
  },
  { deep: true },
)
</script>
