<template>
  <section
    class="flex flex-col-reverse items-start md:flex-row md:items-center md:gap-2"
  >
    <h1 class="m-0">{{ game.name }}</h1>
    <span
      class="rounded-full px-2 py-1 text-gray-900"
      :class="game.isActive ? 'bg-green-400' : 'bg-white'"
    >
      {{ game.isActive ? t('isActiveTrue') : t('isActiveFalse') }}
    </span>
  </section>
</template>

<script setup lang="ts">
import { Game } from '~/gql/generated'

export interface Props {
  game: Pick<Game, 'isActive' | 'name'>
}
withDefaults(defineProps<Props>(), {})

const { t } = useI18n()
</script>

<i18n lang="yaml">
de:
  isActiveTrue: Aktiv
  isActiveFalse: Inaktiv
</i18n>
