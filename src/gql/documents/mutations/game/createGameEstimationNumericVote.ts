import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useCreateGameEstimationNumericVoteMutation = () =>
  useMutation(
    graphql(`
      mutation createGameEstimationNumericVote(
        $gameEstimationNumericVoteInput: GameEstimationNumericVoteInput!
      ) {
        createGameEstimationNumericVote(
          input: { gameEstimationNumericVote: $gameEstimationNumericVoteInput }
        ) {
          gameEstimationNumericVote {
            ...GameEstimationNumericVoteItem
          }
        }
      }
    `),
  )
