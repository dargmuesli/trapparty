<template>
  <Loader :api="api">
    <li
      class="rounded-md bg-gray-300 p-2 dark:bg-gray-700"
      :class="{
        /* highscores are number, so an explicit check for undefined is necessary */
        'border xl:border-2 border-yellow-500':
          highscores[0] !== undefined && value === highscores[0],
        'border xl:border-2 border-gray-400':
          highscores[1] !== undefined && value === highscores[1],
        'border xl:border-2 border-yellow-700':
          highscores[2] !== undefined && value === highscores[2],
      }"
    >
      {{ t('playerValue', { player: playerNameById, value }) }}
    </li>
  </Loader>
</template>

<script setup lang="ts">
import { consola } from 'consola'

import { usePlayerNameByIdQuery } from '~/gql/documents/queries/player/playerNameById'

export interface Props {
  highscores: number[]
  playerId: number
  value: number
}
const props = withDefaults(defineProps<Props>(), {})

const { t } = useI18n()

// queries
const playerNameByIdQuery = await usePlayerNameByIdQuery({
  id: props.playerId,
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
en:
  playerValue: '{player}: {value}'
</i18n>
