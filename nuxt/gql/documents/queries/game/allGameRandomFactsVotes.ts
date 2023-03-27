import { useQuery } from '@urql/vue'
import { graphql } from '~/gql/generated'

export const useGameRandomFactsVotesQuery = (variables: { roundId: number }) =>
  useQuery({
    query: graphql(`
      query gameRandomFactsVotes($roundId: Int!) {
        allGameRandomFactsVotes(condition: { roundId: $roundId }) {
          nodes {
            ...GameRandomFactsVoteItem
          }
        }
      }
    `),
    variables,
  })
