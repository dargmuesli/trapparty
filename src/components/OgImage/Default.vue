<template>
  <div class="h-full w-full flex-row items-center bg-[#0f0f0f] text-gray-50">
    <img
      class="ml-16"
      alt="DJ cReal"
      src="/assets/static/favicon/android-chrome-512x512.png"
      width="300"
      height="300"
    />
    <div class="ml-16 justify-center">
      <template v-if="title !== siteConfig.name">
        <h1 class="text-[72px] leading-none">
          {{ title }}
        </h1>
      </template>
      <template v-else>
        <div class="text-[40px] font-semibold text-gray-300">
          {{ t('headline') }}
        </div>
        <h1 class="text-[72px] leading-none">
          {{ t('name') }}
        </h1>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  description: string
  title: string
}
withDefaults(defineProps<Props>(), {})

const { t } = useI18n()
const siteConfig = useSiteConfig()
</script>

<script lang="ts">
export default {
  name: 'OgImage',
}
</script>

<i18n lang="yaml">
de:
  headline: Jonas Thelemanns
  name: Geburtstagsfeier
en:
  headline: Jonas Thelemann's
  name: Birthday Bash
</i18n>
