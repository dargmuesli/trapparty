import { useQuery } from '@urql/vue'
import { graphql } from '~/gql/generated'

export const useAllEventsQuery = () =>
  useQuery({
    query: allEventsQuery,
  })

export const allEventsQuery = graphql(`
  query allEvents {
    allEvents(orderBy: START_DESC) {
      nodes {
        ...EventItem
      }
    }
  }
`)
