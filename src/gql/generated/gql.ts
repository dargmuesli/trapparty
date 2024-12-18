/* eslint-disable */
import * as types from './graphql'
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
  '\n  fragment CharityOrganizationItem on CharityOrganization {\n    nodeId\n    id\n    name\n    url\n  }\n':
    types.CharityOrganizationItemFragmentDoc,
  '\n  fragment EventItem on Event {\n    nodeId\n    id\n    name\n    start\n    end\n    discordInviteCode\n    streamUrl\n    commonDonationUrl\n    commonDonationIsLive\n    commonDonationAmount\n  }\n':
    types.EventItemFragmentDoc,
  '\n  fragment GameItem on Game {\n    nodeId\n    id\n    eventId\n    isActive\n    name\n    type\n  }\n':
    types.GameItemFragmentDoc,
  '\n  fragment GameRandomFactsRoundItem on GameRandomFactsRound {\n    nodeId\n    id\n    answerCorrect\n    gameId\n    questionerName\n  }\n':
    types.GameRandomFactsRoundItemFragmentDoc,
  '\n  fragment GameRandomFactsVoteItem on GameRandomFactsVote {\n    nodeId\n    id\n    answer\n    playerId\n    roundId\n  }\n':
    types.GameRandomFactsVoteItemFragmentDoc,
  '\n  fragment PlayerItem on Player {\n    nodeId\n    id\n    invitationCode\n    name\n    teamId\n  }\n':
    types.PlayerItemFragmentDoc,
  '\n  fragment TeamItem on Team {\n    nodeId\n    id\n    eventId\n    name\n    emoji\n    charityOrganizationId\n    donationUrl\n    donationAmount\n    charityOrganizationByCharityOrganizationId {\n      ...CharityOrganizationItem\n    }\n  }\n':
    types.TeamItemFragmentDoc,
  '\n      mutation createGameRandomFactsRound(\n        $gameRandomFactsRoundInput: GameRandomFactsRoundInput!\n      ) {\n        createGameRandomFactsRound(\n          input: { gameRandomFactsRound: $gameRandomFactsRoundInput }\n        ) {\n          gameRandomFactsRound {\n            ...GameRandomFactsRoundItem\n          }\n        }\n      }\n    ':
    types.CreateGameRandomFactsRoundDocument,
  '\n      mutation createGameRandomFactsVote(\n        $gameRandomFactsVoteInput: GameRandomFactsVoteInput!\n      ) {\n        createGameRandomFactsVote(\n          input: { gameRandomFactsVote: $gameRandomFactsVoteInput }\n        ) {\n          gameRandomFactsVote {\n            ...GameRandomFactsVoteItem\n          }\n        }\n      }\n    ':
    types.CreateGameRandomFactsVoteDocument,
  '\n      mutation updateGameRandomFactsRoundById(\n        $gameRandomFactsRoundPatch: GameRandomFactsRoundPatch!\n        $id: Int!\n      ) {\n        updateGameRandomFactsRoundById(\n          input: {\n            gameRandomFactsRoundPatch: $gameRandomFactsRoundPatch\n            id: $id\n          }\n        ) {\n          gameRandomFactsRound {\n            ...GameRandomFactsRoundItem\n          }\n        }\n      }\n    ':
    types.UpdateGameRandomFactsRoundByIdDocument,
  '\n  query allEvents {\n    allEvents(orderBy: START_DESC) {\n      nodes {\n        ...EventItem\n      }\n    }\n  }\n':
    types.AllEventsDocument,
  '\n  query eventByName($eventName: String!) {\n    eventByName(name: $eventName) {\n      ...EventItem\n      teamsByEventId {\n        nodes {\n          ...TeamItem\n        }\n      }\n    }\n  }\n':
    types.EventByNameDocument,
  '\n  query allGameRandomFactsRounds($gameId: Int!) {\n    allGameRandomFactsRounds(condition: { gameId: $gameId }, orderBy: ID_DESC) {\n      nodes {\n        ...GameRandomFactsRoundItem\n      }\n    }\n  }\n':
    types.AllGameRandomFactsRoundsDocument,
  '\n  query gameRandomFactsVotes($roundId: Int!) {\n    allGameRandomFactsVotes(condition: { roundId: $roundId }) {\n      nodes {\n        ...GameRandomFactsVoteItem\n      }\n    }\n  }\n':
    types.GameRandomFactsVotesDocument,
  '\n  query allGames($eventId: Int!, $type: GameType) {\n    allGames(condition: { eventId: $eventId, type: $type }, orderBy: ID_ASC) {\n      nodes {\n        ...GameItem\n      }\n    }\n  }\n':
    types.AllGamesDocument,
  '\n  query gameById($gameId: Int!) {\n    gameById(id: $gameId) {\n      ...GameItem\n    }\n  }\n':
    types.GameByIdDocument,
  '\n  query gameRandomFactsVoteByPlayerIdAndRoundId(\n    $playerId: Int!\n    $roundId: Int!\n  ) {\n    gameRandomFactsVoteByPlayerIdAndRoundId(\n      playerId: $playerId\n      roundId: $roundId\n    ) {\n      ...GameRandomFactsVoteItem\n    }\n  }\n':
    types.GameRandomFactsVoteByPlayerIdAndRoundIdDocument,
  '\n  query playerByInvitationCodeFn($invitationCode: UUID!) {\n    playerByInvitationCodeFn(invitationCode: $invitationCode) {\n      nodes {\n        id\n        name\n        teamByTeamId {\n          id\n          name\n          emoji\n          charityOrganizationByCharityOrganizationId {\n            id\n            name\n            url\n          }\n          donationUrl\n          eventByEventId {\n            id\n            name\n            start\n            end\n            discordInviteCode\n            streamUrl\n            commonDonationUrl\n          }\n        }\n      }\n    }\n  }\n':
    types.PlayerByInvitationCodeFnDocument,
  '\n  query playerNameById($id: Int!) {\n    playerNameById(id: $id)\n  }\n':
    types.PlayerNameByIdDocument,
  '\n      query stats($eventId: Int!) {\n        teamPlayerCount(eventId: $eventId) {\n          nodes {\n            id\n            playerCount\n          }\n        }\n        allTeams(condition: { eventId: $eventId }, orderBy: ID_ASC) {\n          nodes {\n            ...TeamItem\n          }\n          totalCount\n        }\n        allGames(condition: { eventId: $eventId }) {\n          nodes {\n            nodeId\n            id\n            name\n            gameTeamScoresByGameId(orderBy: TEAM_ID_ASC) {\n              nodes {\n                id\n                score\n              }\n            }\n          }\n          totalCount\n        }\n      }\n    ':
    types.StatsDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment CharityOrganizationItem on CharityOrganization {\n    nodeId\n    id\n    name\n    url\n  }\n',
): (typeof documents)['\n  fragment CharityOrganizationItem on CharityOrganization {\n    nodeId\n    id\n    name\n    url\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment EventItem on Event {\n    nodeId\n    id\n    name\n    start\n    end\n    discordInviteCode\n    streamUrl\n    commonDonationUrl\n    commonDonationIsLive\n    commonDonationAmount\n  }\n',
): (typeof documents)['\n  fragment EventItem on Event {\n    nodeId\n    id\n    name\n    start\n    end\n    discordInviteCode\n    streamUrl\n    commonDonationUrl\n    commonDonationIsLive\n    commonDonationAmount\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment GameItem on Game {\n    nodeId\n    id\n    eventId\n    isActive\n    name\n    type\n  }\n',
): (typeof documents)['\n  fragment GameItem on Game {\n    nodeId\n    id\n    eventId\n    isActive\n    name\n    type\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment GameRandomFactsRoundItem on GameRandomFactsRound {\n    nodeId\n    id\n    answerCorrect\n    gameId\n    questionerName\n  }\n',
): (typeof documents)['\n  fragment GameRandomFactsRoundItem on GameRandomFactsRound {\n    nodeId\n    id\n    answerCorrect\n    gameId\n    questionerName\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment GameRandomFactsVoteItem on GameRandomFactsVote {\n    nodeId\n    id\n    answer\n    playerId\n    roundId\n  }\n',
): (typeof documents)['\n  fragment GameRandomFactsVoteItem on GameRandomFactsVote {\n    nodeId\n    id\n    answer\n    playerId\n    roundId\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment PlayerItem on Player {\n    nodeId\n    id\n    invitationCode\n    name\n    teamId\n  }\n',
): (typeof documents)['\n  fragment PlayerItem on Player {\n    nodeId\n    id\n    invitationCode\n    name\n    teamId\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment TeamItem on Team {\n    nodeId\n    id\n    eventId\n    name\n    emoji\n    charityOrganizationId\n    donationUrl\n    donationAmount\n    charityOrganizationByCharityOrganizationId {\n      ...CharityOrganizationItem\n    }\n  }\n',
): (typeof documents)['\n  fragment TeamItem on Team {\n    nodeId\n    id\n    eventId\n    name\n    emoji\n    charityOrganizationId\n    donationUrl\n    donationAmount\n    charityOrganizationByCharityOrganizationId {\n      ...CharityOrganizationItem\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      mutation createGameRandomFactsRound(\n        $gameRandomFactsRoundInput: GameRandomFactsRoundInput!\n      ) {\n        createGameRandomFactsRound(\n          input: { gameRandomFactsRound: $gameRandomFactsRoundInput }\n        ) {\n          gameRandomFactsRound {\n            ...GameRandomFactsRoundItem\n          }\n        }\n      }\n    ',
): (typeof documents)['\n      mutation createGameRandomFactsRound(\n        $gameRandomFactsRoundInput: GameRandomFactsRoundInput!\n      ) {\n        createGameRandomFactsRound(\n          input: { gameRandomFactsRound: $gameRandomFactsRoundInput }\n        ) {\n          gameRandomFactsRound {\n            ...GameRandomFactsRoundItem\n          }\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      mutation createGameRandomFactsVote(\n        $gameRandomFactsVoteInput: GameRandomFactsVoteInput!\n      ) {\n        createGameRandomFactsVote(\n          input: { gameRandomFactsVote: $gameRandomFactsVoteInput }\n        ) {\n          gameRandomFactsVote {\n            ...GameRandomFactsVoteItem\n          }\n        }\n      }\n    ',
): (typeof documents)['\n      mutation createGameRandomFactsVote(\n        $gameRandomFactsVoteInput: GameRandomFactsVoteInput!\n      ) {\n        createGameRandomFactsVote(\n          input: { gameRandomFactsVote: $gameRandomFactsVoteInput }\n        ) {\n          gameRandomFactsVote {\n            ...GameRandomFactsVoteItem\n          }\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      mutation updateGameRandomFactsRoundById(\n        $gameRandomFactsRoundPatch: GameRandomFactsRoundPatch!\n        $id: Int!\n      ) {\n        updateGameRandomFactsRoundById(\n          input: {\n            gameRandomFactsRoundPatch: $gameRandomFactsRoundPatch\n            id: $id\n          }\n        ) {\n          gameRandomFactsRound {\n            ...GameRandomFactsRoundItem\n          }\n        }\n      }\n    ',
): (typeof documents)['\n      mutation updateGameRandomFactsRoundById(\n        $gameRandomFactsRoundPatch: GameRandomFactsRoundPatch!\n        $id: Int!\n      ) {\n        updateGameRandomFactsRoundById(\n          input: {\n            gameRandomFactsRoundPatch: $gameRandomFactsRoundPatch\n            id: $id\n          }\n        ) {\n          gameRandomFactsRound {\n            ...GameRandomFactsRoundItem\n          }\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query allEvents {\n    allEvents(orderBy: START_DESC) {\n      nodes {\n        ...EventItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  query allEvents {\n    allEvents(orderBy: START_DESC) {\n      nodes {\n        ...EventItem\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query eventByName($eventName: String!) {\n    eventByName(name: $eventName) {\n      ...EventItem\n      teamsByEventId {\n        nodes {\n          ...TeamItem\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query eventByName($eventName: String!) {\n    eventByName(name: $eventName) {\n      ...EventItem\n      teamsByEventId {\n        nodes {\n          ...TeamItem\n        }\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query allGameRandomFactsRounds($gameId: Int!) {\n    allGameRandomFactsRounds(condition: { gameId: $gameId }, orderBy: ID_DESC) {\n      nodes {\n        ...GameRandomFactsRoundItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  query allGameRandomFactsRounds($gameId: Int!) {\n    allGameRandomFactsRounds(condition: { gameId: $gameId }, orderBy: ID_DESC) {\n      nodes {\n        ...GameRandomFactsRoundItem\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query gameRandomFactsVotes($roundId: Int!) {\n    allGameRandomFactsVotes(condition: { roundId: $roundId }) {\n      nodes {\n        ...GameRandomFactsVoteItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  query gameRandomFactsVotes($roundId: Int!) {\n    allGameRandomFactsVotes(condition: { roundId: $roundId }) {\n      nodes {\n        ...GameRandomFactsVoteItem\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query allGames($eventId: Int!, $type: GameType) {\n    allGames(condition: { eventId: $eventId, type: $type }, orderBy: ID_ASC) {\n      nodes {\n        ...GameItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  query allGames($eventId: Int!, $type: GameType) {\n    allGames(condition: { eventId: $eventId, type: $type }, orderBy: ID_ASC) {\n      nodes {\n        ...GameItem\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query gameById($gameId: Int!) {\n    gameById(id: $gameId) {\n      ...GameItem\n    }\n  }\n',
): (typeof documents)['\n  query gameById($gameId: Int!) {\n    gameById(id: $gameId) {\n      ...GameItem\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query gameRandomFactsVoteByPlayerIdAndRoundId(\n    $playerId: Int!\n    $roundId: Int!\n  ) {\n    gameRandomFactsVoteByPlayerIdAndRoundId(\n      playerId: $playerId\n      roundId: $roundId\n    ) {\n      ...GameRandomFactsVoteItem\n    }\n  }\n',
): (typeof documents)['\n  query gameRandomFactsVoteByPlayerIdAndRoundId(\n    $playerId: Int!\n    $roundId: Int!\n  ) {\n    gameRandomFactsVoteByPlayerIdAndRoundId(\n      playerId: $playerId\n      roundId: $roundId\n    ) {\n      ...GameRandomFactsVoteItem\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query playerByInvitationCodeFn($invitationCode: UUID!) {\n    playerByInvitationCodeFn(invitationCode: $invitationCode) {\n      nodes {\n        id\n        name\n        teamByTeamId {\n          id\n          name\n          emoji\n          charityOrganizationByCharityOrganizationId {\n            id\n            name\n            url\n          }\n          donationUrl\n          eventByEventId {\n            id\n            name\n            start\n            end\n            discordInviteCode\n            streamUrl\n            commonDonationUrl\n          }\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query playerByInvitationCodeFn($invitationCode: UUID!) {\n    playerByInvitationCodeFn(invitationCode: $invitationCode) {\n      nodes {\n        id\n        name\n        teamByTeamId {\n          id\n          name\n          emoji\n          charityOrganizationByCharityOrganizationId {\n            id\n            name\n            url\n          }\n          donationUrl\n          eventByEventId {\n            id\n            name\n            start\n            end\n            discordInviteCode\n            streamUrl\n            commonDonationUrl\n          }\n        }\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query playerNameById($id: Int!) {\n    playerNameById(id: $id)\n  }\n',
): (typeof documents)['\n  query playerNameById($id: Int!) {\n    playerNameById(id: $id)\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      query stats($eventId: Int!) {\n        teamPlayerCount(eventId: $eventId) {\n          nodes {\n            id\n            playerCount\n          }\n        }\n        allTeams(condition: { eventId: $eventId }, orderBy: ID_ASC) {\n          nodes {\n            ...TeamItem\n          }\n          totalCount\n        }\n        allGames(condition: { eventId: $eventId }) {\n          nodes {\n            nodeId\n            id\n            name\n            gameTeamScoresByGameId(orderBy: TEAM_ID_ASC) {\n              nodes {\n                id\n                score\n              }\n            }\n          }\n          totalCount\n        }\n      }\n    ',
): (typeof documents)['\n      query stats($eventId: Int!) {\n        teamPlayerCount(eventId: $eventId) {\n          nodes {\n            id\n            playerCount\n          }\n        }\n        allTeams(condition: { eventId: $eventId }, orderBy: ID_ASC) {\n          nodes {\n            ...TeamItem\n          }\n          totalCount\n        }\n        allGames(condition: { eventId: $eventId }) {\n          nodes {\n            nodeId\n            id\n            name\n            gameTeamScoresByGameId(orderBy: TEAM_ID_ASC) {\n              nodes {\n                id\n                score\n              }\n            }\n          }\n          totalCount\n        }\n      }\n    ']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
