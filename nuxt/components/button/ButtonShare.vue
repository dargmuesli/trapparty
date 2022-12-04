<template>
  <div v-if="url" class="flex gap-2 items-center">
    <slot />
    <ButtonColored :aria-label="t('share')" @click="copy(url)">
      <template #prefix>
        <IconShare />
      </template>
    </ButtonColored>
  </div>
  <div v-else class="unready inline-block">
    <slot name="unready" />
  </div>
</template>

<script setup lang="ts">
export interface Props {
  url: string
}
withDefaults(defineProps<Props>(), {})

const { t } = useI18n()

// methods
async function copy(string: string) {
  if (typeof window === 'undefined') return

  try {
    await navigator.clipboard.writeText(string)
    showToast({ title: t('donationUrlCopySuccess') })
  } catch (error: any) {
    alert(t('donationUrlCopyError'))
  }
}
</script>

<i18n lang="yaml">
de:
  donationUrlCopyError: 'Fehler: Der Spendenlink konnte leider nicht in die Zwischenablage kopiert werden!'
  donationUrlCopySuccess: Der Spendenlink wurde in die Zwischenablage kopiert.
  share: Teilen
</i18n>
