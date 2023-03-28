import { useMutation } from '@urql/vue'
import { graphql } from '~/gql/generated'

export const useUpdateGameRandomFactsRoundByIdMutation = () =>
  useMutation(
    graphql(`
      mutation updateGameRandomFactsRoundById(
        $gameRandomFactsRoundPatch: GameRandomFactsRoundPatch!
        $id: Int!
      ) {
        updateGameRandomFactsRoundById(
          input: {
            gameRandomFactsRoundPatch: $gameRandomFactsRoundPatch
            id: $id
          }
        ) {
          gameRandomFactsRound {
            ...GameRandomFactsRoundItem
          }
        }
      }
    `)
  )
