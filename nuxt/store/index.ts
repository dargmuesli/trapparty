import { useLocalStorage } from '@vueuse/core'
import { decodeJwt, JWTPayload } from 'jose'
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface ParticipationData {
  invitationCode?: string
  name?: string
  role: string
}

export const useStore = defineStore('trapparty', () => {
  const jwt = ref<string>()
  const jwtDecoded = ref<JWTPayload>()
  const participationData = useLocalStorage(
    'participation-data',
    ref<ParticipationData>()
  )
  const signedInUsername = ref<string>()

  function jwtRemove() {
    jwtSet(undefined)
  }

  function jwtSet(jwtNew?: string) {
    const jwtDecodedNew = jwtNew !== undefined ? decodeJwt(jwtNew) : undefined

    jwt.value = jwtNew
    jwtDecoded.value = jwtDecodedNew
    signedInUsername.value =
      jwtDecodedNew?.role === 'maevsi_account' &&
      jwtDecodedNew.exp !== undefined &&
      jwtDecodedNew.exp > Math.floor(Date.now() / 1000)
        ? (jwtDecodedNew.username as string | undefined)
        : undefined
  }

  function participationDataSet(participationDataNew?: ParticipationData) {
    participationData.value = participationDataNew
  }

  return {
    jwt,
    jwtDecoded,
    signedInUsername,
    participationData,
    jwtRemove,
    jwtSet,
    participationDataSet,
  }
})
