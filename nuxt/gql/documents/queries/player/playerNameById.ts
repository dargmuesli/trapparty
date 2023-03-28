import { useQuery } from '@urql/vue'
import { graphql } from '~/gql/generated'
import { PlayerNameByIdQueryVariables } from '~/gql/generated/graphql'

export const usePlayerNameByIdQuery = (
  variables: PlayerNameByIdQueryVariables
) =>
  useQuery({
    query: graphql(`
      query playerNameById($id: Int!) {
        playerNameById(id: $id)
      }
    `),
    variables,
  })
