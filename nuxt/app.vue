<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#fff" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { $i18n, $moment } = useNuxtApp()
const cookieControl = useCookieControl()

// methods
const init = () => {
  $i18n.onLanguageSwitched = (_oldLocale: string, newLocale: string) =>
    $moment.locale(newLocale)
}

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
  { deep: true }
)

// initialization
init()
</script>
