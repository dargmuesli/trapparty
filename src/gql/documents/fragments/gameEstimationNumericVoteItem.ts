import { type FragmentType, graphql, useFragment } from '~~/gql/generated'

export const GameEstimationNumericVoteItem = graphql(`
  fragment GameEstimationNumericVoteItem on GameEstimationNumericVote {
    nodeId
    id
    answer
    playerId
    roundId
  }
`)

export const getGameEstimationNumericVoteItem = (
  fragment?: FragmentType<typeof GameEstimationNumericVoteItem> | null,
) => useFragment(GameEstimationNumericVoteItem, fragment)
