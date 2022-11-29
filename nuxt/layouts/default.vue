<template>
  <div>
    <div class="container mx-auto flex min-h-screen flex-col p-4">
      <header class="relative mb-4 flex items-center justify-between">
        <AppLink :aria-label="t('home')" :to="localePath('/')">
          <div id="logo" class="h-16 w-16" />
        </AppLink>
        <AppLink class="text-gray-900 dark:text-white" :to="localePath('/')">
          <IconHome />
        </AppLink>
      </header>
      <div class="flex flex-1 flex-col">
        <nuxt />
      </div>
    </div>
    <footer>
      <div class="container mx-auto flex justify-around p-4">
        <div class="flex flex-col">
          <AppLink :to="localePath('/imprint')">
            {{ t('imprint') }}
          </AppLink>
          <AppLink :to="localePath('/privacy-policy')">
            {{ t('privacyPolicy') }}
          </AppLink>
        </div>
        <div class="flex flex-col">
          <AppLink
            :title="t('githubLinkTitle')"
            to="https://github.com/dargmuesli/trapparty/"
          >
            {{ t('sourceCode') }}
          </AppLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { $moment } = useNuxtApp()
const localePath = useLocalePath()
const { locale, t } = useI18n()

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
  background-image: url('/assets/static/logos/trapparty.svg');
  background-repeat: no-repeat;
  background-size: contain;
}
</style>

<i18n lang="yaml">
de:
  githubLinkTitle: TrapParty auf GitHub
  home: Nach Hause
  imprint: Impressum
  privacyPolicy: Datenschutzerklärung
  sourceCode: Quellcode
en:
  githubLinkTitle: TrapParty on GitHub
  home: Head home
  imprint: Imprint
  privacyPolicy: Privacy Policy
  sourceCode: Quellcode
</i18n>
