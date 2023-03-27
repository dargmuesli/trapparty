import { useQuery } from '@urql/vue'
import { graphql } from '~/gql/generated'

export const useStatsQuery = (variables: { eventId: number }) =>
  useQuery({
    query: graphql(`
      query stats($eventId: Int!) {
        teamPlayerCount(eventId: $eventId) {
          nodes {
            id
            playerCount
          }
        }
        allTeams(condition: { eventId: $eventId }, orderBy: ID_ASC) {
          nodes {
            ...TeamItem
          }
          totalCount
        }
        allGames(condition: { eventId: $eventId }) {
          nodes {
            nodeId
            id
            name
            gameTeamScoresByGameId(orderBy: TEAM_ID_ASC) {
              nodes {
                id
                score
              }
            }
          }
          totalCount
        }
      }
    `),
    variables,
  })
