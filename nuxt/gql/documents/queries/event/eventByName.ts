import { useQuery } from '@urql/vue'
import { graphql } from '~/gql/generated'
import { EventByNameQueryVariables } from '~/gql/generated/graphql'

export const useEventByNameQuery = (variables: EventByNameQueryVariables) =>
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
