import { useQuery } from '@urql/vue'

import { graphql } from '~/gql/generated'
import type { AllEventsQueryVariables } from '~/gql/generated/graphql'

export const useAllEventsQuery = (variables?: AllEventsQueryVariables) =>
  useQuery({
    query: allEventsQuery,
    variables,
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
