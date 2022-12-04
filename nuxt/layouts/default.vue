<template>
  <div class="container mx-auto p-4 md:px-8" :data-is-loading="isLoading">
    <div class="flex flex-col min-h-screen pb-32">
      <header class="relative mb-4 flex items-center justify-between">
        <AppLink :aria-label="t('home')" :to="localePath('/')">
          <div id="logo" class="h-16 w-16" />
        </AppLink>
        <AppLink class="text-gray-900 dark:text-white" :to="localePath('/')">
          <IconHome />
        </AppLink>
      </header>
      <div class="flex flex-1 flex-col">
        <slot />
      </div>
    </div>
    <LayoutFooter>
      <LayoutFooterCategory :heading="t('legal')">
        <AppLink :to="localePath('/imprint')">
          {{ t('imprint') }}
        </AppLink>
        <AppLink :to="localePath('/privacy-policy')">
          {{ t('privacyPolicy') }}
        </AppLink>
      </LayoutFooterCategory>
      <LayoutFooterCategory :heading="t('quickLinks')">
        <AppLink
          :title="t('githubLinkTitle')"
          to="https://github.com/dargmuesli/trapparty/"
        >
          {{ t('sourceCode') }}
        </AppLink>
      </LayoutFooterCategory>
    </LayoutFooter>
  </div>
</template>

<script setup lang="ts">
const { $moment } = useNuxtApp()
const localePath = useLocalePath()
const { locale, t } = useI18n()

const loadingId = Math.random()
const loadingIds = useState('loadingIds', () => [loadingId])

// computations
const isLoading = computed(() => !!loadingIds.value.length)

// initialization
useHeadLayout()
$moment.locale(locale.value)
</script>

<script lang="ts">
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
#logo {
  background-image: url('/assets/static/logos/logo.svg');
  background-repeat: no-repeat;
  background-size: contain;
}
</style>

<i18n lang="yaml">
de:
  githubLinkTitle: TrapParty auf GitHub
  home: Nach Hause
  imprint: Impressum
  legal: Rechtliches
  privacyPolicy: Datenschutzerklärung
  quickLinks: Quick Links
  sourceCode: Quellcode
en:
  githubLinkTitle: TrapParty on GitHub
  home: Head home
  imprint: Imprint
  legal: Legal
  privacyPolicy: Privacy Policy
  quickLinks: Quick Links
  sourceCode: Quellcode
</i18n>
