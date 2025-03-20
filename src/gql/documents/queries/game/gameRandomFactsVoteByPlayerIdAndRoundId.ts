import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import type { GameRandomFactsVoteByPlayerIdAndRoundIdQueryVariables } from '~~/gql/generated/graphql'

export const useGameRandomFactsVoteByPlayerIdAndRoundIdQuery = (
  variables: GameRandomFactsVoteByPlayerIdAndRoundIdQueryVariables,
) =>
  useQuery({
    query: gameRandomFactsVoteByPlayerIdAndRoundIdQuery,
    variables,
  })

export const gameRandomFactsVoteByPlayerIdAndRoundIdQuery = graphql(`
  query gameRandomFactsVoteByPlayerIdAndRoundId(
    $playerId: Int!
    $roundId: Int!
  ) {
    gameRandomFactsVoteByPlayerIdAndRoundId(
      playerId: $playerId
      roundId: $roundId
    ) {
      ...GameRandomFactsVoteItem
    }
  }
`)
