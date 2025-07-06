import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

export const PlayerItem = graphql(`
  fragment PlayerItem on Player {
    nodeId
    id
    invitationCode
    name
    teamId
  }
`)

export const getPlayerItem = (
  fragment?: FragmentType<typeof PlayerItem> | null,
) => useFragment(PlayerItem, fragment)
