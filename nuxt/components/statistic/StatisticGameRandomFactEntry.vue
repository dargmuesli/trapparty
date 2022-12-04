<template>
  <Loader :api="api">
    <li
      class="rounded-md bg-gray-300 p-2 dark:bg-gray-700"
      :class="{
        'border border-yellow-500':
          highscores[0] !== undefined && value === highscores[0],
        'border border-gray-500':
          highscores[1] !== undefined && value === highscores[1],
        'border border-yellow-700':
          highscores[2] !== undefined && value === highscores[2],
      }"
    >
      {{ t('playerValue', { player: playerNameById, value }) }}
    </li>
  </Loader>
</template>

<script setup lang="ts">
import consola from 'consola'

import { usePlayerNameByIdQuery } from '~/gql/generated'

export interface Props {
  highscores: number[]
  playerId: number
  value: number
}
const props = withDefaults(defineProps<Props>(), {})

const { t } = useI18n()

// queries
const playerNameByIdQuery = await usePlayerNameByIdQuery({
  variables: {
    id: props.playerId,
  },
})

// api data
const api = computed(() =>
  reactive({
    data: {
      ...playerNameByIdQuery.data.value,
    },
    ...getApiMeta([playerNameByIdQuery]),
  })
)
const playerNameById = computed(
  () => playerNameByIdQuery.data.value?.playerNameById
)

// lifecycle
// TODO: add missing watches in other files
watch(playerNameByIdQuery.error, (currentValue, _oldValue) => {
  if (currentValue) consola.error(currentValue)
})
</script>

<i18n lang="yaml">
de:
  playerValue: '{player}: {value}'
</i18n>
