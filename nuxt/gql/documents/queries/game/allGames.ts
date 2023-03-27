import { useQuery } from '@urql/vue'
import { graphql } from '~/gql/generated'
import { GameType } from '~/gql/generated/graphql'

export const useAllGamesQuery = (variables: {
  eventId: number
  type: GameType
}) =>
  useQuery({
    query: graphql(`
      query allGames($eventId: Int!, $type: GameType) {
        allGames(
          condition: { eventId: $eventId, type: $type }
          orderBy: ID_ASC
        ) {
          nodes {
            ...GameItem
          }
        }
      }
    `),
    variables,
  })
