import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import type { GameRandomFactsVotesQueryVariables } from '~~/gql/generated/graphql'

export const useGameRandomFactsVotesQuery = (
  variables: GameRandomFactsVotesQueryVariables,
) =>
  useQuery({
    query: gameRandomFactsVotesQuery,
    variables,
  })

export const gameRandomFactsVotesQuery = graphql(`
  query gameRandomFactsVotes($roundId: Int!) {
    allGameRandomFactsVotes(condition: { roundId: $roundId }) {
      nodes {
        ...GameRandomFactsVoteItem
      }
    }
  }
`)
