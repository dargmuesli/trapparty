import { useQuery } from '@urql/vue'
import { graphql } from '~/gql/generated'

export const useGameByIdQuery = (variables: { gameId: number }) =>
  useQuery({
    query: graphql(`
      query gameById($gameId: Int!) {
        gameById(id: $gameId) {
          ...GameItem
        }
      }
    `),
    variables,
  })
