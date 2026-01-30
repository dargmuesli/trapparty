<template>
  <VioLoader :api="api">
    <div class="flex flex-col gap-4 text-center">
      <h1>
        {{ title }}
      </h1>
      <div v-if="games.length" class="flex flex-col gap-2">
        <h2 class="text-left">
          {{ t('games') }}
        </h2>
        <ul class="flex flex-col gap-4">
          <li
            v-for="game in games"
            :key="game.id"
            class="flex flex-col gap-4 border-x border-gray-900 px-8 py-4 md:px-16 md:py-8 lg:flex-row dark:border-white"
          >
            <TrGameTitle :game="game" class="grow" />
            <div class="flex gap-4">
              <VioButtonColored
                v-if="
                  game.isActive && store.participationData?.role === 'player'
                "
                :aria-label="t('gameLink')"
                :to="localePath(`/game/${game.id}`)"
              >
                <IHeroiconsPlay16Solid />
                {{ t('gameLink') }}
              </VioButtonColored>
              <VioButtonColored
                :aria-label="t('gameLinkStatistic')"
                :is-primary="false"
                :to="localePath(`/game/${game.id}/statistic`)"
              >
                <IHeroiconsChartBarSquare16Solid />
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
import { getEventItem } from '~~/gql/documents/fragments/eventItem'
import { getGameItem } from '~~/gql/documents/fragments/gameItem'
import { useEventByNameQuery } from '~~/gql/documents/queries/event/eventByName'

interface Props {
  eventName: string
}
const props = withDefaults(defineProps<Props>(), {})
const eventNameProp = toRef(() => props.eventName)

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
const games = computed(() =>
  arrayRemoveNulls(
    trapPartyEvent.value?.gamesByEventId.nodes.map((x) => getGameItem(x)),
  ),
)

// data
const title = t('title', { name: eventNameProp.value })

// initialization
useHeadDefault({ title })
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
  gameLink: Jetzt mitspielen
  gameLinkStatistic: Statistiken
  title: TrapParty {name}
en:
  games: Games
  gamesNone: No games available.
  gameLink: Join the game
  gameLinkStatistic: Game statistics
  title: TrapParty {name}
</i18n>
