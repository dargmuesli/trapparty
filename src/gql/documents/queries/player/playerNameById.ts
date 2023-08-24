import { useQuery } from '@urql/vue'
import { graphql } from '~/gql/generated'
import { PlayerNameByIdQueryVariables } from '~/gql/generated/graphql'

export const usePlayerNameByIdQuery = (
  variables: PlayerNameByIdQueryVariables,
) =>
  useQuery({
    query: playerNameByIdQuery,
    variables,
  })

export const playerNameByIdQuery = graphql(`
  query playerNameById($id: Int!) {
    playerNameById(id: $id)
  }
`)
