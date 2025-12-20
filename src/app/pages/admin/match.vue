<template>
  <div class="flex flex-col gap-8 p-6">
    <h1 class="text-4xl font-bold">{{ t('adminMatchTitle') }}</h1>

    <div v-if="error" class="rounded bg-red-100 p-4 text-red-700">
      {{ error }}
    </div>

    <div
      v-if="accessDenied"
      class="rounded bg-red-100 p-4 text-center text-red-700"
    >
      <p class="text-lg font-semibold">{{ t('accessDenied') }}</p>
      <p class="text-sm">{{ t('adminAccessRequired') }}</p>
    </div>

    <template v-if="!accessDenied">
      <!-- Configuration Form -->
      <section class="rounded border border-gray-600 bg-gray-900 p-6">
        <h2 class="mb-4 text-2xl font-semibold text-gray-100">
          {{ t('configTitle') }}
        </h2>
        <form class="flex flex-col gap-6" @submit.prevent="handleSubmit">
          <!-- Admin Token removed: using player state for auth -->

          <!-- Start Date -->
          <div class="flex flex-col gap-2">
            <label for="startAt" class="font-semibold text-gray-100">
              {{ t('startAt') }}
            </label>
            <input
              id="startAt"
              v-model="form.startAt"
              type="datetime-local"
              class="rounded border border-gray-600 bg-gray-800 px-3 py-2 text-gray-100"
            />
          </div>

          <!-- End Date -->
          <div class="flex flex-col gap-2">
            <label for="endAt" class="font-semibold text-gray-100">
              {{ t('endAt') }}
            </label>
            <input
              id="endAt"
              v-model="form.endAt"
              type="datetime-local"
              class="rounded border border-gray-600 bg-gray-800 px-3 py-2 text-gray-100"
            />
          </div>

          <!-- Target Matches -->
          <div class="flex flex-col gap-2">
            <label for="targetMatches" class="font-semibold text-gray-100">
              {{ t('targetMatches') }}
            </label>
            <input
              id="targetMatches"
              v-model.number="form.targetMatches"
              type="number"
              class="rounded border border-gray-600 bg-gray-800 px-3 py-2 text-gray-100"
              min="0"
            />
          </div>

          <!-- Players -->
          <div class="flex flex-col gap-2">
            <label for="players" class="font-semibold text-gray-100">
              {{ t('players') }}
            </label>
            <textarea
              id="players"
              v-model="form.playersText"
              class="rounded border border-gray-600 bg-gray-800 px-3 py-2 font-mono text-sm text-gray-100 placeholder-gray-500"
              rows="6"
              :placeholder="t('enterPlayerUUIDs')"
            />
            <p class="text-xs text-gray-400">
              {{ form.parsedPlayers.length }} {{ t('validUUIDs') }}
            </p>
          </div>

          <!-- Submit Button -->
          <div class="flex gap-4">
            <button
              type="submit"
              :disabled="loading"
              class="rounded bg-blue-700 px-6 py-2 font-semibold text-white disabled:opacity-50"
            >
              {{ loading ? t('updating') : t('updateConfig') }}
            </button>
            <button
              type="button"
              :disabled="loading"
              class="rounded bg-gray-700 px-6 py-2 font-semibold text-white disabled:opacity-50"
              @click="handleRefresh"
            >
              {{ t('refresh') }}
            </button>
          </div>
        </form>
      </section>

      <!-- Stats Section -->
      <section
        v-if="stats"
        class="rounded border border-gray-600 bg-gray-900 p-6"
      >
        <h2 class="mb-4 text-2xl font-semibold text-gray-100">
          {{ t('statsTitle') }}
        </h2>
        <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
          <div>
            <p class="text-sm text-gray-400">{{ t('matchesSoFar') }}</p>
            <p class="text-2xl font-bold text-gray-100">
              {{ stats.matchesSoFar }}
            </p>
          </div>
          <div>
            <p class="text-sm text-gray-400">{{ t('targetMatches') }}</p>
            <p class="text-2xl font-bold text-gray-100">
              {{ stats.targetMatches }}
            </p>
          </div>
          <div>
            <p class="text-sm text-gray-400">{{ t('triedCount') }}</p>
            <p class="text-2xl font-bold text-gray-100">
              {{ stats.triedCount }}
            </p>
          </div>
          <div>
            <p class="text-sm text-gray-400">{{ t('elapsedTime') }}</p>
            <p class="text-sm text-gray-100">{{ formatMs(stats.elapsedMs) }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-400">{{ t('remainingTime') }}</p>
            <p class="text-sm text-gray-100">
              {{ formatMs(stats.remainingMs) }}
            </p>
          </div>
          <div>
            <p class="text-sm text-gray-400">
              {{ t('expectedRemainingTries') }}
            </p>
            <p class="text-sm text-gray-100">
              {{ Math.floor(stats.expectedRemainingTries) }}
            </p>
          </div>
        </div>
      </section>

      <!-- Export Section -->
      <section class="rounded border border-gray-600 bg-gray-900 p-6">
        <h2 class="mb-4 text-2xl font-semibold text-gray-100">
          {{ t('exportTitle') }}
        </h2>
        <div class="flex flex-wrap gap-3">
          <button
            type="button"
            :disabled="loading || !stats"
            class="rounded bg-green-700 px-4 py-2 font-semibold text-white disabled:opacity-50"
            @click="exportData('all')"
          >
            {{ t('exportAll') }}
          </button>
          <button
            type="button"
            :disabled="loading || !stats"
            class="rounded bg-green-600 px-4 py-2 font-semibold text-white disabled:opacity-50"
            @click="exportData('success')"
          >
            {{ t('exportSuccessOnly') }}
          </button>
          <button
            type="button"
            :disabled="loading || !stats"
            class="rounded bg-yellow-700 px-4 py-2 font-semibold text-white disabled:opacity-50"
            @click="exportData('failed')"
          >
            {{ t('exportFailedOnly') }}
          </button>
          <button
            type="button"
            :disabled="loading || !stats"
            class="rounded bg-red-700 px-4 py-2 font-semibold text-white disabled:opacity-50"
            @click="handleResetTries"
          >
            {{ t('resetTries') }}
          </button>
        </div>
      </section>
    </template>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: ['admin-match'] })

