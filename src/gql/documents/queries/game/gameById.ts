import { useQuery } from '@urql/vue'

import { graphql } from '~~/gql/generated'
import type { GameByIdQueryVariables } from '~~/gql/generated/graphql'

export const useGameByIdQuery = (variables: GameByIdQueryVariables) =>
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
