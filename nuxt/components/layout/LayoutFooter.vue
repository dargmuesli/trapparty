<template>
  <footer class="text-sm leading-6">
    <div class="flex flex-col gap-8">
      <div class="flex items-center">
        <Hr />
        <LoaderImage
          :alt="t('productLogo')"
          aspect="aspect-square"
          class="mx-12 h-12 w-12 opacity-50 dark:opacity-60 grayscale"
          height="48"
          src="/assets/static/logos/logo.svg"
          width="48"
        />
        <Hr />
      </div>
      <!-- Justifying evenly, instead of "between", centers a single element. -->
      <div class="flex flex-wrap justify-between">
        <slot />
      </div>
      <p class="text-center text-gray-500 dark:text-gray-400">
        {{ t('copyright', { year: new Date().getFullYear() }) }}
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  copyright: © {year} TrapParty-Team. Alle Rechte vorbehalten.
  productLogo: TrapPartys Logo
en:
  copyright: © {year} TrapParty team. All rights reserved.
  productLogo: "TrapParty's logo"
</i18n>