const { t } = useI18n()
const store = useStore()
const adminPlayerId = computed(() => {
  const pd = store.participationData
  return pd && pd.role === 'player' ? pd.playerId : ''
})

interface MatchStats {
  now: string
  startAt: string
  endAt: string
  triedCount: number
  matchesSoFar: number
  targetMatches: number
  elapsedMs: number
  remainingMs: number
  expectedRemainingTries: number
}

const loading = ref(false)
const error = ref('')
const stats = ref<MatchStats | null>(null)
const accessDenied = ref(false)

const form = reactive({
  startAt: '',
  endAt: '',
  targetMatches: 0,
  playersText: '',
  get parsedPlayers(): string[] {
    const UUID_REGEX =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    return this.playersText
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0 && UUID_REGEX.test(line))
  },
})

const toIsoString = (datetimeLocal: string): string => {
  if (!datetimeLocal) return ''
  const dt = new Date(datetimeLocal)
  return dt.toISOString()
}

const fromIsoString = (iso: string): string => {
  if (!iso) return ''
  const dt = new Date(iso)
  const year = dt.getFullYear()
  const month = String(dt.getMonth() + 1).padStart(2, '0')
  const day = String(dt.getDate()).padStart(2, '0')
  const hours = String(dt.getHours()).padStart(2, '0')
  const minutes = String(dt.getMinutes()).padStart(2, '0')
  return `${year}-${month}-${day}T${hours}:${minutes}`
}

const formatMs = (ms: number): string => {
  if (ms < 1000) return `${Math.round(ms)}ms`
  const seconds = Math.floor(ms / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) return `${days}d ${hours % 24}h`
  if (hours > 0) return `${hours}h ${minutes % 60}m`
  if (minutes > 0) return `${minutes}m ${seconds % 60}s`
  return `${seconds}s`
}

const exportData = async (filterType: 'all' | 'success' | 'failed') => {
  try {
    const response = await $fetch('/api/game/match/export', {
      method: 'POST',
      body: {
        token: adminPlayerId.value,
        filterType,
      },
    })

    if (response && typeof response === 'object') {
      const blob = new Blob([JSON.stringify(response, null, 2)], {
        type: 'application/json',
      })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `match-data-${filterType}-${new Date().toISOString().split('T')[0]}.json`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    }
  } catch (err) {
    const error_data = (err as Record<string, unknown>)?.data as
      | Record<string, unknown>
      | undefined
    error.value =
      (error_data?.statusMessage as string) || 'Failed to export data'
  }
}

const checkAdminAccess = async () => {
  const playerData = store.participationData
  if (!playerData || playerData.role !== 'player' || !playerData.playerId) {
    accessDenied.value = true
    return
  }

  try {
    const response = await $fetch('/api/game/match/access-check', {
      method: 'POST',
      body: {
        token: playerData.playerId,
      },
    })

    if (response && typeof response === 'object' && 'allowed' in response) {
      const res = response as Record<string, unknown>
      if (!(res.allowed as boolean)) {
        accessDenied.value = true
      }
    }
  } catch {
    accessDenied.value = true
  }
}

const loadStats = async () => {
  try {
    error.value = ''
    const response = await $fetch('/api/game/match')
    if (response && typeof response === 'object' && 'stats' in response) {
      const res = response as Record<string, unknown>
      stats.value = (res.stats as MatchStats) || null
      if (res.config && typeof res.config === 'object') {
        const config = res.config as Record<string, unknown>
        form.startAt = fromIsoString((config.startAt as string) || '')
        form.endAt = fromIsoString((config.endAt as string) || '')
        form.targetMatches = (config.targetMatches as number) || 0
        const players = config.players as string[]
        form.playersText = Array.isArray(players) ? players.join('\n') : ''
      }
    }
  } catch (err) {
    const error_data = (err as Record<string, unknown>)?.data as
      | Record<string, unknown>
      | undefined
    error.value =
      (error_data?.statusMessage as string) || 'Failed to load game status'
  }
}

