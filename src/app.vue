<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#fff" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const cookieControl = useCookieControl()
const { t } = useI18n()

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

// initialization
updateSiteConfig({
  description: t('globalSeoSiteDescription'),
})
defineOgImage({
  alt: t('globalSeoOgImageAlt'),
  // component: props.ogImageComponent,
  description: t('globalSeoSiteDescription'),
})
</script>
