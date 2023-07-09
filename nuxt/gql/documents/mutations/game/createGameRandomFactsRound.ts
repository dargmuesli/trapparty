import { useMutation } from '@urql/vue'
import { graphql } from '~/gql/generated'

export const useCreateGameRandomFactsRoundMutation = () =>
  useMutation(
    graphql(`
      mutation createGameRandomFactsRound(
        $gameRandomFactsRoundInput: GameRandomFactsRoundInput!
      ) {
        createGameRandomFactsRound(
          input: { gameRandomFactsRound: $gameRandomFactsRoundInput }
        ) {
          gameRandomFactsRound {
            ...GameRandomFactsRoundItem
          }
        }
      }
    `),
  )
