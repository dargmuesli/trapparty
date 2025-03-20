<template>
  <VioLoader :api="api">
    <VioCardStateAlert v-if="!player">
      {{ t('playerNone') }}
    </VioCardStateAlert>
    <div v-else class="text-justify text-3xl lg:text-8xl">
      <div v-if="round" class="flex flex-col gap-8">
        <div class="text-gray-500">
          <i18n-t keypath="question">
            <template #element>
              <span class="text-text-bright">
                {{ round.elementName }}
              </span>
            </template>
          </i18n-t>
        </div>
        <div
          class="m-4 flex flex-col justify-evenly gap-4 text-base lg:m-16 lg:flex-row lg:gap-16"
        >
          <VioForm
            :form="v$"
            :is-form-sent="isFormSent"
            @submit.prevent="submit"
          >
            <VioFormInput
              :placeholder="t('estimationPlaceholder')"
              :title="t('estimation')"
              type="number"
              :value="v$.estimation"
              @input="form.estimation = $event"
            />
          </VioForm>
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
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { consola } from 'consola'

import { useCreateGameEstimationNumericVoteMutation } from '~~/gql/documents/mutations/game/createGameEstimationNumericVote'
// import { useUpdateGameEstimationNumericRoundByIdMutation } from '~~/gql/documents/mutations/game/updateGameEstimationNumericRoundById'
import { useAllGameEstimationNumericRoundsQuery } from '~~/gql/documents/queries/game/allGameEstimationNumericRounds'
import { usePlayerByInvitationCodeFnQuery } from '~~/gql/documents/queries/player/playerByInvitationCodeFn'
import { getGameEstimationNumericRoundItem } from '~~/gql/documents/fragments/gameEstimationNumericRoundItem'
// import { getGameEstimationNumericVoteItem } from '~~/gql/documents/fragments/gameEstimationNumericVoteItem'
// import { gameEstimationNumericVoteByPlayerIdAndRoundIdQuery } from '~~/gql/documents/queries/game/gameEstimationNumericVoteByPlayerIdAndRoundId'

interface Props {
  gameId: number
}
const props = withDefaults(defineProps<Props>(), {})
const gameIdProp = toRef(() => props.gameId)

// const { $urql } = useNuxtApp()
const { t } = useI18n()
const store = useStore()
const fireError = useFireError()
const createGameEstimationNumericVoteMutation =
  useCreateGameEstimationNumericVoteMutation()
// const updateGameEstimationNumericRoundByIdMutation =
//   useUpdateGameEstimationNumericRoundByIdMutation()

// queries
const allGameEstimationNumericRoundsQuery =
  await useAllGameEstimationNumericRoundsQuery({
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
      ...allGameEstimationNumericRoundsQuery.data.value,
      ...playerByInvitationCodeFnQuery.data.value,
    },
    ...getApiMeta([
      allGameEstimationNumericRoundsQuery,
      playerByInvitationCodeFnQuery,
    ]),
  }),
)
const allGameEstimationNumericRounds = computed(
  () =>
    allGameEstimationNumericRoundsQuery.data.value
      ?.allGameEstimationNumericRounds,
)
const player = computed(
  () =>
    playerByInvitationCodeFnQuery.data.value?.playerByInvitationCodeFn
      ?.nodes[0],
)

// data
const form = reactive({
  estimation: ref<string>(),
})
const isFormSent = ref(false)
// const voteAnswer = ref<number>()

// computations
const round = computed(() => {
  if (!allGameEstimationNumericRounds.value) return

  const roundsActive = allGameEstimationNumericRounds.value?.nodes
    .map((x) => getGameEstimationNumericRoundItem(x))
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
// const voteFetch = async () => {
//   if (!player.value || !round.value) return

//   const result = await $urql.value
//     .query(
//       gameEstimationNumericVoteByPlayerIdAndRoundIdQuery,
//       {
//         playerId: player.value?.id,
//         roundId: round.value?.id,
//       },
//       {
//         fetchPolicy: 'network-only',
//       },
//     )
//     .toPromise()

//   if (result.error) fireError({ error: result.error }, api)

//   if (!result) return

//   // voteAnswer.value = getGameEstimationNumericVoteItem(
//   //   result.data?.gameEstimationNumericVoteByPlayerIdAndRoundId,
//   // )?.answer
// }
const submit = async () => {
  if (!(await isFormValid({ v$, isFormSent })) || !form.estimation) return

  const answer = +form.estimation

  // await allGameEstimationNumericRoundsQuery.executeQuery()

  if (!player.value || !round.value /* || round.value.answerCorrect !== null*/)
    return

  const result = await createGameEstimationNumericVoteMutation.executeMutation({
    gameEstimationNumericVoteInput: {
      answer,
      playerId: player.value.id,
      roundId: round.value.id,
    },
  })

  if (result.error) {
    fireError({ error: result.error }, api)
    await allGameEstimationNumericRoundsQuery.executeQuery()
  }

  if (!result.data?.createGameEstimationNumericVote) return

  // if (player.value.name !== round.value.questionerName) {
  showToast({ title: t('saved') })
  //   await voteFetch()
  // }

  // if (player.value.name === round.value.questionerName) {
  //   const result =
  //     await updateGameEstimationNumericRoundByIdMutation.executeMutation({
  //       gameEstimationNumericRoundPatch: {
  //         answerCorrect: answer,
  //       },
  //       id: round.value.id,
  //     })

  //   if (result.error) fireError({ error: result.error }, api)

  //   if (!result.data) return

  //   showToast({ title: t('saved') })
  //   await voteFetch()
  // }
}

// vuelidate
const rules = {
  estimation: {
    required,
    //   VALIDATION_PRIMITIVE({
    //   valueMax: Math. Infinity,
    //   valueMin: -Infinity,
    // })
  },
}
const v$ = useVuelidate(rules, form)

// // lifecycle
// watch(allGameEstimationNumericRoundsQuery.error, (currentValue, _oldValue) => {
//   if (currentValue) consola.error(currentValue)
// })
// watch(playerByInvitationCodeFnQuery.error, (currentValue, _oldValue) => {
//   if (currentValue) consola.error(currentValue)
// })

// // initialization
// await voteFetch()
</script>

<i18n lang="yaml">
de:
  estimation: Schätzung
  estimationPlaceholder: 13,37
  question: Wie hoch oder niedrig ist {element} aktuell? 🤔
  playerNone: Spielerdaten konnten nicht gefunden werden.
  saved: Gespeichert.
  voteNone: keine Abstimmung
  voteNoneSentence: Aktuell gibt es {voteNone}.
en:
  estimation: Estimation
  estimationPlaceholder: '13.37'
  question: How much is {element} currently? 🤔
  playerNone: Player data could not be found.
  saved: Saved.
  voteNone: no vote
  voteNoneSentence: Currently there is {voteNone}.
</i18n>
