import { useQuery } from '@urql/vue'
import { graphql } from '~/gql/generated'
import type { AllGameEstimationNumericRoundsQueryVariables } from '~/gql/generated/graphql'

export const useAllGameEstimationNumericRoundsQuery = (
  variables: AllGameEstimationNumericRoundsQueryVariables,
) =>
  useQuery({
    query: allGameEstimationNumericRoundsQuery,
    variables,
  })

export const allGameEstimationNumericRoundsQuery = graphql(`
  query allGameEstimationNumericRounds($gameId: Int!) {
    allGameEstimationNumericRounds(
      condition: { gameId: $gameId }
      orderBy: ID_DESC
    ) {
      nodes {
        ...GameEstimationNumericRoundItem
      }
    }
  }
`)
