/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /**
   * A signed eight-byte integer. The upper big integer values are greater than the
   * max value for a JavaScript number. Therefore all big integers will be output as
   * strings and not numbers.
   */
  BigInt: { input: any; output: any }
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: { input: any; output: any }
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: { input: any; output: any }
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: { input: any; output: any }
}

/** Charity organizations. */
export type CharityOrganization = Node & {
  __typename?: 'CharityOrganization'
  /** The charity organization's department. */
  department?: Maybe<Scalars['String']['output']>
  /** The charity organization's internal id. */
  id: Scalars['Int']['output']
  /** The charity organization's name. */
  name: Scalars['String']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** Reads and enables pagination through a set of `Team`. */
  teamsByCharityOrganizationId: TeamsConnection
  /** The charity organization's url. */
  url: Scalars['String']['output']
}

/** Charity organizations. */
export type CharityOrganizationTeamsByCharityOrganizationIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<TeamCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<TeamsOrderBy>>
}

/**
 * A condition to be used against `CharityOrganization` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type CharityOrganizationCondition = {
  /** Checks for equality with the object’s `department` field. */
  department?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `url` field. */
  url?: InputMaybe<Scalars['String']['input']>
}

/** An input for mutations affecting `CharityOrganization` */
export type CharityOrganizationInput = {
  /** The charity organization's department. */
  department?: InputMaybe<Scalars['String']['input']>
  /** The charity organization's internal id. */
  id?: InputMaybe<Scalars['Int']['input']>
  /** The charity organization's name. */
  name: Scalars['String']['input']
  /** The charity organization's url. */
  url: Scalars['String']['input']
}

/** Represents an update to a `CharityOrganization`. Fields that are set will be updated. */
export type CharityOrganizationPatch = {
  /** The charity organization's department. */
  department?: InputMaybe<Scalars['String']['input']>
  /** The charity organization's internal id. */
  id?: InputMaybe<Scalars['Int']['input']>
  /** The charity organization's name. */
  name?: InputMaybe<Scalars['String']['input']>
  /** The charity organization's url. */
  url?: InputMaybe<Scalars['String']['input']>
}

/** A connection to a list of `CharityOrganization` values. */
export type CharityOrganizationsConnection = {
  __typename?: 'CharityOrganizationsConnection'
  /** A list of edges which contains the `CharityOrganization` and cursor to aid in pagination. */
  edges: Array<CharityOrganizationsEdge>
  /** A list of `CharityOrganization` objects. */
  nodes: Array<Maybe<CharityOrganization>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `CharityOrganization` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `CharityOrganization` edge in the connection. */
export type CharityOrganizationsEdge = {
  __typename?: 'CharityOrganizationsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `CharityOrganization` at the end of the edge. */
  node?: Maybe<CharityOrganization>
}

/** Methods to use when ordering `CharityOrganization`. */
export enum CharityOrganizationsOrderBy {
  DepartmentAsc = 'DEPARTMENT_ASC',
  DepartmentDesc = 'DEPARTMENT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
}

/** All input for the create `CharityOrganization` mutation. */
export type CreateCharityOrganizationInput = {
  /** The `CharityOrganization` to be created by this mutation. */
  charityOrganization: CharityOrganizationInput
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** The output of our create `CharityOrganization` mutation. */
export type CreateCharityOrganizationPayload = {
  __typename?: 'CreateCharityOrganizationPayload'
  /** The `CharityOrganization` that was created by this mutation. */
  charityOrganization?: Maybe<CharityOrganization>
  /** An edge for our `CharityOrganization`. May be used by Relay 1. */
  charityOrganizationEdge?: Maybe<CharityOrganizationsEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `CharityOrganization` mutation. */
export type CreateCharityOrganizationPayloadCharityOrganizationEdgeArgs = {
  orderBy?: InputMaybe<Array<CharityOrganizationsOrderBy>>
}

/** All input for the create `Event` mutation. */
export type CreateEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `Event` to be created by this mutation. */
  event: EventInput
}

/** The output of our create `Event` mutation. */
export type CreateEventPayload = {
  __typename?: 'CreateEventPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Event` that was created by this mutation. */
  event?: Maybe<Event>
  /** An edge for our `Event`. May be used by Relay 1. */
  eventEdge?: Maybe<EventsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Event` mutation. */
export type CreateEventPayloadEventEdgeArgs = {
  orderBy?: InputMaybe<Array<EventsOrderBy>>
}

/** All input for the create `GameEstimationNumericRound` mutation. */
export type CreateGameEstimationNumericRoundInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `GameEstimationNumericRound` to be created by this mutation. */
  gameEstimationNumericRound: GameEstimationNumericRoundInput
}

/** The output of our create `GameEstimationNumericRound` mutation. */
export type CreateGameEstimationNumericRoundPayload = {
  __typename?: 'CreateGameEstimationNumericRoundPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Game` that is related to this `GameEstimationNumericRound`. */
  gameByGameId?: Maybe<Game>
  /** The `GameEstimationNumericRound` that was created by this mutation. */
  gameEstimationNumericRound?: Maybe<GameEstimationNumericRound>
  /** An edge for our `GameEstimationNumericRound`. May be used by Relay 1. */
  gameEstimationNumericRoundEdge?: Maybe<GameEstimationNumericRoundsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `GameEstimationNumericRound` mutation. */
export type CreateGameEstimationNumericRoundPayloadGameEstimationNumericRoundEdgeArgs =
  {
    orderBy?: InputMaybe<Array<GameEstimationNumericRoundsOrderBy>>
  }

/** All input for the create `GameEstimationNumericVote` mutation. */
export type CreateGameEstimationNumericVoteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `GameEstimationNumericVote` to be created by this mutation. */
  gameEstimationNumericVote: GameEstimationNumericVoteInput
}

/** The output of our create `GameEstimationNumericVote` mutation. */
export type CreateGameEstimationNumericVotePayload = {
  __typename?: 'CreateGameEstimationNumericVotePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `GameEstimationNumericRound` that is related to this `GameEstimationNumericVote`. */
  gameEstimationNumericRoundByRoundId?: Maybe<GameEstimationNumericRound>
  /** The `GameEstimationNumericVote` that was created by this mutation. */
  gameEstimationNumericVote?: Maybe<GameEstimationNumericVote>
  /** An edge for our `GameEstimationNumericVote`. May be used by Relay 1. */
  gameEstimationNumericVoteEdge?: Maybe<GameEstimationNumericVotesEdge>
  /** Reads a single `Player` that is related to this `GameEstimationNumericVote`. */
  playerByPlayerId?: Maybe<Player>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `GameEstimationNumericVote` mutation. */
export type CreateGameEstimationNumericVotePayloadGameEstimationNumericVoteEdgeArgs =
  {
    orderBy?: InputMaybe<Array<GameEstimationNumericVotesOrderBy>>
  }

/** All input for the create `Game` mutation. */
export type CreateGameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `Game` to be created by this mutation. */
  game: GameInput
}

/** The output of our create `Game` mutation. */
export type CreateGamePayload = {
  __typename?: 'CreateGamePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Event` that is related to this `Game`. */
  eventByEventId?: Maybe<Event>
  /** The `Game` that was created by this mutation. */
  game?: Maybe<Game>
  /** An edge for our `Game`. May be used by Relay 1. */
  gameEdge?: Maybe<GamesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Game` mutation. */
export type CreateGamePayloadGameEdgeArgs = {
  orderBy?: InputMaybe<Array<GamesOrderBy>>
}

/** All input for the create `GameRandomFactsRound` mutation. */
export type CreateGameRandomFactsRoundInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `GameRandomFactsRound` to be created by this mutation. */
  gameRandomFactsRound: GameRandomFactsRoundInput
}

/** The output of our create `GameRandomFactsRound` mutation. */
export type CreateGameRandomFactsRoundPayload = {
  __typename?: 'CreateGameRandomFactsRoundPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Game` that is related to this `GameRandomFactsRound`. */
  gameByGameId?: Maybe<Game>
  /** The `GameRandomFactsRound` that was created by this mutation. */
  gameRandomFactsRound?: Maybe<GameRandomFactsRound>
  /** An edge for our `GameRandomFactsRound`. May be used by Relay 1. */
  gameRandomFactsRoundEdge?: Maybe<GameRandomFactsRoundsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `GameRandomFactsRound` mutation. */
export type CreateGameRandomFactsRoundPayloadGameRandomFactsRoundEdgeArgs = {
  orderBy?: InputMaybe<Array<GameRandomFactsRoundsOrderBy>>
}

/** All input for the create `GameRandomFactsVote` mutation. */
export type CreateGameRandomFactsVoteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `GameRandomFactsVote` to be created by this mutation. */
  gameRandomFactsVote: GameRandomFactsVoteInput
}

/** The output of our create `GameRandomFactsVote` mutation. */
export type CreateGameRandomFactsVotePayload = {
  __typename?: 'CreateGameRandomFactsVotePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `GameRandomFactsRound` that is related to this `GameRandomFactsVote`. */
  gameRandomFactsRoundByRoundId?: Maybe<GameRandomFactsRound>
  /** The `GameRandomFactsVote` that was created by this mutation. */
  gameRandomFactsVote?: Maybe<GameRandomFactsVote>
  /** An edge for our `GameRandomFactsVote`. May be used by Relay 1. */
  gameRandomFactsVoteEdge?: Maybe<GameRandomFactsVotesEdge>
  /** Reads a single `Player` that is related to this `GameRandomFactsVote`. */
  playerByPlayerId?: Maybe<Player>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `GameRandomFactsVote` mutation. */
export type CreateGameRandomFactsVotePayloadGameRandomFactsVoteEdgeArgs = {
  orderBy?: InputMaybe<Array<GameRandomFactsVotesOrderBy>>
}

/** All input for the create `GameTeamScore` mutation. */
export type CreateGameTeamScoreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `GameTeamScore` to be created by this mutation. */
  gameTeamScore: GameTeamScoreInput
}

/** The output of our create `GameTeamScore` mutation. */
export type CreateGameTeamScorePayload = {
  __typename?: 'CreateGameTeamScorePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Game` that is related to this `GameTeamScore`. */
  gameByGameId?: Maybe<Game>
  /** The `GameTeamScore` that was created by this mutation. */
  gameTeamScore?: Maybe<GameTeamScore>
  /** An edge for our `GameTeamScore`. May be used by Relay 1. */
  gameTeamScoreEdge?: Maybe<GameTeamScoresEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Team` that is related to this `GameTeamScore`. */
  teamByTeamId?: Maybe<Team>
}

/** The output of our create `GameTeamScore` mutation. */
export type CreateGameTeamScorePayloadGameTeamScoreEdgeArgs = {
  orderBy?: InputMaybe<Array<GameTeamScoresOrderBy>>
}

/** All input for the create `Kv` mutation. */
export type CreateKvInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `Kv` to be created by this mutation. */
  kv: KvInput
}

/** The output of our create `Kv` mutation. */
export type CreateKvPayload = {
  __typename?: 'CreateKvPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Kv` that was created by this mutation. */
  kv?: Maybe<Kv>
  /** An edge for our `Kv`. May be used by Relay 1. */
  kvEdge?: Maybe<KvsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Kv` mutation. */
export type CreateKvPayloadKvEdgeArgs = {
  orderBy?: InputMaybe<Array<KvsOrderBy>>
}

/** All input for the create `Player` mutation. */
export type CreatePlayerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `Player` to be created by this mutation. */
  player: PlayerInput
}

/** The output of our create `Player` mutation. */
export type CreatePlayerPayload = {
  __typename?: 'CreatePlayerPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Player` that was created by this mutation. */
  player?: Maybe<Player>
  /** An edge for our `Player`. May be used by Relay 1. */
  playerEdge?: Maybe<PlayersEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Team` that is related to this `Player`. */
  teamByTeamId?: Maybe<Team>
}

/** The output of our create `Player` mutation. */
export type CreatePlayerPayloadPlayerEdgeArgs = {
  orderBy?: InputMaybe<Array<PlayersOrderBy>>
}

/** All input for the create `Team` mutation. */
export type CreateTeamInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `Team` to be created by this mutation. */
  team: TeamInput
}

/** All input for the create `TeamLeader` mutation. */
export type CreateTeamLeaderInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The `TeamLeader` to be created by this mutation. */
  teamLeader: TeamLeaderInput
}

/** The output of our create `TeamLeader` mutation. */
export type CreateTeamLeaderPayload = {
  __typename?: 'CreateTeamLeaderPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Player` that is related to this `TeamLeader`. */
  playerByPlayerId?: Maybe<Player>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Team` that is related to this `TeamLeader`. */
  teamByTeamId?: Maybe<Team>
  /** The `TeamLeader` that was created by this mutation. */
  teamLeader?: Maybe<TeamLeader>
  /** An edge for our `TeamLeader`. May be used by Relay 1. */
  teamLeaderEdge?: Maybe<TeamLeadersEdge>
}

/** The output of our create `TeamLeader` mutation. */
export type CreateTeamLeaderPayloadTeamLeaderEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamLeadersOrderBy>>
}

/** The output of our create `Team` mutation. */
export type CreateTeamPayload = {
  __typename?: 'CreateTeamPayload'
  /** Reads a single `CharityOrganization` that is related to this `Team`. */
  charityOrganizationByCharityOrganizationId?: Maybe<CharityOrganization>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Event` that is related to this `Team`. */
  eventByEventId?: Maybe<Event>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `Team` that was created by this mutation. */
  team?: Maybe<Team>
  /** An edge for our `Team`. May be used by Relay 1. */
  teamEdge?: Maybe<TeamsEdge>
}

/** The output of our create `Team` mutation. */
export type CreateTeamPayloadTeamEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamsOrderBy>>
}

/** All input for the `deleteCharityOrganizationById` mutation. */
export type DeleteCharityOrganizationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The charity organization's internal id. */
  id: Scalars['Int']['input']
}

/** All input for the `deleteCharityOrganizationByName` mutation. */
export type DeleteCharityOrganizationByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The charity organization's name. */
  name: Scalars['String']['input']
}

/** All input for the `deleteCharityOrganizationByUrl` mutation. */
export type DeleteCharityOrganizationByUrlInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The charity organization's url. */
  url: Scalars['String']['input']
}

/** All input for the `deleteCharityOrganization` mutation. */
export type DeleteCharityOrganizationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `CharityOrganization` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `CharityOrganization` mutation. */
export type DeleteCharityOrganizationPayload = {
  __typename?: 'DeleteCharityOrganizationPayload'
  /** The `CharityOrganization` that was deleted by this mutation. */
  charityOrganization?: Maybe<CharityOrganization>
  /** An edge for our `CharityOrganization`. May be used by Relay 1. */
  charityOrganizationEdge?: Maybe<CharityOrganizationsEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedCharityOrganizationId?: Maybe<Scalars['ID']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `CharityOrganization` mutation. */
export type DeleteCharityOrganizationPayloadCharityOrganizationEdgeArgs = {
  orderBy?: InputMaybe<Array<CharityOrganizationsOrderBy>>
}

/** All input for the `deleteEventById` mutation. */
export type DeleteEventByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The events's internal id. */
  id: Scalars['Int']['input']
}

/** All input for the `deleteEventByName` mutation. */
export type DeleteEventByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
}

/** All input for the `deleteEvent` mutation. */
export type DeleteEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Event` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `Event` mutation. */
export type DeleteEventPayload = {
  __typename?: 'DeleteEventPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedEventId?: Maybe<Scalars['ID']['output']>
  /** The `Event` that was deleted by this mutation. */
  event?: Maybe<Event>
  /** An edge for our `Event`. May be used by Relay 1. */
  eventEdge?: Maybe<EventsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Event` mutation. */
export type DeleteEventPayloadEventEdgeArgs = {
  orderBy?: InputMaybe<Array<EventsOrderBy>>
}

/** All input for the `deleteGameByEventIdAndName` mutation. */
export type DeleteGameByEventIdAndNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The game's internal event id */
  eventId: Scalars['Int']['input']
  /** The games's name. */
  name: Scalars['String']['input']
}

/** All input for the `deleteGameById` mutation. */
export type DeleteGameByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The games's internal id. */
  id: Scalars['Int']['input']
}

/** All input for the `deleteGameEstimationNumericRoundById` mutation. */
export type DeleteGameEstimationNumericRoundByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
}

