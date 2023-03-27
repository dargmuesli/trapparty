<template>
  <Loader :api="api">
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
            class="rounded border border-gray-900 px-8 py-4 dark:border-white md:px-16 md:py-8"
          >
            <GameTitle :game="game" />
            <div class="flex gap-4">
              <ButtonColored
                v-if="
                  game.isActive && store.participationData?.role === 'player'
                "
                :aria-label="t('gameLink')"
                :to="localePath(`/game/${game.id}`)"
              >
                {{ t('gameLink') }}
              </ButtonColored>
              <ButtonColored
                :aria-label="t('gameLinkStatistic')"
                :is-primary="false"
                :to="localePath(`/game/${game.id}/statistic`)"
              >
                {{ t('gameLinkStatistic') }}
              </ButtonColored>
            </div>
          </li>
        </ul>
      </div>
      <CardStateInfo v-else>
        {{ t('gamesNone') }}
      </CardStateInfo>
    </div>
  </Loader>
</template>

<script setup lang="ts">
import consola from 'consola'
import { UnwrapRef } from 'vue'

import { getEventItem } from '~/gql/documents/fragments/eventItem'
import { getGameItem } from '~/gql/documents/fragments/gameItem'
import { useEventByNameQuery } from '~/gql/documents/queries/event/eventByName'
import { AllGamesQuery, GameItemFragment } from '~/gql/generated/graphql'
import GAMES_ALL_QUERY from '~/gql/query/game/allGames.gql'
import { useStore } from '~/store'

export interface Props {
  eventName: string
}
const props = withDefaults(defineProps<Props>(), {})

const { $urql } = useNuxtApp()
const localePath = useLocalePath()
const { t } = useI18n()
const store = useStore()

// queries
const eventByNameQuery = await useEventByNameQuery({
  eventName: props.eventName,
})

// api data
const api = computed(() =>
  reactive({
    data: {
      ...eventByNameQuery.data.value,
    },
    ...getApiMeta([eventByNameQuery]),
  })
)
const trapPartyEvent = computed(() =>
  getEventItem(eventByNameQuery.data.value?.eventByName)
)

// data
const games = ref<GameItemFragment[]>([])
const title = t('title', { name: props.eventName })

// methods
const fetchGames = async (
  trapPartyEventLocal: UnwrapRef<typeof trapPartyEvent>
) => {
  if (!trapPartyEventLocal) return

  const result = await $urql.value
    .query<AllGamesQuery>(GAMES_ALL_QUERY, {
      eventId: trapPartyEventLocal.id,
    })
    .toPromise()

  if (result.error) {
    api.value.errors.push(result.error)
    consola.error(result.error)
  }

  const allGames = arrayRemoveNulls(
    result.data?.allGames?.nodes.map((x) => getGameItem(x))
  )

  games.value = allGames
}

// lifecycle
watch(
  () => trapPartyEvent.value,
  async (currentValue, _oldValue) => await fetchGames(currentValue)
)

// initialization
useHeadDefault(title)
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
