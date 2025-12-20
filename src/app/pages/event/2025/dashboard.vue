<template>
  <div class="flex flex-col gap-4 p-6 text-center">
    <h1 class="text-4xl font-bold">
      {{ t('title') }}
    </h1>

    <!-- Not signed in: prompt to use invitation link -->
    <div v-if="!currentPlayerId" class="mt-8 rounded bg-blue-100 p-6">
      <p class="text-lg font-semibold text-blue-900">
        {{ t('notSignedIn') }}
      </p>
      <p class="mt-2 text-sm text-blue-700">
        {{ t('useInvitationLink') }}
      </p>
    </div>

    <!-- Signed in: show player ID and prompt to scan -->
    <div v-else class="mt-8 flex flex-col gap-6">
      <div class="rounded bg-green-100 p-4">
        <p class="text-sm font-semibold text-green-900">
          {{ t('yourPlayerId') }}
        </p>
        <p class="mt-1 font-mono text-xs text-green-700">
          {{ currentPlayerId }}
        </p>
      </div>

      <!-- Match result display -->
      <div v-if="matchResult" class="rounded p-6" :class="matchResultClass">
        <p class="text-3xl font-bold">
          {{ matchResult.success ? t('matchSuccess') : t('matchFailed') }}
        </p>
        <p v-if="matchResult.success" class="mt-2 text-xl">
          {{ t('matchValue', { value: matchResult.value }) }}
        </p>
        <p v-if="matchResult.message" class="mt-2 text-sm">
          {{ matchResult.message }}
        </p>
      </div>

      <!-- Prompt to scan -->
      <div v-else-if="!route.query.playerId" class="rounded bg-purple-100 p-6">
        <p class="text-lg font-semibold text-purple-900">
          {{ t('scanPrompt') }}
        </p>
        <p class="mt-2 text-sm text-purple-700">
          {{ t('scanInstructions') }}
        </p>
      </div>

      <!-- Loading state -->
      <div v-if="loading" class="rounded bg-gray-100 p-4">
        <p class="text-gray-700">{{ t('processing') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const store = useStore()
const route = useRoute()

const currentPlayerId = computed(() => {
  const pd = store.participationData
  return pd && pd.role === 'player' ? pd.playerId : ''
})

const loading = ref(false)
const matchResult = ref<{
  success: boolean
  value: number
  message?: string
} | null>(null)

const matchResultClass = computed(() => {
  if (!matchResult.value) return ''
  return matchResult.value.success
    ? 'bg-green-200 text-green-900'
    : 'bg-red-200 text-red-900'
})

const tryMatch = async (otherPlayerId: string) => {
  if (!currentPlayerId.value || !otherPlayerId) return

  loading.value = true
  matchResult.value = null

  try {
    const response = await $fetch('/api/game/match', {
      method: 'POST',
      body: {
        playerId: currentPlayerId.value,
        otherPlayerId,
      },
    })

    if (response && typeof response === 'object') {
      const res = response as Record<string, unknown>
      const matchValue = (res.match as number) || 0
      const error = res.error as string | undefined
      const message = res.message as string | undefined

      matchResult.value = {
        success: matchValue > 0,
        value: matchValue,
        message: message || error,
      }
    }
  } catch (err) {
    const errorData = (err as Record<string, unknown>)?.data as
      | Record<string, unknown>
      | undefined
    matchResult.value = {
      success: false,
      value: 0,
      message: (errorData?.statusMessage as string) || 'Match request failed',
    }
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  // Check if another player's ID is in the query params (from NFC scan)
  const scannedPlayerId = route.query.playerId as string | undefined
  if (scannedPlayerId && currentPlayerId.value) {
    tryMatch(scannedPlayerId)
  }
})
</script>

<i18n lang="yaml">
de:
  title: TrapParty 2025
  notSignedIn: Nicht angemeldet
  useInvitationLink: Bitte klicke auf den Link in deiner Event-Einladung, um deine Spieler-ID zu aktivieren.
  yourPlayerId: Deine Spieler-ID
  scanPrompt: Scanne ein Armband!
  scanInstructions: Halte dein Smartphone an das NFC-Armband eines anderen Gastes, um ein Match zu versuchen.
  matchSuccess: Match erfolgreich!
  matchFailed: Kein Match
  matchValue: '+{value} Matches'
  processing: Verarbeite...
en:
  title: TrapParty 2025
  notSignedIn: Not Signed In
  useInvitationLink: Please click the link in your event invitation to activate your player ID.
  yourPlayerId: Your Player ID
  scanPrompt: Scan a Wristband!
  scanInstructions: Hold your smartphone to another guest's NFC wristband to try a match.
  matchSuccess: Match Successful!
  matchFailed: No Match
  matchValue: '+{value} Matches'
  processing: Processing...
</i18n>
