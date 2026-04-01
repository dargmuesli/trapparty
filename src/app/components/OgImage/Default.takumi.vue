<template>
  <div
    class="flex flex-col justify-center bg-[#161616] px-16 text-gray-50"
    style="font-family: Inter, sans-serif"
  >
    <img
      alt="TrapParty"
      class="absolute right-0 opacity-[0.025]"
      src="/assets/static/favicon/pwa-512x512.png"
      width="700"
      height="700"
    />
    <div
      v-if="headline"
      class="mt-20 text-[40px] font-semibold text-gray-300"
      :style="headlineLineClamp"
    >
      {{ headline }}
    </div>
    <h1 class="text-[72px] font-bold" :style="titleLineClamp">
      {{ title }}
    </h1>
  </div>
</template>

<script setup lang="ts">
import type { StyleValue } from 'vue'

const { headline = undefined, title } = defineProps<{
  headline?: string
  title: string
}>()

const lineClampStyle: (value: string, maxLines: number) => StyleValue = (
  value: string,
  maxLines: number,
) => {
  if (!value)
    return {
      display: 'block',
      'text-overflow': 'ellipsis',
    }

  const wordCount = value.trim().split(/\s+/).length
  return {
    display: 'block',
    'line-clamp': Math.min(wordCount, maxLines),
    'text-overflow': 'ellipsis',
  }
}

const headlineLineClamp = headline ? lineClampStyle(headline, 1) : undefined
const titleLineClamp = lineClampStyle(title, 2)
</script>
