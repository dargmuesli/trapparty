<template>
  <li v-if="game" class="flex flex-col gap-8">
    <TrGameTitle :game="game" />
    <TrStatisticGameRandomFact
      v-if="game.type === 'random_facts'"
      :game-id="+game.id"
    />
    <TrStatisticGameEstimationNumeric
      v-if="game.type === 'estimation_numeric'"
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
