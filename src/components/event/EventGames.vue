<template>
  <VioLoader :api="api">
    <div class="text-center">
      <h1>
        {{ title }}
      </h1>
      <div v-if="games.length">
        <h2>
          {{ t('games') }}
        </h2>
        <ul class="flex flex-col gap-4">
          <li
            v-for="game in games"
            :key="game.id"
            class="rounded border border-gray-900 px-8 py-4 md:px-16 md:py-8 dark:border-white"
          >
            <GameTitle :game="game" />
            <div class="flex gap-4">
              <VioButtonColored
                v-if="
                  game.isActive && store.participationData?.role === 'player'
                "
                :aria-label="t('gameLink')"
                :to="localePath(`/game/${game.id}`)"
              >
                {{ t('gameLink') }}
              </VioButtonColored>
              <VioButtonColored
                :aria-label="t('gameLinkStatistic')"
                :is-primary="false"
                :to="localePath(`/game/${game.id}/statistic`)"
              >
                {{ t('gameLinkStatistic') }}
              </VioButtonColored>
            </div>
          </li>
        </ul>
      </div>
      <VioCardStateInfo v-else>
        {{ t('gamesNone') }}
      </VioCardStateInfo>
    </div>
  </VioLoader>
</template>

<script setup lang="ts">
import { consola } from 'consola'
import type { UnwrapRef } from 'vue'

import { getEventItem } from '~/gql/documents/fragments/eventItem'
import { getGameItem } from '~/gql/documents/fragments/gameItem'
import { useEventByNameQuery } from '~/gql/documents/queries/event/eventByName'
import type { GameItemFragment } from '~/gql/generated/graphql'
import { useStore } from '~/store'
import { allGamesQuery } from '~/gql/documents/queries/game/allGames'

interface Props {
  eventName: string
}
const props = withDefaults(defineProps<Props>(), {})
const eventNameProp = toRef(() => props.eventName)

const { $urql } = useNuxtApp()
const localePath = useLocalePath()
const { t } = useI18n()
const store = useStore()

// queries
const eventByNameQuery = await useEventByNameQuery({
  eventName: eventNameProp.value,
})

// api data
const api = computed(() =>
  reactive({
    data: {
      ...eventByNameQuery.data.value,
    },
    ...getApiMeta([eventByNameQuery]),
  }),
)
const trapPartyEvent = computed(() =>
  getEventItem(eventByNameQuery.data.value?.eventByName),
)

// data
const games = ref<GameItemFragment[]>([])
const title = t('title', { name: eventNameProp.value })

// methods
const fetchGames = async (
  trapPartyEventLocal: UnwrapRef<typeof trapPartyEvent>,
) => {
  if (!trapPartyEventLocal?.id) return

  const result = await $urql.value
    .query(allGamesQuery, {
      eventId: trapPartyEventLocal.id,
    })
    .toPromise()

  if (result.error) {
    api.value.errors.push(result.error)
    consola.error(result.error)
  }

  const allGames = arrayRemoveNulls(
    result.data?.allGames?.nodes.map((x) => getGameItem(x)),
  )

  games.value = allGames
}

// lifecycle
watch(
  trapPartyEvent,
  async (currentValue, _oldValue) => await fetchGames(currentValue),
)

// initialization
useHeadDefault({ title })
fetchGames(trapPartyEvent.value)
</script>

<script lang="ts">
export default {
  name: 'IndexPage',
}
</script>

<i18n lang="yaml">
de:
  games: Spiele
  gamesNone: Keine Spiele vorhanden.
  gameLink: Zum Spiel
  gameLinkStatistic: Zur Statistik
  title: TrapParty {name}
en:
  games: Games
  gamesNone: No games available.
  gameLink: To the game
  gameLinkStatistic: To the statistics
  title: TrapParty {name}
</i18n>
