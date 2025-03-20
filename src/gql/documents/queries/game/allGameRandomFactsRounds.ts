import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import type { AllGameRandomFactsRoundsQueryVariables } from '~~/gql/generated/graphql'

export const useAllGameRandomFactsRoundsQuery = (
  variables: AllGameRandomFactsRoundsQueryVariables,
) =>
  useQuery({
    query: allGameRandomFactsRoundsQuery,
    variables,
  })

export const allGameRandomFactsRoundsQuery = graphql(`
  query allGameRandomFactsRounds($gameId: Int!) {
    allGameRandomFactsRounds(condition: { gameId: $gameId }, orderBy: ID_DESC) {
      nodes {
        ...GameRandomFactsRoundItem
      }
    }
  }
`)
