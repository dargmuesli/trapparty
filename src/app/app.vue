<template>
  <div :data-is-loading="isLoading" data-testid="is-loading">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <!-- `NuxtLayout` can't have mulitple child nodes (https://github.com/nuxt/nuxt/issues/21759) -->
      <NuxtPage />
    </NuxtLayout>
    <VioSonner />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const siteConfig = useSiteConfig()
const timeZone = useTimeZone()

const { loadingIds, indicateLoadingDone } = useLoadingDoneIndicator('app')

// methods
const initialize = () => {
  if (import.meta.client) {
    saveTimeZoneAsCookie()
  }
}
const saveTimeZoneAsCookie = () =>
  (useCookie(TIMEZONE_COOKIE_NAME, {
    // default: () => undefined, // setting `default` on the client side only does not write the cookie
    httpOnly: false,
    sameSite: 'strict',
    secure: true,
  }).value = timeZone)

// computations
const isLoading = computed(() => !!loadingIds.value.length)

// lifecycle
onMounted(() => indicateLoadingDone())

// initialization
defineOgImageComponent(
  'Default',
  {
    headline: t('headline'),
    name: t('name'),
    siteConfigName: siteConfig.name,
  },
  {
    alt: t('globalSeoOgImageAlt'),
  },
)
useAppLayout()
usePolyfills()
useSchemaOrg([defineWebSite()])
useVioGtag()
initialize()
</script>

<i18n lang="yaml">
de:
  headline: Jonas Thelemanns
  name: Geburtstagsfeier
en:
  headline: Jonas Thelemann's
  name: Birthday Bash
</i18n>
