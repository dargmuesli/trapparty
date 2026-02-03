<template>
  <VioLoader :api="api">
    <li
      class="rounded-md bg-gray-300 p-2 dark:bg-gray-700"
      :class="{
        /* highscores are number, so an explicit check for undefined is necessary */
        'border border-yellow-500 xl:border-2':
          highscores[0] !== undefined && value === highscores[0],
        'border border-gray-400 xl:border-2':
          highscores[1] !== undefined && value === highscores[1],
        'border border-yellow-700 xl:border-2':
          highscores[2] !== undefined && value === highscores[2],
      }"
    >
      {{ t('playerValue', { player: playerNameById, value }) }}
    </li>
  </VioLoader>
</template>

<script setup lang="ts">
import { consola } from 'consola'

import { usePlayerNameByIdQuery } from '~~/gql/documents/queries/player/playerNameById'

const { highscores, playerId, value } = defineProps<{
  highscores: number[]
  playerId: number
  value: number
}>()

const { t } = useI18n()

// queries
const playerNameByIdQuery = await usePlayerNameByIdQuery({
  id: playerId,
})

// api data
const api = computed(() =>
  reactive({
    data: {
      ...playerNameByIdQuery.data.value,
    },
    ...getApiMeta([playerNameByIdQuery]),
  }),
)
const playerNameById = computed(
  () => playerNameByIdQuery.data.value?.playerNameById,
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
en:
  playerValue: '{player}: {value}'
</i18n>
