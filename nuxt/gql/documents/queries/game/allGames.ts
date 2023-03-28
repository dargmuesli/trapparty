import { useQuery } from '@urql/vue'
import { graphql } from '~/gql/generated'
import { AllGamesQueryVariables } from '~/gql/generated/graphql'

export const useAllGamesQuery = (variables: AllGamesQueryVariables) =>
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