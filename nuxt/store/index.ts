import { decodeJwt, JWTPayload } from 'jose'
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface ParticipationDataWatcher {
  role: 'watcher'
}

interface ParticipationDataPlayer {
  invitationCode: string
  role: 'player'
}

type ParticipationData = ParticipationDataWatcher | ParticipationDataPlayer

export const useStore = defineStore(
  'trapparty',
  () => {
    const jwt = ref<string>()
    const jwtDecoded = ref<JWTPayload>()
    const participationData = ref<ParticipationData>({ role: 'watcher' })
    const signedInUsername = ref<string>()

    const jwtRemove = () => jwtSet(undefined)

    const jwtSet = (jwtNew?: string) => {
      const jwtDecodedNew = jwtNew !== undefined ? decodeJwt(jwtNew) : undefined

      jwt.value = jwtNew
      jwtDecoded.value = jwtDecodedNew
      signedInUsername.value =
        jwtDecodedNew?.role === 'trapparty_account' &&
        jwtDecodedNew.exp !== undefined &&
        jwtDecodedNew.exp > Math.floor(Date.now() / 1000)
          ? (jwtDecodedNew.username as string | undefined)
          : undefined
    }

    const participationDataSet = (participationDataNew: ParticipationData) =>
      (participationData.value = participationDataNew)

    return {
      jwt,
      jwtDecoded,
      signedInUsername,
      participationData,
      jwtRemove,
      jwtSet,
      participationDataSet,
    }
  },
  { persist: true }
)
