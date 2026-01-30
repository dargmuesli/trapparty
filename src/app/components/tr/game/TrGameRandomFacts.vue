<template>
  <VioLoader :api="api">
    <VioCardStateAlert v-if="!player">
      {{ t('playerNone') }}
    </VioCardStateAlert>
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
          <VioButtonColored
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
          </VioButtonColored>
          <VioButtonColored
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
          </VioButtonColored>
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
  </VioLoader>
</template>

<script setup lang="ts">
import { consola } from 'consola'

import { useCreateGameRandomFactsVoteMutation } from '~~/gql/documents/mutations/game/createGameRandomFactsVote'
import { useUpdateGameRandomFactsRoundByIdMutation } from '~~/gql/documents/mutations/game/updateGameRandomFactsRoundById'
import { useAllGameRandomFactsRoundsQuery } from '~~/gql/documents/queries/game/allGameRandomFactsRounds'
import { usePlayerByInvitationCodeFnQuery } from '~~/gql/documents/queries/player/playerByInvitationCodeFn'
import { getGameRandomFactsRoundItem } from '~~/gql/documents/fragments/gameRandomFactsRoundItem'
import { getGameRandomFactsVoteItem } from '~~/gql/documents/fragments/gameRandomFactsVoteItem'
import { gameRandomFactsVoteByPlayerIdAndRoundIdQuery } from '~~/gql/documents/queries/game/gameRandomFactsVoteByPlayerIdAndRoundId'

interface Props {
  gameId: number
}
const props = withDefaults(defineProps<Props>(), {})
const gameIdProp = toRef(() => props.gameId)

const { $urql } = useNuxtApp()
const { t } = useI18n()
const store = useStore()
const alertError = useAlertError()
const createGameRandomFactsVoteMutation = useCreateGameRandomFactsVoteMutation()
const updateGameRandomFactsRoundByIdMutation =
  useUpdateGameRandomFactsRoundByIdMutation()

// queries
const allGameRandomFactsRoundsQuery = await useAllGameRandomFactsRoundsQuery({
  gameId: gameIdProp.value,
})
const playerByInvitationCodeFnQuery = await usePlayerByInvitationCodeFnQuery({
  invitationCode:
    store.participationData.role === 'player'
      ? store.participationData?.invitationCode
      : '',
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
  }),
)
const allGameRandomFactsRounds = computed(
  () => allGameRandomFactsRoundsQuery.data.value?.allGameRandomFactsRounds,
)
const player = computed(
  () =>
    playerByInvitationCodeFnQuery.data.value?.playerByInvitationCodeFn
      ?.nodes[0],
)

// data
const voteAnswer = ref<number>()

// computations
const round = computed(() => {
  if (!allGameRandomFactsRounds.value) return

  const roundsActive = allGameRandomFactsRounds.value?.nodes
    .map((x) => getGameRandomFactsRoundItem(x))
    .filter((x) => x?.answerCorrect === null)

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
      playerId: player.value.id,
      roundId: round.value.id,
    },
  })

  if (result.error)
    alertError({ error: result.error, messageI18n: t('errorVoteCreate') })

  if (!result.data) return

  if (player.value.name !== round.value.questionerName) {
    toast.success(t('saved'))
    await voteFetch()
  }

  if (player.value.name === round.value.questionerName) {
    const result = await updateGameRandomFactsRoundByIdMutation.executeMutation(
      {
        gameRandomFactsRoundPatch: {
          answerCorrect: answer,
        },
        id: round.value.id,
      },
    )

    if (result.error)
      alertError({ error: result.error, messageI18n: t('errorRoundUpdate') })

    if (!result.data) return

    toast.success(t('saved'))
    await voteFetch()
  }
}
const voteFetch = async () => {
  if (!player.value || !round.value) return

  const result = await $urql.value
    .query(
      gameRandomFactsVoteByPlayerIdAndRoundIdQuery,
      {
        playerId: player.value?.id,
        roundId: round.value?.id,
      },
      {
        fetchPolicy: 'network-only',
      },
    )
    .toPromise()

  if (result.error)
    alertError({ error: result.error, messageI18n: t('errorVoteRead') })

  if (!result) return

  voteAnswer.value = getGameRandomFactsVoteItem(
    result.data?.gameRandomFactsVoteByPlayerIdAndRoundId,
  )?.answer
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
  errorRoundUpdate: Es gab eien Fehler beim Aktualisieren der Runde.
  errorVoteCreate: Es gab einen Fehler beim Erstellen der Abstimmung.
  errorVoteRead: Es gab einene Fehler beim Laden der Abstimmung.
  factA: Fakt A
  factB: Fakt B
  nobody: niemand
  playerNone: Spielerdaten konnten nicht gefunden werden.
  question: Vor dir steht {name}. Welcher {randomFact} ist wahr? 🤔
  randomFact: random fact
  saved: Gespeichert.
  voteNone: keine Abstimmung
  voteNoneSentence: Aktuell gibt es {voteNone}.
en:
  errorRoundUpdate: There was an error updating the round.
  errorVoteCreate: There was an error creating the vote.
  errorVoteRead: There was an error fetching the vote.
  factA: Fact A
  factB: Fact B
  nobody: nobody
  playerNone: Player data could not be found.
  question: In front of you is {name}. Which {randomFact} is true? 🤔
  randomFact: random fact
  saved: Saved.
  voteNone: no vote
  voteNoneSentence: Currently there is {voteNone}.
</i18n>
