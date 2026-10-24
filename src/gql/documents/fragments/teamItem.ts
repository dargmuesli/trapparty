import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

export const TeamItem = graphql(`
  fragment TeamItem on Team {
    id: rowId
    eventId
    name
    emoji
    charityOrganizationId
    donationUrl
    donationAmount
    charityOrganizationByCharityOrganizationId {
      ...CharityOrganizationItem
    }
  }
`)

export const getTeamItem = (fragment?: FragmentType<typeof TeamItem> | null) =>
  useFragment(TeamItem, fragment)
