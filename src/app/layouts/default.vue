<template>
  <div class="container mx-auto p-4 md:px-8">
    <div class="flex min-h-screen flex-col pb-32">
      <header class="relative mb-4 flex items-center justify-between">
        <VioLink :aria-label="t('home')" :to="localePath('/')">
          <IconLogo class="h-16 w-16" />
        </VioLink>
        <VioLink
          :aria-label="t('home')"
          class="text-gray-900 dark:text-white"
          :is-colored="false"
          :to="localePath('/')"
        >
          <VioIconHome />
        </VioLink>
      </header>
      <div class="flex flex-1 flex-col">
        <NuxtLoadingIndicator color="#fff" />
        <slot />
      </div>
    </div>
    <VioLayoutFooter>
      <VioLayoutFooterCategory :heading="t('legal')">
        <VioLink
          :aria-label="t('legalNotice')"
          :to="localePath('/legal-notice')"
        >
          {{ t('legalNotice') }}
        </VioLink>
        <VioLink
          :aria-label="t('privacyPolicy')"
          :to="localePath('/privacy-policy')"
        >
          {{ t('privacyPolicy') }}
        </VioLink>
      </VioLayoutFooterCategory>
      <VioLayoutFooterCategory :heading="t('quickLinks')">
        <VioLink
          :aria-label="t('sourceCode')"
          :title="t('githubLinkTitle')"
          to="https://github.com/dargmuesli/trapparty/"
        >
          {{ t('sourceCode') }}
        </VioLink>
      </VioLayoutFooterCategory>
    </VioLayoutFooter>
    <CookieControl :locale="locale" />
  </div>
</template>

<script setup lang="ts">
import type { Locale } from '@dargmuesli/nuxt-cookie-control/runtime/types.js'
import type { WritableComputedRef } from 'vue'

const localePath = useLocalePath()
const { t, locale: i18nLocale } = useI18n()

// data
const locale = i18nLocale as WritableComputedRef<Locale>
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
