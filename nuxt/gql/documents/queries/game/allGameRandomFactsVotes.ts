import { useQuery } from '@urql/vue'
import { graphql } from '~/gql/generated'
import { GameRandomFactsVotesQueryVariables } from '~/gql/generated/graphql'

export const useGameRandomFactsVotesQuery = (
  variables: GameRandomFactsVotesQueryVariables,
) =>
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
