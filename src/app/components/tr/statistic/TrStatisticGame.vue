<template>
  <li v-if="game" class="flex flex-col gap-8">
    <TrGameTitle :game="game" />
    <TrStatisticGameRandomFact
      v-if="game.type === 'RANDOM_FACTS'"
      :game-id="+game.id"
    />
    <TrStatisticGameEstimationNumeric
      v-if="game.type === 'ESTIMATION_NUMERIC'"
      :game-id="+game.id"
    />
  </li>
</template>

<script setup lang="ts">
import type { GameItemFragment } from '~~/gql/generated/graphql'

const { game } = defineProps<{
  game: GameItemFragment
}>()
</script>
