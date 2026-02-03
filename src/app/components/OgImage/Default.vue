<template>
  <div class="h-full w-full flex-row items-center bg-[#161616] text-gray-50">
    <img
      class="ml-16"
      alt="DJ cReal"
      src="/assets/static/favicon/pwa-512x512.png"
      width="300"
      height="300"
    />
    <div class="ml-16 justify-center">
      <template v-if="title !== siteConfigName">
        <h1 class="text-[72px] leading-none">
          {{ title }}
        </h1>
      </template>
      <template v-else>
        <div class="text-[40px] font-semibold text-gray-300">
          {{ headline }}
        </div>
        <h1 class="text-[72px] leading-none">
          {{ name }}
        </h1>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const { headline, name, siteConfigName, title } = defineProps<{
  headline: string
  name: string
  siteConfigName: string
  title: string
}>()
</script>

<script lang="ts">
export default {
  name: 'OgImage',
}
</script>