const handleRefresh = async () => {
  loading.value = true
  try {
    await loadStats()
  } finally {
    loading.value = false
  }
}

const handleResetTries = async () => {
  if (!confirm(t('resetTriesConfirm'))) return

  loading.value = true
  try {
    error.value = ''
    await $fetch('/api/game/match/reset', {
      method: 'POST',
      body: {
        playerId: adminPlayerId.value,
      },
    })

    await loadStats()
  } catch (err) {
    const errorData = (err as Record<string, unknown>)?.data as
      | Record<string, unknown>
      | undefined
    error.value =
      (errorData?.statusMessage as string) || 'Failed to reset tries'
  } finally {
    loading.value = false
  }
}

const handleSubmit = async () => {
  loading.value = true
  try {
    error.value = ''
    const payload: Record<string, unknown> = {
      token: adminPlayerId.value,
    }

    if (form.startAt) payload.startAt = toIsoString(form.startAt)
    if (form.endAt) payload.endAt = toIsoString(form.endAt)
    if (form.targetMatches !== null) payload.targetMatches = form.targetMatches
    if (form.parsedPlayers.length > 0) payload.players = form.parsedPlayers

    const response = await $fetch('/api/game/match', {
      method: 'POST',
      body: payload,
    })

    if (
      response &&
      typeof response === 'object' &&
      'stats' in response &&
      'config' in response
    ) {
      const res = response as Record<string, unknown>
      const resStats = res.stats as Record<string, unknown>
      const resConfig = res.config as Record<string, unknown>
      stats.value = {
        now: new Date().toISOString(),
        startAt: (resConfig.startAt as string) || '',
        endAt: (resConfig.endAt as string) || '',
        triedCount: (resStats.triedCount as number) || 0,
        matchesSoFar: (resStats.matchesSoFar as number) || 0,
        targetMatches: (resConfig.targetMatches as number) || 0,
        elapsedMs: 0,
        remainingMs: 0,
        expectedRemainingTries: 0,
      }
      error.value = ''
    }
  } catch (err) {
    const error_data = (err as Record<string, unknown>)?.data as
      | Record<string, unknown>
      | undefined
    error.value =
      (error_data?.statusMessage as string) || 'Failed to update configuration'
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await checkAdminAccess()
  if (!accessDenied.value) {
    await loadStats()
  }
})
</script>

<i18n lang="yaml">
en:
  adminMatchTitle: Match Game Admin
  statsTitle: Game Statistics
  matchesSoFar: Matches So Far
  targetMatches: Target Matches
  triedCount: Total Tries
  elapsedTime: Elapsed Time
  remainingTime: Remaining Time
  expectedRemainingTries: Expected Remaining Tries
  exportTitle: Export Match Data
  exportAll: Export All
  exportSuccessOnly: Export Successful Matches
  exportFailedOnly: Export Failed Attempts
  resetTries: Reset All Tries
  resetTriesConfirm: Are you sure you want to delete all match tries? This cannot be undone.
  configTitle: Game Configuration
  startAt: Start Date & Time
  endAt: End Date & Time
  players: Participating Players (UUIDs)
  enterPlayerUUIDs: Enter player UUIDs, one per line
  validUUIDs: valid UUIDs
  updateConfig: Update Configuration
  updating: Updating...
  refresh: Refresh Stats
  accessDenied: Access Denied
  adminAccessRequired: Only the designated admin player can access this page.
de:
  adminMatchTitle: Match-Spiel Admin
  statsTitle: Spielstatistiken
  matchesSoFar: Treffer bisher
  targetMatches: Ziel-Treffer
  triedCount: Gesamtversuche
  elapsedTime: Verstrichene Zeit
  remainingTime: Verbleibende Zeit
  expectedRemainingTries: Erwartete verbleibende Versuche
  exportTitle: Match-Daten exportieren
  exportAll: Alle exportieren
  exportSuccessOnly: Erfolgreiche Treffer exportieren
  exportFailedOnly: Fehlgeschlagene Versuche exportieren
  resetTries: Alle Versuche zurücksetzen
  resetTriesConfirm: Bist du sicher, dass du alle Match-Versuche löschen möchtest? Dies kann nicht rückgängig gemacht werden.
  configTitle: Spielkonfiguration
  startAt: Startdatum & -uhrzeit
  endAt: Enddatum & -uhrzeit
  players: Teilnehmende Spieler (UUIDs)
  enterPlayerUUIDs: Spieler-UUIDs eingeben, eine pro Zeile
  validUUIDs: gültige UUIDs
  updateConfig: Konfiguration aktualisieren
  updating: Wird aktualisiert...
  refresh: Statistiken aktualisieren
  accessDenied: Zugriff verweigert
  adminAccessRequired: Nur der designierte Admin-Spieler kann auf diese Seite zugreifen.
</i18n>
