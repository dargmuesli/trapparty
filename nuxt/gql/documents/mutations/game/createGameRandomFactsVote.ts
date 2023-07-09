import { useMutation } from '@urql/vue'
import { graphql } from '~/gql/generated'

export const useCreateGameRandomFactsVoteMutation = () =>
  useMutation(
    graphql(`
      mutation createGameRandomFactsVote(
        $gameRandomFactsVoteInput: GameRandomFactsVoteInput!
      ) {
        createGameRandomFactsVote(
          input: { gameRandomFactsVote: $gameRandomFactsVoteInput }
        ) {
          gameRandomFactsVote {
            ...GameRandomFactsVoteItem
          }
        }
      }
    `),
  )
