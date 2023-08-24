import { useQuery } from '@urql/vue'
import { graphql } from '~/gql/generated'

export const useGameByIdQuery = (variables: { gameId: number }) =>
  useQuery({
    query: gameByIdQuery,
    variables,
  })

export const gameByIdQuery = graphql(`
  query gameById($gameId: Int!) {
    gameById(id: $gameId) {
      ...GameItem
    }
  }
`)
