<template>
  <div :data-is-loading="isLoading" data-testid="is-loading">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <!-- `NuxtLayout` can't have mulitple child nodes (https://github.com/nuxt/nuxt/issues/21759) -->
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { $dayjs } = useNuxtApp()
const { t, locale } = useI18n()

const { loadingIds, indicateLoadingDone } = useLoadingDoneIndicator('app')

// methods
const init = () => {
  $dayjs.locale(locale.value)

  if (import.meta.client) {
    const cookieTimezone = useCookie(TIMEZONE_COOKIE_NAME, {
      // default: () => undefined, // setting `default` on the client side only does not write the cookie
      httpOnly: false,
      sameSite: 'strict',
      secure: true,
    })
    // @ts-expect-error `tz` should be part of `$dayjs` (https://github.com/iamkun/dayjs/issues/2106)
    cookieTimezone.value = $dayjs.tz.guess()
  }
}

// computations
const isLoading = computed(() => !!loadingIds.value.length)

// lifecycle
onMounted(() => indicateLoadingDone())

// initialization
defineOgImageComponent(
  'Default',
  {},
  {
    alt: t('globalSeoOgImageAlt'),
  },
)
useAppLayout()
usePolyfills()
useSchemaOrg([defineWebSite()])
useVioGtag()
init()
</script>
