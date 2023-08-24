import { useQuery } from '@urql/vue'
import { graphql } from '~/gql/generated'
import { EventByNameQueryVariables } from '~/gql/generated/graphql'

export const useEventByNameQuery = (variables: EventByNameQueryVariables) =>
  useQuery({
    query: eventByNameQuery,
    variables,
  })

export const eventByNameQuery = graphql(`
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
`)
