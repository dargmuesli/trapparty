import { FragmentType, graphql, useFragment } from '~/gql/generated'

export const GameRandomFactsVoteItem = graphql(`
  fragment GameRandomFactsVoteItem on GameRandomFactsVote {
    nodeId
    id
    answer
    playerId
    roundId
  }
`)

export const getGameRandomFactsVoteItem = (
  fragment?: FragmentType<typeof GameRandomFactsVoteItem> | null
) => useFragment(GameRandomFactsVoteItem, fragment)
