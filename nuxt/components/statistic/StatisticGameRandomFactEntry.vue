<template>
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
</template>

<script setup lang="ts">
import consola from 'consola'

import PLAYER_NAME_BY_ID_QUERY from '~/gql/query/player/playerNameById.gql'

// apollo: {
//   playerNameById() {
//     return {
//       query: PLAYER_NAME_BY_ID_QUERY,
//       variables: {
//         id: playerId,
//       },
//       update: (data: any) => data.playerNameById,
//       error(error: any) {
//         consola.error(error)
//         graphqlError = error.message
//       },
//     }
//   },
// },
export interface Props {
  highscores: number[]
  playerId: number
  value: number
}
const props = withDefaults(defineProps<Props>(), {})

const { t } = useI18n()

// data
const playerNameById = ref<string>()
</script>

<i18n lang="yaml">
de:
  playerValue: '{player}: {value}'
</i18n>
