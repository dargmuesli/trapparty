<template>
  <span v-if="url">
    <slot />
    <Button
      :aria-label="t('share')"
      :icon-id="['fas', 'share-alt']"
      @click="copy(url)"
    />
  </span>
  <span v-else class="unready inline-block">
    <slot name="unready" />
  </span>
</template>

<script setup lang="ts">
import Swal from 'sweetalert2'

export interface Props {
  url: string
}
withDefaults(defineProps<Props>(), {})

const { t } = useI18n()

// methods
function copy(string: string) {
  if (typeof window === 'undefined') {
    return
  }

  navigator.clipboard.writeText(string).then(
    () => {
      Swal.fire({
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
        title: t('donationUrlCopySuccess'),
      })
    },
    (_err) => {
      alert(t('donationUrlCopyError'))
    }
  )
}
</script>

<i18n lang="yaml">
de:
  donationUrlCopyError: 'Fehler: Der Spendenlink konnte leider nicht in die Zwischenablage kopiert werden!'
  donationUrlCopySuccess: Der Spendenlink wurde in die Zwischenablage kopiert.
  share: Teilen
</i18n>
