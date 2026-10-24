import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

export const GameEstimationNumericVoteItem = graphql(`
  fragment GameEstimationNumericVoteItem on GameEstimationNumericVote {
    id: rowId
    answer
    playerId
    roundId
  }
`)

export const getGameEstimationNumericVoteItem = (
  fragment?: FragmentType<typeof GameEstimationNumericVoteItem> | null,
) => useFragment(GameEstimationNumericVoteItem, fragment)
