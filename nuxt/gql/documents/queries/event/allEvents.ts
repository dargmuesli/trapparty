import { useQuery } from '@urql/vue'
import { graphql } from '~/gql/generated'

export const useAllEventsQuery = () =>
  useQuery({
    query: graphql(`
      query allEvents {
        allEvents(orderBy: START_DESC) {
          nodes {
            ...EventItem
          }
        }
      }
    `),
  })
