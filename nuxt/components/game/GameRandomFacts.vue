<template>
  <Loader :api="api">
    <CardStateAlert v-if="!player">
      {{ t('playerNone') }}
    </CardStateAlert>
    <div v-else class="text-justify text-3xl lg:text-8xl">
      <div v-if="round" class="flex flex-col gap-8">
        <div class="text-gray-500">
          <i18n-t keypath="question">
            <template #name>
              <span class="text-text-bright">
                {{ round.questionerName || t('nobody') }}
              </span>
            </template>
            <template #randomFact>
              <span class="text-text-bright">
                {{ t('randomFact') }}
              </span>
            </template>
          </i18n-t>
        </div>
        <div
          class="m-4 flex flex-col justify-evenly gap-4 lg:m-16 lg:flex-row lg:gap-16"
        >
          <ButtonColored
            :aria-label="t('factA')"
            class="px-4 py-8 lg:px-16"
            :class="{
              'ring-8 ring-yellow-500': voteAnswer === 0,
              'bg-green-500':
                voteAnswer !== undefined && round.answerCorrect === 0,
            }"
            :disabled="voteAnswer !== undefined"
            @click="choose(0)"
          >
            {{ t('factA') }}
          </ButtonColored>
          <ButtonColored
            :aria-label="t('factB')"
            class="px-4 py-8 lg:px-16"
            :class="{
              'ring-8 ring-yellow-500': voteAnswer === 1,
              'bg-green-500':
                voteAnswer !== undefined && round.answerCorrect === 1,
            }"
            :disabled="voteAnswer !== undefined"
            @click="choose(1)"
          >
            {{ t('factB') }}
          </ButtonColored>
        </div>
      </div>
      <div v-else class="text-gray-500">
        <i18n-t keypath="voteNoneSentence">
          <template #voteNone>
            <span class="text-text-bright">{{ t('voteNone') }}</span>
          </template>
        </i18n-t>
      </div>
    </div>
  </Loader>
</template>

<script setup lang="ts">
import consola from 'consola'

import GAME_RANDOM_FACTS_VOTE_BY_PLAYER_AND_ROUND_ID from '~/gql/query/game/gameRandomFactsVoteByPlayerIdAndRoundId.gql'
import {
  GameRandomFactsVoteByPlayerIdAndRoundIdQuery,
  useAllGameRandomFactsRoundsQuery,
  useCreateGameRandomFactsVoteMutation,
  usePlayerByInvitationCodeFnQuery,
  useUpdateGameRandomFactsRoundByIdMutation,
} from '~/gql/generated'
import { useStore } from '~/store'

export interface Props {
  gameId: number
}
const props = withDefaults(defineProps<Props>(), {})

const { $urql } = useNuxtApp()
const { t } = useI18n()
const store = useStore()
const fireError = useFireError()
const createGameRandomFactsVoteMutation = useCreateGameRandomFactsVoteMutation()
const updateGameRandomFactsRoundByIdMutation =
  useUpdateGameRandomFactsRoundByIdMutation()

// queries
const allGameRandomFactsRoundsQuery = await useAllGameRandomFactsRoundsQuery({
  variables: {
    gameId: props.gameId,
  },
})
const playerByInvitationCodeFnQuery = await usePlayerByInvitationCodeFnQuery({
  variables: {
    invitationCode:
      store.participationData.role === 'player' &&
      store.participationData?.invitationCode,
  },
})

// api data
const api = computed(() =>
  reactive({
    data: {
      ...allGameRandomFactsRoundsQuery.data.value,
      ...playerByInvitationCodeFnQuery.data.value,
    },
    ...getApiMeta([
      allGameRandomFactsRoundsQuery,
      playerByInvitationCodeFnQuery,
    ]),
  })
)
const allGameRandomFactsRounds = computed(
  () => allGameRandomFactsRoundsQuery.data.value?.allGameRandomFactsRounds
)
const player = computed(
  () =>
    playerByInvitationCodeFnQuery.data.value?.playerByInvitationCodeFn?.nodes[0]
)

// data
const voteAnswer = ref<number>()

// computations
const round = computed(() => {
  if (!allGameRandomFactsRounds.value) return

  const roundsActive = allGameRandomFactsRounds.value?.nodes.filter(
    (x) => x?.answerCorrect === null
  )

  if (!roundsActive) {
    consola.error('There are no active rounds!')
    return
  }

  if (roundsActive.length > 1) {
    consola.error('There are more than one active rounds!')
    return
  }

  return roundsActive[0]
})

// methods
const choose = async (answer: number) => {
  await allGameRandomFactsRoundsQuery.executeQuery()

  if (!player.value || !round.value || round.value.answerCorrect !== null)
    return

  const result = await createGameRandomFactsVoteMutation.executeMutation({
    gameRandomFactsVoteInput: {
      answer,
      playerId: +player.value.id,
      roundId: +round.value.id,
    },
  })

  if (result.error) fireError({ error: result.error }, api)

  if (!result.data) return

  if (player.value.name !== round.value.questionerName) {
    showToast({ title: t('saved') })
    await voteFetch()
  }

  if (player.value.name === round.value.questionerName) {
    const result = await updateGameRandomFactsRoundByIdMutation.executeMutation(
      {
        gameRandomFactsRoundPatch: {
          answerCorrect: answer,
        },
        id: +round.value.id,
      }
    )

    if (result.error) fireError({ error: result.error }, api)

    if (!result.data) return

    showToast({ title: t('saved') })
    await voteFetch()
  }
}
const voteFetch = async () => {
  if (!player.value || !round.value) return

  const result = await $urql.value
    .query<GameRandomFactsVoteByPlayerIdAndRoundIdQuery>(
      GAME_RANDOM_FACTS_VOTE_BY_PLAYER_AND_ROUND_ID,
      {
        playerId: player.value?.id,
        roundId: round.value?.id,
      },
      {
        fetchPolicy: 'network-only',
      }
    )
    .toPromise()

  if (result.error) fireError({ error: result.error }, api)

  if (!result) return

  voteAnswer.value =
    result.data?.gameRandomFactsVoteByPlayerIdAndRoundId?.answer
}

// lifecycle
watch(allGameRandomFactsRoundsQuery.error, (currentValue, _oldValue) => {
  if (currentValue) consola.error(currentValue)
})
watch(playerByInvitationCodeFnQuery.error, (currentValue, _oldValue) => {
  if (currentValue) consola.error(currentValue)
})

// initialization
await voteFetch()
</script>

<i18n lang="yaml">
de:
  factA: Fakt A
  factB: Fakt B
  question: Vor dir steht {name}. Welcher {randomFact} ist wahr? 🤔
  nobody: niemand
  playerNone: Spielerdaten konnten nicht gefunden werden.
  randomFact: random fact
  saved: Gespeichert.
  voteNone: keine Abstimmung
  voteNoneSentence: Aktuell gibt es {voteNone}.
en:
  factA: Fact A
  factB: Fact B
  question: In front of you is {name}. Which {randomFact} is true? 🤔
  nobody: nobody
  playerNone: Player data could not be found.
  randomFact: random fact
  saved: Saved.
  voteNone: no vote
  voteNoneSentence: Currently there is {voteNone}.
</i18n>
