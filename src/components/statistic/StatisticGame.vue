<template>
  <li v-if="game" class="flex flex-col gap-8">
    <GameTitle :game="game" />
    <StatisticGameRandomFact
      v-if="game.type === 'RANDOM_FACTS'"
      :game-id="+game.id"
    />
    <StatisticGameEstimationNumeric
      v-if="game.type === 'ESTIMATION_NUMERIC'"
      :game-id="+game.id"
    />
  </li>
</template>

<script setup lang="ts">
import type { GameItemFragment } from '~/gql/generated/graphql'

interface Props {
  game: GameItemFragment
}
withDefaults(defineProps<Props>(), {})
</script>
