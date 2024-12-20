import { useQuery } from '@urql/vue'
import { graphql } from '~/gql/generated'
import type { AllGameEstimationNumericLeaderboardViewsQueryVariables } from '~/gql/generated/graphql'

export const useAllGameEstimationNumericLeaderboardViewsQuery = (
  variables: AllGameEstimationNumericLeaderboardViewsQueryVariables,
) =>
  useQuery({
    query: allGameEstimationNumericLeaderboardViewsQuery,
    variables,
  })

export const allGameEstimationNumericLeaderboardViewsQuery = graphql(`
  query allGameEstimationNumericLeaderboardViews($gameId: Int!) {
    allGameEstimationNumericLeaderboardViews(condition: { gameId: $gameId }) {
      nodes {
        gameId
        playerName
        totalPoints
      }
    }
  }
`)
