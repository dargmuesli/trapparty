import { graphql, useFragment } from '~~/gql/generated'
import type { FragmentType } from '~~/gql/generated'

export const CharityOrganizationItem = graphql(`
  fragment CharityOrganizationItem on CharityOrganization {
    nodeId
    id
    name
    url
  }
`)

export const getCharityOrganizationItem = (
  fragment?: FragmentType<typeof CharityOrganizationItem> | null,
) => useFragment(CharityOrganizationItem, fragment)
