import { type FragmentType, graphql, useFragment } from '~/gql/generated'

export const EventItem = graphql(`
  fragment EventItem on Event {
    nodeId
    id
    name
    start
    end
    discordInviteCode
    streamUrl
    commonDonationUrl
    commonDonationIsLive
    commonDonationAmount
    gamesByEventId {
      nodes {
        ...GameItem
      }
    }
  }
`)

export const getEventItem = (
  fragment?: FragmentType<typeof EventItem> | null,
) => useFragment(EventItem, fragment)
