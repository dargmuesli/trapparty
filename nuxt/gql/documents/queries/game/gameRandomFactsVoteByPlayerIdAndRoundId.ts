import { useQuery } from '@urql/vue'
import { graphql } from '~/gql/generated'

export const useGameRandomFactsVoteByPlayerIdAndRoundIdQuery = (variables: {
  playerId: number
  roundId: number
}) =>
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
