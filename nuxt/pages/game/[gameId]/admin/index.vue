<template>
  <ButtonColored :aria-label="t('nfcRead')" @click="nfcScan">
    {{ t('nfcRead') }}
  </ButtonColored>
</template>

<script setup lang="ts">
import consola from 'consola'

import PLAYER_BY_INVITATION_CODE_FN from '~/gql/query/player/playerByInvitationCodeFn.gql'
import {
  PlayerByInvitationCodeFnQuery,
  useCreateGameRandomFactsRoundMutation,
} from '~/gql/generated'

const { $urql } = useNuxtApp()
const { t } = useI18n()
const route = useRoute()
const fireError = useFireError()
const createGameRandomFactsRoundMutation =
  useCreateGameRandomFactsRoundMutation()

// api data
const api = getApiDataDefault()

// data
const isNfcWritableErrorMessage = ref<string>()

// methods
const checkNfcErrors = async () => {
  if (!('NDEFReader' in window)) {
    return Promise.reject(Error('Web NFC is not supported!'))
  }

  if (!navigator.permissions) {
    return Promise.reject(Error('Navigator permissions are not supported!'))
  } else {
    const nfcPermissionStatus = await navigator.permissions.query({
      name: 'nfc' as PermissionName,
    })

    if (nfcPermissionStatus.state === 'granted') {
      return Promise.resolve()
    } else {
      return Promise.reject(Error(nfcPermissionStatus.state))
    }
  }
}
const getPlayerByInvitationCode = async (invitationCode: string) => {
  const result = await $urql.value
    .query<PlayerByInvitationCodeFnQuery>(PLAYER_BY_INVITATION_CODE_FN, {
      invitationCode,
    })
    .toPromise()

  if (result.error) {
    api.value.errors.push(result.error)
    consola.error(result.error)
  }

  if (!result)
    return Promise.reject(Error('No result for player by invitation code!'))

  return result.data?.playerByInvitationCodeFn?.nodes[0]
}
const gameRandomFactsRoundCreate = async (gameRandomFactsRoundInput: any) => {
  const player = await getPlayerByInvitationCode(
    gameRandomFactsRoundInput.invitationCode
  )

  if (!player) return

  delete gameRandomFactsRoundInput.invitationCode
  gameRandomFactsRoundInput.questionerName = player.name

  const result = await createGameRandomFactsRoundMutation.executeMutation({
    gameRandomFactsRoundInput,
  })

  if (result.error) fireError({ error: result.error }, api)

  if (!result.data) return

  showToast({ title: t('roundCreateSuccess') })
}
const nfcScan = async () => {
  try {
    if (process.env.NODE_ENV === 'production') {
      const ndefReader = new NDEFReader()
      await ndefReader.scan()

      ndefReader.onreading = async (event: any) => {
        const decoder = new TextDecoder()

        for (const record of event.message.records) {
          await gameRandomFactsRoundCreate({
            gameId: +route.params.gameId,
            invitationCode: decoder.decode(record.data),
          })
        }
      }
    } else {
      await gameRandomFactsRoundCreate({
        gameId: +route.params.gameId,
        invitationCode: 'f10ea826-3c0d-11eb-805b-af16ca5c3a48',
      })
    }
  } catch (error: any) {
    if (error instanceof Error) {
      fireError({ error })
    } else {
      alert(`Unexpected error: ${error}`)
    }
  }
}

// lifecycle
onMounted(() => {
  checkNfcErrors().catch((err: Error) => {
    isNfcWritableErrorMessage.value = err.message
  })
})
</script>

<script lang="ts">
export default {
  name: 'IndexPage',
}
</script>

<i18n lang="yaml">
de:
  nfcRead: NFC scannen
  roundCreateSuccess: Neue Runde erstellt
en:
  nfcRead: Scan NFC
  roundCreateSuccess: New round created
</i18n>