/** All input for the `deleteGameEstimationNumericRound` mutation. */
export type DeleteGameEstimationNumericRoundInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `GameEstimationNumericRound` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `GameEstimationNumericRound` mutation. */
export type DeleteGameEstimationNumericRoundPayload = {
  __typename?: 'DeleteGameEstimationNumericRoundPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedGameEstimationNumericRoundId?: Maybe<Scalars['ID']['output']>
  /** Reads a single `Game` that is related to this `GameEstimationNumericRound`. */
  gameByGameId?: Maybe<Game>
  /** The `GameEstimationNumericRound` that was deleted by this mutation. */
  gameEstimationNumericRound?: Maybe<GameEstimationNumericRound>
  /** An edge for our `GameEstimationNumericRound`. May be used by Relay 1. */
  gameEstimationNumericRoundEdge?: Maybe<GameEstimationNumericRoundsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `GameEstimationNumericRound` mutation. */
export type DeleteGameEstimationNumericRoundPayloadGameEstimationNumericRoundEdgeArgs =
  {
    orderBy?: InputMaybe<Array<GameEstimationNumericRoundsOrderBy>>
  }

/** All input for the `deleteGameEstimationNumericVoteById` mutation. */
export type DeleteGameEstimationNumericVoteByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
}

/** All input for the `deleteGameEstimationNumericVoteByPlayerIdAndRoundId` mutation. */
export type DeleteGameEstimationNumericVoteByPlayerIdAndRoundIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The vote's internal player id */
  playerId: Scalars['Int']['input']
  /** The vote's internal round id. */
  roundId: Scalars['Int']['input']
}

/** All input for the `deleteGameEstimationNumericVote` mutation. */
export type DeleteGameEstimationNumericVoteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `GameEstimationNumericVote` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `GameEstimationNumericVote` mutation. */
export type DeleteGameEstimationNumericVotePayload = {
  __typename?: 'DeleteGameEstimationNumericVotePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedGameEstimationNumericVoteId?: Maybe<Scalars['ID']['output']>
  /** Reads a single `GameEstimationNumericRound` that is related to this `GameEstimationNumericVote`. */
  gameEstimationNumericRoundByRoundId?: Maybe<GameEstimationNumericRound>
  /** The `GameEstimationNumericVote` that was deleted by this mutation. */
  gameEstimationNumericVote?: Maybe<GameEstimationNumericVote>
  /** An edge for our `GameEstimationNumericVote`. May be used by Relay 1. */
  gameEstimationNumericVoteEdge?: Maybe<GameEstimationNumericVotesEdge>
  /** Reads a single `Player` that is related to this `GameEstimationNumericVote`. */
  playerByPlayerId?: Maybe<Player>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `GameEstimationNumericVote` mutation. */
export type DeleteGameEstimationNumericVotePayloadGameEstimationNumericVoteEdgeArgs =
  {
    orderBy?: InputMaybe<Array<GameEstimationNumericVotesOrderBy>>
  }

/** All input for the `deleteGame` mutation. */
export type DeleteGameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Game` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `Game` mutation. */
export type DeleteGamePayload = {
  __typename?: 'DeleteGamePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedGameId?: Maybe<Scalars['ID']['output']>
  /** Reads a single `Event` that is related to this `Game`. */
  eventByEventId?: Maybe<Event>
  /** The `Game` that was deleted by this mutation. */
  game?: Maybe<Game>
  /** An edge for our `Game`. May be used by Relay 1. */
  gameEdge?: Maybe<GamesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Game` mutation. */
export type DeleteGamePayloadGameEdgeArgs = {
  orderBy?: InputMaybe<Array<GamesOrderBy>>
}

/** All input for the `deleteGameRandomFactsRoundById` mutation. */
export type DeleteGameRandomFactsRoundByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The round's internal id. */
  id: Scalars['Int']['input']
}

/** All input for the `deleteGameRandomFactsRound` mutation. */
export type DeleteGameRandomFactsRoundInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `GameRandomFactsRound` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `GameRandomFactsRound` mutation. */
export type DeleteGameRandomFactsRoundPayload = {
  __typename?: 'DeleteGameRandomFactsRoundPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedGameRandomFactsRoundId?: Maybe<Scalars['ID']['output']>
  /** Reads a single `Game` that is related to this `GameRandomFactsRound`. */
  gameByGameId?: Maybe<Game>
  /** The `GameRandomFactsRound` that was deleted by this mutation. */
  gameRandomFactsRound?: Maybe<GameRandomFactsRound>
  /** An edge for our `GameRandomFactsRound`. May be used by Relay 1. */
  gameRandomFactsRoundEdge?: Maybe<GameRandomFactsRoundsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `GameRandomFactsRound` mutation. */
export type DeleteGameRandomFactsRoundPayloadGameRandomFactsRoundEdgeArgs = {
  orderBy?: InputMaybe<Array<GameRandomFactsRoundsOrderBy>>
}

/** All input for the `deleteGameRandomFactsVoteById` mutation. */
export type DeleteGameRandomFactsVoteByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The vote's internal id. */
  id: Scalars['Int']['input']
}

/** All input for the `deleteGameRandomFactsVoteByPlayerIdAndRoundId` mutation. */
export type DeleteGameRandomFactsVoteByPlayerIdAndRoundIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The vote's internal player id */
  playerId: Scalars['Int']['input']
  /** The vote's internal round id. */
  roundId: Scalars['Int']['input']
}

/** All input for the `deleteGameRandomFactsVote` mutation. */
export type DeleteGameRandomFactsVoteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `GameRandomFactsVote` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `GameRandomFactsVote` mutation. */
export type DeleteGameRandomFactsVotePayload = {
  __typename?: 'DeleteGameRandomFactsVotePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedGameRandomFactsVoteId?: Maybe<Scalars['ID']['output']>
  /** Reads a single `GameRandomFactsRound` that is related to this `GameRandomFactsVote`. */
  gameRandomFactsRoundByRoundId?: Maybe<GameRandomFactsRound>
  /** The `GameRandomFactsVote` that was deleted by this mutation. */
  gameRandomFactsVote?: Maybe<GameRandomFactsVote>
  /** An edge for our `GameRandomFactsVote`. May be used by Relay 1. */
  gameRandomFactsVoteEdge?: Maybe<GameRandomFactsVotesEdge>
  /** Reads a single `Player` that is related to this `GameRandomFactsVote`. */
  playerByPlayerId?: Maybe<Player>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `GameRandomFactsVote` mutation. */
export type DeleteGameRandomFactsVotePayloadGameRandomFactsVoteEdgeArgs = {
  orderBy?: InputMaybe<Array<GameRandomFactsVotesOrderBy>>
}

/** All input for the `deleteGameTeamScoreById` mutation. */
export type DeleteGameTeamScoreByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The game score's internal id. */
  id: Scalars['Int']['input']
}

/** All input for the `deleteGameTeamScore` mutation. */
export type DeleteGameTeamScoreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `GameTeamScore` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `GameTeamScore` mutation. */
export type DeleteGameTeamScorePayload = {
  __typename?: 'DeleteGameTeamScorePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedGameTeamScoreId?: Maybe<Scalars['ID']['output']>
  /** Reads a single `Game` that is related to this `GameTeamScore`. */
  gameByGameId?: Maybe<Game>
  /** The `GameTeamScore` that was deleted by this mutation. */
  gameTeamScore?: Maybe<GameTeamScore>
  /** An edge for our `GameTeamScore`. May be used by Relay 1. */
  gameTeamScoreEdge?: Maybe<GameTeamScoresEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Team` that is related to this `GameTeamScore`. */
  teamByTeamId?: Maybe<Team>
}

/** The output of our delete `GameTeamScore` mutation. */
export type DeleteGameTeamScorePayloadGameTeamScoreEdgeArgs = {
  orderBy?: InputMaybe<Array<GameTeamScoresOrderBy>>
}

/** All input for the `deleteKvByKey` mutation. */
export type DeleteKvByKeyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The key. */
  key: Scalars['String']['input']
}

/** The output of our delete `Kv` mutation. */
export type DeleteKvPayload = {
  __typename?: 'DeleteKvPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedKvId?: Maybe<Scalars['ID']['output']>
  /** The `Kv` that was deleted by this mutation. */
  kv?: Maybe<Kv>
  /** An edge for our `Kv`. May be used by Relay 1. */
  kvEdge?: Maybe<KvsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Kv` mutation. */
export type DeleteKvPayloadKvEdgeArgs = {
  orderBy?: InputMaybe<Array<KvsOrderBy>>
}

/** All input for the `deletePlayerById` mutation. */
export type DeletePlayerByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The players's internal id. */
  id: Scalars['Int']['input']
}

/** All input for the `deletePlayerByInvitationCode` mutation. */
export type DeletePlayerByInvitationCodeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The player's invitation code. */
  invitationCode: Scalars['UUID']['input']
}

/** All input for the `deletePlayerByTeamIdAndInvitationCode` mutation. */
export type DeletePlayerByTeamIdAndInvitationCodeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The player's invitation code. */
  invitationCode: Scalars['UUID']['input']
  /** The player's internal team id. */
  teamId: Scalars['Int']['input']
}

/** All input for the `deletePlayer` mutation. */
export type DeletePlayerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Player` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `Player` mutation. */
export type DeletePlayerPayload = {
  __typename?: 'DeletePlayerPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedPlayerId?: Maybe<Scalars['ID']['output']>
  /** The `Player` that was deleted by this mutation. */
  player?: Maybe<Player>
  /** An edge for our `Player`. May be used by Relay 1. */
  playerEdge?: Maybe<PlayersEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Team` that is related to this `Player`. */
  teamByTeamId?: Maybe<Team>
}

/** The output of our delete `Player` mutation. */
export type DeletePlayerPayloadPlayerEdgeArgs = {
  orderBy?: InputMaybe<Array<PlayersOrderBy>>
}

/** All input for the `deleteTeamById` mutation. */
export type DeleteTeamByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The team's internal id. */
  id: Scalars['Int']['input']
}

/** All input for the `deleteTeam` mutation. */
export type DeleteTeamInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Team` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** All input for the `deleteTeamLeaderById` mutation. */
export type DeleteTeamLeaderByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The team leaders's internal id. */
  id: Scalars['Int']['input']
}

/** All input for the `deleteTeamLeader` mutation. */
export type DeleteTeamLeaderInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `TeamLeader` to be deleted. */
  nodeId: Scalars['ID']['input']
}

/** The output of our delete `TeamLeader` mutation. */
export type DeleteTeamLeaderPayload = {
  __typename?: 'DeleteTeamLeaderPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedTeamLeaderId?: Maybe<Scalars['ID']['output']>
  /** Reads a single `Player` that is related to this `TeamLeader`. */
  playerByPlayerId?: Maybe<Player>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Team` that is related to this `TeamLeader`. */
  teamByTeamId?: Maybe<Team>
  /** The `TeamLeader` that was deleted by this mutation. */
  teamLeader?: Maybe<TeamLeader>
  /** An edge for our `TeamLeader`. May be used by Relay 1. */
  teamLeaderEdge?: Maybe<TeamLeadersEdge>
}

/** The output of our delete `TeamLeader` mutation. */
export type DeleteTeamLeaderPayloadTeamLeaderEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamLeadersOrderBy>>
}

/** The output of our delete `Team` mutation. */
export type DeleteTeamPayload = {
  __typename?: 'DeleteTeamPayload'
  /** Reads a single `CharityOrganization` that is related to this `Team`. */
  charityOrganizationByCharityOrganizationId?: Maybe<CharityOrganization>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedTeamId?: Maybe<Scalars['ID']['output']>
  /** Reads a single `Event` that is related to this `Team`. */
  eventByEventId?: Maybe<Event>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `Team` that was deleted by this mutation. */
  team?: Maybe<Team>
  /** An edge for our `Team`. May be used by Relay 1. */
  teamEdge?: Maybe<TeamsEdge>
}

/** The output of our delete `Team` mutation. */
export type DeleteTeamPayloadTeamEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamsOrderBy>>
}

/** Events. */
export type Event = Node & {
  __typename?: 'Event'
  /** The event's common donation amount. */
  commonDonationAmount?: Maybe<Scalars['Float']['output']>
  /** Indicates whether the event's common donations are featured in the stream. */
  commonDonationIsLive?: Maybe<Scalars['Boolean']['output']>
  /** The event's common donation url. */
  commonDonationUrl?: Maybe<Scalars['String']['output']>
  /** The event's discord code. */
  discordInviteCode?: Maybe<Scalars['String']['output']>
  /** The event's end timestamp. */
  end?: Maybe<Scalars['Datetime']['output']>
  /** Reads and enables pagination through a set of `Game`. */
  gamesByEventId: GamesConnection
  /** The events's internal id. */
  id: Scalars['Int']['output']
  name: Scalars['String']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** The event's start timestamp. */
  start: Scalars['Datetime']['output']
  /** The event's stream url. */
  streamUrl?: Maybe<Scalars['String']['output']>
  /** Reads and enables pagination through a set of `Team`. */
  teamsByEventId: TeamsConnection
}

/** Events. */
export type EventGamesByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GamesOrderBy>>
}

/** Events. */
export type EventTeamsByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<TeamCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<TeamsOrderBy>>
}

/** A condition to be used against `Event` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type EventCondition = {
  /** Checks for equality with the object’s `commonDonationAmount` field. */
  commonDonationAmount?: InputMaybe<Scalars['Float']['input']>
  /** Checks for equality with the object’s `commonDonationIsLive` field. */
  commonDonationIsLive?: InputMaybe<Scalars['Boolean']['input']>
  /** Checks for equality with the object’s `commonDonationUrl` field. */
  commonDonationUrl?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `discordInviteCode` field. */
  discordInviteCode?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `end` field. */
  end?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `start` field. */
  start?: InputMaybe<Scalars['Datetime']['input']>
  /** Checks for equality with the object’s `streamUrl` field. */
  streamUrl?: InputMaybe<Scalars['String']['input']>
}

/** An input for mutations affecting `Event` */
export type EventInput = {
  /** The event's common donation amount. */
  commonDonationAmount?: InputMaybe<Scalars['Float']['input']>
  /** Indicates whether the event's common donations are featured in the stream. */
  commonDonationIsLive?: InputMaybe<Scalars['Boolean']['input']>
  /** The event's common donation url. */
  commonDonationUrl?: InputMaybe<Scalars['String']['input']>
  /** The event's discord code. */
  discordInviteCode?: InputMaybe<Scalars['String']['input']>
  /** The event's end timestamp. */
  end?: InputMaybe<Scalars['Datetime']['input']>
  /** The events's internal id. */
  id?: InputMaybe<Scalars['Int']['input']>
  name: Scalars['String']['input']
  /** The event's start timestamp. */
  start: Scalars['Datetime']['input']
  /** The event's stream url. */
  streamUrl?: InputMaybe<Scalars['String']['input']>
}

/** Represents an update to a `Event`. Fields that are set will be updated. */
export type EventPatch = {
  /** The event's common donation amount. */
  commonDonationAmount?: InputMaybe<Scalars['Float']['input']>
  /** Indicates whether the event's common donations are featured in the stream. */
  commonDonationIsLive?: InputMaybe<Scalars['Boolean']['input']>
  /** The event's common donation url. */
  commonDonationUrl?: InputMaybe<Scalars['String']['input']>
  /** The event's discord code. */
  discordInviteCode?: InputMaybe<Scalars['String']['input']>
  /** The event's end timestamp. */
  end?: InputMaybe<Scalars['Datetime']['input']>
  /** The events's internal id. */
  id?: InputMaybe<Scalars['Int']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  /** The event's start timestamp. */
  start?: InputMaybe<Scalars['Datetime']['input']>
  /** The event's stream url. */
  streamUrl?: InputMaybe<Scalars['String']['input']>
}

/** A connection to a list of `Event` values. */
export type EventsConnection = {
  __typename?: 'EventsConnection'
  /** A list of edges which contains the `Event` and cursor to aid in pagination. */
  edges: Array<EventsEdge>
  /** A list of `Event` objects. */
  nodes: Array<Maybe<Event>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Event` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Event` edge in the connection. */
export type EventsEdge = {
  __typename?: 'EventsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Event` at the end of the edge. */
  node?: Maybe<Event>
}

/** Methods to use when ordering `Event`. */
export enum EventsOrderBy {
  CommonDonationAmountAsc = 'COMMON_DONATION_AMOUNT_ASC',
  CommonDonationAmountDesc = 'COMMON_DONATION_AMOUNT_DESC',
  CommonDonationIsLiveAsc = 'COMMON_DONATION_IS_LIVE_ASC',
  CommonDonationIsLiveDesc = 'COMMON_DONATION_IS_LIVE_DESC',
  CommonDonationUrlAsc = 'COMMON_DONATION_URL_ASC',
  CommonDonationUrlDesc = 'COMMON_DONATION_URL_DESC',
  DiscordInviteCodeAsc = 'DISCORD_INVITE_CODE_ASC',
  DiscordInviteCodeDesc = 'DISCORD_INVITE_CODE_DESC',
  EndAsc = 'END_ASC',
  EndDesc = 'END_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StartAsc = 'START_ASC',
  StartDesc = 'START_DESC',
  StreamUrlAsc = 'STREAM_URL_ASC',
  StreamUrlDesc = 'STREAM_URL_DESC',
}

/** Games. */
export type Game = Node & {
  __typename?: 'Game'
  /** Reads a single `Event` that is related to this `Game`. */
  eventByEventId?: Maybe<Event>
  /** The game's internal event id */
  eventId: Scalars['Int']['output']
  /** Reads and enables pagination through a set of `GameEstimationNumericRound`. */
  gameEstimationNumericRoundsByGameId: GameEstimationNumericRoundsConnection
  /** Reads and enables pagination through a set of `GameRandomFactsRound`. */
  gameRandomFactsRoundsByGameId: GameRandomFactsRoundsConnection
  /** Reads and enables pagination through a set of `GameTeamScore`. */
  gameTeamScoresByGameId: GameTeamScoresConnection
  /** The games's internal id. */
  id: Scalars['Int']['output']
  /** The games's activeness. */
  isActive: Scalars['Boolean']['output']
  /** The games's name. */
  name: Scalars['String']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** The game's type */
  type: GameType
}

/** Games. */
export type GameGameEstimationNumericRoundsByGameIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameEstimationNumericRoundCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameEstimationNumericRoundsOrderBy>>
}

