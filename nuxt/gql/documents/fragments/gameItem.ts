import { FragmentType, graphql, useFragment } from '~/gql/generated'

export const GameItem = graphql(`
  fragment GameItem on Game {
    nodeId
    id
    eventId
    isActive
    name
    type
  }
`)

export const getGameItem = (fragment?: FragmentType<typeof GameItem> | null) =>
  useFragment(GameItem, fragment)
