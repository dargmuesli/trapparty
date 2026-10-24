import { useMutation } from '@urql/vue'
import { graphql } from '~~/gql/generated'

export const useUpdateGameRandomFactsRoundByRowIdMutation = () =>
  useMutation(
    graphql(`
      mutation updateGameRandomFactsRoundByRowId(
        $gameRandomFactsRoundPatch: GameRandomFactsRoundPatch!
        $rowId: Int!
      ) {
        updateGameRandomFactsRoundByRowId(
          input: {
            gameRandomFactsRoundPatch: $gameRandomFactsRoundPatch
            rowId: $rowId
          }
        ) {
          gameRandomFactsRound {
            ...GameRandomFactsRoundItem
          }
        }
      }
    `),
  )
