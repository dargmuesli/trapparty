import { useQuery } from '@urql/vue'
import { graphql } from '~/gql/generated'

export const usePlayerNameByIdQuery = (variables: { id: number }) =>
  useQuery({
    query: graphql(`
      query playerNameById($id: Int!) {
        playerNameById(id: $id)
      }
    `),
    variables,
  })
