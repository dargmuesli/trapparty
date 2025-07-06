import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

export const GameEstimationNumericRoundItem = graphql(`
  fragment GameEstimationNumericRoundItem on GameEstimationNumericRound {
    nodeId
    id
    answerCorrect
    elementName
    gameId
  }
`)

export const getGameEstimationNumericRoundItem = (
  fragment?: FragmentType<typeof GameEstimationNumericRoundItem> | null,
) => useFragment(GameEstimationNumericRoundItem, fragment)
