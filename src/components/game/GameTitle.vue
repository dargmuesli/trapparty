<template>
  <section
    class="flex flex-col-reverse items-start md:flex-row md:items-center md:gap-2"
  >
    <h1 class="m-0">{{ game.name }}</h1>
    <span
      class="rounded-full border px-2 py-1 text-sm"
      :class="
        game.isActive
          ? 'border-green-400 text-green-400'
          : 'border-gray-400 text-gray-400'
      "
    >
      {{ game.isActive ? t('isActiveTrue') : t('isActiveFalse') }}
    </span>
  </section>
</template>

<script setup lang="ts">
import type { GameItemFragment } from '~/gql/generated/graphql'

interface Props {
  game: GameItemFragment
}
withDefaults(defineProps<Props>(), {})

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  isActiveTrue: Aktiv
  isActiveFalse: Inaktiv
en:
  isActiveTrue: Active
  isActiveFalse: Inactive
</i18n>
