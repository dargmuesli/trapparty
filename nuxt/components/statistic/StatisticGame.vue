<template>
  <li v-if="game" class="flex flex-col gap-8">
    <GameTitle :game="game" />
    <StatisticGameRandomFact
      v-if="game.type === 'RANDOM_FACTS'"
      :game-id="+game.id"
    />
  </li>
</template>

<script setup lang="ts">
import { Game } from '~/gql/generated'

export interface Props {
  game: Pick<Game, 'id' | 'isActive' | 'name' | 'type'>
}
withDefaults(defineProps<Props>(), {})
</script>
