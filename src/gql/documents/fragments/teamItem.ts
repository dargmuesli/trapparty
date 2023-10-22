import { type FragmentType, graphql, useFragment } from '~/gql/generated'

export const TeamItem = graphql(`
  fragment TeamItem on Team {
    nodeId
    id
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
