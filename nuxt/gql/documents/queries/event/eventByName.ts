import { useQuery } from '@urql/vue'
import { graphql } from '~/gql/generated'

export const useEventByNameQuery = (variables: { eventName: string }) =>
  useQuery({
    query: graphql(`
      query eventByName($eventName: String!) {
        eventByName(name: $eventName) {
          ...EventItem
          teamsByEventId {
            nodes {
              ...TeamItem
            }
          }
        }
      }
    `),
    variables,
  })
