import { useQuery } from '@urql/vue'
import { graphql } from '~/gql/generated'
import type { GameEstimationNumericVoteByPlayerIdAndRoundIdQueryVariables } from '~/gql/generated/graphql'

export const useGameEstimationNumericVoteByPlayerIdAndRoundIdQuery = (
  variables: GameEstimationNumericVoteByPlayerIdAndRoundIdQueryVariables,
) =>
  useQuery({
    query: gameEstimationNumericVoteByPlayerIdAndRoundIdQuery,
    variables,
  })

export const gameEstimationNumericVoteByPlayerIdAndRoundIdQuery = graphql(`
  query gameEstimationNumericVoteByPlayerIdAndRoundId(
    $playerId: Int!
    $roundId: Int!
  ) {
    gameEstimationNumericVoteByPlayerIdAndRoundId(
      playerId: $playerId
      roundId: $roundId
    ) {
      ...GameEstimationNumericVoteItem
    }
  }
`)
