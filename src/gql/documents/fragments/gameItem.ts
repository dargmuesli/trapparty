import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

export const GameItem = graphql(`
  fragment GameItem on Game {
    id: rowId
    eventId
    isActive
    name
    type
  }
`)

export const getGameItem = (fragment?: FragmentType<typeof GameItem> | null) =>
  useFragment(GameItem, fragment)
