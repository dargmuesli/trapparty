<template>
  <div v-if="game">
    <GameTitle :game="game" />
    <StatisticGameRandomFact
      v-if="game.type === 'RANDOM_FACTS'"
      :game-id="+game.id"
    />
  </div>
</template>

<script setup lang="ts">
import { Game } from '~/gql/generated'

export interface Props {
  game: Pick<Game, 'id' | 'isActive' | 'name' | 'type'>
}
withDefaults(defineProps<Props>(), {})
</script>
