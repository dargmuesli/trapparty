import { useQuery } from '@urql/vue'
import { graphql } from '~/gql/generated'
import { AllGameRandomFactsRoundsQueryVariables } from '~/gql/generated/graphql'

export const useAllGameRandomFactsRoundsQuery = (
  variables: AllGameRandomFactsRoundsQueryVariables,
) =>
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
