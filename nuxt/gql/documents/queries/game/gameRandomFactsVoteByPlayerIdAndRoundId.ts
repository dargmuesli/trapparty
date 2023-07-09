import { useQuery } from '@urql/vue'
import { graphql } from '~/gql/generated'
import { GameRandomFactsVoteByPlayerIdAndRoundIdQueryVariables } from '~/gql/generated/graphql'

export const useGameRandomFactsVoteByPlayerIdAndRoundIdQuery = (
  variables: GameRandomFactsVoteByPlayerIdAndRoundIdQueryVariables,
) =>
  useQuery({
    query: graphql(`
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
    `),
    variables,
  })