/** Games. */
export type GameGameRandomFactsRoundsByGameIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameRandomFactsRoundCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameRandomFactsRoundsOrderBy>>
}

/** Games. */
export type GameGameTeamScoresByGameIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameTeamScoreCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameTeamScoresOrderBy>>
}

/** A condition to be used against `Game` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type GameCondition = {
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `isActive` field. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<GameType>
}

/** Retrieves the leaderboard for a numeric estimation game. */
export type GameEstimationNumericLeaderboardView = {
  __typename?: 'GameEstimationNumericLeaderboardView'
  gameId?: Maybe<Scalars['Int']['output']>
  playerName?: Maybe<Scalars['String']['output']>
  totalPoints?: Maybe<Scalars['Int']['output']>
}

/**
 * A condition to be used against `GameEstimationNumericLeaderboardView` object
 * types. All fields are tested for equality and combined with a logical ‘and.’
 */
export type GameEstimationNumericLeaderboardViewCondition = {
  /** Checks for equality with the object’s `gameId` field. */
  gameId?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `playerName` field. */
  playerName?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `totalPoints` field. */
  totalPoints?: InputMaybe<Scalars['Int']['input']>
}

/** A connection to a list of `GameEstimationNumericLeaderboardView` values. */
export type GameEstimationNumericLeaderboardViewsConnection = {
  __typename?: 'GameEstimationNumericLeaderboardViewsConnection'
  /** A list of edges which contains the `GameEstimationNumericLeaderboardView` and cursor to aid in pagination. */
  edges: Array<GameEstimationNumericLeaderboardViewsEdge>
  /** A list of `GameEstimationNumericLeaderboardView` objects. */
  nodes: Array<Maybe<GameEstimationNumericLeaderboardView>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GameEstimationNumericLeaderboardView` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `GameEstimationNumericLeaderboardView` edge in the connection. */
export type GameEstimationNumericLeaderboardViewsEdge = {
  __typename?: 'GameEstimationNumericLeaderboardViewsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `GameEstimationNumericLeaderboardView` at the end of the edge. */
  node?: Maybe<GameEstimationNumericLeaderboardView>
}

/** Methods to use when ordering `GameEstimationNumericLeaderboardView`. */
export enum GameEstimationNumericLeaderboardViewsOrderBy {
  GameIdAsc = 'GAME_ID_ASC',
  GameIdDesc = 'GAME_ID_DESC',
  Natural = 'NATURAL',
  PlayerNameAsc = 'PLAYER_NAME_ASC',
  PlayerNameDesc = 'PLAYER_NAME_DESC',
  TotalPointsAsc = 'TOTAL_POINTS_ASC',
  TotalPointsDesc = 'TOTAL_POINTS_DESC',
}

/** A round of a numeric estimation game. */
export type GameEstimationNumericRound = Node & {
  __typename?: 'GameEstimationNumericRound'
  /** The round's correct answer. */
  answerCorrect?: Maybe<Scalars['Float']['output']>
  /** The round's element name */
  elementName: Scalars['String']['output']
  /** Reads a single `Game` that is related to this `GameEstimationNumericRound`. */
  gameByGameId?: Maybe<Game>
  /** Reads and enables pagination through a set of `GameEstimationNumericVote`. */
  gameEstimationNumericVotesByRoundId: GameEstimationNumericVotesConnection
  /** The round's internal game id */
  gameId: Scalars['Int']['output']
  id: Scalars['Int']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
}

/** A round of a numeric estimation game. */
export type GameEstimationNumericRoundGameEstimationNumericVotesByRoundIdArgs =
  {
    after?: InputMaybe<Scalars['Cursor']['input']>
    before?: InputMaybe<Scalars['Cursor']['input']>
    condition?: InputMaybe<GameEstimationNumericVoteCondition>
    first?: InputMaybe<Scalars['Int']['input']>
    last?: InputMaybe<Scalars['Int']['input']>
    offset?: InputMaybe<Scalars['Int']['input']>
    orderBy?: InputMaybe<Array<GameEstimationNumericVotesOrderBy>>
  }

/**
 * A condition to be used against `GameEstimationNumericRound` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type GameEstimationNumericRoundCondition = {
  /** Checks for equality with the object’s `answerCorrect` field. */
  answerCorrect?: InputMaybe<Scalars['Float']['input']>
  /** Checks for equality with the object’s `elementName` field. */
  elementName?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `gameId` field. */
  gameId?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>
}

/** An input for mutations affecting `GameEstimationNumericRound` */
export type GameEstimationNumericRoundInput = {
  /** The round's correct answer. */
  answerCorrect?: InputMaybe<Scalars['Float']['input']>
  /** The round's element name */
  elementName: Scalars['String']['input']
  /** The round's internal game id */
  gameId: Scalars['Int']['input']
  id?: InputMaybe<Scalars['Int']['input']>
}

/** Represents an update to a `GameEstimationNumericRound`. Fields that are set will be updated. */
export type GameEstimationNumericRoundPatch = {
  /** The round's correct answer. */
  answerCorrect?: InputMaybe<Scalars['Float']['input']>
  /** The round's element name */
  elementName?: InputMaybe<Scalars['String']['input']>
  /** The round's internal game id */
  gameId?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
}

/** A connection to a list of `GameEstimationNumericRound` values. */
export type GameEstimationNumericRoundsConnection = {
  __typename?: 'GameEstimationNumericRoundsConnection'
  /** A list of edges which contains the `GameEstimationNumericRound` and cursor to aid in pagination. */
  edges: Array<GameEstimationNumericRoundsEdge>
  /** A list of `GameEstimationNumericRound` objects. */
  nodes: Array<Maybe<GameEstimationNumericRound>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GameEstimationNumericRound` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `GameEstimationNumericRound` edge in the connection. */
export type GameEstimationNumericRoundsEdge = {
  __typename?: 'GameEstimationNumericRoundsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `GameEstimationNumericRound` at the end of the edge. */
  node?: Maybe<GameEstimationNumericRound>
}

/** Methods to use when ordering `GameEstimationNumericRound`. */
export enum GameEstimationNumericRoundsOrderBy {
  AnswerCorrectAsc = 'ANSWER_CORRECT_ASC',
  AnswerCorrectDesc = 'ANSWER_CORRECT_DESC',
  ElementNameAsc = 'ELEMENT_NAME_ASC',
  ElementNameDesc = 'ELEMENT_NAME_DESC',
  GameIdAsc = 'GAME_ID_ASC',
  GameIdDesc = 'GAME_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** A vote of a numeric estimation game round. */
export type GameEstimationNumericVote = Node & {
  __typename?: 'GameEstimationNumericVote'
  /** The vote's answer. */
  answer: Scalars['Float']['output']
  /** Reads a single `GameEstimationNumericRound` that is related to this `GameEstimationNumericVote`. */
  gameEstimationNumericRoundByRoundId?: Maybe<GameEstimationNumericRound>
  id: Scalars['Int']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** Reads a single `Player` that is related to this `GameEstimationNumericVote`. */
  playerByPlayerId?: Maybe<Player>
  /** The vote's internal player id */
  playerId: Scalars['Int']['output']
  /** The vote's internal round id. */
  roundId: Scalars['Int']['output']
}

/**
 * A condition to be used against `GameEstimationNumericVote` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type GameEstimationNumericVoteCondition = {
  /** Checks for equality with the object’s `answer` field. */
  answer?: InputMaybe<Scalars['Float']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `roundId` field. */
  roundId?: InputMaybe<Scalars['Int']['input']>
}

/** An input for mutations affecting `GameEstimationNumericVote` */
export type GameEstimationNumericVoteInput = {
  /** The vote's answer. */
  answer: Scalars['Float']['input']
  id?: InputMaybe<Scalars['Int']['input']>
  /** The vote's internal player id */
  playerId: Scalars['Int']['input']
  /** The vote's internal round id. */
  roundId: Scalars['Int']['input']
}

/** Represents an update to a `GameEstimationNumericVote`. Fields that are set will be updated. */
export type GameEstimationNumericVotePatch = {
  /** The vote's answer. */
  answer?: InputMaybe<Scalars['Float']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  /** The vote's internal player id */
  playerId?: InputMaybe<Scalars['Int']['input']>
  /** The vote's internal round id. */
  roundId?: InputMaybe<Scalars['Int']['input']>
}

/** A connection to a list of `GameEstimationNumericVote` values. */
export type GameEstimationNumericVotesConnection = {
  __typename?: 'GameEstimationNumericVotesConnection'
  /** A list of edges which contains the `GameEstimationNumericVote` and cursor to aid in pagination. */
  edges: Array<GameEstimationNumericVotesEdge>
  /** A list of `GameEstimationNumericVote` objects. */
  nodes: Array<Maybe<GameEstimationNumericVote>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GameEstimationNumericVote` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `GameEstimationNumericVote` edge in the connection. */
export type GameEstimationNumericVotesEdge = {
  __typename?: 'GameEstimationNumericVotesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `GameEstimationNumericVote` at the end of the edge. */
  node?: Maybe<GameEstimationNumericVote>
}

/** Methods to use when ordering `GameEstimationNumericVote`. */
export enum GameEstimationNumericVotesOrderBy {
  AnswerAsc = 'ANSWER_ASC',
  AnswerDesc = 'ANSWER_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PlayerIdAsc = 'PLAYER_ID_ASC',
  PlayerIdDesc = 'PLAYER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RoundIdAsc = 'ROUND_ID_ASC',
  RoundIdDesc = 'ROUND_ID_DESC',
}

/** An input for mutations affecting `Game` */
export type GameInput = {
  /** The game's internal event id */
  eventId: Scalars['Int']['input']
  /** The games's internal id. */
  id?: InputMaybe<Scalars['Int']['input']>
  /** The games's activeness. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  /** The games's name. */
  name: Scalars['String']['input']
  /** The game's type */
  type: GameType
}

/** Represents an update to a `Game`. Fields that are set will be updated. */
export type GamePatch = {
  /** The game's internal event id */
  eventId?: InputMaybe<Scalars['Int']['input']>
  /** The games's internal id. */
  id?: InputMaybe<Scalars['Int']['input']>
  /** The games's activeness. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  /** The games's name. */
  name?: InputMaybe<Scalars['String']['input']>
  /** The game's type */
  type?: InputMaybe<GameType>
}

/** A round of a random facts game. */
export type GameRandomFactsRound = Node & {
  __typename?: 'GameRandomFactsRound'
  /** The round's correct answer. */
  answerCorrect?: Maybe<Scalars['Int']['output']>
  /** Reads a single `Game` that is related to this `GameRandomFactsRound`. */
  gameByGameId?: Maybe<Game>
  /** The round's internal game id */
  gameId: Scalars['Int']['output']
  /** Reads and enables pagination through a set of `GameRandomFactsVote`. */
  gameRandomFactsVotesByRoundId: GameRandomFactsVotesConnection
  /** The round's internal id. */
  id: Scalars['Int']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** The round's questioner name */
  questionerName: Scalars['String']['output']
}

/** A round of a random facts game. */
export type GameRandomFactsRoundGameRandomFactsVotesByRoundIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameRandomFactsVoteCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameRandomFactsVotesOrderBy>>
}

/**
 * A condition to be used against `GameRandomFactsRound` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type GameRandomFactsRoundCondition = {
  /** Checks for equality with the object’s `answerCorrect` field. */
  answerCorrect?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `gameId` field. */
  gameId?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `questionerName` field. */
  questionerName?: InputMaybe<Scalars['String']['input']>
}

/** An input for mutations affecting `GameRandomFactsRound` */
export type GameRandomFactsRoundInput = {
  /** The round's correct answer. */
  answerCorrect?: InputMaybe<Scalars['Int']['input']>
  /** The round's internal game id */
  gameId: Scalars['Int']['input']
  /** The round's internal id. */
  id?: InputMaybe<Scalars['Int']['input']>
  /** The round's questioner name */
  questionerName: Scalars['String']['input']
}

/** Represents an update to a `GameRandomFactsRound`. Fields that are set will be updated. */
export type GameRandomFactsRoundPatch = {
  /** The round's correct answer. */
  answerCorrect?: InputMaybe<Scalars['Int']['input']>
  /** The round's internal game id */
  gameId?: InputMaybe<Scalars['Int']['input']>
  /** The round's internal id. */
  id?: InputMaybe<Scalars['Int']['input']>
  /** The round's questioner name */
  questionerName?: InputMaybe<Scalars['String']['input']>
}

/** A connection to a list of `GameRandomFactsRound` values. */
export type GameRandomFactsRoundsConnection = {
  __typename?: 'GameRandomFactsRoundsConnection'
  /** A list of edges which contains the `GameRandomFactsRound` and cursor to aid in pagination. */
  edges: Array<GameRandomFactsRoundsEdge>
  /** A list of `GameRandomFactsRound` objects. */
  nodes: Array<Maybe<GameRandomFactsRound>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GameRandomFactsRound` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `GameRandomFactsRound` edge in the connection. */
export type GameRandomFactsRoundsEdge = {
  __typename?: 'GameRandomFactsRoundsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `GameRandomFactsRound` at the end of the edge. */
  node?: Maybe<GameRandomFactsRound>
}

/** Methods to use when ordering `GameRandomFactsRound`. */
export enum GameRandomFactsRoundsOrderBy {
  AnswerCorrectAsc = 'ANSWER_CORRECT_ASC',
  AnswerCorrectDesc = 'ANSWER_CORRECT_DESC',
  GameIdAsc = 'GAME_ID_ASC',
  GameIdDesc = 'GAME_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  QuestionerNameAsc = 'QUESTIONER_NAME_ASC',
  QuestionerNameDesc = 'QUESTIONER_NAME_DESC',
}

/** A vote of a random facts game round. */
export type GameRandomFactsVote = Node & {
  __typename?: 'GameRandomFactsVote'
  /** The vote's answer. */
  answer: Scalars['Int']['output']
  /** Reads a single `GameRandomFactsRound` that is related to this `GameRandomFactsVote`. */
  gameRandomFactsRoundByRoundId?: Maybe<GameRandomFactsRound>
  /** The vote's internal id. */
  id: Scalars['Int']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** Reads a single `Player` that is related to this `GameRandomFactsVote`. */
  playerByPlayerId?: Maybe<Player>
  /** The vote's internal player id */
  playerId: Scalars['Int']['output']
  /** The vote's internal round id. */
  roundId: Scalars['Int']['output']
}

/**
 * A condition to be used against `GameRandomFactsVote` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type GameRandomFactsVoteCondition = {
  /** Checks for equality with the object’s `answer` field. */
  answer?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `roundId` field. */
  roundId?: InputMaybe<Scalars['Int']['input']>
}

/** An input for mutations affecting `GameRandomFactsVote` */
export type GameRandomFactsVoteInput = {
  /** The vote's answer. */
  answer: Scalars['Int']['input']
  /** The vote's internal id. */
  id?: InputMaybe<Scalars['Int']['input']>
  /** The vote's internal player id */
  playerId: Scalars['Int']['input']
  /** The vote's internal round id. */
  roundId: Scalars['Int']['input']
}

/** Represents an update to a `GameRandomFactsVote`. Fields that are set will be updated. */
export type GameRandomFactsVotePatch = {
  /** The vote's answer. */
  answer?: InputMaybe<Scalars['Int']['input']>
  /** The vote's internal id. */
  id?: InputMaybe<Scalars['Int']['input']>
  /** The vote's internal player id */
  playerId?: InputMaybe<Scalars['Int']['input']>
  /** The vote's internal round id. */
  roundId?: InputMaybe<Scalars['Int']['input']>
}

/** A connection to a list of `GameRandomFactsVote` values. */
export type GameRandomFactsVotesConnection = {
  __typename?: 'GameRandomFactsVotesConnection'
  /** A list of edges which contains the `GameRandomFactsVote` and cursor to aid in pagination. */
  edges: Array<GameRandomFactsVotesEdge>
  /** A list of `GameRandomFactsVote` objects. */
  nodes: Array<Maybe<GameRandomFactsVote>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GameRandomFactsVote` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `GameRandomFactsVote` edge in the connection. */
export type GameRandomFactsVotesEdge = {
  __typename?: 'GameRandomFactsVotesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `GameRandomFactsVote` at the end of the edge. */
  node?: Maybe<GameRandomFactsVote>
}

/** Methods to use when ordering `GameRandomFactsVote`. */
export enum GameRandomFactsVotesOrderBy {
  AnswerAsc = 'ANSWER_ASC',
  AnswerDesc = 'ANSWER_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PlayerIdAsc = 'PLAYER_ID_ASC',
  PlayerIdDesc = 'PLAYER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RoundIdAsc = 'ROUND_ID_ASC',
  RoundIdDesc = 'ROUND_ID_DESC',
}

/** Game scores. */
export type GameTeamScore = Node & {
  __typename?: 'GameTeamScore'
  /** Reads a single `Game` that is related to this `GameTeamScore`. */
  gameByGameId?: Maybe<Game>
  /** The score's internal game id */
  gameId: Scalars['Int']['output']
  /** The game score's internal id. */
  id: Scalars['Int']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** The score. */
  score: Scalars['Int']['output']
  /** Reads a single `Team` that is related to this `GameTeamScore`. */
  teamByTeamId?: Maybe<Team>
  /** The score's internal team id */
  teamId: Scalars['Int']['output']
}

/**
 * A condition to be used against `GameTeamScore` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type GameTeamScoreCondition = {
  /** Checks for equality with the object’s `gameId` field. */
  gameId?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `score` field. */
  score?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `teamId` field. */
  teamId?: InputMaybe<Scalars['Int']['input']>
}

/** An input for mutations affecting `GameTeamScore` */
export type GameTeamScoreInput = {
  /** The score's internal game id */
  gameId: Scalars['Int']['input']
  /** The game score's internal id. */
  id?: InputMaybe<Scalars['Int']['input']>
  /** The score. */
  score: Scalars['Int']['input']
  /** The score's internal team id */
  teamId: Scalars['Int']['input']
}

/** Represents an update to a `GameTeamScore`. Fields that are set will be updated. */
export type GameTeamScorePatch = {
  /** The score's internal game id */
  gameId?: InputMaybe<Scalars['Int']['input']>
  /** The game score's internal id. */
  id?: InputMaybe<Scalars['Int']['input']>
  /** The score. */
  score?: InputMaybe<Scalars['Int']['input']>
  /** The score's internal team id */
  teamId?: InputMaybe<Scalars['Int']['input']>
}

/** A connection to a list of `GameTeamScore` values. */
export type GameTeamScoresConnection = {
  __typename?: 'GameTeamScoresConnection'
  /** A list of edges which contains the `GameTeamScore` and cursor to aid in pagination. */
  edges: Array<GameTeamScoresEdge>
  /** A list of `GameTeamScore` objects. */
  nodes: Array<Maybe<GameTeamScore>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GameTeamScore` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `GameTeamScore` edge in the connection. */
export type GameTeamScoresEdge = {
  __typename?: 'GameTeamScoresEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `GameTeamScore` at the end of the edge. */
  node?: Maybe<GameTeamScore>
}

/** Methods to use when ordering `GameTeamScore`. */
export enum GameTeamScoresOrderBy {
  GameIdAsc = 'GAME_ID_ASC',
  GameIdDesc = 'GAME_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ScoreAsc = 'SCORE_ASC',
  ScoreDesc = 'SCORE_DESC',
  TeamIdAsc = 'TEAM_ID_ASC',
  TeamIdDesc = 'TEAM_ID_DESC',
}

/** Available game types: estimation_numeric, random_facts, team_score. */
export enum GameType {
  EstimationNumeric = 'ESTIMATION_NUMERIC',
  RandomFacts = 'RANDOM_FACTS',
  TeamScore = 'TEAM_SCORE',
}

/** A connection to a list of `Game` values. */
export type GamesConnection = {
  __typename?: 'GamesConnection'
  /** A list of edges which contains the `Game` and cursor to aid in pagination. */
  edges: Array<GamesEdge>
  /** A list of `Game` objects. */
  nodes: Array<Maybe<Game>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Game` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Game` edge in the connection. */
export type GamesEdge = {
  __typename?: 'GamesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Game` at the end of the edge. */
  node?: Maybe<Game>
}

/** Methods to use when ordering `Game`. */
export enum GamesOrderBy {
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IsActiveAsc = 'IS_ACTIVE_ASC',
  IsActiveDesc = 'IS_ACTIVE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
}

/** A key value store. */
export type Kv = {
  __typename?: 'Kv'
  /** The key. */
  key?: Maybe<Scalars['String']['output']>
  /** A value. */
  value?: Maybe<Scalars['String']['output']>
}

/** A condition to be used against `Kv` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type KvCondition = {
  /** Checks for equality with the object’s `key` field. */
  key?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `value` field. */
  value?: InputMaybe<Scalars['String']['input']>
}

/** An input for mutations affecting `Kv` */
export type KvInput = {
  /** The key. */
  key?: InputMaybe<Scalars['String']['input']>
  /** A value. */
  value?: InputMaybe<Scalars['String']['input']>
}

/** Represents an update to a `Kv`. Fields that are set will be updated. */
export type KvPatch = {
  /** The key. */
  key?: InputMaybe<Scalars['String']['input']>
  /** A value. */
  value?: InputMaybe<Scalars['String']['input']>
}

/** A connection to a list of `Kv` values. */
export type KvsConnection = {
  __typename?: 'KvsConnection'
  /** A list of edges which contains the `Kv` and cursor to aid in pagination. */
  edges: Array<KvsEdge>
  /** A list of `Kv` objects. */
  nodes: Array<Maybe<Kv>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Kv` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Kv` edge in the connection. */
export type KvsEdge = {
  __typename?: 'KvsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Kv` at the end of the edge. */
  node?: Maybe<Kv>
}

/** Methods to use when ordering `Kv`. */
export enum KvsOrderBy {
  KeyAsc = 'KEY_ASC',
  KeyDesc = 'KEY_DESC',
  Natural = 'NATURAL',
  ValueAsc = 'VALUE_ASC',
  ValueDesc = 'VALUE_DESC',
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation'
  /** Creates a single `CharityOrganization`. */
  createCharityOrganization?: Maybe<CreateCharityOrganizationPayload>
  /** Creates a single `Event`. */
  createEvent?: Maybe<CreateEventPayload>
  /** Creates a single `Game`. */
  createGame?: Maybe<CreateGamePayload>
  /** Creates a single `GameEstimationNumericRound`. */
  createGameEstimationNumericRound?: Maybe<CreateGameEstimationNumericRoundPayload>
  /** Creates a single `GameEstimationNumericVote`. */
  createGameEstimationNumericVote?: Maybe<CreateGameEstimationNumericVotePayload>
  /** Creates a single `GameRandomFactsRound`. */
  createGameRandomFactsRound?: Maybe<CreateGameRandomFactsRoundPayload>
  /** Creates a single `GameRandomFactsVote`. */
  createGameRandomFactsVote?: Maybe<CreateGameRandomFactsVotePayload>
  /** Creates a single `GameTeamScore`. */
  createGameTeamScore?: Maybe<CreateGameTeamScorePayload>
  /** Creates a single `Kv`. */
  createKv?: Maybe<CreateKvPayload>
  /** Creates a single `Player`. */
  createPlayer?: Maybe<CreatePlayerPayload>
  /** Creates a single `Team`. */
  createTeam?: Maybe<CreateTeamPayload>
  /** Creates a single `TeamLeader`. */
  createTeamLeader?: Maybe<CreateTeamLeaderPayload>
  /** Deletes a single `CharityOrganization` using its globally unique id. */
  deleteCharityOrganization?: Maybe<DeleteCharityOrganizationPayload>
  /** Deletes a single `CharityOrganization` using a unique key. */
  deleteCharityOrganizationById?: Maybe<DeleteCharityOrganizationPayload>
  /** Deletes a single `CharityOrganization` using a unique key. */
  deleteCharityOrganizationByName?: Maybe<DeleteCharityOrganizationPayload>
  /** Deletes a single `CharityOrganization` using a unique key. */
  deleteCharityOrganizationByUrl?: Maybe<DeleteCharityOrganizationPayload>
  /** Deletes a single `Event` using its globally unique id. */
  deleteEvent?: Maybe<DeleteEventPayload>
  /** Deletes a single `Event` using a unique key. */
  deleteEventById?: Maybe<DeleteEventPayload>
  /** Deletes a single `Event` using a unique key. */
  deleteEventByName?: Maybe<DeleteEventPayload>
  /** Deletes a single `Game` using its globally unique id. */
  deleteGame?: Maybe<DeleteGamePayload>
  /** Deletes a single `Game` using a unique key. */
  deleteGameByEventIdAndName?: Maybe<DeleteGamePayload>
  /** Deletes a single `Game` using a unique key. */
  deleteGameById?: Maybe<DeleteGamePayload>
  /** Deletes a single `GameEstimationNumericRound` using its globally unique id. */
  deleteGameEstimationNumericRound?: Maybe<DeleteGameEstimationNumericRoundPayload>
  /** Deletes a single `GameEstimationNumericRound` using a unique key. */
  deleteGameEstimationNumericRoundById?: Maybe<DeleteGameEstimationNumericRoundPayload>
  /** Deletes a single `GameEstimationNumericVote` using its globally unique id. */
  deleteGameEstimationNumericVote?: Maybe<DeleteGameEstimationNumericVotePayload>
  /** Deletes a single `GameEstimationNumericVote` using a unique key. */
  deleteGameEstimationNumericVoteById?: Maybe<DeleteGameEstimationNumericVotePayload>
  /** Deletes a single `GameEstimationNumericVote` using a unique key. */
  deleteGameEstimationNumericVoteByPlayerIdAndRoundId?: Maybe<DeleteGameEstimationNumericVotePayload>
  /** Deletes a single `GameRandomFactsRound` using its globally unique id. */
  deleteGameRandomFactsRound?: Maybe<DeleteGameRandomFactsRoundPayload>
  /** Deletes a single `GameRandomFactsRound` using a unique key. */
  deleteGameRandomFactsRoundById?: Maybe<DeleteGameRandomFactsRoundPayload>
  /** Deletes a single `GameRandomFactsVote` using its globally unique id. */
  deleteGameRandomFactsVote?: Maybe<DeleteGameRandomFactsVotePayload>
  /** Deletes a single `GameRandomFactsVote` using a unique key. */
  deleteGameRandomFactsVoteById?: Maybe<DeleteGameRandomFactsVotePayload>
  /** Deletes a single `GameRandomFactsVote` using a unique key. */
  deleteGameRandomFactsVoteByPlayerIdAndRoundId?: Maybe<DeleteGameRandomFactsVotePayload>
  /** Deletes a single `GameTeamScore` using its globally unique id. */
  deleteGameTeamScore?: Maybe<DeleteGameTeamScorePayload>
  /** Deletes a single `GameTeamScore` using a unique key. */
  deleteGameTeamScoreById?: Maybe<DeleteGameTeamScorePayload>
  /** Deletes a single `Kv` using a unique key. */
  deleteKvByKey?: Maybe<DeleteKvPayload>
  /** Deletes a single `Player` using its globally unique id. */
  deletePlayer?: Maybe<DeletePlayerPayload>
  /** Deletes a single `Player` using a unique key. */
  deletePlayerById?: Maybe<DeletePlayerPayload>
  /** Deletes a single `Player` using a unique key. */
  deletePlayerByInvitationCode?: Maybe<DeletePlayerPayload>
  /** Deletes a single `Player` using a unique key. */
  deletePlayerByTeamIdAndInvitationCode?: Maybe<DeletePlayerPayload>
  /** Deletes a single `Team` using its globally unique id. */
  deleteTeam?: Maybe<DeleteTeamPayload>
  /** Deletes a single `Team` using a unique key. */
  deleteTeamById?: Maybe<DeleteTeamPayload>
  /** Deletes a single `TeamLeader` using its globally unique id. */
  deleteTeamLeader?: Maybe<DeleteTeamLeaderPayload>
  /** Deletes a single `TeamLeader` using a unique key. */
  deleteTeamLeaderById?: Maybe<DeleteTeamLeaderPayload>
  /** Updates a single `CharityOrganization` using its globally unique id and a patch. */
  updateCharityOrganization?: Maybe<UpdateCharityOrganizationPayload>
  /** Updates a single `CharityOrganization` using a unique key and a patch. */
  updateCharityOrganizationById?: Maybe<UpdateCharityOrganizationPayload>
  /** Updates a single `CharityOrganization` using a unique key and a patch. */
  updateCharityOrganizationByName?: Maybe<UpdateCharityOrganizationPayload>
  /** Updates a single `CharityOrganization` using a unique key and a patch. */
  updateCharityOrganizationByUrl?: Maybe<UpdateCharityOrganizationPayload>
  /** Updates a single `Event` using its globally unique id and a patch. */
  updateEvent?: Maybe<UpdateEventPayload>
  /** Updates a single `Event` using a unique key and a patch. */
  updateEventById?: Maybe<UpdateEventPayload>
  /** Updates a single `Event` using a unique key and a patch. */
  updateEventByName?: Maybe<UpdateEventPayload>
  /** Updates a single `Game` using its globally unique id and a patch. */
  updateGame?: Maybe<UpdateGamePayload>
  /** Updates a single `Game` using a unique key and a patch. */
  updateGameByEventIdAndName?: Maybe<UpdateGamePayload>
  /** Updates a single `Game` using a unique key and a patch. */
  updateGameById?: Maybe<UpdateGamePayload>
  /** Updates a single `GameEstimationNumericRound` using its globally unique id and a patch. */
  updateGameEstimationNumericRound?: Maybe<UpdateGameEstimationNumericRoundPayload>
  /** Updates a single `GameEstimationNumericRound` using a unique key and a patch. */
  updateGameEstimationNumericRoundById?: Maybe<UpdateGameEstimationNumericRoundPayload>
  /** Updates a single `GameEstimationNumericVote` using its globally unique id and a patch. */
  updateGameEstimationNumericVote?: Maybe<UpdateGameEstimationNumericVotePayload>
  /** Updates a single `GameEstimationNumericVote` using a unique key and a patch. */
  updateGameEstimationNumericVoteById?: Maybe<UpdateGameEstimationNumericVotePayload>
  /** Updates a single `GameEstimationNumericVote` using a unique key and a patch. */
  updateGameEstimationNumericVoteByPlayerIdAndRoundId?: Maybe<UpdateGameEstimationNumericVotePayload>
  /** Updates a single `GameRandomFactsRound` using its globally unique id and a patch. */
  updateGameRandomFactsRound?: Maybe<UpdateGameRandomFactsRoundPayload>
  /** Updates a single `GameRandomFactsRound` using a unique key and a patch. */
  updateGameRandomFactsRoundById?: Maybe<UpdateGameRandomFactsRoundPayload>
  /** Updates a single `GameRandomFactsVote` using its globally unique id and a patch. */
  updateGameRandomFactsVote?: Maybe<UpdateGameRandomFactsVotePayload>
  /** Updates a single `GameRandomFactsVote` using a unique key and a patch. */
  updateGameRandomFactsVoteById?: Maybe<UpdateGameRandomFactsVotePayload>
  /** Updates a single `GameRandomFactsVote` using a unique key and a patch. */
  updateGameRandomFactsVoteByPlayerIdAndRoundId?: Maybe<UpdateGameRandomFactsVotePayload>
  /** Updates a single `GameTeamScore` using its globally unique id and a patch. */
  updateGameTeamScore?: Maybe<UpdateGameTeamScorePayload>
  /** Updates a single `GameTeamScore` using a unique key and a patch. */
  updateGameTeamScoreById?: Maybe<UpdateGameTeamScorePayload>
  /** Updates a single `Kv` using a unique key and a patch. */
  updateKvByKey?: Maybe<UpdateKvPayload>
  /** Updates a single `Player` using its globally unique id and a patch. */
  updatePlayer?: Maybe<UpdatePlayerPayload>
  /** Updates a single `Player` using a unique key and a patch. */
  updatePlayerById?: Maybe<UpdatePlayerPayload>
  /** Updates a single `Player` using a unique key and a patch. */
  updatePlayerByInvitationCode?: Maybe<UpdatePlayerPayload>
  /** Updates a single `Player` using a unique key and a patch. */
  updatePlayerByTeamIdAndInvitationCode?: Maybe<UpdatePlayerPayload>
  /** Updates a single `Team` using its globally unique id and a patch. */
  updateTeam?: Maybe<UpdateTeamPayload>
  /** Updates a single `Team` using a unique key and a patch. */
  updateTeamById?: Maybe<UpdateTeamPayload>
  /** Updates a single `TeamLeader` using its globally unique id and a patch. */
  updateTeamLeader?: Maybe<UpdateTeamLeaderPayload>
  /** Updates a single `TeamLeader` using a unique key and a patch. */
  updateTeamLeaderById?: Maybe<UpdateTeamLeaderPayload>
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCharityOrganizationArgs = {
  input: CreateCharityOrganizationInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateEventArgs = {
  input: CreateEventInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGameArgs = {
  input: CreateGameInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGameEstimationNumericRoundArgs = {
  input: CreateGameEstimationNumericRoundInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGameEstimationNumericVoteArgs = {
  input: CreateGameEstimationNumericVoteInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGameRandomFactsRoundArgs = {
  input: CreateGameRandomFactsRoundInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGameRandomFactsVoteArgs = {
  input: CreateGameRandomFactsVoteInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGameTeamScoreArgs = {
  input: CreateGameTeamScoreInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateKvArgs = {
  input: CreateKvInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePlayerArgs = {
  input: CreatePlayerInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTeamArgs = {
  input: CreateTeamInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTeamLeaderArgs = {
  input: CreateTeamLeaderInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCharityOrganizationArgs = {
  input: DeleteCharityOrganizationInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCharityOrganizationByIdArgs = {
  input: DeleteCharityOrganizationByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCharityOrganizationByNameArgs = {
  input: DeleteCharityOrganizationByNameInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCharityOrganizationByUrlArgs = {
  input: DeleteCharityOrganizationByUrlInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventArgs = {
  input: DeleteEventInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventByIdArgs = {
  input: DeleteEventByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventByNameArgs = {
  input: DeleteEventByNameInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameArgs = {
  input: DeleteGameInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameByEventIdAndNameArgs = {
  input: DeleteGameByEventIdAndNameInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameByIdArgs = {
  input: DeleteGameByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameEstimationNumericRoundArgs = {
  input: DeleteGameEstimationNumericRoundInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameEstimationNumericRoundByIdArgs = {
  input: DeleteGameEstimationNumericRoundByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameEstimationNumericVoteArgs = {
  input: DeleteGameEstimationNumericVoteInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameEstimationNumericVoteByIdArgs = {
  input: DeleteGameEstimationNumericVoteByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameEstimationNumericVoteByPlayerIdAndRoundIdArgs = {
  input: DeleteGameEstimationNumericVoteByPlayerIdAndRoundIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameRandomFactsRoundArgs = {
  input: DeleteGameRandomFactsRoundInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameRandomFactsRoundByIdArgs = {
  input: DeleteGameRandomFactsRoundByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameRandomFactsVoteArgs = {
  input: DeleteGameRandomFactsVoteInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameRandomFactsVoteByIdArgs = {
  input: DeleteGameRandomFactsVoteByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameRandomFactsVoteByPlayerIdAndRoundIdArgs = {
  input: DeleteGameRandomFactsVoteByPlayerIdAndRoundIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameTeamScoreArgs = {
  input: DeleteGameTeamScoreInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameTeamScoreByIdArgs = {
  input: DeleteGameTeamScoreByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteKvByKeyArgs = {
  input: DeleteKvByKeyInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePlayerArgs = {
  input: DeletePlayerInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePlayerByIdArgs = {
  input: DeletePlayerByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePlayerByInvitationCodeArgs = {
  input: DeletePlayerByInvitationCodeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePlayerByTeamIdAndInvitationCodeArgs = {
  input: DeletePlayerByTeamIdAndInvitationCodeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTeamArgs = {
  input: DeleteTeamInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTeamByIdArgs = {
  input: DeleteTeamByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTeamLeaderArgs = {
  input: DeleteTeamLeaderInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTeamLeaderByIdArgs = {
  input: DeleteTeamLeaderByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCharityOrganizationArgs = {
  input: UpdateCharityOrganizationInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCharityOrganizationByIdArgs = {
  input: UpdateCharityOrganizationByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCharityOrganizationByNameArgs = {
  input: UpdateCharityOrganizationByNameInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCharityOrganizationByUrlArgs = {
  input: UpdateCharityOrganizationByUrlInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventArgs = {
  input: UpdateEventInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventByIdArgs = {
  input: UpdateEventByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventByNameArgs = {
  input: UpdateEventByNameInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameArgs = {
  input: UpdateGameInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameByEventIdAndNameArgs = {
  input: UpdateGameByEventIdAndNameInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameByIdArgs = {
  input: UpdateGameByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameEstimationNumericRoundArgs = {
  input: UpdateGameEstimationNumericRoundInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameEstimationNumericRoundByIdArgs = {
  input: UpdateGameEstimationNumericRoundByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameEstimationNumericVoteArgs = {
  input: UpdateGameEstimationNumericVoteInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameEstimationNumericVoteByIdArgs = {
  input: UpdateGameEstimationNumericVoteByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameEstimationNumericVoteByPlayerIdAndRoundIdArgs = {
  input: UpdateGameEstimationNumericVoteByPlayerIdAndRoundIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameRandomFactsRoundArgs = {
  input: UpdateGameRandomFactsRoundInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameRandomFactsRoundByIdArgs = {
  input: UpdateGameRandomFactsRoundByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameRandomFactsVoteArgs = {
  input: UpdateGameRandomFactsVoteInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameRandomFactsVoteByIdArgs = {
  input: UpdateGameRandomFactsVoteByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameRandomFactsVoteByPlayerIdAndRoundIdArgs = {
  input: UpdateGameRandomFactsVoteByPlayerIdAndRoundIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameTeamScoreArgs = {
  input: UpdateGameTeamScoreInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameTeamScoreByIdArgs = {
  input: UpdateGameTeamScoreByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateKvByKeyArgs = {
  input: UpdateKvByKeyInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePlayerArgs = {
  input: UpdatePlayerInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePlayerByIdArgs = {
  input: UpdatePlayerByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePlayerByInvitationCodeArgs = {
  input: UpdatePlayerByInvitationCodeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePlayerByTeamIdAndInvitationCodeArgs = {
  input: UpdatePlayerByTeamIdAndInvitationCodeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTeamArgs = {
  input: UpdateTeamInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTeamByIdArgs = {
  input: UpdateTeamByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTeamLeaderArgs = {
  input: UpdateTeamLeaderInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTeamLeaderByIdArgs = {
  input: UpdateTeamLeaderByIdInput
}

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']['output']>
}

/** Players. */
export type Player = Node & {
  __typename?: 'Player'
  /** Reads and enables pagination through a set of `GameEstimationNumericVote`. */
  gameEstimationNumericVotesByPlayerId: GameEstimationNumericVotesConnection
  /** Reads and enables pagination through a set of `GameRandomFactsVote`. */
  gameRandomFactsVotesByPlayerId: GameRandomFactsVotesConnection
  /** The players's internal id. */
  id: Scalars['Int']['output']
  /** The player's invitation code. */
  invitationCode: Scalars['UUID']['output']
  /** The player's name. */
  name: Scalars['String']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** Reads a single `Team` that is related to this `Player`. */
  teamByTeamId?: Maybe<Team>
  /** The player's internal team id. */
  teamId?: Maybe<Scalars['Int']['output']>
  /** Reads and enables pagination through a set of `TeamLeader`. */
  teamLeadersByPlayerId: TeamLeadersConnection
}

/** Players. */
export type PlayerGameEstimationNumericVotesByPlayerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameEstimationNumericVoteCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameEstimationNumericVotesOrderBy>>
}

/** Players. */
export type PlayerGameRandomFactsVotesByPlayerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameRandomFactsVoteCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameRandomFactsVotesOrderBy>>
}

/** Players. */
export type PlayerTeamLeadersByPlayerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<TeamLeaderCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<TeamLeadersOrderBy>>
}

/** A condition to be used against `Player` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PlayerCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `invitationCode` field. */
  invitationCode?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `teamId` field. */
  teamId?: InputMaybe<Scalars['Int']['input']>
}

/** An input for mutations affecting `Player` */
export type PlayerInput = {
  /** The players's internal id. */
  id?: InputMaybe<Scalars['Int']['input']>
  /** The player's invitation code. */
  invitationCode?: InputMaybe<Scalars['UUID']['input']>
  /** The player's name. */
  name: Scalars['String']['input']
  /** The player's internal team id. */
  teamId?: InputMaybe<Scalars['Int']['input']>
}

/** Represents an update to a `Player`. Fields that are set will be updated. */
export type PlayerPatch = {
  /** The players's internal id. */
  id?: InputMaybe<Scalars['Int']['input']>
  /** The player's invitation code. */
  invitationCode?: InputMaybe<Scalars['UUID']['input']>
  /** The player's name. */
  name?: InputMaybe<Scalars['String']['input']>
  /** The player's internal team id. */
  teamId?: InputMaybe<Scalars['Int']['input']>
}

/** A connection to a list of `Player` values. */
export type PlayersConnection = {
  __typename?: 'PlayersConnection'
  /** A list of edges which contains the `Player` and cursor to aid in pagination. */
  edges: Array<PlayersEdge>
  /** A list of `Player` objects. */
  nodes: Array<Maybe<Player>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Player` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Player` edge in the connection. */
export type PlayersEdge = {
  __typename?: 'PlayersEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Player` at the end of the edge. */
  node?: Maybe<Player>
}

/** Methods to use when ordering `Player`. */
export enum PlayersOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  InvitationCodeAsc = 'INVITATION_CODE_ASC',
  InvitationCodeDesc = 'INVITATION_CODE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TeamIdAsc = 'TEAM_ID_ASC',
  TeamIdDesc = 'TEAM_ID_DESC',
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query'
  /** Reads and enables pagination through a set of `CharityOrganization`. */
  allCharityOrganizations?: Maybe<CharityOrganizationsConnection>
  /** Reads and enables pagination through a set of `Event`. */
  allEvents?: Maybe<EventsConnection>
  /** Reads and enables pagination through a set of `GameEstimationNumericLeaderboardView`. */
  allGameEstimationNumericLeaderboardViews?: Maybe<GameEstimationNumericLeaderboardViewsConnection>
  /** Reads and enables pagination through a set of `GameEstimationNumericRound`. */
  allGameEstimationNumericRounds?: Maybe<GameEstimationNumericRoundsConnection>
  /** Reads and enables pagination through a set of `GameEstimationNumericVote`. */
  allGameEstimationNumericVotes?: Maybe<GameEstimationNumericVotesConnection>
  /** Reads and enables pagination through a set of `GameRandomFactsRound`. */
  allGameRandomFactsRounds?: Maybe<GameRandomFactsRoundsConnection>
  /** Reads and enables pagination through a set of `GameRandomFactsVote`. */
  allGameRandomFactsVotes?: Maybe<GameRandomFactsVotesConnection>
  /** Reads and enables pagination through a set of `GameTeamScore`. */
  allGameTeamScores?: Maybe<GameTeamScoresConnection>
  /** Reads and enables pagination through a set of `Game`. */
  allGames?: Maybe<GamesConnection>
  /** Reads and enables pagination through a set of `Kv`. */
  allKvs?: Maybe<KvsConnection>
  /** Reads and enables pagination through a set of `Player`. */
  allPlayers?: Maybe<PlayersConnection>
  /** Reads and enables pagination through a set of `TeamLeader`. */
  allTeamLeaders?: Maybe<TeamLeadersConnection>
  /** Reads and enables pagination through a set of `Team`. */
  allTeams?: Maybe<TeamsConnection>
  /** Reads a single `CharityOrganization` using its globally unique `ID`. */
  charityOrganization?: Maybe<CharityOrganization>
  charityOrganizationById?: Maybe<CharityOrganization>
  charityOrganizationByName?: Maybe<CharityOrganization>
  charityOrganizationByUrl?: Maybe<CharityOrganization>
  /** Reads a single `Event` using its globally unique `ID`. */
  event?: Maybe<Event>
  eventById?: Maybe<Event>
  eventByName?: Maybe<Event>
  /** Reads a single `Game` using its globally unique `ID`. */
  game?: Maybe<Game>
  gameByEventIdAndName?: Maybe<Game>
  gameById?: Maybe<Game>
  /** Reads a single `GameEstimationNumericRound` using its globally unique `ID`. */
  gameEstimationNumericRound?: Maybe<GameEstimationNumericRound>
  gameEstimationNumericRoundById?: Maybe<GameEstimationNumericRound>
  /** Reads a single `GameEstimationNumericVote` using its globally unique `ID`. */
  gameEstimationNumericVote?: Maybe<GameEstimationNumericVote>
  gameEstimationNumericVoteById?: Maybe<GameEstimationNumericVote>
  gameEstimationNumericVoteByPlayerIdAndRoundId?: Maybe<GameEstimationNumericVote>
  /** Reads a single `GameRandomFactsRound` using its globally unique `ID`. */
  gameRandomFactsRound?: Maybe<GameRandomFactsRound>
  gameRandomFactsRoundById?: Maybe<GameRandomFactsRound>
  /** Reads a single `GameRandomFactsVote` using its globally unique `ID`. */
  gameRandomFactsVote?: Maybe<GameRandomFactsVote>
  gameRandomFactsVoteById?: Maybe<GameRandomFactsVote>
  gameRandomFactsVoteByPlayerIdAndRoundId?: Maybe<GameRandomFactsVote>
  /** Reads a single `GameTeamScore` using its globally unique `ID`. */
  gameTeamScore?: Maybe<GameTeamScore>
  gameTeamScoreById?: Maybe<GameTeamScore>
  kvByKey?: Maybe<Kv>
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID']['output']
  /** Reads a single `Player` using its globally unique `ID`. */
  player?: Maybe<Player>
  playerById?: Maybe<Player>
  playerByInvitationCode?: Maybe<Player>
  /** Retrieves player data by invitation code. */
  playerByInvitationCodeFn?: Maybe<PlayersConnection>
  playerByTeamIdAndInvitationCode?: Maybe<Player>
  /** Retrieves player name by player id. */
  playerNameById?: Maybe<Scalars['String']['output']>
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query
  /** Reads a single `Team` using its globally unique `ID`. */
  team?: Maybe<Team>
  teamById?: Maybe<Team>
  /** Reads a single `TeamLeader` using its globally unique `ID`. */
  teamLeader?: Maybe<TeamLeader>
  teamLeaderById?: Maybe<TeamLeader>
  /** Retrieves the player count of each team. */
  teamPlayerCount?: Maybe<TeamPlayerCountConnection>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllCharityOrganizationsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<CharityOrganizationCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<CharityOrganizationsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGameEstimationNumericLeaderboardViewsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameEstimationNumericLeaderboardViewCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameEstimationNumericLeaderboardViewsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGameEstimationNumericRoundsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameEstimationNumericRoundCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameEstimationNumericRoundsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGameEstimationNumericVotesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameEstimationNumericVoteCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameEstimationNumericVotesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGameRandomFactsRoundsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameRandomFactsRoundCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameRandomFactsRoundsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGameRandomFactsVotesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameRandomFactsVoteCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameRandomFactsVotesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGameTeamScoresArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameTeamScoreCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameTeamScoresOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGamesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GamesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllKvsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<KvCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<KvsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllPlayersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PlayerCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<PlayersOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllTeamLeadersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<TeamLeaderCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<TeamLeadersOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllTeamsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<TeamCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<TeamsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryCharityOrganizationArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryCharityOrganizationByIdArgs = {
  id: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryCharityOrganizationByNameArgs = {
  name: Scalars['String']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryCharityOrganizationByUrlArgs = {
  url: Scalars['String']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventByIdArgs = {
  id: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventByNameArgs = {
  name: Scalars['String']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameByEventIdAndNameArgs = {
  eventId: Scalars['Int']['input']
  name: Scalars['String']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameByIdArgs = {
  id: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameEstimationNumericRoundArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameEstimationNumericRoundByIdArgs = {
  id: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameEstimationNumericVoteArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameEstimationNumericVoteByIdArgs = {
  id: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameEstimationNumericVoteByPlayerIdAndRoundIdArgs = {
  playerId: Scalars['Int']['input']
  roundId: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameRandomFactsRoundArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameRandomFactsRoundByIdArgs = {
  id: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameRandomFactsVoteArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameRandomFactsVoteByIdArgs = {
  id: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameRandomFactsVoteByPlayerIdAndRoundIdArgs = {
  playerId: Scalars['Int']['input']
  roundId: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameTeamScoreArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameTeamScoreByIdArgs = {
  id: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryKvByKeyArgs = {
  key: Scalars['String']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPlayerArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPlayerByIdArgs = {
  id: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPlayerByInvitationCodeArgs = {
  invitationCode: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPlayerByInvitationCodeFnArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  invitationCode: Scalars['UUID']['input']
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}

/** The root query type which gives access points into the data universe. */
export type QueryPlayerByTeamIdAndInvitationCodeArgs = {
  invitationCode: Scalars['UUID']['input']
  teamId: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPlayerNameByIdArgs = {
  id: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryTeamArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryTeamByIdArgs = {
  id: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryTeamLeaderArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryTeamLeaderByIdArgs = {
  id: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryTeamPlayerCountArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  eventId: Scalars['Int']['input']
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}

/** Teams. */
export type Team = Node & {
  __typename?: 'Team'
  /** Reads a single `CharityOrganization` that is related to this `Team`. */
  charityOrganizationByCharityOrganizationId?: Maybe<CharityOrganization>
  /** The team's internal charity organization id. */
  charityOrganizationId?: Maybe<Scalars['Int']['output']>
  /** The team's donation amount. */
  donationAmount?: Maybe<Scalars['Float']['output']>
  /** The team's donation url. */
  donationUrl?: Maybe<Scalars['String']['output']>
  /** The team's emoji. */
  emoji: Scalars['String']['output']
  /** Reads a single `Event` that is related to this `Team`. */
  eventByEventId?: Maybe<Event>
  /** The team's internal event reference. */
  eventId: Scalars['Int']['output']
  /** Reads and enables pagination through a set of `GameTeamScore`. */
  gameTeamScoresByTeamId: GameTeamScoresConnection
  /** The team's internal id. */
  id: Scalars['Int']['output']
  /** The team's name. */
  name: Scalars['String']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** Reads and enables pagination through a set of `Player`. */
  playersByTeamId: PlayersConnection
  /** Reads and enables pagination through a set of `TeamLeader`. */
  teamLeadersByTeamId: TeamLeadersConnection
}

/** Teams. */
export type TeamGameTeamScoresByTeamIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameTeamScoreCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameTeamScoresOrderBy>>
}

/** Teams. */
export type TeamPlayersByTeamIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PlayerCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<PlayersOrderBy>>
}

/** Teams. */
export type TeamTeamLeadersByTeamIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<TeamLeaderCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<TeamLeadersOrderBy>>
}

/** A condition to be used against `Team` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type TeamCondition = {
  /** Checks for equality with the object’s `charityOrganizationId` field. */
  charityOrganizationId?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `donationAmount` field. */
  donationAmount?: InputMaybe<Scalars['Float']['input']>
  /** Checks for equality with the object’s `donationUrl` field. */
  donationUrl?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `emoji` field. */
  emoji?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>
}

/** An input for mutations affecting `Team` */
export type TeamInput = {
  /** The team's internal charity organization id. */
  charityOrganizationId?: InputMaybe<Scalars['Int']['input']>
  /** The team's donation amount. */
  donationAmount?: InputMaybe<Scalars['Float']['input']>
  /** The team's donation url. */
  donationUrl?: InputMaybe<Scalars['String']['input']>
  /** The team's emoji. */
  emoji: Scalars['String']['input']
  /** The team's internal event reference. */
  eventId: Scalars['Int']['input']
  /** The team's internal id. */
  id?: InputMaybe<Scalars['Int']['input']>
  /** The team's name. */
  name: Scalars['String']['input']
}

/** Leaders. */
export type TeamLeader = Node & {
  __typename?: 'TeamLeader'
  /** The team leaders's internal id. */
  id: Scalars['Int']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output']
  /** Reads a single `Player` that is related to this `TeamLeader`. */
  playerByPlayerId?: Maybe<Player>
  /** The team leader's internal player id. */
  playerId: Scalars['Int']['output']
  /** Reads a single `Team` that is related to this `TeamLeader`. */
  teamByTeamId?: Maybe<Team>
  /** The team leader's internal team id. */
  teamId: Scalars['Int']['output']
}

/**
 * A condition to be used against `TeamLeader` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type TeamLeaderCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `teamId` field. */
  teamId?: InputMaybe<Scalars['Int']['input']>
}

/** An input for mutations affecting `TeamLeader` */
export type TeamLeaderInput = {
  /** The team leaders's internal id. */
  id?: InputMaybe<Scalars['Int']['input']>
  /** The team leader's internal player id. */
  playerId: Scalars['Int']['input']
  /** The team leader's internal team id. */
  teamId: Scalars['Int']['input']
}

/** Represents an update to a `TeamLeader`. Fields that are set will be updated. */
export type TeamLeaderPatch = {
  /** The team leaders's internal id. */
  id?: InputMaybe<Scalars['Int']['input']>
  /** The team leader's internal player id. */
  playerId?: InputMaybe<Scalars['Int']['input']>
  /** The team leader's internal team id. */
  teamId?: InputMaybe<Scalars['Int']['input']>
}

/** A connection to a list of `TeamLeader` values. */
export type TeamLeadersConnection = {
  __typename?: 'TeamLeadersConnection'
  /** A list of edges which contains the `TeamLeader` and cursor to aid in pagination. */
  edges: Array<TeamLeadersEdge>
  /** A list of `TeamLeader` objects. */
  nodes: Array<Maybe<TeamLeader>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `TeamLeader` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `TeamLeader` edge in the connection. */
export type TeamLeadersEdge = {
  __typename?: 'TeamLeadersEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `TeamLeader` at the end of the edge. */
  node?: Maybe<TeamLeader>
}

/** Methods to use when ordering `TeamLeader`. */
export enum TeamLeadersOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PlayerIdAsc = 'PLAYER_ID_ASC',
  PlayerIdDesc = 'PLAYER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TeamIdAsc = 'TEAM_ID_ASC',
  TeamIdDesc = 'TEAM_ID_DESC',
}

/** Represents an update to a `Team`. Fields that are set will be updated. */
export type TeamPatch = {
  /** The team's internal charity organization id. */
  charityOrganizationId?: InputMaybe<Scalars['Int']['input']>
  /** The team's donation amount. */
  donationAmount?: InputMaybe<Scalars['Float']['input']>
  /** The team's donation url. */
  donationUrl?: InputMaybe<Scalars['String']['input']>
  /** The team's emoji. */
  emoji?: InputMaybe<Scalars['String']['input']>
  /** The team's internal event reference. */
  eventId?: InputMaybe<Scalars['Int']['input']>
  /** The team's internal id. */
  id?: InputMaybe<Scalars['Int']['input']>
  /** The team's name. */
  name?: InputMaybe<Scalars['String']['input']>
}

/** A connection to a list of `TeamPlayerCountRecord` values. */
export type TeamPlayerCountConnection = {
  __typename?: 'TeamPlayerCountConnection'
  /** A list of edges which contains the `TeamPlayerCountRecord` and cursor to aid in pagination. */
  edges: Array<TeamPlayerCountEdge>
  /** A list of `TeamPlayerCountRecord` objects. */
  nodes: Array<Maybe<TeamPlayerCountRecord>>
  /** The count of *all* `TeamPlayerCountRecord` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `TeamPlayerCountRecord` edge in the connection. */
export type TeamPlayerCountEdge = {
  __typename?: 'TeamPlayerCountEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `TeamPlayerCountRecord` at the end of the edge. */
  node?: Maybe<TeamPlayerCountRecord>
}

/** The return type of our `teamPlayerCount` query. */
export type TeamPlayerCountRecord = {
  __typename?: 'TeamPlayerCountRecord'
  id?: Maybe<Scalars['Int']['output']>
  playerCount?: Maybe<Scalars['BigInt']['output']>
}

/** A connection to a list of `Team` values. */
export type TeamsConnection = {
  __typename?: 'TeamsConnection'
  /** A list of edges which contains the `Team` and cursor to aid in pagination. */
  edges: Array<TeamsEdge>
  /** A list of `Team` objects. */
  nodes: Array<Maybe<Team>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Team` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Team` edge in the connection. */
export type TeamsEdge = {
  __typename?: 'TeamsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Team` at the end of the edge. */
  node?: Maybe<Team>
}

/** Methods to use when ordering `Team`. */
export enum TeamsOrderBy {
  CharityOrganizationIdAsc = 'CHARITY_ORGANIZATION_ID_ASC',
  CharityOrganizationIdDesc = 'CHARITY_ORGANIZATION_ID_DESC',
  DonationAmountAsc = 'DONATION_AMOUNT_ASC',
  DonationAmountDesc = 'DONATION_AMOUNT_DESC',
  DonationUrlAsc = 'DONATION_URL_ASC',
  DonationUrlDesc = 'DONATION_URL_DESC',
  EmojiAsc = 'EMOJI_ASC',
  EmojiDesc = 'EMOJI_DESC',
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** All input for the `updateCharityOrganizationById` mutation. */
export type UpdateCharityOrganizationByIdInput = {
  /** An object where the defined keys will be set on the `CharityOrganization` being updated. */
  charityOrganizationPatch: CharityOrganizationPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The charity organization's internal id. */
  id: Scalars['Int']['input']
}

/** All input for the `updateCharityOrganizationByName` mutation. */
export type UpdateCharityOrganizationByNameInput = {
  /** An object where the defined keys will be set on the `CharityOrganization` being updated. */
  charityOrganizationPatch: CharityOrganizationPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The charity organization's name. */
  name: Scalars['String']['input']
}

/** All input for the `updateCharityOrganizationByUrl` mutation. */
export type UpdateCharityOrganizationByUrlInput = {
  /** An object where the defined keys will be set on the `CharityOrganization` being updated. */
  charityOrganizationPatch: CharityOrganizationPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The charity organization's url. */
  url: Scalars['String']['input']
}

/** All input for the `updateCharityOrganization` mutation. */
export type UpdateCharityOrganizationInput = {
  /** An object where the defined keys will be set on the `CharityOrganization` being updated. */
  charityOrganizationPatch: CharityOrganizationPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `CharityOrganization` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `CharityOrganization` mutation. */
export type UpdateCharityOrganizationPayload = {
  __typename?: 'UpdateCharityOrganizationPayload'
  /** The `CharityOrganization` that was updated by this mutation. */
  charityOrganization?: Maybe<CharityOrganization>
  /** An edge for our `CharityOrganization`. May be used by Relay 1. */
  charityOrganizationEdge?: Maybe<CharityOrganizationsEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `CharityOrganization` mutation. */
export type UpdateCharityOrganizationPayloadCharityOrganizationEdgeArgs = {
  orderBy?: InputMaybe<Array<CharityOrganizationsOrderBy>>
}

/** All input for the `updateEventById` mutation. */
export type UpdateEventByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Event` being updated. */
  eventPatch: EventPatch
  /** The events's internal id. */
  id: Scalars['Int']['input']
}

/** All input for the `updateEventByName` mutation. */
export type UpdateEventByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Event` being updated. */
  eventPatch: EventPatch
  name: Scalars['String']['input']
}

/** All input for the `updateEvent` mutation. */
export type UpdateEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Event` being updated. */
  eventPatch: EventPatch
  /** The globally unique `ID` which will identify a single `Event` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `Event` mutation. */
export type UpdateEventPayload = {
  __typename?: 'UpdateEventPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Event` that was updated by this mutation. */
  event?: Maybe<Event>
  /** An edge for our `Event`. May be used by Relay 1. */
  eventEdge?: Maybe<EventsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Event` mutation. */
export type UpdateEventPayloadEventEdgeArgs = {
  orderBy?: InputMaybe<Array<EventsOrderBy>>
}

/** All input for the `updateGameByEventIdAndName` mutation. */
export type UpdateGameByEventIdAndNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The game's internal event id */
  eventId: Scalars['Int']['input']
  /** An object where the defined keys will be set on the `Game` being updated. */
  gamePatch: GamePatch
  /** The games's name. */
  name: Scalars['String']['input']
}

/** All input for the `updateGameById` mutation. */
export type UpdateGameByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Game` being updated. */
  gamePatch: GamePatch
  /** The games's internal id. */
  id: Scalars['Int']['input']
}

/** All input for the `updateGameEstimationNumericRoundById` mutation. */
export type UpdateGameEstimationNumericRoundByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `GameEstimationNumericRound` being updated. */
  gameEstimationNumericRoundPatch: GameEstimationNumericRoundPatch
  id: Scalars['Int']['input']
}

/** All input for the `updateGameEstimationNumericRound` mutation. */
export type UpdateGameEstimationNumericRoundInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `GameEstimationNumericRound` being updated. */
  gameEstimationNumericRoundPatch: GameEstimationNumericRoundPatch
  /** The globally unique `ID` which will identify a single `GameEstimationNumericRound` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `GameEstimationNumericRound` mutation. */
export type UpdateGameEstimationNumericRoundPayload = {
  __typename?: 'UpdateGameEstimationNumericRoundPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Game` that is related to this `GameEstimationNumericRound`. */
  gameByGameId?: Maybe<Game>
  /** The `GameEstimationNumericRound` that was updated by this mutation. */
  gameEstimationNumericRound?: Maybe<GameEstimationNumericRound>
  /** An edge for our `GameEstimationNumericRound`. May be used by Relay 1. */
  gameEstimationNumericRoundEdge?: Maybe<GameEstimationNumericRoundsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `GameEstimationNumericRound` mutation. */
export type UpdateGameEstimationNumericRoundPayloadGameEstimationNumericRoundEdgeArgs =
  {
    orderBy?: InputMaybe<Array<GameEstimationNumericRoundsOrderBy>>
  }

/** All input for the `updateGameEstimationNumericVoteById` mutation. */
export type UpdateGameEstimationNumericVoteByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `GameEstimationNumericVote` being updated. */
  gameEstimationNumericVotePatch: GameEstimationNumericVotePatch
  id: Scalars['Int']['input']
}

/** All input for the `updateGameEstimationNumericVoteByPlayerIdAndRoundId` mutation. */
export type UpdateGameEstimationNumericVoteByPlayerIdAndRoundIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `GameEstimationNumericVote` being updated. */
  gameEstimationNumericVotePatch: GameEstimationNumericVotePatch
  /** The vote's internal player id */
  playerId: Scalars['Int']['input']
  /** The vote's internal round id. */
  roundId: Scalars['Int']['input']
}

/** All input for the `updateGameEstimationNumericVote` mutation. */
export type UpdateGameEstimationNumericVoteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `GameEstimationNumericVote` being updated. */
  gameEstimationNumericVotePatch: GameEstimationNumericVotePatch
  /** The globally unique `ID` which will identify a single `GameEstimationNumericVote` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `GameEstimationNumericVote` mutation. */
export type UpdateGameEstimationNumericVotePayload = {
  __typename?: 'UpdateGameEstimationNumericVotePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `GameEstimationNumericRound` that is related to this `GameEstimationNumericVote`. */
  gameEstimationNumericRoundByRoundId?: Maybe<GameEstimationNumericRound>
  /** The `GameEstimationNumericVote` that was updated by this mutation. */
  gameEstimationNumericVote?: Maybe<GameEstimationNumericVote>
  /** An edge for our `GameEstimationNumericVote`. May be used by Relay 1. */
  gameEstimationNumericVoteEdge?: Maybe<GameEstimationNumericVotesEdge>
  /** Reads a single `Player` that is related to this `GameEstimationNumericVote`. */
  playerByPlayerId?: Maybe<Player>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `GameEstimationNumericVote` mutation. */
export type UpdateGameEstimationNumericVotePayloadGameEstimationNumericVoteEdgeArgs =
  {
    orderBy?: InputMaybe<Array<GameEstimationNumericVotesOrderBy>>
  }

/** All input for the `updateGame` mutation. */
export type UpdateGameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Game` being updated. */
  gamePatch: GamePatch
  /** The globally unique `ID` which will identify a single `Game` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `Game` mutation. */
export type UpdateGamePayload = {
  __typename?: 'UpdateGamePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Event` that is related to this `Game`. */
  eventByEventId?: Maybe<Event>
  /** The `Game` that was updated by this mutation. */
  game?: Maybe<Game>
  /** An edge for our `Game`. May be used by Relay 1. */
  gameEdge?: Maybe<GamesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Game` mutation. */
export type UpdateGamePayloadGameEdgeArgs = {
  orderBy?: InputMaybe<Array<GamesOrderBy>>
}

/** All input for the `updateGameRandomFactsRoundById` mutation. */
export type UpdateGameRandomFactsRoundByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `GameRandomFactsRound` being updated. */
  gameRandomFactsRoundPatch: GameRandomFactsRoundPatch
  /** The round's internal id. */
  id: Scalars['Int']['input']
}

/** All input for the `updateGameRandomFactsRound` mutation. */
export type UpdateGameRandomFactsRoundInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `GameRandomFactsRound` being updated. */
  gameRandomFactsRoundPatch: GameRandomFactsRoundPatch
  /** The globally unique `ID` which will identify a single `GameRandomFactsRound` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `GameRandomFactsRound` mutation. */
export type UpdateGameRandomFactsRoundPayload = {
  __typename?: 'UpdateGameRandomFactsRoundPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Game` that is related to this `GameRandomFactsRound`. */
  gameByGameId?: Maybe<Game>
  /** The `GameRandomFactsRound` that was updated by this mutation. */
  gameRandomFactsRound?: Maybe<GameRandomFactsRound>
  /** An edge for our `GameRandomFactsRound`. May be used by Relay 1. */
  gameRandomFactsRoundEdge?: Maybe<GameRandomFactsRoundsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `GameRandomFactsRound` mutation. */
export type UpdateGameRandomFactsRoundPayloadGameRandomFactsRoundEdgeArgs = {
  orderBy?: InputMaybe<Array<GameRandomFactsRoundsOrderBy>>
}

/** All input for the `updateGameRandomFactsVoteById` mutation. */
export type UpdateGameRandomFactsVoteByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `GameRandomFactsVote` being updated. */
  gameRandomFactsVotePatch: GameRandomFactsVotePatch
  /** The vote's internal id. */
  id: Scalars['Int']['input']
}

/** All input for the `updateGameRandomFactsVoteByPlayerIdAndRoundId` mutation. */
export type UpdateGameRandomFactsVoteByPlayerIdAndRoundIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `GameRandomFactsVote` being updated. */
  gameRandomFactsVotePatch: GameRandomFactsVotePatch
  /** The vote's internal player id */
  playerId: Scalars['Int']['input']
  /** The vote's internal round id. */
  roundId: Scalars['Int']['input']
}

/** All input for the `updateGameRandomFactsVote` mutation. */
export type UpdateGameRandomFactsVoteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `GameRandomFactsVote` being updated. */
  gameRandomFactsVotePatch: GameRandomFactsVotePatch
  /** The globally unique `ID` which will identify a single `GameRandomFactsVote` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `GameRandomFactsVote` mutation. */
export type UpdateGameRandomFactsVotePayload = {
  __typename?: 'UpdateGameRandomFactsVotePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `GameRandomFactsRound` that is related to this `GameRandomFactsVote`. */
  gameRandomFactsRoundByRoundId?: Maybe<GameRandomFactsRound>
  /** The `GameRandomFactsVote` that was updated by this mutation. */
  gameRandomFactsVote?: Maybe<GameRandomFactsVote>
  /** An edge for our `GameRandomFactsVote`. May be used by Relay 1. */
  gameRandomFactsVoteEdge?: Maybe<GameRandomFactsVotesEdge>
  /** Reads a single `Player` that is related to this `GameRandomFactsVote`. */
  playerByPlayerId?: Maybe<Player>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `GameRandomFactsVote` mutation. */
export type UpdateGameRandomFactsVotePayloadGameRandomFactsVoteEdgeArgs = {
  orderBy?: InputMaybe<Array<GameRandomFactsVotesOrderBy>>
}

/** All input for the `updateGameTeamScoreById` mutation. */
export type UpdateGameTeamScoreByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `GameTeamScore` being updated. */
  gameTeamScorePatch: GameTeamScorePatch
  /** The game score's internal id. */
  id: Scalars['Int']['input']
}

/** All input for the `updateGameTeamScore` mutation. */
export type UpdateGameTeamScoreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `GameTeamScore` being updated. */
  gameTeamScorePatch: GameTeamScorePatch
  /** The globally unique `ID` which will identify a single `GameTeamScore` to be updated. */
  nodeId: Scalars['ID']['input']
}

/** The output of our update `GameTeamScore` mutation. */
export type UpdateGameTeamScorePayload = {
  __typename?: 'UpdateGameTeamScorePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Game` that is related to this `GameTeamScore`. */
  gameByGameId?: Maybe<Game>
  /** The `GameTeamScore` that was updated by this mutation. */
  gameTeamScore?: Maybe<GameTeamScore>
  /** An edge for our `GameTeamScore`. May be used by Relay 1. */
  gameTeamScoreEdge?: Maybe<GameTeamScoresEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Team` that is related to this `GameTeamScore`. */
  teamByTeamId?: Maybe<Team>
}

/** The output of our update `GameTeamScore` mutation. */
export type UpdateGameTeamScorePayloadGameTeamScoreEdgeArgs = {
  orderBy?: InputMaybe<Array<GameTeamScoresOrderBy>>
}

/** All input for the `updateKvByKey` mutation. */
export type UpdateKvByKeyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The key. */
  key: Scalars['String']['input']
  /** An object where the defined keys will be set on the `Kv` being updated. */
  kvPatch: KvPatch
}

/** The output of our update `Kv` mutation. */
export type UpdateKvPayload = {
  __typename?: 'UpdateKvPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Kv` that was updated by this mutation. */
  kv?: Maybe<Kv>
  /** An edge for our `Kv`. May be used by Relay 1. */
  kvEdge?: Maybe<KvsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Kv` mutation. */
export type UpdateKvPayloadKvEdgeArgs = {
  orderBy?: InputMaybe<Array<KvsOrderBy>>
}

/** All input for the `updatePlayerById` mutation. */
export type UpdatePlayerByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The players's internal id. */
  id: Scalars['Int']['input']
  /** An object where the defined keys will be set on the `Player` being updated. */
  playerPatch: PlayerPatch
}

/** All input for the `updatePlayerByInvitationCode` mutation. */
export type UpdatePlayerByInvitationCodeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The player's invitation code. */
  invitationCode: Scalars['UUID']['input']
  /** An object where the defined keys will be set on the `Player` being updated. */
  playerPatch: PlayerPatch
}

/** All input for the `updatePlayerByTeamIdAndInvitationCode` mutation. */
export type UpdatePlayerByTeamIdAndInvitationCodeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The player's invitation code. */
  invitationCode: Scalars['UUID']['input']
  /** An object where the defined keys will be set on the `Player` being updated. */
  playerPatch: PlayerPatch
  /** The player's internal team id. */
  teamId: Scalars['Int']['input']
}

/** All input for the `updatePlayer` mutation. */
export type UpdatePlayerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Player` to be updated. */
  nodeId: Scalars['ID']['input']
  /** An object where the defined keys will be set on the `Player` being updated. */
  playerPatch: PlayerPatch
}

/** The output of our update `Player` mutation. */
export type UpdatePlayerPayload = {
  __typename?: 'UpdatePlayerPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Player` that was updated by this mutation. */
  player?: Maybe<Player>
  /** An edge for our `Player`. May be used by Relay 1. */
  playerEdge?: Maybe<PlayersEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Team` that is related to this `Player`. */
  teamByTeamId?: Maybe<Team>
}

/** The output of our update `Player` mutation. */
export type UpdatePlayerPayloadPlayerEdgeArgs = {
  orderBy?: InputMaybe<Array<PlayersOrderBy>>
}

/** All input for the `updateTeamById` mutation. */
export type UpdateTeamByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The team's internal id. */
  id: Scalars['Int']['input']
  /** An object where the defined keys will be set on the `Team` being updated. */
  teamPatch: TeamPatch
}

/** All input for the `updateTeam` mutation. */
export type UpdateTeamInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Team` to be updated. */
  nodeId: Scalars['ID']['input']
  /** An object where the defined keys will be set on the `Team` being updated. */
  teamPatch: TeamPatch
}

/** All input for the `updateTeamLeaderById` mutation. */
export type UpdateTeamLeaderByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The team leaders's internal id. */
  id: Scalars['Int']['input']
  /** An object where the defined keys will be set on the `TeamLeader` being updated. */
  teamLeaderPatch: TeamLeaderPatch
}

/** All input for the `updateTeamLeader` mutation. */
export type UpdateTeamLeaderInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `TeamLeader` to be updated. */
  nodeId: Scalars['ID']['input']
  /** An object where the defined keys will be set on the `TeamLeader` being updated. */
  teamLeaderPatch: TeamLeaderPatch
}

/** The output of our update `TeamLeader` mutation. */
export type UpdateTeamLeaderPayload = {
  __typename?: 'UpdateTeamLeaderPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Player` that is related to this `TeamLeader`. */
  playerByPlayerId?: Maybe<Player>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Team` that is related to this `TeamLeader`. */
  teamByTeamId?: Maybe<Team>
  /** The `TeamLeader` that was updated by this mutation. */
  teamLeader?: Maybe<TeamLeader>
  /** An edge for our `TeamLeader`. May be used by Relay 1. */
  teamLeaderEdge?: Maybe<TeamLeadersEdge>
}

/** The output of our update `TeamLeader` mutation. */
export type UpdateTeamLeaderPayloadTeamLeaderEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamLeadersOrderBy>>
}

/** The output of our update `Team` mutation. */
export type UpdateTeamPayload = {
  __typename?: 'UpdateTeamPayload'
  /** Reads a single `CharityOrganization` that is related to this `Team`. */
  charityOrganizationByCharityOrganizationId?: Maybe<CharityOrganization>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Reads a single `Event` that is related to this `Team`. */
  eventByEventId?: Maybe<Event>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `Team` that was updated by this mutation. */
  team?: Maybe<Team>
  /** An edge for our `Team`. May be used by Relay 1. */
  teamEdge?: Maybe<TeamsEdge>
}

/** The output of our update `Team` mutation. */
export type UpdateTeamPayloadTeamEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamsOrderBy>>
}

export type CharityOrganizationItemFragment = {
  __typename?: 'CharityOrganization'
  nodeId: string
  id: number
  name: string
  url: string
} & { ' $fragmentName'?: 'CharityOrganizationItemFragment' }

export type EventItemFragment = {
  __typename?: 'Event'
  nodeId: string
  id: number
  name: string
  start: any
  end?: any | null
  discordInviteCode?: string | null
  streamUrl?: string | null
  commonDonationUrl?: string | null
  commonDonationIsLive?: boolean | null
  commonDonationAmount?: number | null
  gamesByEventId: {
    __typename?: 'GamesConnection'
    nodes: Array<
      | ({ __typename?: 'Game' } & {
          ' $fragmentRefs'?: { GameItemFragment: GameItemFragment }
        })
      | null
    >
  }
} & { ' $fragmentName'?: 'EventItemFragment' }

export type GameEstimationNumericRoundItemFragment = {
  __typename?: 'GameEstimationNumericRound'
  nodeId: string
  id: number
  answerCorrect?: number | null
  elementName: string
  gameId: number
} & { ' $fragmentName'?: 'GameEstimationNumericRoundItemFragment' }

export type GameEstimationNumericVoteItemFragment = {
  __typename?: 'GameEstimationNumericVote'
  nodeId: string
  id: number
  answer: number
  playerId: number
  roundId: number
} & { ' $fragmentName'?: 'GameEstimationNumericVoteItemFragment' }

export type GameItemFragment = {
  __typename?: 'Game'
  nodeId: string
  id: number
  eventId: number
  isActive: boolean
  name: string
  type: GameType
} & { ' $fragmentName'?: 'GameItemFragment' }

export type GameRandomFactsRoundItemFragment = {
  __typename?: 'GameRandomFactsRound'
  nodeId: string
  id: number
  answerCorrect?: number | null
  gameId: number
  questionerName: string
} & { ' $fragmentName'?: 'GameRandomFactsRoundItemFragment' }

export type GameRandomFactsVoteItemFragment = {
  __typename?: 'GameRandomFactsVote'
  nodeId: string
  id: number
  answer: number
  playerId: number
  roundId: number
} & { ' $fragmentName'?: 'GameRandomFactsVoteItemFragment' }

export type PlayerItemFragment = {
  __typename?: 'Player'
  nodeId: string
  id: number
  invitationCode: any
  name: string
  teamId?: number | null
} & { ' $fragmentName'?: 'PlayerItemFragment' }

export type TeamItemFragment = {
  __typename?: 'Team'
  nodeId: string
  id: number
  eventId: number
  name: string
  emoji: string
  charityOrganizationId?: number | null
  donationUrl?: string | null
  donationAmount?: number | null
  charityOrganizationByCharityOrganizationId?:
    | ({ __typename?: 'CharityOrganization' } & {
        ' $fragmentRefs'?: {
          CharityOrganizationItemFragment: CharityOrganizationItemFragment
        }
      })
    | null
} & { ' $fragmentName'?: 'TeamItemFragment' }

export type CreateGameEstimationNumericVoteMutationVariables = Exact<{
  gameEstimationNumericVoteInput: GameEstimationNumericVoteInput
}>

export type CreateGameEstimationNumericVoteMutation = {
  __typename?: 'Mutation'
  createGameEstimationNumericVote?: {
    __typename?: 'CreateGameEstimationNumericVotePayload'
    gameEstimationNumericVote?:
      | ({ __typename?: 'GameEstimationNumericVote' } & {
          ' $fragmentRefs'?: {
            GameEstimationNumericVoteItemFragment: GameEstimationNumericVoteItemFragment
          }
        })
      | null
  } | null
}

export type CreateGameRandomFactsRoundMutationVariables = Exact<{
  gameRandomFactsRoundInput: GameRandomFactsRoundInput
}>

export type CreateGameRandomFactsRoundMutation = {
  __typename?: 'Mutation'
  createGameRandomFactsRound?: {
    __typename?: 'CreateGameRandomFactsRoundPayload'
    gameRandomFactsRound?:
      | ({ __typename?: 'GameRandomFactsRound' } & {
          ' $fragmentRefs'?: {
            GameRandomFactsRoundItemFragment: GameRandomFactsRoundItemFragment
          }
        })
      | null
  } | null
}

export type CreateGameRandomFactsVoteMutationVariables = Exact<{
  gameRandomFactsVoteInput: GameRandomFactsVoteInput
}>

export type CreateGameRandomFactsVoteMutation = {
  __typename?: 'Mutation'
  createGameRandomFactsVote?: {
    __typename?: 'CreateGameRandomFactsVotePayload'
    gameRandomFactsVote?:
      | ({ __typename?: 'GameRandomFactsVote' } & {
          ' $fragmentRefs'?: {
            GameRandomFactsVoteItemFragment: GameRandomFactsVoteItemFragment
          }
        })
      | null
  } | null
}

export type UpdateGameRandomFactsRoundByIdMutationVariables = Exact<{
  gameRandomFactsRoundPatch: GameRandomFactsRoundPatch
  id: Scalars['Int']['input']
}>

export type UpdateGameRandomFactsRoundByIdMutation = {
  __typename?: 'Mutation'
  updateGameRandomFactsRoundById?: {
    __typename?: 'UpdateGameRandomFactsRoundPayload'
    gameRandomFactsRound?:
      | ({ __typename?: 'GameRandomFactsRound' } & {
          ' $fragmentRefs'?: {
            GameRandomFactsRoundItemFragment: GameRandomFactsRoundItemFragment
          }
        })
      | null
  } | null
}

export type AllEventsQueryVariables = Exact<{ [key: string]: never }>

export type AllEventsQuery = {
  __typename?: 'Query'
  allEvents?: {
    __typename?: 'EventsConnection'
    nodes: Array<
      | ({ __typename?: 'Event' } & {
          ' $fragmentRefs'?: { EventItemFragment: EventItemFragment }
        })
      | null
    >
  } | null
}

export type EventByNameQueryVariables = Exact<{
  eventName: Scalars['String']['input']
}>

export type EventByNameQuery = {
  __typename?: 'Query'
  eventByName?:
    | ({
        __typename?: 'Event'
        gamesByEventId: {
          __typename?: 'GamesConnection'
          nodes: Array<{
            __typename?: 'Game'
            nodeId: string
            id: number
            isActive: boolean
            name: string
            type: GameType
          } | null>
        }
        teamsByEventId: {
          __typename?: 'TeamsConnection'
          nodes: Array<
            | ({ __typename?: 'Team' } & {
                ' $fragmentRefs'?: { TeamItemFragment: TeamItemFragment }
              })
            | null
          >
        }
      } & { ' $fragmentRefs'?: { EventItemFragment: EventItemFragment } })
    | null
}

export type AllGameEstimationNumericLeaderboardViewsQueryVariables = Exact<{
  gameId: Scalars['Int']['input']
}>

export type AllGameEstimationNumericLeaderboardViewsQuery = {
  __typename?: 'Query'
  allGameEstimationNumericLeaderboardViews?: {
    __typename?: 'GameEstimationNumericLeaderboardViewsConnection'
    nodes: Array<{
      __typename?: 'GameEstimationNumericLeaderboardView'
      gameId?: number | null
      playerName?: string | null
      totalPoints?: number | null
    } | null>
  } | null
}

export type AllGameEstimationNumericRoundsQueryVariables = Exact<{
  gameId: Scalars['Int']['input']
}>

export type AllGameEstimationNumericRoundsQuery = {
  __typename?: 'Query'
  allGameEstimationNumericRounds?: {
    __typename?: 'GameEstimationNumericRoundsConnection'
    nodes: Array<
      | ({ __typename?: 'GameEstimationNumericRound' } & {
          ' $fragmentRefs'?: {
            GameEstimationNumericRoundItemFragment: GameEstimationNumericRoundItemFragment
          }
        })
      | null
    >
  } | null
}

export type AllGameRandomFactsRoundsQueryVariables = Exact<{
  gameId: Scalars['Int']['input']
}>

export type AllGameRandomFactsRoundsQuery = {
  __typename?: 'Query'
  allGameRandomFactsRounds?: {
    __typename?: 'GameRandomFactsRoundsConnection'
    nodes: Array<
      | ({ __typename?: 'GameRandomFactsRound' } & {
          ' $fragmentRefs'?: {
            GameRandomFactsRoundItemFragment: GameRandomFactsRoundItemFragment
          }
        })
      | null
    >
  } | null
}

export type GameRandomFactsVotesQueryVariables = Exact<{
  roundId: Scalars['Int']['input']
}>

export type GameRandomFactsVotesQuery = {
  __typename?: 'Query'
  allGameRandomFactsVotes?: {
    __typename?: 'GameRandomFactsVotesConnection'
    nodes: Array<
      | ({ __typename?: 'GameRandomFactsVote' } & {
          ' $fragmentRefs'?: {
            GameRandomFactsVoteItemFragment: GameRandomFactsVoteItemFragment
          }
        })
      | null
    >
  } | null
}

export type AllGamesQueryVariables = Exact<{
  eventId: Scalars['Int']['input']
  type?: InputMaybe<GameType>
}>

export type AllGamesQuery = {
  __typename?: 'Query'
  allGames?: {
    __typename?: 'GamesConnection'
    nodes: Array<
      | ({ __typename?: 'Game' } & {
          ' $fragmentRefs'?: { GameItemFragment: GameItemFragment }
        })
      | null
    >
  } | null
}

export type GameByIdQueryVariables = Exact<{
  gameId: Scalars['Int']['input']
}>

export type GameByIdQuery = {
  __typename?: 'Query'
  gameById?:
    | ({ __typename?: 'Game' } & {
        ' $fragmentRefs'?: { GameItemFragment: GameItemFragment }
      })
    | null
}

export type GameEstimationNumericVoteByPlayerIdAndRoundIdQueryVariables =
  Exact<{
    playerId: Scalars['Int']['input']
    roundId: Scalars['Int']['input']
  }>

export type GameEstimationNumericVoteByPlayerIdAndRoundIdQuery = {
  __typename?: 'Query'
  gameEstimationNumericVoteByPlayerIdAndRoundId?:
    | ({ __typename?: 'GameEstimationNumericVote' } & {
        ' $fragmentRefs'?: {
          GameEstimationNumericVoteItemFragment: GameEstimationNumericVoteItemFragment
        }
      })
    | null
}

export type GameRandomFactsVoteByPlayerIdAndRoundIdQueryVariables = Exact<{
  playerId: Scalars['Int']['input']
  roundId: Scalars['Int']['input']
}>

export type GameRandomFactsVoteByPlayerIdAndRoundIdQuery = {
  __typename?: 'Query'
  gameRandomFactsVoteByPlayerIdAndRoundId?:
    | ({ __typename?: 'GameRandomFactsVote' } & {
        ' $fragmentRefs'?: {
          GameRandomFactsVoteItemFragment: GameRandomFactsVoteItemFragment
        }
      })
    | null
}

export type PlayerByInvitationCodeFnQueryVariables = Exact<{
  invitationCode: Scalars['UUID']['input']
}>

export type PlayerByInvitationCodeFnQuery = {
  __typename?: 'Query'
  playerByInvitationCodeFn?: {
    __typename?: 'PlayersConnection'
    nodes: Array<{
      __typename?: 'Player'
      id: number
      name: string
      teamByTeamId?: {
        __typename?: 'Team'
        id: number
        name: string
        emoji: string
        donationUrl?: string | null
        charityOrganizationByCharityOrganizationId?: {
          __typename?: 'CharityOrganization'
          id: number
          name: string
          url: string
        } | null
        eventByEventId?: {
          __typename?: 'Event'
          id: number
          name: string
          start: any
          end?: any | null
          discordInviteCode?: string | null
          streamUrl?: string | null
          commonDonationUrl?: string | null
        } | null
      } | null
    } | null>
  } | null
}

export type PlayerNameByIdQueryVariables = Exact<{
  id: Scalars['Int']['input']
}>

export type PlayerNameByIdQuery = {
  __typename?: 'Query'
  playerNameById?: string | null
}

export type StatsQueryVariables = Exact<{
  eventId: Scalars['Int']['input']
}>

export type StatsQuery = {
  __typename?: 'Query'
  teamPlayerCount?: {
    __typename?: 'TeamPlayerCountConnection'
    nodes: Array<{
      __typename?: 'TeamPlayerCountRecord'
      id?: number | null
      playerCount?: any | null
    } | null>
  } | null
  allTeams?: {
    __typename?: 'TeamsConnection'
    totalCount: number
    nodes: Array<
      | ({ __typename?: 'Team' } & {
          ' $fragmentRefs'?: { TeamItemFragment: TeamItemFragment }
        })
      | null
    >
  } | null
  allGames?: {
    __typename?: 'GamesConnection'
    totalCount: number
    nodes: Array<{
      __typename?: 'Game'
      nodeId: string
      id: number
      name: string
      gameTeamScoresByGameId: {
        __typename?: 'GameTeamScoresConnection'
        nodes: Array<{
          __typename?: 'GameTeamScore'
          id: number
          score: number
        } | null>
      }
    } | null>
  } | null
}

export const GameItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GameItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Game' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isActive' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GameItemFragment, unknown>
export const EventItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EventItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Event' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'discordInviteCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'commonDonationUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'commonDonationIsLive' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'commonDonationAmount' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'gamesByEventId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'GameItem' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GameItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Game' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isActive' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventItemFragment, unknown>
export const GameEstimationNumericRoundItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GameEstimationNumericRoundItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GameEstimationNumericRound' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'answerCorrect' } },
          { kind: 'Field', name: { kind: 'Name', value: 'elementName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gameId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GameEstimationNumericRoundItemFragment, unknown>
export const GameEstimationNumericVoteItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GameEstimationNumericVoteItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GameEstimationNumericVote' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'answer' } },
          { kind: 'Field', name: { kind: 'Name', value: 'playerId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'roundId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GameEstimationNumericVoteItemFragment, unknown>
export const GameRandomFactsRoundItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GameRandomFactsRoundItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GameRandomFactsRound' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'answerCorrect' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gameId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'questionerName' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GameRandomFactsRoundItemFragment, unknown>
export const GameRandomFactsVoteItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GameRandomFactsVoteItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GameRandomFactsVote' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'answer' } },
          { kind: 'Field', name: { kind: 'Name', value: 'playerId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'roundId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GameRandomFactsVoteItemFragment, unknown>
export const PlayerItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PlayerItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Player' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'invitationCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'teamId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PlayerItemFragment, unknown>
export const CharityOrganizationItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CharityOrganizationItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CharityOrganization' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CharityOrganizationItemFragment, unknown>
export const TeamItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TeamItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Team' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'emoji' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'charityOrganizationId' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'donationUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'donationAmount' } },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'charityOrganizationByCharityOrganizationId',
            },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'CharityOrganizationItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CharityOrganizationItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CharityOrganization' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TeamItemFragment, unknown>
export const CreateGameEstimationNumericVoteDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createGameEstimationNumericVote' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'gameEstimationNumericVoteInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'GameEstimationNumericVoteInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createGameEstimationNumericVote' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: {
                        kind: 'Name',
                        value: 'gameEstimationNumericVote',
                      },
                      value: {
                        kind: 'Variable',
                        name: {
                          kind: 'Name',
                          value: 'gameEstimationNumericVoteInput',
                        },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'gameEstimationNumericVote' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'GameEstimationNumericVoteItem',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GameEstimationNumericVoteItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GameEstimationNumericVote' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'answer' } },
          { kind: 'Field', name: { kind: 'Name', value: 'playerId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'roundId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateGameEstimationNumericVoteMutation,
  CreateGameEstimationNumericVoteMutationVariables
>
export const CreateGameRandomFactsRoundDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createGameRandomFactsRound' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'gameRandomFactsRoundInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'GameRandomFactsRoundInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createGameRandomFactsRound' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'gameRandomFactsRound' },
                      value: {
                        kind: 'Variable',
                        name: {
                          kind: 'Name',
                          value: 'gameRandomFactsRoundInput',
                        },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'gameRandomFactsRound' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'GameRandomFactsRoundItem',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GameRandomFactsRoundItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GameRandomFactsRound' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'answerCorrect' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gameId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'questionerName' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateGameRandomFactsRoundMutation,
  CreateGameRandomFactsRoundMutationVariables
>
export const CreateGameRandomFactsVoteDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createGameRandomFactsVote' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'gameRandomFactsVoteInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'GameRandomFactsVoteInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createGameRandomFactsVote' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'gameRandomFactsVote' },
                      value: {
                        kind: 'Variable',
                        name: {
                          kind: 'Name',
                          value: 'gameRandomFactsVoteInput',
                        },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'gameRandomFactsVote' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'GameRandomFactsVoteItem',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GameRandomFactsVoteItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GameRandomFactsVote' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'answer' } },
          { kind: 'Field', name: { kind: 'Name', value: 'playerId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'roundId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateGameRandomFactsVoteMutation,
  CreateGameRandomFactsVoteMutationVariables
>
export const UpdateGameRandomFactsRoundByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateGameRandomFactsRoundById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'gameRandomFactsRoundPatch' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'GameRandomFactsRoundPatch' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateGameRandomFactsRoundById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: {
                        kind: 'Name',
                        value: 'gameRandomFactsRoundPatch',
                      },
                      value: {
                        kind: 'Variable',
                        name: {
                          kind: 'Name',
                          value: 'gameRandomFactsRoundPatch',
                        },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'gameRandomFactsRound' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'GameRandomFactsRoundItem',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GameRandomFactsRoundItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GameRandomFactsRound' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'answerCorrect' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gameId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'questionerName' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateGameRandomFactsRoundByIdMutation,
  UpdateGameRandomFactsRoundByIdMutationVariables
>
export const AllEventsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'allEvents' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allEvents' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: { kind: 'EnumValue', value: 'START_DESC' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'EventItem' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GameItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Game' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isActive' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EventItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Event' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'discordInviteCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'commonDonationUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'commonDonationIsLive' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'commonDonationAmount' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'gamesByEventId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'GameItem' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AllEventsQuery, AllEventsQueryVariables>
export const EventByNameDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'eventByName' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'eventName' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'eventByName' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'name' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'eventName' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EventItem' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'gamesByEventId' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nodes' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodeId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isActive' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'teamsByEventId' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nodes' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'TeamItem' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GameItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Game' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isActive' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CharityOrganizationItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CharityOrganization' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EventItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Event' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'discordInviteCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'commonDonationUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'commonDonationIsLive' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'commonDonationAmount' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'gamesByEventId' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'GameItem' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TeamItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Team' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'emoji' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'charityOrganizationId' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'donationUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'donationAmount' } },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'charityOrganizationByCharityOrganizationId',
            },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'CharityOrganizationItem' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventByNameQuery, EventByNameQueryVariables>
export const AllGameEstimationNumericLeaderboardViewsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'allGameEstimationNumericLeaderboardViews' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'gameId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'allGameEstimationNumericLeaderboardViews',
            },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'condition' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'gameId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'gameId' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'gameId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'playerName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalPoints' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AllGameEstimationNumericLeaderboardViewsQuery,
  AllGameEstimationNumericLeaderboardViewsQueryVariables
>
export const AllGameEstimationNumericRoundsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'allGameEstimationNumericRounds' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'gameId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allGameEstimationNumericRounds' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'condition' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'gameId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'gameId' },
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: { kind: 'EnumValue', value: 'ID_DESC' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'GameEstimationNumericRoundItem',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GameEstimationNumericRoundItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GameEstimationNumericRound' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'answerCorrect' } },
          { kind: 'Field', name: { kind: 'Name', value: 'elementName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gameId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AllGameEstimationNumericRoundsQuery,
  AllGameEstimationNumericRoundsQueryVariables
>
export const AllGameRandomFactsRoundsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'allGameRandomFactsRounds' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'gameId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allGameRandomFactsRounds' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'condition' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'gameId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'gameId' },
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: { kind: 'EnumValue', value: 'ID_DESC' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'GameRandomFactsRoundItem',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GameRandomFactsRoundItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GameRandomFactsRound' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'answerCorrect' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gameId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'questionerName' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AllGameRandomFactsRoundsQuery,
  AllGameRandomFactsRoundsQueryVariables
>
export const GameRandomFactsVotesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'gameRandomFactsVotes' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'roundId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allGameRandomFactsVotes' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'condition' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'roundId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'roundId' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'GameRandomFactsVoteItem',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GameRandomFactsVoteItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GameRandomFactsVote' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'answer' } },
          { kind: 'Field', name: { kind: 'Name', value: 'playerId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'roundId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GameRandomFactsVotesQuery,
  GameRandomFactsVotesQueryVariables
>
export const AllGamesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'allGames' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'eventId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'type' } },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'GameType' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allGames' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'condition' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'eventId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'eventId' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'type' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'type' },
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: { kind: 'EnumValue', value: 'ID_ASC' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'GameItem' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GameItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Game' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isActive' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AllGamesQuery, AllGamesQueryVariables>
export const GameByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'gameById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'gameId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'gameById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'gameId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'GameItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GameItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Game' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isActive' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GameByIdQuery, GameByIdQueryVariables>
export const GameEstimationNumericVoteByPlayerIdAndRoundIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: {
        kind: 'Name',
        value: 'gameEstimationNumericVoteByPlayerIdAndRoundId',
      },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'playerId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'roundId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'gameEstimationNumericVoteByPlayerIdAndRoundId',
            },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'playerId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'playerId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'roundId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'roundId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'GameEstimationNumericVoteItem',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GameEstimationNumericVoteItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GameEstimationNumericVote' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'answer' } },
          { kind: 'Field', name: { kind: 'Name', value: 'playerId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'roundId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GameEstimationNumericVoteByPlayerIdAndRoundIdQuery,
  GameEstimationNumericVoteByPlayerIdAndRoundIdQueryVariables
>
export const GameRandomFactsVoteByPlayerIdAndRoundIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'gameRandomFactsVoteByPlayerIdAndRoundId' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'playerId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'roundId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'gameRandomFactsVoteByPlayerIdAndRoundId',
            },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'playerId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'playerId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'roundId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'roundId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'GameRandomFactsVoteItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GameRandomFactsVoteItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GameRandomFactsVote' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'answer' } },
          { kind: 'Field', name: { kind: 'Name', value: 'playerId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'roundId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GameRandomFactsVoteByPlayerIdAndRoundIdQuery,
  GameRandomFactsVoteByPlayerIdAndRoundIdQueryVariables
>
export const PlayerByInvitationCodeFnDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'playerByInvitationCodeFn' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'invitationCode' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'playerByInvitationCodeFn' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'invitationCode' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'invitationCode' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'teamByTeamId' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'emoji' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value:
                                  'charityOrganizationByCharityOrganizationId',
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'url' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'donationUrl' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'eventByEventId' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'start' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'end' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'discordInviteCode',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'streamUrl' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'commonDonationUrl',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  PlayerByInvitationCodeFnQuery,
  PlayerByInvitationCodeFnQueryVariables
>
export const PlayerNameByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'playerNameById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'playerNameById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PlayerNameByIdQuery, PlayerNameByIdQueryVariables>
export const StatsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'stats' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'eventId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'teamPlayerCount' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'eventId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'eventId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'playerCount' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allTeams' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'condition' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'eventId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'eventId' },
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: { kind: 'EnumValue', value: 'ID_ASC' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'TeamItem' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'totalCount' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allGames' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'condition' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'eventId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'eventId' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nodeId' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'gameTeamScoresByGameId' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'orderBy' },
                            value: { kind: 'EnumValue', value: 'TEAM_ID_ASC' },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'score' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'totalCount' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CharityOrganizationItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CharityOrganization' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TeamItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Team' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'eventId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'emoji' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'charityOrganizationId' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'donationUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'donationAmount' } },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'charityOrganizationByCharityOrganizationId',
            },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'CharityOrganizationItem' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<StatsQuery, StatsQueryVariables>
