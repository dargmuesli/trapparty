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
import { Game } from '~/types/trapparty'

export interface Props {
  game: Game
}
withDefaults(defineProps<Props>(), {})
</script>
