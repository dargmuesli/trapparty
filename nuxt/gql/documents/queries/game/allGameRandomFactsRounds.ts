import { useQuery } from '@urql/vue'
import { graphql } from '~/gql/generated'

export const useAllGameRandomFactsRoundsQuery = (variables: {
  gameId: number
}) =>
  useQuery({
    query: graphql(`
      query allGameRandomFactsRounds($gameId: Int!) {
        allGameRandomFactsRounds(
          condition: { gameId: $gameId }
          orderBy: ID_DESC
        ) {
          nodes {
            ...GameRandomFactsRoundItem
          }
        }
      }
    `),
    variables,
  })
