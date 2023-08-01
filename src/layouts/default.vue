<template>
  <div
    class="container mx-auto p-4 md:px-8"
    :data-is-loading="isLoading"
    data-testid="is-loading"
  >
    <div class="flex flex-col min-h-screen pb-32">
      <header class="relative mb-4 flex items-center justify-between">
        <AppLink :aria-label="t('home')" :to="localePath('/')">
          <Logo class="h-16 w-16" />
        </AppLink>
        <AppLink
          :aria-label="t('home')"
          class="text-gray-900 dark:text-white"
          :is-colored="false"
          :to="localePath('/')"
        >
          <IconHome />
        </AppLink>
      </header>
      <div class="flex flex-1 flex-col">
        <slot />
      </div>
    </div>
    <LayoutFooter>
      <LayoutFooterCategory :heading="t('legal')">
        <AppLink
          :aria-label="t('legalNotice')"
          :to="localePath('/legal-notice')"
        >
          {{ t('legalNotice') }}
        </AppLink>
        <AppLink
          :aria-label="t('privacyPolicy')"
          :to="localePath('/privacy-policy')"
        >
          {{ t('privacyPolicy') }}
        </AppLink>
      </LayoutFooterCategory>
      <LayoutFooterCategory :heading="t('quickLinks')">
        <AppLink
          :aria-label="t('sourceCode')"
          :title="t('githubLinkTitle')"
          to="https://github.com/dargmuesli/trapparty/"
        >
          {{ t('sourceCode') }}
        </AppLink>
      </LayoutFooterCategory>
    </LayoutFooter>
    <CookieControl :locale="locale as Locale" />
  </div>
</template>

<script setup lang="ts">
import { Locale } from '@dargmuesli/nuxt-cookie-control/dist/runtime/types'

const { $dayjs } = useNuxtApp()
const localePath = useLocalePath()
const { locale, t } = useI18n()

const loadingId = Math.random()
const loadingIds = useState('loadingIds', () => [loadingId])

// computations
const isLoading = computed(() => !!loadingIds.value.length)

// lifecycle
onMounted(() => loadingIds.value.splice(loadingIds.value.indexOf(loadingId), 1))

// initialization
useHeadLayout()
$dayjs.locale(locale.value)
</script>

<script lang="ts">
export default {
  name: 'IndexPage',
}
</script>

<i18n lang="yaml">
de:
  githubLinkTitle: TrapParty auf GitHub
  home: Nach Hause
  legal: Rechtliches
  legalNotice: Impressum
  privacyPolicy: Datenschutzerklärung
  quickLinks: Quick Links
  sourceCode: Quellcode
en:
  githubLinkTitle: TrapParty on GitHub
  home: Head home
  legal: Legal
  legalNotice: Legal notice
  privacyPolicy: Privacy policy
  quickLinks: Quick Links
  sourceCode: Source code
</i18n>
