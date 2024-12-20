import { type FragmentType, graphql, useFragment } from '~/gql/generated'

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
