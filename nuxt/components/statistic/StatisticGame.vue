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
import { GameType } from '~/gql/generated'

export interface Props {
  game: { id: number; isActive: boolean; name: string; type: GameType }
}
withDefaults(defineProps<Props>(), {})
</script>
