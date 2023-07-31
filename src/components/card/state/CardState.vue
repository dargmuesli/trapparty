<template>
  <Card
    :background-color="backgroundColor"
    class="flex justify-center items-center gap-4 text-white"
    :class="{ 'rounded-none': isEdgy }"
  >
    <slot />
  </Card>
</template>

<script setup lang="ts">
export interface Props {
  backgroundColor?: string
  isEdgy?: boolean
}
withDefaults(defineProps<Props>(), {
  backgroundColor: undefined,
  isEdgy: false,
})
</script>
