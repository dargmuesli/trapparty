import { useQuery } from '@urql/vue'
import { graphql } from '~~/gql/generated'
import type { PlayerByInvitationCodeFnQueryVariables } from '~~/gql/generated/graphql'

export const usePlayerByInvitationCodeFnQuery = (
  variables: PlayerByInvitationCodeFnQueryVariables,
) =>
  useQuery({
    query: playerByInvitationCodeFnQuery,
    variables,
  })

export const playerByInvitationCodeFnQuery = graphql(`
  query playerByInvitationCodeFn($invitationCode: UUID!) {
    playerByInvitationCodeFn(invitationCode: $invitationCode) {
      nodes {
        id: rowId
        name
        teamByTeamId {
          id: rowId
          name
          emoji
          charityOrganizationByCharityOrganizationId {
            id: rowId
            name
            url
          }
          donationUrl
          eventByEventId {
            id: rowId
            name
            start
            end
            discordInviteCode
            streamUrl
            commonDonationUrl
          }
        }
      }
    }
  }
`)
