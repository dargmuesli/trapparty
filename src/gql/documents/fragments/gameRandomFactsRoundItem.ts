import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

export const GameRandomFactsRoundItem = graphql(`
  fragment GameRandomFactsRoundItem on GameRandomFactsRound {
    nodeId
    id
    answerCorrect
    gameId
    questionerName
  }
`)

export const getGameRandomFactsRoundItem = (
  fragment?: FragmentType<typeof GameRandomFactsRoundItem> | null,
) => useFragment(GameRandomFactsRoundItem, fragment)
