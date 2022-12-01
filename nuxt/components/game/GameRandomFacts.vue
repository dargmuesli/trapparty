<template>
  <Loader :api="api">
    <div class="text-justify text-3xl lg:text-8xl">
      <div v-if="round && player">
        <div>
          <span class="text-gray-500">{{ t('namePrefix') }}</span>
          {{ round.questionerName || t('nobody') }}
          <span class="text-gray-500">{{ t('nameSuffix') }}</span>
          <span class="text-gray-500">{{ t('randomFactPrefix') }}</span>
          {{ t('randomFact') }}
          <span class="text-gray-500">{{ t('randomFactSuffix') }}</span>
        </div>
        <div
          class="m-4 flex flex-col justify-evenly gap-4 lg:m-16 lg:flex-row lg:gap-16"
        >
          <Button
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
          </Button>
          <Button
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
          </Button>
        </div>
      </div>
      <div v-else>
        <div>
          <span class="text-gray-500">{{ t('voteNonePrefix') }}</span>
          {{ t('voteNone')
          }}<span class="text-gray-500">{{ t('voteNoneSuffix') }}</span>
        </div>
      </div>
    </div>
  </Loader>
</template>

<script setup lang="ts">
import consola from 'consola'
import Swal from 'sweetalert2'

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
    invitationCode: store.participationData?.invitationCode,
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
async function choose(answer: number) {
  allGameRandomFactsRoundsQuery.executeQuery()

  if (!player.value || !round.value || round.value.answerCorrect !== null)
    return

  const result = await createGameRandomFactsVoteMutation.executeMutation({
    gameRandomFactsVoteInput: {
      answer,
      playerId: +player.value.id,
      roundId: +round.value.id,
    },
  })

  if (result.error) {
    Swal.fire({
      icon: 'error',
      title: t('error'),
      text: result.error.message,
    })
    api.value.errors.push(result.error)
    consola.error(result.error)
  }

  if (!result.data) {
    return
  }

  if (player.value.name !== round.value.questionerName) {
    Swal.fire({
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
      text: t('saved'),
    })
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

    if (result.error) {
      Swal.fire({
        icon: 'error',
        title: t('error'),
        text: result.error.message,
      })
      api.value.errors.push(result.error)
      consola.error(result.error)
    }

    if (!result.data) {
      return
    }

    Swal.fire({
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
      text: t('saved'),
    })
    await voteFetch()
  }
}
async function voteFetch() {
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

  if (result.error) {
    Swal.fire({
      icon: 'error',
      title: t('error'),
      text: result.error.message,
    })
    api.value.errors.push(result.error)
    consola.error(result.error)
  }

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
  error: Fehler
  factA: Fakt A
  factB: Fakt B
  namePrefix: Vor dir steht
  nameSuffix: .
  nobody: niemand
  randomFact: random fact
  randomFactPrefix: Welcher
  randomFactSuffix: ist wahr? 🤔
  saved: Gespeichert.
  voteNone: keine Abstimmung
  voteNonePrefix: Aktuell gibt es.
  voteNoneSuffix: .
</i18n>
