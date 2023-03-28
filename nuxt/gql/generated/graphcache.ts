/* eslint-disable no-use-before-define */
import {
  Resolver as GraphCacheResolver,
  UpdateResolver as GraphCacheUpdateResolver,
  OptimisticMutationResolver as GraphCacheOptimisticMutationResolver,
  StorageAdapter as GraphCacheStorageAdapter,
  CacheExchangeOpts,
} from '@urql/exchange-graphcache'

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
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  BigInt: any
  Cursor: any
  Datetime: any
  UUID: any
}

/** Charity organizations. */
export type CharityOrganization = Node & {
  __typename?: 'CharityOrganization'
  /** The charity organization's department. */
  department?: Maybe<Scalars['String']>
  /** The charity organization's internal id. */
  id: Scalars['Int']
  /** The charity organization's name. */
  name: Scalars['String']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  /** Reads and enables pagination through a set of `Team`. */
  teamsByCharityOrganizationId: TeamsConnection
  /** The charity organization's url. */
  url: Scalars['String']
}

/** Charity organizations. */
export type CharityOrganizationTeamsByCharityOrganizationIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<TeamCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<TeamsOrderBy>>
}

/**
 * A condition to be used against `CharityOrganization` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type CharityOrganizationCondition = {
  /** Checks for equality with the object’s `department` field. */
  department?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `url` field. */
  url?: InputMaybe<Scalars['String']>
}

/** An input for mutations affecting `CharityOrganization` */
export type CharityOrganizationInput = {
  /** The charity organization's department. */
  department?: InputMaybe<Scalars['String']>
  /** The charity organization's internal id. */
  id?: InputMaybe<Scalars['Int']>
  /** The charity organization's name. */
  name: Scalars['String']
  /** The charity organization's url. */
  url: Scalars['String']
}

/** Represents an update to a `CharityOrganization`. Fields that are set will be updated. */
export type CharityOrganizationPatch = {
  /** The charity organization's department. */
  department?: InputMaybe<Scalars['String']>
  /** The charity organization's internal id. */
  id?: InputMaybe<Scalars['Int']>
  /** The charity organization's name. */
  name?: InputMaybe<Scalars['String']>
  /** The charity organization's url. */
  url?: InputMaybe<Scalars['String']>
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
  totalCount: Scalars['Int']
}

/** A `CharityOrganization` edge in the connection. */
export type CharityOrganizationsEdge = {
  __typename?: 'CharityOrganizationsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
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
  clientMutationId?: InputMaybe<Scalars['String']>
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
  clientMutationId?: Maybe<Scalars['String']>
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
  clientMutationId?: InputMaybe<Scalars['String']>
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
  clientMutationId?: Maybe<Scalars['String']>
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

/** All input for the create `Game` mutation. */
export type CreateGameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
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
  clientMutationId?: Maybe<Scalars['String']>
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
  clientMutationId?: InputMaybe<Scalars['String']>
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
  clientMutationId?: Maybe<Scalars['String']>
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
  clientMutationId?: InputMaybe<Scalars['String']>
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
  clientMutationId?: Maybe<Scalars['String']>
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
  clientMutationId?: InputMaybe<Scalars['String']>
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
  clientMutationId?: Maybe<Scalars['String']>
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
  clientMutationId?: InputMaybe<Scalars['String']>
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
  clientMutationId?: Maybe<Scalars['String']>
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
  clientMutationId?: InputMaybe<Scalars['String']>
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
  clientMutationId?: Maybe<Scalars['String']>
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
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The `Team` to be created by this mutation. */
  team: TeamInput
}

/** All input for the create `TeamLeader` mutation. */
export type CreateTeamLeaderInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
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
  clientMutationId?: Maybe<Scalars['String']>
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
  clientMutationId?: Maybe<Scalars['String']>
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
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The charity organization's internal id. */
  id: Scalars['Int']
}

/** All input for the `deleteCharityOrganizationByName` mutation. */
export type DeleteCharityOrganizationByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The charity organization's name. */
  name: Scalars['String']
}

/** All input for the `deleteCharityOrganizationByUrl` mutation. */
export type DeleteCharityOrganizationByUrlInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The charity organization's url. */
  url: Scalars['String']
}

/** All input for the `deleteCharityOrganization` mutation. */
export type DeleteCharityOrganizationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `CharityOrganization` to be deleted. */
  nodeId: Scalars['ID']
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
  clientMutationId?: Maybe<Scalars['String']>
  deletedCharityOrganizationId?: Maybe<Scalars['ID']>
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
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The events's internal id. */
  id: Scalars['Int']
}

/** All input for the `deleteEventByName` mutation. */
export type DeleteEventByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  name: Scalars['String']
}

/** All input for the `deleteEvent` mutation. */
export type DeleteEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `Event` to be deleted. */
  nodeId: Scalars['ID']
}

/** The output of our delete `Event` mutation. */
export type DeleteEventPayload = {
  __typename?: 'DeleteEventPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedEventId?: Maybe<Scalars['ID']>
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
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The game's internal event id */
  eventId: Scalars['Int']
  /** The games's name. */
  name: Scalars['String']
}

/** All input for the `deleteGameById` mutation. */
export type DeleteGameByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The games's internal id. */
  id: Scalars['Int']
}

/** All input for the `deleteGame` mutation. */
export type DeleteGameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `Game` to be deleted. */
  nodeId: Scalars['ID']
}

/** The output of our delete `Game` mutation. */
export type DeleteGamePayload = {
  __typename?: 'DeleteGamePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedGameId?: Maybe<Scalars['ID']>
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
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The round's internal id. */
  id: Scalars['Int']
}

/** All input for the `deleteGameRandomFactsRound` mutation. */
export type DeleteGameRandomFactsRoundInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `GameRandomFactsRound` to be deleted. */
  nodeId: Scalars['ID']
}

/** The output of our delete `GameRandomFactsRound` mutation. */
export type DeleteGameRandomFactsRoundPayload = {
  __typename?: 'DeleteGameRandomFactsRoundPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedGameRandomFactsRoundId?: Maybe<Scalars['ID']>
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
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The vote's internal id. */
  id: Scalars['Int']
}

/** All input for the `deleteGameRandomFactsVoteByPlayerIdAndRoundId` mutation. */
export type DeleteGameRandomFactsVoteByPlayerIdAndRoundIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The vote's internal player id */
  playerId: Scalars['Int']
  /** The vote's internal round id. */
  roundId: Scalars['Int']
}

/** All input for the `deleteGameRandomFactsVote` mutation. */
export type DeleteGameRandomFactsVoteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `GameRandomFactsVote` to be deleted. */
  nodeId: Scalars['ID']
}

/** The output of our delete `GameRandomFactsVote` mutation. */
export type DeleteGameRandomFactsVotePayload = {
  __typename?: 'DeleteGameRandomFactsVotePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedGameRandomFactsVoteId?: Maybe<Scalars['ID']>
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
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The game score's internal id. */
  id: Scalars['Int']
}

/** All input for the `deleteGameTeamScore` mutation. */
export type DeleteGameTeamScoreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `GameTeamScore` to be deleted. */
  nodeId: Scalars['ID']
}

/** The output of our delete `GameTeamScore` mutation. */
export type DeleteGameTeamScorePayload = {
  __typename?: 'DeleteGameTeamScorePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedGameTeamScoreId?: Maybe<Scalars['ID']>
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
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The key. */
  key: Scalars['String']
}

/** The output of our delete `Kv` mutation. */
export type DeleteKvPayload = {
  __typename?: 'DeleteKvPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedKvId?: Maybe<Scalars['ID']>
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
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The players's internal id. */
  id: Scalars['Int']
}

/** All input for the `deletePlayerByInvitationCode` mutation. */
export type DeletePlayerByInvitationCodeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The player's invitation code. */
  invitationCode: Scalars['UUID']
}

/** All input for the `deletePlayerByTeamIdAndInvitationCode` mutation. */
export type DeletePlayerByTeamIdAndInvitationCodeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The player's invitation code. */
  invitationCode: Scalars['UUID']
  /** The player's internal team id. */
  teamId: Scalars['Int']
}

/** All input for the `deletePlayer` mutation. */
export type DeletePlayerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `Player` to be deleted. */
  nodeId: Scalars['ID']
}

/** The output of our delete `Player` mutation. */
export type DeletePlayerPayload = {
  __typename?: 'DeletePlayerPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedPlayerId?: Maybe<Scalars['ID']>
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
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The team's internal id. */
  id: Scalars['Int']
}

/** All input for the `deleteTeam` mutation. */
export type DeleteTeamInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `Team` to be deleted. */
  nodeId: Scalars['ID']
}

/** All input for the `deleteTeamLeaderById` mutation. */
export type DeleteTeamLeaderByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The team leaders's internal id. */
  id: Scalars['Int']
}

/** All input for the `deleteTeamLeader` mutation. */
export type DeleteTeamLeaderInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `TeamLeader` to be deleted. */
  nodeId: Scalars['ID']
}

/** The output of our delete `TeamLeader` mutation. */
export type DeleteTeamLeaderPayload = {
  __typename?: 'DeleteTeamLeaderPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedTeamLeaderId?: Maybe<Scalars['ID']>
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
  clientMutationId?: Maybe<Scalars['String']>
  deletedTeamId?: Maybe<Scalars['ID']>
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
  commonDonationAmount?: Maybe<Scalars['Float']>
  /** Indicates whether the event's common donations are featured in the stream. */
  commonDonationIsLive?: Maybe<Scalars['Boolean']>
  /** The event's common donation url. */
  commonDonationUrl?: Maybe<Scalars['String']>
  /** The event's discord code. */
  discordInviteCode?: Maybe<Scalars['String']>
  /** The event's end timestamp. */
  end?: Maybe<Scalars['Datetime']>
  /** Reads and enables pagination through a set of `Game`. */
  gamesByEventId: GamesConnection
  /** The events's internal id. */
  id: Scalars['Int']
  name: Scalars['String']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  /** The event's start timestamp. */
  start: Scalars['Datetime']
  /** The event's stream url. */
  streamUrl?: Maybe<Scalars['String']>
  /** Reads and enables pagination through a set of `Team`. */
  teamsByEventId: TeamsConnection
}

/** Events. */
export type EventGamesByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GameCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GamesOrderBy>>
}

/** Events. */
export type EventTeamsByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<TeamCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<TeamsOrderBy>>
}

/** A condition to be used against `Event` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type EventCondition = {
  /** Checks for equality with the object’s `commonDonationAmount` field. */
  commonDonationAmount?: InputMaybe<Scalars['Float']>
  /** Checks for equality with the object’s `commonDonationIsLive` field. */
  commonDonationIsLive?: InputMaybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `commonDonationUrl` field. */
  commonDonationUrl?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `discordInviteCode` field. */
  discordInviteCode?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `end` field. */
  end?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `start` field. */
  start?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `streamUrl` field. */
  streamUrl?: InputMaybe<Scalars['String']>
}

/** An input for mutations affecting `Event` */
export type EventInput = {
  /** The event's common donation amount. */
  commonDonationAmount?: InputMaybe<Scalars['Float']>
  /** Indicates whether the event's common donations are featured in the stream. */
  commonDonationIsLive?: InputMaybe<Scalars['Boolean']>
  /** The event's common donation url. */
  commonDonationUrl?: InputMaybe<Scalars['String']>
  /** The event's discord code. */
  discordInviteCode?: InputMaybe<Scalars['String']>
  /** The event's end timestamp. */
  end?: InputMaybe<Scalars['Datetime']>
  /** The events's internal id. */
  id?: InputMaybe<Scalars['Int']>
  name: Scalars['String']
  /** The event's start timestamp. */
  start: Scalars['Datetime']
  /** The event's stream url. */
  streamUrl?: InputMaybe<Scalars['String']>
}

/** Represents an update to a `Event`. Fields that are set will be updated. */
export type EventPatch = {
  /** The event's common donation amount. */
  commonDonationAmount?: InputMaybe<Scalars['Float']>
  /** Indicates whether the event's common donations are featured in the stream. */
  commonDonationIsLive?: InputMaybe<Scalars['Boolean']>
  /** The event's common donation url. */
  commonDonationUrl?: InputMaybe<Scalars['String']>
  /** The event's discord code. */
  discordInviteCode?: InputMaybe<Scalars['String']>
  /** The event's end timestamp. */
  end?: InputMaybe<Scalars['Datetime']>
  /** The events's internal id. */
  id?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  /** The event's start timestamp. */
  start?: InputMaybe<Scalars['Datetime']>
  /** The event's stream url. */
  streamUrl?: InputMaybe<Scalars['String']>
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
  totalCount: Scalars['Int']
}

/** A `Event` edge in the connection. */
export type EventsEdge = {
  __typename?: 'EventsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
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
  eventId: Scalars['Int']
  /** Reads and enables pagination through a set of `GameRandomFactsRound`. */
  gameRandomFactsRoundsByGameId: GameRandomFactsRoundsConnection
  /** Reads and enables pagination through a set of `GameTeamScore`. */
  gameTeamScoresByGameId: GameTeamScoresConnection
  /** The games's internal id. */
  id: Scalars['Int']
  /** The games's activeness. */
  isActive: Scalars['Boolean']
  /** The games's name. */
  name: Scalars['String']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  /** The game's type */
  type: GameType
}

/** Games. */
export type GameGameRandomFactsRoundsByGameIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GameRandomFactsRoundCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GameRandomFactsRoundsOrderBy>>
}

/** Games. */
export type GameGameTeamScoresByGameIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GameTeamScoreCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GameTeamScoresOrderBy>>
}

/** A condition to be used against `Game` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type GameCondition = {
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `isActive` field. */
  isActive?: InputMaybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<GameType>
}

/** An input for mutations affecting `Game` */
export type GameInput = {
  /** The game's internal event id */
  eventId: Scalars['Int']
  /** The games's internal id. */
  id?: InputMaybe<Scalars['Int']>
  /** The games's activeness. */
  isActive?: InputMaybe<Scalars['Boolean']>
  /** The games's name. */
  name: Scalars['String']
  /** The game's type */
  type: GameType
}

/** Represents an update to a `Game`. Fields that are set will be updated. */
export type GamePatch = {
  /** The game's internal event id */
  eventId?: InputMaybe<Scalars['Int']>
  /** The games's internal id. */
  id?: InputMaybe<Scalars['Int']>
  /** The games's activeness. */
  isActive?: InputMaybe<Scalars['Boolean']>
  /** The games's name. */
  name?: InputMaybe<Scalars['String']>
  /** The game's type */
  type?: InputMaybe<GameType>
}

/** A round of a random facts game. */
export type GameRandomFactsRound = Node & {
  __typename?: 'GameRandomFactsRound'
  /** The round's correct answer. */
  answerCorrect?: Maybe<Scalars['Int']>
  /** Reads a single `Game` that is related to this `GameRandomFactsRound`. */
  gameByGameId?: Maybe<Game>
  /** The round's internal game id */
  gameId: Scalars['Int']
  /** Reads and enables pagination through a set of `GameRandomFactsVote`. */
  gameRandomFactsVotesByRoundId: GameRandomFactsVotesConnection
  /** The round's internal id. */
  id: Scalars['Int']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  /** The round's questioner name */
  questionerName: Scalars['String']
}

/** A round of a random facts game. */
export type GameRandomFactsRoundGameRandomFactsVotesByRoundIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GameRandomFactsVoteCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GameRandomFactsVotesOrderBy>>
}

/**
 * A condition to be used against `GameRandomFactsRound` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type GameRandomFactsRoundCondition = {
  /** Checks for equality with the object’s `answerCorrect` field. */
  answerCorrect?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `gameId` field. */
  gameId?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `questionerName` field. */
  questionerName?: InputMaybe<Scalars['String']>
}

/** An input for mutations affecting `GameRandomFactsRound` */
export type GameRandomFactsRoundInput = {
  /** The round's correct answer. */
  answerCorrect?: InputMaybe<Scalars['Int']>
  /** The round's internal game id */
  gameId: Scalars['Int']
  /** The round's internal id. */
  id?: InputMaybe<Scalars['Int']>
  /** The round's questioner name */
  questionerName: Scalars['String']
}

/** Represents an update to a `GameRandomFactsRound`. Fields that are set will be updated. */
export type GameRandomFactsRoundPatch = {
  /** The round's correct answer. */
  answerCorrect?: InputMaybe<Scalars['Int']>
  /** The round's internal game id */
  gameId?: InputMaybe<Scalars['Int']>
  /** The round's internal id. */
  id?: InputMaybe<Scalars['Int']>
  /** The round's questioner name */
  questionerName?: InputMaybe<Scalars['String']>
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
  totalCount: Scalars['Int']
}

/** A `GameRandomFactsRound` edge in the connection. */
export type GameRandomFactsRoundsEdge = {
  __typename?: 'GameRandomFactsRoundsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
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
  answer: Scalars['Int']
  /** Reads a single `GameRandomFactsRound` that is related to this `GameRandomFactsVote`. */
  gameRandomFactsRoundByRoundId?: Maybe<GameRandomFactsRound>
  /** The vote's internal id. */
  id: Scalars['Int']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  /** Reads a single `Player` that is related to this `GameRandomFactsVote`. */
  playerByPlayerId?: Maybe<Player>
  /** The vote's internal player id */
  playerId: Scalars['Int']
  /** The vote's internal round id. */
  roundId: Scalars['Int']
}

/**
 * A condition to be used against `GameRandomFactsVote` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type GameRandomFactsVoteCondition = {
  /** Checks for equality with the object’s `answer` field. */
  answer?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `roundId` field. */
  roundId?: InputMaybe<Scalars['Int']>
}

/** An input for mutations affecting `GameRandomFactsVote` */
export type GameRandomFactsVoteInput = {
  /** The vote's answer. */
  answer: Scalars['Int']
  /** The vote's internal id. */
  id?: InputMaybe<Scalars['Int']>
  /** The vote's internal player id */
  playerId: Scalars['Int']
  /** The vote's internal round id. */
  roundId: Scalars['Int']
}

/** Represents an update to a `GameRandomFactsVote`. Fields that are set will be updated. */
export type GameRandomFactsVotePatch = {
  /** The vote's answer. */
  answer?: InputMaybe<Scalars['Int']>
  /** The vote's internal id. */
  id?: InputMaybe<Scalars['Int']>
  /** The vote's internal player id */
  playerId?: InputMaybe<Scalars['Int']>
  /** The vote's internal round id. */
  roundId?: InputMaybe<Scalars['Int']>
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
  totalCount: Scalars['Int']
}

/** A `GameRandomFactsVote` edge in the connection. */
export type GameRandomFactsVotesEdge = {
  __typename?: 'GameRandomFactsVotesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
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
  gameId: Scalars['Int']
  /** The game score's internal id. */
  id: Scalars['Int']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  /** The score. */
  score: Scalars['Int']
  /** Reads a single `Team` that is related to this `GameTeamScore`. */
  teamByTeamId?: Maybe<Team>
  /** The score's internal team id */
  teamId: Scalars['Int']
}

/**
 * A condition to be used against `GameTeamScore` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type GameTeamScoreCondition = {
  /** Checks for equality with the object’s `gameId` field. */
  gameId?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `score` field. */
  score?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `teamId` field. */
  teamId?: InputMaybe<Scalars['Int']>
}

/** An input for mutations affecting `GameTeamScore` */
export type GameTeamScoreInput = {
  /** The score's internal game id */
  gameId: Scalars['Int']
  /** The game score's internal id. */
  id?: InputMaybe<Scalars['Int']>
  /** The score. */
  score: Scalars['Int']
  /** The score's internal team id */
  teamId: Scalars['Int']
}

/** Represents an update to a `GameTeamScore`. Fields that are set will be updated. */
export type GameTeamScorePatch = {
  /** The score's internal game id */
  gameId?: InputMaybe<Scalars['Int']>
  /** The game score's internal id. */
  id?: InputMaybe<Scalars['Int']>
  /** The score. */
  score?: InputMaybe<Scalars['Int']>
  /** The score's internal team id */
  teamId?: InputMaybe<Scalars['Int']>
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
  totalCount: Scalars['Int']
}

/** A `GameTeamScore` edge in the connection. */
export type GameTeamScoresEdge = {
  __typename?: 'GameTeamScoresEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
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

/** Available game types: random_facts, team_score. */
export enum GameType {
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
  totalCount: Scalars['Int']
}

/** A `Game` edge in the connection. */
export type GamesEdge = {
  __typename?: 'GamesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
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
  key?: Maybe<Scalars['String']>
  /** A value. */
  value?: Maybe<Scalars['String']>
}

/** A condition to be used against `Kv` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type KvCondition = {
  /** Checks for equality with the object’s `key` field. */
  key?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `value` field. */
  value?: InputMaybe<Scalars['String']>
}

/** An input for mutations affecting `Kv` */
export type KvInput = {
  /** The key. */
  key?: InputMaybe<Scalars['String']>
  /** A value. */
  value?: InputMaybe<Scalars['String']>
}

/** Represents an update to a `Kv`. Fields that are set will be updated. */
export type KvPatch = {
  /** The key. */
  key?: InputMaybe<Scalars['String']>
  /** A value. */
  value?: InputMaybe<Scalars['String']>
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
  totalCount: Scalars['Int']
}

/** A `Kv` edge in the connection. */
export type KvsEdge = {
  __typename?: 'KvsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
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
  nodeId: Scalars['ID']
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>
}

/** Players. */
export type Player = Node & {
  __typename?: 'Player'
  /** Reads and enables pagination through a set of `GameRandomFactsVote`. */
  gameRandomFactsVotesByPlayerId: GameRandomFactsVotesConnection
  /** The players's internal id. */
  id: Scalars['Int']
  /** The player's invitation code. */
  invitationCode: Scalars['UUID']
  /** The player's name. */
  name: Scalars['String']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  /** Reads a single `Team` that is related to this `Player`. */
  teamByTeamId?: Maybe<Team>
  /** The player's internal team id. */
  teamId?: Maybe<Scalars['Int']>
  /** Reads and enables pagination through a set of `TeamLeader`. */
  teamLeadersByPlayerId: TeamLeadersConnection
}

/** Players. */
export type PlayerGameRandomFactsVotesByPlayerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GameRandomFactsVoteCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GameRandomFactsVotesOrderBy>>
}

/** Players. */
export type PlayerTeamLeadersByPlayerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<TeamLeaderCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<TeamLeadersOrderBy>>
}

/** A condition to be used against `Player` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PlayerCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `invitationCode` field. */
  invitationCode?: InputMaybe<Scalars['UUID']>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `teamId` field. */
  teamId?: InputMaybe<Scalars['Int']>
}

/** An input for mutations affecting `Player` */
export type PlayerInput = {
  /** The players's internal id. */
  id?: InputMaybe<Scalars['Int']>
  /** The player's invitation code. */
  invitationCode?: InputMaybe<Scalars['UUID']>
  /** The player's name. */
  name: Scalars['String']
  /** The player's internal team id. */
  teamId?: InputMaybe<Scalars['Int']>
}

/** Represents an update to a `Player`. Fields that are set will be updated. */
export type PlayerPatch = {
  /** The players's internal id. */
  id?: InputMaybe<Scalars['Int']>
  /** The player's invitation code. */
  invitationCode?: InputMaybe<Scalars['UUID']>
  /** The player's name. */
  name?: InputMaybe<Scalars['String']>
  /** The player's internal team id. */
  teamId?: InputMaybe<Scalars['Int']>
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
  totalCount: Scalars['Int']
}

/** A `Player` edge in the connection. */
export type PlayersEdge = {
  __typename?: 'PlayersEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
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
  nodeId: Scalars['ID']
  /** Reads a single `Player` using its globally unique `ID`. */
  player?: Maybe<Player>
  playerById?: Maybe<Player>
  playerByInvitationCode?: Maybe<Player>
  /** Retrieves player data by invitation code. */
  playerByInvitationCodeFn?: Maybe<PlayersConnection>
  playerByTeamIdAndInvitationCode?: Maybe<Player>
  /** Retrieves player name by player id. */
  playerNameById?: Maybe<Scalars['String']>
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
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<CharityOrganizationCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CharityOrganizationsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<EventCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<EventsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGameRandomFactsRoundsArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GameRandomFactsRoundCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GameRandomFactsRoundsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGameRandomFactsVotesArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GameRandomFactsVoteCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GameRandomFactsVotesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGameTeamScoresArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GameTeamScoreCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GameTeamScoresOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGamesArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GameCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GamesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllKvsArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<KvCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<KvsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllPlayersArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<PlayerCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<PlayersOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllTeamLeadersArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<TeamLeaderCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<TeamLeadersOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllTeamsArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<TeamCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<TeamsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryCharityOrganizationArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryCharityOrganizationByIdArgs = {
  id: Scalars['Int']
}

/** The root query type which gives access points into the data universe. */
export type QueryCharityOrganizationByNameArgs = {
  name: Scalars['String']
}

/** The root query type which gives access points into the data universe. */
export type QueryCharityOrganizationByUrlArgs = {
  url: Scalars['String']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventByIdArgs = {
  id: Scalars['Int']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventByNameArgs = {
  name: Scalars['String']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameByEventIdAndNameArgs = {
  eventId: Scalars['Int']
  name: Scalars['String']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameByIdArgs = {
  id: Scalars['Int']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameRandomFactsRoundArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameRandomFactsRoundByIdArgs = {
  id: Scalars['Int']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameRandomFactsVoteArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameRandomFactsVoteByIdArgs = {
  id: Scalars['Int']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameRandomFactsVoteByPlayerIdAndRoundIdArgs = {
  playerId: Scalars['Int']
  roundId: Scalars['Int']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameTeamScoreArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameTeamScoreByIdArgs = {
  id: Scalars['Int']
}

/** The root query type which gives access points into the data universe. */
export type QueryKvByKeyArgs = {
  key: Scalars['String']
}

/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryPlayerArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryPlayerByIdArgs = {
  id: Scalars['Int']
}

/** The root query type which gives access points into the data universe. */
export type QueryPlayerByInvitationCodeArgs = {
  invitationCode: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryPlayerByInvitationCodeFnArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  first?: InputMaybe<Scalars['Int']>
  invitationCode: Scalars['UUID']
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

/** The root query type which gives access points into the data universe. */
export type QueryPlayerByTeamIdAndInvitationCodeArgs = {
  invitationCode: Scalars['UUID']
  teamId: Scalars['Int']
}

/** The root query type which gives access points into the data universe. */
export type QueryPlayerNameByIdArgs = {
  id: Scalars['Int']
}

/** The root query type which gives access points into the data universe. */
export type QueryTeamArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryTeamByIdArgs = {
  id: Scalars['Int']
}

/** The root query type which gives access points into the data universe. */
export type QueryTeamLeaderArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryTeamLeaderByIdArgs = {
  id: Scalars['Int']
}

/** The root query type which gives access points into the data universe. */
export type QueryTeamPlayerCountArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  eventId: Scalars['Int']
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

/** Teams. */
export type Team = Node & {
  __typename?: 'Team'
  /** Reads a single `CharityOrganization` that is related to this `Team`. */
  charityOrganizationByCharityOrganizationId?: Maybe<CharityOrganization>
  /** The team's internal charity organization id. */
  charityOrganizationId?: Maybe<Scalars['Int']>
  /** The team's donation amount. */
  donationAmount?: Maybe<Scalars['Float']>
  /** The team's donation url. */
  donationUrl?: Maybe<Scalars['String']>
  /** The team's emoji. */
  emoji: Scalars['String']
  /** Reads a single `Event` that is related to this `Team`. */
  eventByEventId?: Maybe<Event>
  /** The team's internal event reference. */
  eventId: Scalars['Int']
  /** Reads and enables pagination through a set of `GameTeamScore`. */
  gameTeamScoresByTeamId: GameTeamScoresConnection
  /** The team's internal id. */
  id: Scalars['Int']
  /** The team's name. */
  name: Scalars['String']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  /** Reads and enables pagination through a set of `Player`. */
  playersByTeamId: PlayersConnection
  /** Reads and enables pagination through a set of `TeamLeader`. */
  teamLeadersByTeamId: TeamLeadersConnection
}

/** Teams. */
export type TeamGameTeamScoresByTeamIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GameTeamScoreCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GameTeamScoresOrderBy>>
}

/** Teams. */
export type TeamPlayersByTeamIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<PlayerCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<PlayersOrderBy>>
}

/** Teams. */
export type TeamTeamLeadersByTeamIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<TeamLeaderCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<TeamLeadersOrderBy>>
}

/** A condition to be used against `Team` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type TeamCondition = {
  /** Checks for equality with the object’s `charityOrganizationId` field. */
  charityOrganizationId?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `donationAmount` field. */
  donationAmount?: InputMaybe<Scalars['Float']>
  /** Checks for equality with the object’s `donationUrl` field. */
  donationUrl?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `emoji` field. */
  emoji?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>
}

/** An input for mutations affecting `Team` */
export type TeamInput = {
  /** The team's internal charity organization id. */
  charityOrganizationId?: InputMaybe<Scalars['Int']>
  /** The team's donation amount. */
  donationAmount?: InputMaybe<Scalars['Float']>
  /** The team's donation url. */
  donationUrl?: InputMaybe<Scalars['String']>
  /** The team's emoji. */
  emoji: Scalars['String']
  /** The team's internal event reference. */
  eventId: Scalars['Int']
  /** The team's internal id. */
  id?: InputMaybe<Scalars['Int']>
  /** The team's name. */
  name: Scalars['String']
}

/** Leaders. */
export type TeamLeader = Node & {
  __typename?: 'TeamLeader'
  /** The team leaders's internal id. */
  id: Scalars['Int']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  /** Reads a single `Player` that is related to this `TeamLeader`. */
  playerByPlayerId?: Maybe<Player>
  /** The team leader's internal player id. */
  playerId: Scalars['Int']
  /** Reads a single `Team` that is related to this `TeamLeader`. */
  teamByTeamId?: Maybe<Team>
  /** The team leader's internal team id. */
  teamId: Scalars['Int']
}

/**
 * A condition to be used against `TeamLeader` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type TeamLeaderCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `teamId` field. */
  teamId?: InputMaybe<Scalars['Int']>
}

/** An input for mutations affecting `TeamLeader` */
export type TeamLeaderInput = {
  /** The team leaders's internal id. */
  id?: InputMaybe<Scalars['Int']>
  /** The team leader's internal player id. */
  playerId: Scalars['Int']
  /** The team leader's internal team id. */
  teamId: Scalars['Int']
}

/** Represents an update to a `TeamLeader`. Fields that are set will be updated. */
export type TeamLeaderPatch = {
  /** The team leaders's internal id. */
  id?: InputMaybe<Scalars['Int']>
  /** The team leader's internal player id. */
  playerId?: InputMaybe<Scalars['Int']>
  /** The team leader's internal team id. */
  teamId?: InputMaybe<Scalars['Int']>
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
  totalCount: Scalars['Int']
}

/** A `TeamLeader` edge in the connection. */
export type TeamLeadersEdge = {
  __typename?: 'TeamLeadersEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
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
  charityOrganizationId?: InputMaybe<Scalars['Int']>
  /** The team's donation amount. */
  donationAmount?: InputMaybe<Scalars['Float']>
  /** The team's donation url. */
  donationUrl?: InputMaybe<Scalars['String']>
  /** The team's emoji. */
  emoji?: InputMaybe<Scalars['String']>
  /** The team's internal event reference. */
  eventId?: InputMaybe<Scalars['Int']>
  /** The team's internal id. */
  id?: InputMaybe<Scalars['Int']>
  /** The team's name. */
  name?: InputMaybe<Scalars['String']>
}

/** A connection to a list of `TeamPlayerCountRecord` values. */
export type TeamPlayerCountConnection = {
  __typename?: 'TeamPlayerCountConnection'
  /** A list of edges which contains the `TeamPlayerCountRecord` and cursor to aid in pagination. */
  edges: Array<TeamPlayerCountEdge>
  /** A list of `TeamPlayerCountRecord` objects. */
  nodes: Array<Maybe<TeamPlayerCountRecord>>
  /** The count of *all* `TeamPlayerCountRecord` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `TeamPlayerCountRecord` edge in the connection. */
export type TeamPlayerCountEdge = {
  __typename?: 'TeamPlayerCountEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `TeamPlayerCountRecord` at the end of the edge. */
  node?: Maybe<TeamPlayerCountRecord>
}

/** The return type of our `teamPlayerCount` query. */
export type TeamPlayerCountRecord = {
  __typename?: 'TeamPlayerCountRecord'
  id?: Maybe<Scalars['Int']>
  playerCount?: Maybe<Scalars['BigInt']>
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
  totalCount: Scalars['Int']
}

/** A `Team` edge in the connection. */
export type TeamsEdge = {
  __typename?: 'TeamsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
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
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The charity organization's internal id. */
  id: Scalars['Int']
}

/** All input for the `updateCharityOrganizationByName` mutation. */
export type UpdateCharityOrganizationByNameInput = {
  /** An object where the defined keys will be set on the `CharityOrganization` being updated. */
  charityOrganizationPatch: CharityOrganizationPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The charity organization's name. */
  name: Scalars['String']
}

/** All input for the `updateCharityOrganizationByUrl` mutation. */
export type UpdateCharityOrganizationByUrlInput = {
  /** An object where the defined keys will be set on the `CharityOrganization` being updated. */
  charityOrganizationPatch: CharityOrganizationPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The charity organization's url. */
  url: Scalars['String']
}

/** All input for the `updateCharityOrganization` mutation. */
export type UpdateCharityOrganizationInput = {
  /** An object where the defined keys will be set on the `CharityOrganization` being updated. */
  charityOrganizationPatch: CharityOrganizationPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `CharityOrganization` to be updated. */
  nodeId: Scalars['ID']
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
  clientMutationId?: Maybe<Scalars['String']>
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
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `Event` being updated. */
  eventPatch: EventPatch
  /** The events's internal id. */
  id: Scalars['Int']
}

/** All input for the `updateEventByName` mutation. */
export type UpdateEventByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `Event` being updated. */
  eventPatch: EventPatch
  name: Scalars['String']
}

/** All input for the `updateEvent` mutation. */
export type UpdateEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `Event` being updated. */
  eventPatch: EventPatch
  /** The globally unique `ID` which will identify a single `Event` to be updated. */
  nodeId: Scalars['ID']
}

/** The output of our update `Event` mutation. */
export type UpdateEventPayload = {
  __typename?: 'UpdateEventPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
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
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The game's internal event id */
  eventId: Scalars['Int']
  /** An object where the defined keys will be set on the `Game` being updated. */
  gamePatch: GamePatch
  /** The games's name. */
  name: Scalars['String']
}

/** All input for the `updateGameById` mutation. */
export type UpdateGameByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `Game` being updated. */
  gamePatch: GamePatch
  /** The games's internal id. */
  id: Scalars['Int']
}

/** All input for the `updateGame` mutation. */
export type UpdateGameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `Game` being updated. */
  gamePatch: GamePatch
  /** The globally unique `ID` which will identify a single `Game` to be updated. */
  nodeId: Scalars['ID']
}

/** The output of our update `Game` mutation. */
export type UpdateGamePayload = {
  __typename?: 'UpdateGamePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
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
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `GameRandomFactsRound` being updated. */
  gameRandomFactsRoundPatch: GameRandomFactsRoundPatch
  /** The round's internal id. */
  id: Scalars['Int']
}

/** All input for the `updateGameRandomFactsRound` mutation. */
export type UpdateGameRandomFactsRoundInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `GameRandomFactsRound` being updated. */
  gameRandomFactsRoundPatch: GameRandomFactsRoundPatch
  /** The globally unique `ID` which will identify a single `GameRandomFactsRound` to be updated. */
  nodeId: Scalars['ID']
}

/** The output of our update `GameRandomFactsRound` mutation. */
export type UpdateGameRandomFactsRoundPayload = {
  __typename?: 'UpdateGameRandomFactsRoundPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
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
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `GameRandomFactsVote` being updated. */
  gameRandomFactsVotePatch: GameRandomFactsVotePatch
  /** The vote's internal id. */
  id: Scalars['Int']
}

/** All input for the `updateGameRandomFactsVoteByPlayerIdAndRoundId` mutation. */
export type UpdateGameRandomFactsVoteByPlayerIdAndRoundIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `GameRandomFactsVote` being updated. */
  gameRandomFactsVotePatch: GameRandomFactsVotePatch
  /** The vote's internal player id */
  playerId: Scalars['Int']
  /** The vote's internal round id. */
  roundId: Scalars['Int']
}

/** All input for the `updateGameRandomFactsVote` mutation. */
export type UpdateGameRandomFactsVoteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `GameRandomFactsVote` being updated. */
  gameRandomFactsVotePatch: GameRandomFactsVotePatch
  /** The globally unique `ID` which will identify a single `GameRandomFactsVote` to be updated. */
  nodeId: Scalars['ID']
}

/** The output of our update `GameRandomFactsVote` mutation. */
export type UpdateGameRandomFactsVotePayload = {
  __typename?: 'UpdateGameRandomFactsVotePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
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
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `GameTeamScore` being updated. */
  gameTeamScorePatch: GameTeamScorePatch
  /** The game score's internal id. */
  id: Scalars['Int']
}

/** All input for the `updateGameTeamScore` mutation. */
export type UpdateGameTeamScoreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `GameTeamScore` being updated. */
  gameTeamScorePatch: GameTeamScorePatch
  /** The globally unique `ID` which will identify a single `GameTeamScore` to be updated. */
  nodeId: Scalars['ID']
}

/** The output of our update `GameTeamScore` mutation. */
export type UpdateGameTeamScorePayload = {
  __typename?: 'UpdateGameTeamScorePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
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
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The key. */
  key: Scalars['String']
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
  clientMutationId?: Maybe<Scalars['String']>
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
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The players's internal id. */
  id: Scalars['Int']
  /** An object where the defined keys will be set on the `Player` being updated. */
  playerPatch: PlayerPatch
}

/** All input for the `updatePlayerByInvitationCode` mutation. */
export type UpdatePlayerByInvitationCodeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The player's invitation code. */
  invitationCode: Scalars['UUID']
  /** An object where the defined keys will be set on the `Player` being updated. */
  playerPatch: PlayerPatch
}

/** All input for the `updatePlayerByTeamIdAndInvitationCode` mutation. */
export type UpdatePlayerByTeamIdAndInvitationCodeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The player's invitation code. */
  invitationCode: Scalars['UUID']
  /** An object where the defined keys will be set on the `Player` being updated. */
  playerPatch: PlayerPatch
  /** The player's internal team id. */
  teamId: Scalars['Int']
}

/** All input for the `updatePlayer` mutation. */
export type UpdatePlayerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `Player` to be updated. */
  nodeId: Scalars['ID']
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
  clientMutationId?: Maybe<Scalars['String']>
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
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The team's internal id. */
  id: Scalars['Int']
  /** An object where the defined keys will be set on the `Team` being updated. */
  teamPatch: TeamPatch
}

/** All input for the `updateTeam` mutation. */
export type UpdateTeamInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `Team` to be updated. */
  nodeId: Scalars['ID']
  /** An object where the defined keys will be set on the `Team` being updated. */
  teamPatch: TeamPatch
}

/** All input for the `updateTeamLeaderById` mutation. */
export type UpdateTeamLeaderByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The team leaders's internal id. */
  id: Scalars['Int']
  /** An object where the defined keys will be set on the `TeamLeader` being updated. */
  teamLeaderPatch: TeamLeaderPatch
}

/** All input for the `updateTeamLeader` mutation. */
export type UpdateTeamLeaderInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `TeamLeader` to be updated. */
  nodeId: Scalars['ID']
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
  clientMutationId?: Maybe<Scalars['String']>
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
  clientMutationId?: Maybe<Scalars['String']>
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

export type WithTypename<T extends { __typename?: any }> = Partial<T> & {
  __typename: NonNullable<T['__typename']>
}

export type GraphCacheKeysConfig = {
  CharityOrganization?: (
    data: WithTypename<CharityOrganization>
  ) => null | string
  CharityOrganizationsConnection?: (
    data: WithTypename<CharityOrganizationsConnection>
  ) => null | string
  CharityOrganizationsEdge?: (
    data: WithTypename<CharityOrganizationsEdge>
  ) => null | string
  CreateCharityOrganizationPayload?: (
    data: WithTypename<CreateCharityOrganizationPayload>
  ) => null | string
  CreateEventPayload?: (data: WithTypename<CreateEventPayload>) => null | string
  CreateGamePayload?: (data: WithTypename<CreateGamePayload>) => null | string
  CreateGameRandomFactsRoundPayload?: (
    data: WithTypename<CreateGameRandomFactsRoundPayload>
  ) => null | string
  CreateGameRandomFactsVotePayload?: (
    data: WithTypename<CreateGameRandomFactsVotePayload>
  ) => null | string
  CreateGameTeamScorePayload?: (
    data: WithTypename<CreateGameTeamScorePayload>
  ) => null | string
  CreateKvPayload?: (data: WithTypename<CreateKvPayload>) => null | string
  CreatePlayerPayload?: (
    data: WithTypename<CreatePlayerPayload>
  ) => null | string
  CreateTeamLeaderPayload?: (
    data: WithTypename<CreateTeamLeaderPayload>
  ) => null | string
  CreateTeamPayload?: (data: WithTypename<CreateTeamPayload>) => null | string
  DeleteCharityOrganizationPayload?: (
    data: WithTypename<DeleteCharityOrganizationPayload>
  ) => null | string
  DeleteEventPayload?: (data: WithTypename<DeleteEventPayload>) => null | string
  DeleteGamePayload?: (data: WithTypename<DeleteGamePayload>) => null | string
  DeleteGameRandomFactsRoundPayload?: (
    data: WithTypename<DeleteGameRandomFactsRoundPayload>
  ) => null | string
  DeleteGameRandomFactsVotePayload?: (
    data: WithTypename<DeleteGameRandomFactsVotePayload>
  ) => null | string
  DeleteGameTeamScorePayload?: (
    data: WithTypename<DeleteGameTeamScorePayload>
  ) => null | string
  DeleteKvPayload?: (data: WithTypename<DeleteKvPayload>) => null | string
  DeletePlayerPayload?: (
    data: WithTypename<DeletePlayerPayload>
  ) => null | string
  DeleteTeamLeaderPayload?: (
    data: WithTypename<DeleteTeamLeaderPayload>
  ) => null | string
  DeleteTeamPayload?: (data: WithTypename<DeleteTeamPayload>) => null | string
  Event?: (data: WithTypename<Event>) => null | string
  EventsConnection?: (data: WithTypename<EventsConnection>) => null | string
  EventsEdge?: (data: WithTypename<EventsEdge>) => null | string
  Game?: (data: WithTypename<Game>) => null | string
  GameRandomFactsRound?: (
    data: WithTypename<GameRandomFactsRound>
  ) => null | string
  GameRandomFactsRoundsConnection?: (
    data: WithTypename<GameRandomFactsRoundsConnection>
  ) => null | string
  GameRandomFactsRoundsEdge?: (
    data: WithTypename<GameRandomFactsRoundsEdge>
  ) => null | string
  GameRandomFactsVote?: (
    data: WithTypename<GameRandomFactsVote>
  ) => null | string
  GameRandomFactsVotesConnection?: (
    data: WithTypename<GameRandomFactsVotesConnection>
  ) => null | string
  GameRandomFactsVotesEdge?: (
    data: WithTypename<GameRandomFactsVotesEdge>
  ) => null | string
  GameTeamScore?: (data: WithTypename<GameTeamScore>) => null | string
  GameTeamScoresConnection?: (
    data: WithTypename<GameTeamScoresConnection>
  ) => null | string
  GameTeamScoresEdge?: (data: WithTypename<GameTeamScoresEdge>) => null | string
  GamesConnection?: (data: WithTypename<GamesConnection>) => null | string
  GamesEdge?: (data: WithTypename<GamesEdge>) => null | string
  Kv?: (data: WithTypename<Kv>) => null | string
  KvsConnection?: (data: WithTypename<KvsConnection>) => null | string
  KvsEdge?: (data: WithTypename<KvsEdge>) => null | string
  PageInfo?: (data: WithTypename<PageInfo>) => null | string
  Player?: (data: WithTypename<Player>) => null | string
  PlayersConnection?: (data: WithTypename<PlayersConnection>) => null | string
  PlayersEdge?: (data: WithTypename<PlayersEdge>) => null | string
  Team?: (data: WithTypename<Team>) => null | string
  TeamLeader?: (data: WithTypename<TeamLeader>) => null | string
  TeamLeadersConnection?: (
    data: WithTypename<TeamLeadersConnection>
  ) => null | string
  TeamLeadersEdge?: (data: WithTypename<TeamLeadersEdge>) => null | string
  TeamPlayerCountConnection?: (
    data: WithTypename<TeamPlayerCountConnection>
  ) => null | string
  TeamPlayerCountEdge?: (
    data: WithTypename<TeamPlayerCountEdge>
  ) => null | string
  TeamPlayerCountRecord?: (
    data: WithTypename<TeamPlayerCountRecord>
  ) => null | string
  TeamsConnection?: (data: WithTypename<TeamsConnection>) => null | string
  TeamsEdge?: (data: WithTypename<TeamsEdge>) => null | string
  UpdateCharityOrganizationPayload?: (
    data: WithTypename<UpdateCharityOrganizationPayload>
  ) => null | string
  UpdateEventPayload?: (data: WithTypename<UpdateEventPayload>) => null | string
  UpdateGamePayload?: (data: WithTypename<UpdateGamePayload>) => null | string
  UpdateGameRandomFactsRoundPayload?: (
    data: WithTypename<UpdateGameRandomFactsRoundPayload>
  ) => null | string
  UpdateGameRandomFactsVotePayload?: (
    data: WithTypename<UpdateGameRandomFactsVotePayload>
  ) => null | string
  UpdateGameTeamScorePayload?: (
    data: WithTypename<UpdateGameTeamScorePayload>
  ) => null | string
  UpdateKvPayload?: (data: WithTypename<UpdateKvPayload>) => null | string
  UpdatePlayerPayload?: (
    data: WithTypename<UpdatePlayerPayload>
  ) => null | string
  UpdateTeamLeaderPayload?: (
    data: WithTypename<UpdateTeamLeaderPayload>
  ) => null | string
  UpdateTeamPayload?: (data: WithTypename<UpdateTeamPayload>) => null | string
}

export type GraphCacheResolvers = {
  Query?: {
    allCharityOrganizations?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllCharityOrganizationsArgs,
      WithTypename<CharityOrganizationsConnection> | string
    >
    allEvents?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllEventsArgs,
      WithTypename<EventsConnection> | string
    >
    allGameRandomFactsRounds?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllGameRandomFactsRoundsArgs,
      WithTypename<GameRandomFactsRoundsConnection> | string
    >
    allGameRandomFactsVotes?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllGameRandomFactsVotesArgs,
      WithTypename<GameRandomFactsVotesConnection> | string
    >
    allGameTeamScores?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllGameTeamScoresArgs,
      WithTypename<GameTeamScoresConnection> | string
    >
    allGames?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllGamesArgs,
      WithTypename<GamesConnection> | string
    >
    allKvs?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllKvsArgs,
      WithTypename<KvsConnection> | string
    >
    allPlayers?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllPlayersArgs,
      WithTypename<PlayersConnection> | string
    >
    allTeamLeaders?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllTeamLeadersArgs,
      WithTypename<TeamLeadersConnection> | string
    >
    allTeams?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllTeamsArgs,
      WithTypename<TeamsConnection> | string
    >
    charityOrganization?: GraphCacheResolver<
      WithTypename<Query>,
      QueryCharityOrganizationArgs,
      WithTypename<CharityOrganization> | string
    >
    charityOrganizationById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryCharityOrganizationByIdArgs,
      WithTypename<CharityOrganization> | string
    >
    charityOrganizationByName?: GraphCacheResolver<
      WithTypename<Query>,
      QueryCharityOrganizationByNameArgs,
      WithTypename<CharityOrganization> | string
    >
    charityOrganizationByUrl?: GraphCacheResolver<
      WithTypename<Query>,
      QueryCharityOrganizationByUrlArgs,
      WithTypename<CharityOrganization> | string
    >
    event?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventArgs,
      WithTypename<Event> | string
    >
    eventById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventByIdArgs,
      WithTypename<Event> | string
    >
    eventByName?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventByNameArgs,
      WithTypename<Event> | string
    >
    game?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGameArgs,
      WithTypename<Game> | string
    >
    gameByEventIdAndName?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGameByEventIdAndNameArgs,
      WithTypename<Game> | string
    >
    gameById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGameByIdArgs,
      WithTypename<Game> | string
    >
    gameRandomFactsRound?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGameRandomFactsRoundArgs,
      WithTypename<GameRandomFactsRound> | string
    >
    gameRandomFactsRoundById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGameRandomFactsRoundByIdArgs,
      WithTypename<GameRandomFactsRound> | string
    >
    gameRandomFactsVote?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGameRandomFactsVoteArgs,
      WithTypename<GameRandomFactsVote> | string
    >
    gameRandomFactsVoteById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGameRandomFactsVoteByIdArgs,
      WithTypename<GameRandomFactsVote> | string
    >
    gameRandomFactsVoteByPlayerIdAndRoundId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGameRandomFactsVoteByPlayerIdAndRoundIdArgs,
      WithTypename<GameRandomFactsVote> | string
    >
    gameTeamScore?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGameTeamScoreArgs,
      WithTypename<GameTeamScore> | string
    >
    gameTeamScoreById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGameTeamScoreByIdArgs,
      WithTypename<GameTeamScore> | string
    >
    kvByKey?: GraphCacheResolver<
      WithTypename<Query>,
      QueryKvByKeyArgs,
      WithTypename<Kv> | string
    >
    node?: GraphCacheResolver<
      WithTypename<Query>,
      QueryNodeArgs,
      | WithTypename<CharityOrganization>
      | WithTypename<Event>
      | WithTypename<Game>
      | WithTypename<GameRandomFactsRound>
      | WithTypename<GameRandomFactsVote>
      | WithTypename<GameTeamScore>
      | WithTypename<Player>
      | WithTypename<Query>
      | WithTypename<Team>
      | WithTypename<TeamLeader>
      | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<Query>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    player?: GraphCacheResolver<
      WithTypename<Query>,
      QueryPlayerArgs,
      WithTypename<Player> | string
    >
    playerById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryPlayerByIdArgs,
      WithTypename<Player> | string
    >
    playerByInvitationCode?: GraphCacheResolver<
      WithTypename<Query>,
      QueryPlayerByInvitationCodeArgs,
      WithTypename<Player> | string
    >
    playerByInvitationCodeFn?: GraphCacheResolver<
      WithTypename<Query>,
      QueryPlayerByInvitationCodeFnArgs,
      WithTypename<PlayersConnection> | string
    >
    playerByTeamIdAndInvitationCode?: GraphCacheResolver<
      WithTypename<Query>,
      QueryPlayerByTeamIdAndInvitationCodeArgs,
      WithTypename<Player> | string
    >
    playerNameById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryPlayerNameByIdArgs,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<Query>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    team?: GraphCacheResolver<
      WithTypename<Query>,
      QueryTeamArgs,
      WithTypename<Team> | string
    >
    teamById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryTeamByIdArgs,
      WithTypename<Team> | string
    >
    teamLeader?: GraphCacheResolver<
      WithTypename<Query>,
      QueryTeamLeaderArgs,
      WithTypename<TeamLeader> | string
    >
    teamLeaderById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryTeamLeaderByIdArgs,
      WithTypename<TeamLeader> | string
    >
    teamPlayerCount?: GraphCacheResolver<
      WithTypename<Query>,
      QueryTeamPlayerCountArgs,
      WithTypename<TeamPlayerCountConnection> | string
    >
  }
  CharityOrganization?: {
    department?: GraphCacheResolver<
      WithTypename<CharityOrganization>,
      Record<string, never>,
      Scalars['String'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<CharityOrganization>,
      Record<string, never>,
      Scalars['Int'] | string
    >
    name?: GraphCacheResolver<
      WithTypename<CharityOrganization>,
      Record<string, never>,
      Scalars['String'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<CharityOrganization>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    teamsByCharityOrganizationId?: GraphCacheResolver<
      WithTypename<CharityOrganization>,
      CharityOrganizationTeamsByCharityOrganizationIdArgs,
      WithTypename<TeamsConnection> | string
    >
    url?: GraphCacheResolver<
      WithTypename<CharityOrganization>,
      Record<string, never>,
      Scalars['String'] | string
    >
  }
  CharityOrganizationsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<CharityOrganizationsConnection>,
      Record<string, never>,
      Array<WithTypename<CharityOrganizationsEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<CharityOrganizationsConnection>,
      Record<string, never>,
      Array<WithTypename<CharityOrganization> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<CharityOrganizationsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<CharityOrganizationsConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  CharityOrganizationsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<CharityOrganizationsEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<CharityOrganizationsEdge>,
      Record<string, never>,
      WithTypename<CharityOrganization> | string
    >
  }
  CreateCharityOrganizationPayload?: {
    charityOrganization?: GraphCacheResolver<
      WithTypename<CreateCharityOrganizationPayload>,
      Record<string, never>,
      WithTypename<CharityOrganization> | string
    >
    charityOrganizationEdge?: GraphCacheResolver<
      WithTypename<CreateCharityOrganizationPayload>,
      CreateCharityOrganizationPayloadCharityOrganizationEdgeArgs,
      WithTypename<CharityOrganizationsEdge> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateCharityOrganizationPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateCharityOrganizationPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateEventPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateEventPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    event?: GraphCacheResolver<
      WithTypename<CreateEventPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventEdge?: GraphCacheResolver<
      WithTypename<CreateEventPayload>,
      CreateEventPayloadEventEdgeArgs,
      WithTypename<EventsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateEventPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateGamePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateGamePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<CreateGamePayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    game?: GraphCacheResolver<
      WithTypename<CreateGamePayload>,
      Record<string, never>,
      WithTypename<Game> | string
    >
    gameEdge?: GraphCacheResolver<
      WithTypename<CreateGamePayload>,
      CreateGamePayloadGameEdgeArgs,
      WithTypename<GamesEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateGamePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateGameRandomFactsRoundPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateGameRandomFactsRoundPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    gameByGameId?: GraphCacheResolver<
      WithTypename<CreateGameRandomFactsRoundPayload>,
      Record<string, never>,
      WithTypename<Game> | string
    >
    gameRandomFactsRound?: GraphCacheResolver<
      WithTypename<CreateGameRandomFactsRoundPayload>,
      Record<string, never>,
      WithTypename<GameRandomFactsRound> | string
    >
    gameRandomFactsRoundEdge?: GraphCacheResolver<
      WithTypename<CreateGameRandomFactsRoundPayload>,
      CreateGameRandomFactsRoundPayloadGameRandomFactsRoundEdgeArgs,
      WithTypename<GameRandomFactsRoundsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateGameRandomFactsRoundPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateGameRandomFactsVotePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateGameRandomFactsVotePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    gameRandomFactsRoundByRoundId?: GraphCacheResolver<
      WithTypename<CreateGameRandomFactsVotePayload>,
      Record<string, never>,
      WithTypename<GameRandomFactsRound> | string
    >
    gameRandomFactsVote?: GraphCacheResolver<
      WithTypename<CreateGameRandomFactsVotePayload>,
      Record<string, never>,
      WithTypename<GameRandomFactsVote> | string
    >
    gameRandomFactsVoteEdge?: GraphCacheResolver<
      WithTypename<CreateGameRandomFactsVotePayload>,
      CreateGameRandomFactsVotePayloadGameRandomFactsVoteEdgeArgs,
      WithTypename<GameRandomFactsVotesEdge> | string
    >
    playerByPlayerId?: GraphCacheResolver<
      WithTypename<CreateGameRandomFactsVotePayload>,
      Record<string, never>,
      WithTypename<Player> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateGameRandomFactsVotePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateGameTeamScorePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateGameTeamScorePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    gameByGameId?: GraphCacheResolver<
      WithTypename<CreateGameTeamScorePayload>,
      Record<string, never>,
      WithTypename<Game> | string
    >
    gameTeamScore?: GraphCacheResolver<
      WithTypename<CreateGameTeamScorePayload>,
      Record<string, never>,
      WithTypename<GameTeamScore> | string
    >
    gameTeamScoreEdge?: GraphCacheResolver<
      WithTypename<CreateGameTeamScorePayload>,
      CreateGameTeamScorePayloadGameTeamScoreEdgeArgs,
      WithTypename<GameTeamScoresEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateGameTeamScorePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    teamByTeamId?: GraphCacheResolver<
      WithTypename<CreateGameTeamScorePayload>,
      Record<string, never>,
      WithTypename<Team> | string
    >
  }
  CreateKvPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateKvPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    kv?: GraphCacheResolver<
      WithTypename<CreateKvPayload>,
      Record<string, never>,
      WithTypename<Kv> | string
    >
    kvEdge?: GraphCacheResolver<
      WithTypename<CreateKvPayload>,
      CreateKvPayloadKvEdgeArgs,
      WithTypename<KvsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateKvPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreatePlayerPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreatePlayerPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    player?: GraphCacheResolver<
      WithTypename<CreatePlayerPayload>,
      Record<string, never>,
      WithTypename<Player> | string
    >
    playerEdge?: GraphCacheResolver<
      WithTypename<CreatePlayerPayload>,
      CreatePlayerPayloadPlayerEdgeArgs,
      WithTypename<PlayersEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreatePlayerPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    teamByTeamId?: GraphCacheResolver<
      WithTypename<CreatePlayerPayload>,
      Record<string, never>,
      WithTypename<Team> | string
    >
  }
  CreateTeamLeaderPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateTeamLeaderPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    playerByPlayerId?: GraphCacheResolver<
      WithTypename<CreateTeamLeaderPayload>,
      Record<string, never>,
      WithTypename<Player> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateTeamLeaderPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    teamByTeamId?: GraphCacheResolver<
      WithTypename<CreateTeamLeaderPayload>,
      Record<string, never>,
      WithTypename<Team> | string
    >
    teamLeader?: GraphCacheResolver<
      WithTypename<CreateTeamLeaderPayload>,
      Record<string, never>,
      WithTypename<TeamLeader> | string
    >
    teamLeaderEdge?: GraphCacheResolver<
      WithTypename<CreateTeamLeaderPayload>,
      CreateTeamLeaderPayloadTeamLeaderEdgeArgs,
      WithTypename<TeamLeadersEdge> | string
    >
  }
  CreateTeamPayload?: {
    charityOrganizationByCharityOrganizationId?: GraphCacheResolver<
      WithTypename<CreateTeamPayload>,
      Record<string, never>,
      WithTypename<CharityOrganization> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateTeamPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<CreateTeamPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateTeamPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    team?: GraphCacheResolver<
      WithTypename<CreateTeamPayload>,
      Record<string, never>,
      WithTypename<Team> | string
    >
    teamEdge?: GraphCacheResolver<
      WithTypename<CreateTeamPayload>,
      CreateTeamPayloadTeamEdgeArgs,
      WithTypename<TeamsEdge> | string
    >
  }
  DeleteCharityOrganizationPayload?: {
    charityOrganization?: GraphCacheResolver<
      WithTypename<DeleteCharityOrganizationPayload>,
      Record<string, never>,
      WithTypename<CharityOrganization> | string
    >
    charityOrganizationEdge?: GraphCacheResolver<
      WithTypename<DeleteCharityOrganizationPayload>,
      DeleteCharityOrganizationPayloadCharityOrganizationEdgeArgs,
      WithTypename<CharityOrganizationsEdge> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteCharityOrganizationPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedCharityOrganizationId?: GraphCacheResolver<
      WithTypename<DeleteCharityOrganizationPayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteCharityOrganizationPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteEventPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteEventPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedEventId?: GraphCacheResolver<
      WithTypename<DeleteEventPayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    event?: GraphCacheResolver<
      WithTypename<DeleteEventPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventEdge?: GraphCacheResolver<
      WithTypename<DeleteEventPayload>,
      DeleteEventPayloadEventEdgeArgs,
      WithTypename<EventsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteEventPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteGamePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteGamePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedGameId?: GraphCacheResolver<
      WithTypename<DeleteGamePayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<DeleteGamePayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    game?: GraphCacheResolver<
      WithTypename<DeleteGamePayload>,
      Record<string, never>,
      WithTypename<Game> | string
    >
    gameEdge?: GraphCacheResolver<
      WithTypename<DeleteGamePayload>,
      DeleteGamePayloadGameEdgeArgs,
      WithTypename<GamesEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteGamePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteGameRandomFactsRoundPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteGameRandomFactsRoundPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedGameRandomFactsRoundId?: GraphCacheResolver<
      WithTypename<DeleteGameRandomFactsRoundPayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    gameByGameId?: GraphCacheResolver<
      WithTypename<DeleteGameRandomFactsRoundPayload>,
      Record<string, never>,
      WithTypename<Game> | string
    >
    gameRandomFactsRound?: GraphCacheResolver<
      WithTypename<DeleteGameRandomFactsRoundPayload>,
      Record<string, never>,
      WithTypename<GameRandomFactsRound> | string
    >
    gameRandomFactsRoundEdge?: GraphCacheResolver<
      WithTypename<DeleteGameRandomFactsRoundPayload>,
      DeleteGameRandomFactsRoundPayloadGameRandomFactsRoundEdgeArgs,
      WithTypename<GameRandomFactsRoundsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteGameRandomFactsRoundPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteGameRandomFactsVotePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteGameRandomFactsVotePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedGameRandomFactsVoteId?: GraphCacheResolver<
      WithTypename<DeleteGameRandomFactsVotePayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    gameRandomFactsRoundByRoundId?: GraphCacheResolver<
      WithTypename<DeleteGameRandomFactsVotePayload>,
      Record<string, never>,
      WithTypename<GameRandomFactsRound> | string
    >
    gameRandomFactsVote?: GraphCacheResolver<
      WithTypename<DeleteGameRandomFactsVotePayload>,
      Record<string, never>,
      WithTypename<GameRandomFactsVote> | string
    >
    gameRandomFactsVoteEdge?: GraphCacheResolver<
      WithTypename<DeleteGameRandomFactsVotePayload>,
      DeleteGameRandomFactsVotePayloadGameRandomFactsVoteEdgeArgs,
      WithTypename<GameRandomFactsVotesEdge> | string
    >
    playerByPlayerId?: GraphCacheResolver<
      WithTypename<DeleteGameRandomFactsVotePayload>,
      Record<string, never>,
      WithTypename<Player> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteGameRandomFactsVotePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteGameTeamScorePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteGameTeamScorePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedGameTeamScoreId?: GraphCacheResolver<
      WithTypename<DeleteGameTeamScorePayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    gameByGameId?: GraphCacheResolver<
      WithTypename<DeleteGameTeamScorePayload>,
      Record<string, never>,
      WithTypename<Game> | string
    >
    gameTeamScore?: GraphCacheResolver<
      WithTypename<DeleteGameTeamScorePayload>,
      Record<string, never>,
      WithTypename<GameTeamScore> | string
    >
    gameTeamScoreEdge?: GraphCacheResolver<
      WithTypename<DeleteGameTeamScorePayload>,
      DeleteGameTeamScorePayloadGameTeamScoreEdgeArgs,
      WithTypename<GameTeamScoresEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteGameTeamScorePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    teamByTeamId?: GraphCacheResolver<
      WithTypename<DeleteGameTeamScorePayload>,
      Record<string, never>,
      WithTypename<Team> | string
    >
  }
  DeleteKvPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteKvPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedKvId?: GraphCacheResolver<
      WithTypename<DeleteKvPayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    kv?: GraphCacheResolver<
      WithTypename<DeleteKvPayload>,
      Record<string, never>,
      WithTypename<Kv> | string
    >
    kvEdge?: GraphCacheResolver<
      WithTypename<DeleteKvPayload>,
      DeleteKvPayloadKvEdgeArgs,
      WithTypename<KvsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteKvPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeletePlayerPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeletePlayerPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedPlayerId?: GraphCacheResolver<
      WithTypename<DeletePlayerPayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    player?: GraphCacheResolver<
      WithTypename<DeletePlayerPayload>,
      Record<string, never>,
      WithTypename<Player> | string
    >
    playerEdge?: GraphCacheResolver<
      WithTypename<DeletePlayerPayload>,
      DeletePlayerPayloadPlayerEdgeArgs,
      WithTypename<PlayersEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeletePlayerPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    teamByTeamId?: GraphCacheResolver<
      WithTypename<DeletePlayerPayload>,
      Record<string, never>,
      WithTypename<Team> | string
    >
  }
  DeleteTeamLeaderPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteTeamLeaderPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedTeamLeaderId?: GraphCacheResolver<
      WithTypename<DeleteTeamLeaderPayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    playerByPlayerId?: GraphCacheResolver<
      WithTypename<DeleteTeamLeaderPayload>,
      Record<string, never>,
      WithTypename<Player> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteTeamLeaderPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    teamByTeamId?: GraphCacheResolver<
      WithTypename<DeleteTeamLeaderPayload>,
      Record<string, never>,
      WithTypename<Team> | string
    >
    teamLeader?: GraphCacheResolver<
      WithTypename<DeleteTeamLeaderPayload>,
      Record<string, never>,
      WithTypename<TeamLeader> | string
    >
    teamLeaderEdge?: GraphCacheResolver<
      WithTypename<DeleteTeamLeaderPayload>,
      DeleteTeamLeaderPayloadTeamLeaderEdgeArgs,
      WithTypename<TeamLeadersEdge> | string
    >
  }
  DeleteTeamPayload?: {
    charityOrganizationByCharityOrganizationId?: GraphCacheResolver<
      WithTypename<DeleteTeamPayload>,
      Record<string, never>,
      WithTypename<CharityOrganization> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteTeamPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    deletedTeamId?: GraphCacheResolver<
      WithTypename<DeleteTeamPayload>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<DeleteTeamPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteTeamPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    team?: GraphCacheResolver<
      WithTypename<DeleteTeamPayload>,
      Record<string, never>,
      WithTypename<Team> | string
    >
    teamEdge?: GraphCacheResolver<
      WithTypename<DeleteTeamPayload>,
      DeleteTeamPayloadTeamEdgeArgs,
      WithTypename<TeamsEdge> | string
    >
  }
  Event?: {
    commonDonationAmount?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Float'] | string
    >
    commonDonationIsLive?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Boolean'] | string
    >
    commonDonationUrl?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['String'] | string
    >
    discordInviteCode?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['String'] | string
    >
    end?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    gamesByEventId?: GraphCacheResolver<
      WithTypename<Event>,
      EventGamesByEventIdArgs,
      WithTypename<GamesConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Int'] | string
    >
    name?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['String'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    start?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Datetime'] | string
    >
    streamUrl?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['String'] | string
    >
    teamsByEventId?: GraphCacheResolver<
      WithTypename<Event>,
      EventTeamsByEventIdArgs,
      WithTypename<TeamsConnection> | string
    >
  }
  EventsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<EventsConnection>,
      Record<string, never>,
      Array<WithTypename<EventsEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<EventsConnection>,
      Record<string, never>,
      Array<WithTypename<Event> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<EventsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<EventsConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  EventsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventsEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<EventsEdge>,
      Record<string, never>,
      WithTypename<Event> | string
    >
  }
  Game?: {
    eventByEventId?: GraphCacheResolver<
      WithTypename<Game>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventId?: GraphCacheResolver<
      WithTypename<Game>,
      Record<string, never>,
      Scalars['Int'] | string
    >
    gameRandomFactsRoundsByGameId?: GraphCacheResolver<
      WithTypename<Game>,
      GameGameRandomFactsRoundsByGameIdArgs,
      WithTypename<GameRandomFactsRoundsConnection> | string
    >
    gameTeamScoresByGameId?: GraphCacheResolver<
      WithTypename<Game>,
      GameGameTeamScoresByGameIdArgs,
      WithTypename<GameTeamScoresConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<Game>,
      Record<string, never>,
      Scalars['Int'] | string
    >
    isActive?: GraphCacheResolver<
      WithTypename<Game>,
      Record<string, never>,
      Scalars['Boolean'] | string
    >
    name?: GraphCacheResolver<
      WithTypename<Game>,
      Record<string, never>,
      Scalars['String'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<Game>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    type?: GraphCacheResolver<
      WithTypename<Game>,
      Record<string, never>,
      GameType | string
    >
  }
  GameRandomFactsRound?: {
    answerCorrect?: GraphCacheResolver<
      WithTypename<GameRandomFactsRound>,
      Record<string, never>,
      Scalars['Int'] | string
    >
    gameByGameId?: GraphCacheResolver<
      WithTypename<GameRandomFactsRound>,
      Record<string, never>,
      WithTypename<Game> | string
    >
    gameId?: GraphCacheResolver<
      WithTypename<GameRandomFactsRound>,
      Record<string, never>,
      Scalars['Int'] | string
    >
    gameRandomFactsVotesByRoundId?: GraphCacheResolver<
      WithTypename<GameRandomFactsRound>,
      GameRandomFactsRoundGameRandomFactsVotesByRoundIdArgs,
      WithTypename<GameRandomFactsVotesConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<GameRandomFactsRound>,
      Record<string, never>,
      Scalars['Int'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<GameRandomFactsRound>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    questionerName?: GraphCacheResolver<
      WithTypename<GameRandomFactsRound>,
      Record<string, never>,
      Scalars['String'] | string
    >
  }
  GameRandomFactsRoundsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<GameRandomFactsRoundsConnection>,
      Record<string, never>,
      Array<WithTypename<GameRandomFactsRoundsEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<GameRandomFactsRoundsConnection>,
      Record<string, never>,
      Array<WithTypename<GameRandomFactsRound> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<GameRandomFactsRoundsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<GameRandomFactsRoundsConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  GameRandomFactsRoundsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<GameRandomFactsRoundsEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<GameRandomFactsRoundsEdge>,
      Record<string, never>,
      WithTypename<GameRandomFactsRound> | string
    >
  }
  GameRandomFactsVote?: {
    answer?: GraphCacheResolver<
      WithTypename<GameRandomFactsVote>,
      Record<string, never>,
      Scalars['Int'] | string
    >
    gameRandomFactsRoundByRoundId?: GraphCacheResolver<
      WithTypename<GameRandomFactsVote>,
      Record<string, never>,
      WithTypename<GameRandomFactsRound> | string
    >
    id?: GraphCacheResolver<
      WithTypename<GameRandomFactsVote>,
      Record<string, never>,
      Scalars['Int'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<GameRandomFactsVote>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    playerByPlayerId?: GraphCacheResolver<
      WithTypename<GameRandomFactsVote>,
      Record<string, never>,
      WithTypename<Player> | string
    >
    playerId?: GraphCacheResolver<
      WithTypename<GameRandomFactsVote>,
      Record<string, never>,
      Scalars['Int'] | string
    >
    roundId?: GraphCacheResolver<
      WithTypename<GameRandomFactsVote>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  GameRandomFactsVotesConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<GameRandomFactsVotesConnection>,
      Record<string, never>,
      Array<WithTypename<GameRandomFactsVotesEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<GameRandomFactsVotesConnection>,
      Record<string, never>,
      Array<WithTypename<GameRandomFactsVote> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<GameRandomFactsVotesConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<GameRandomFactsVotesConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  GameRandomFactsVotesEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<GameRandomFactsVotesEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<GameRandomFactsVotesEdge>,
      Record<string, never>,
      WithTypename<GameRandomFactsVote> | string
    >
  }
  GameTeamScore?: {
    gameByGameId?: GraphCacheResolver<
      WithTypename<GameTeamScore>,
      Record<string, never>,
      WithTypename<Game> | string
    >
    gameId?: GraphCacheResolver<
      WithTypename<GameTeamScore>,
      Record<string, never>,
      Scalars['Int'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<GameTeamScore>,
      Record<string, never>,
      Scalars['Int'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<GameTeamScore>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    score?: GraphCacheResolver<
      WithTypename<GameTeamScore>,
      Record<string, never>,
      Scalars['Int'] | string
    >
    teamByTeamId?: GraphCacheResolver<
      WithTypename<GameTeamScore>,
      Record<string, never>,
      WithTypename<Team> | string
    >
    teamId?: GraphCacheResolver<
      WithTypename<GameTeamScore>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  GameTeamScoresConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<GameTeamScoresConnection>,
      Record<string, never>,
      Array<WithTypename<GameTeamScoresEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<GameTeamScoresConnection>,
      Record<string, never>,
      Array<WithTypename<GameTeamScore> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<GameTeamScoresConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<GameTeamScoresConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  GameTeamScoresEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<GameTeamScoresEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<GameTeamScoresEdge>,
      Record<string, never>,
      WithTypename<GameTeamScore> | string
    >
  }
  GamesConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<GamesConnection>,
      Record<string, never>,
      Array<WithTypename<GamesEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<GamesConnection>,
      Record<string, never>,
      Array<WithTypename<Game> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<GamesConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<GamesConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  GamesEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<GamesEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<GamesEdge>,
      Record<string, never>,
      WithTypename<Game> | string
    >
  }
  Kv?: {
    key?: GraphCacheResolver<
      WithTypename<Kv>,
      Record<string, never>,
      Scalars['String'] | string
    >
    value?: GraphCacheResolver<
      WithTypename<Kv>,
      Record<string, never>,
      Scalars['String'] | string
    >
  }
  KvsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<KvsConnection>,
      Record<string, never>,
      Array<WithTypename<KvsEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<KvsConnection>,
      Record<string, never>,
      Array<WithTypename<Kv> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<KvsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<KvsConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  KvsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<KvsEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<KvsEdge>,
      Record<string, never>,
      WithTypename<Kv> | string
    >
  }
  PageInfo?: {
    endCursor?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    hasNextPage?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars['Boolean'] | string
    >
    hasPreviousPage?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars['Boolean'] | string
    >
    startCursor?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
  }
  Player?: {
    gameRandomFactsVotesByPlayerId?: GraphCacheResolver<
      WithTypename<Player>,
      PlayerGameRandomFactsVotesByPlayerIdArgs,
      WithTypename<GameRandomFactsVotesConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<Player>,
      Record<string, never>,
      Scalars['Int'] | string
    >
    invitationCode?: GraphCacheResolver<
      WithTypename<Player>,
      Record<string, never>,
      Scalars['UUID'] | string
    >
    name?: GraphCacheResolver<
      WithTypename<Player>,
      Record<string, never>,
      Scalars['String'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<Player>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    teamByTeamId?: GraphCacheResolver<
      WithTypename<Player>,
      Record<string, never>,
      WithTypename<Team> | string
    >
    teamId?: GraphCacheResolver<
      WithTypename<Player>,
      Record<string, never>,
      Scalars['Int'] | string
    >
    teamLeadersByPlayerId?: GraphCacheResolver<
      WithTypename<Player>,
      PlayerTeamLeadersByPlayerIdArgs,
      WithTypename<TeamLeadersConnection> | string
    >
  }
  PlayersConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<PlayersConnection>,
      Record<string, never>,
      Array<WithTypename<PlayersEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<PlayersConnection>,
      Record<string, never>,
      Array<WithTypename<Player> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<PlayersConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<PlayersConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  PlayersEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<PlayersEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<PlayersEdge>,
      Record<string, never>,
      WithTypename<Player> | string
    >
  }
  Team?: {
    charityOrganizationByCharityOrganizationId?: GraphCacheResolver<
      WithTypename<Team>,
      Record<string, never>,
      WithTypename<CharityOrganization> | string
    >
    charityOrganizationId?: GraphCacheResolver<
      WithTypename<Team>,
      Record<string, never>,
      Scalars['Int'] | string
    >
    donationAmount?: GraphCacheResolver<
      WithTypename<Team>,
      Record<string, never>,
      Scalars['Float'] | string
    >
    donationUrl?: GraphCacheResolver<
      WithTypename<Team>,
      Record<string, never>,
      Scalars['String'] | string
    >
    emoji?: GraphCacheResolver<
      WithTypename<Team>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<Team>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventId?: GraphCacheResolver<
      WithTypename<Team>,
      Record<string, never>,
      Scalars['Int'] | string
    >
    gameTeamScoresByTeamId?: GraphCacheResolver<
      WithTypename<Team>,
      TeamGameTeamScoresByTeamIdArgs,
      WithTypename<GameTeamScoresConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<Team>,
      Record<string, never>,
      Scalars['Int'] | string
    >
    name?: GraphCacheResolver<
      WithTypename<Team>,
      Record<string, never>,
      Scalars['String'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<Team>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    playersByTeamId?: GraphCacheResolver<
      WithTypename<Team>,
      TeamPlayersByTeamIdArgs,
      WithTypename<PlayersConnection> | string
    >
    teamLeadersByTeamId?: GraphCacheResolver<
      WithTypename<Team>,
      TeamTeamLeadersByTeamIdArgs,
      WithTypename<TeamLeadersConnection> | string
    >
  }
  TeamLeader?: {
    id?: GraphCacheResolver<
      WithTypename<TeamLeader>,
      Record<string, never>,
      Scalars['Int'] | string
    >
    nodeId?: GraphCacheResolver<
      WithTypename<TeamLeader>,
      Record<string, never>,
      Scalars['ID'] | string
    >
    playerByPlayerId?: GraphCacheResolver<
      WithTypename<TeamLeader>,
      Record<string, never>,
      WithTypename<Player> | string
    >
    playerId?: GraphCacheResolver<
      WithTypename<TeamLeader>,
      Record<string, never>,
      Scalars['Int'] | string
    >
    teamByTeamId?: GraphCacheResolver<
      WithTypename<TeamLeader>,
      Record<string, never>,
      WithTypename<Team> | string
    >
    teamId?: GraphCacheResolver<
      WithTypename<TeamLeader>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  TeamLeadersConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<TeamLeadersConnection>,
      Record<string, never>,
      Array<WithTypename<TeamLeadersEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<TeamLeadersConnection>,
      Record<string, never>,
      Array<WithTypename<TeamLeader> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<TeamLeadersConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<TeamLeadersConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  TeamLeadersEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<TeamLeadersEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<TeamLeadersEdge>,
      Record<string, never>,
      WithTypename<TeamLeader> | string
    >
  }
  TeamPlayerCountConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<TeamPlayerCountConnection>,
      Record<string, never>,
      Array<WithTypename<TeamPlayerCountEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<TeamPlayerCountConnection>,
      Record<string, never>,
      Array<WithTypename<TeamPlayerCountRecord> | string>
    >
    totalCount?: GraphCacheResolver<
      WithTypename<TeamPlayerCountConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  TeamPlayerCountEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<TeamPlayerCountEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<TeamPlayerCountEdge>,
      Record<string, never>,
      WithTypename<TeamPlayerCountRecord> | string
    >
  }
  TeamPlayerCountRecord?: {
    id?: GraphCacheResolver<
      WithTypename<TeamPlayerCountRecord>,
      Record<string, never>,
      Scalars['Int'] | string
    >
    playerCount?: GraphCacheResolver<
      WithTypename<TeamPlayerCountRecord>,
      Record<string, never>,
      Scalars['BigInt'] | string
    >
  }
  TeamsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<TeamsConnection>,
      Record<string, never>,
      Array<WithTypename<TeamsEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<TeamsConnection>,
      Record<string, never>,
      Array<WithTypename<Team> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<TeamsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<TeamsConnection>,
      Record<string, never>,
      Scalars['Int'] | string
    >
  }
  TeamsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<TeamsEdge>,
      Record<string, never>,
      Scalars['Cursor'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<TeamsEdge>,
      Record<string, never>,
      WithTypename<Team> | string
    >
  }
  UpdateCharityOrganizationPayload?: {
    charityOrganization?: GraphCacheResolver<
      WithTypename<UpdateCharityOrganizationPayload>,
      Record<string, never>,
      WithTypename<CharityOrganization> | string
    >
    charityOrganizationEdge?: GraphCacheResolver<
      WithTypename<UpdateCharityOrganizationPayload>,
      UpdateCharityOrganizationPayloadCharityOrganizationEdgeArgs,
      WithTypename<CharityOrganizationsEdge> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateCharityOrganizationPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateCharityOrganizationPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateEventPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateEventPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    event?: GraphCacheResolver<
      WithTypename<UpdateEventPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventEdge?: GraphCacheResolver<
      WithTypename<UpdateEventPayload>,
      UpdateEventPayloadEventEdgeArgs,
      WithTypename<EventsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateEventPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateGamePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateGamePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<UpdateGamePayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    game?: GraphCacheResolver<
      WithTypename<UpdateGamePayload>,
      Record<string, never>,
      WithTypename<Game> | string
    >
    gameEdge?: GraphCacheResolver<
      WithTypename<UpdateGamePayload>,
      UpdateGamePayloadGameEdgeArgs,
      WithTypename<GamesEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateGamePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateGameRandomFactsRoundPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateGameRandomFactsRoundPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    gameByGameId?: GraphCacheResolver<
      WithTypename<UpdateGameRandomFactsRoundPayload>,
      Record<string, never>,
      WithTypename<Game> | string
    >
    gameRandomFactsRound?: GraphCacheResolver<
      WithTypename<UpdateGameRandomFactsRoundPayload>,
      Record<string, never>,
      WithTypename<GameRandomFactsRound> | string
    >
    gameRandomFactsRoundEdge?: GraphCacheResolver<
      WithTypename<UpdateGameRandomFactsRoundPayload>,
      UpdateGameRandomFactsRoundPayloadGameRandomFactsRoundEdgeArgs,
      WithTypename<GameRandomFactsRoundsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateGameRandomFactsRoundPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateGameRandomFactsVotePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateGameRandomFactsVotePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    gameRandomFactsRoundByRoundId?: GraphCacheResolver<
      WithTypename<UpdateGameRandomFactsVotePayload>,
      Record<string, never>,
      WithTypename<GameRandomFactsRound> | string
    >
    gameRandomFactsVote?: GraphCacheResolver<
      WithTypename<UpdateGameRandomFactsVotePayload>,
      Record<string, never>,
      WithTypename<GameRandomFactsVote> | string
    >
    gameRandomFactsVoteEdge?: GraphCacheResolver<
      WithTypename<UpdateGameRandomFactsVotePayload>,
      UpdateGameRandomFactsVotePayloadGameRandomFactsVoteEdgeArgs,
      WithTypename<GameRandomFactsVotesEdge> | string
    >
    playerByPlayerId?: GraphCacheResolver<
      WithTypename<UpdateGameRandomFactsVotePayload>,
      Record<string, never>,
      WithTypename<Player> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateGameRandomFactsVotePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateGameTeamScorePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateGameTeamScorePayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    gameByGameId?: GraphCacheResolver<
      WithTypename<UpdateGameTeamScorePayload>,
      Record<string, never>,
      WithTypename<Game> | string
    >
    gameTeamScore?: GraphCacheResolver<
      WithTypename<UpdateGameTeamScorePayload>,
      Record<string, never>,
      WithTypename<GameTeamScore> | string
    >
    gameTeamScoreEdge?: GraphCacheResolver<
      WithTypename<UpdateGameTeamScorePayload>,
      UpdateGameTeamScorePayloadGameTeamScoreEdgeArgs,
      WithTypename<GameTeamScoresEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateGameTeamScorePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    teamByTeamId?: GraphCacheResolver<
      WithTypename<UpdateGameTeamScorePayload>,
      Record<string, never>,
      WithTypename<Team> | string
    >
  }
  UpdateKvPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateKvPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    kv?: GraphCacheResolver<
      WithTypename<UpdateKvPayload>,
      Record<string, never>,
      WithTypename<Kv> | string
    >
    kvEdge?: GraphCacheResolver<
      WithTypename<UpdateKvPayload>,
      UpdateKvPayloadKvEdgeArgs,
      WithTypename<KvsEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateKvPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdatePlayerPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdatePlayerPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    player?: GraphCacheResolver<
      WithTypename<UpdatePlayerPayload>,
      Record<string, never>,
      WithTypename<Player> | string
    >
    playerEdge?: GraphCacheResolver<
      WithTypename<UpdatePlayerPayload>,
      UpdatePlayerPayloadPlayerEdgeArgs,
      WithTypename<PlayersEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdatePlayerPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    teamByTeamId?: GraphCacheResolver<
      WithTypename<UpdatePlayerPayload>,
      Record<string, never>,
      WithTypename<Team> | string
    >
  }
  UpdateTeamLeaderPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateTeamLeaderPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    playerByPlayerId?: GraphCacheResolver<
      WithTypename<UpdateTeamLeaderPayload>,
      Record<string, never>,
      WithTypename<Player> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateTeamLeaderPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    teamByTeamId?: GraphCacheResolver<
      WithTypename<UpdateTeamLeaderPayload>,
      Record<string, never>,
      WithTypename<Team> | string
    >
    teamLeader?: GraphCacheResolver<
      WithTypename<UpdateTeamLeaderPayload>,
      Record<string, never>,
      WithTypename<TeamLeader> | string
    >
    teamLeaderEdge?: GraphCacheResolver<
      WithTypename<UpdateTeamLeaderPayload>,
      UpdateTeamLeaderPayloadTeamLeaderEdgeArgs,
      WithTypename<TeamLeadersEdge> | string
    >
  }
  UpdateTeamPayload?: {
    charityOrganizationByCharityOrganizationId?: GraphCacheResolver<
      WithTypename<UpdateTeamPayload>,
      Record<string, never>,
      WithTypename<CharityOrganization> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateTeamPayload>,
      Record<string, never>,
      Scalars['String'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<UpdateTeamPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateTeamPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    team?: GraphCacheResolver<
      WithTypename<UpdateTeamPayload>,
      Record<string, never>,
      WithTypename<Team> | string
    >
    teamEdge?: GraphCacheResolver<
      WithTypename<UpdateTeamPayload>,
      UpdateTeamPayloadTeamEdgeArgs,
      WithTypename<TeamsEdge> | string
    >
  }
}

export type GraphCacheOptimisticUpdaters = {
  createCharityOrganization?: GraphCacheOptimisticMutationResolver<
    MutationCreateCharityOrganizationArgs,
    Maybe<WithTypename<CreateCharityOrganizationPayload>>
  >
  createEvent?: GraphCacheOptimisticMutationResolver<
    MutationCreateEventArgs,
    Maybe<WithTypename<CreateEventPayload>>
  >
  createGame?: GraphCacheOptimisticMutationResolver<
    MutationCreateGameArgs,
    Maybe<WithTypename<CreateGamePayload>>
  >
  createGameRandomFactsRound?: GraphCacheOptimisticMutationResolver<
    MutationCreateGameRandomFactsRoundArgs,
    Maybe<WithTypename<CreateGameRandomFactsRoundPayload>>
  >
  createGameRandomFactsVote?: GraphCacheOptimisticMutationResolver<
    MutationCreateGameRandomFactsVoteArgs,
    Maybe<WithTypename<CreateGameRandomFactsVotePayload>>
  >
  createGameTeamScore?: GraphCacheOptimisticMutationResolver<
    MutationCreateGameTeamScoreArgs,
    Maybe<WithTypename<CreateGameTeamScorePayload>>
  >
  createKv?: GraphCacheOptimisticMutationResolver<
    MutationCreateKvArgs,
    Maybe<WithTypename<CreateKvPayload>>
  >
  createPlayer?: GraphCacheOptimisticMutationResolver<
    MutationCreatePlayerArgs,
    Maybe<WithTypename<CreatePlayerPayload>>
  >
  createTeam?: GraphCacheOptimisticMutationResolver<
    MutationCreateTeamArgs,
    Maybe<WithTypename<CreateTeamPayload>>
  >
  createTeamLeader?: GraphCacheOptimisticMutationResolver<
    MutationCreateTeamLeaderArgs,
    Maybe<WithTypename<CreateTeamLeaderPayload>>
  >
  deleteCharityOrganization?: GraphCacheOptimisticMutationResolver<
    MutationDeleteCharityOrganizationArgs,
    Maybe<WithTypename<DeleteCharityOrganizationPayload>>
  >
  deleteCharityOrganizationById?: GraphCacheOptimisticMutationResolver<
    MutationDeleteCharityOrganizationByIdArgs,
    Maybe<WithTypename<DeleteCharityOrganizationPayload>>
  >
  deleteCharityOrganizationByName?: GraphCacheOptimisticMutationResolver<
    MutationDeleteCharityOrganizationByNameArgs,
    Maybe<WithTypename<DeleteCharityOrganizationPayload>>
  >
  deleteCharityOrganizationByUrl?: GraphCacheOptimisticMutationResolver<
    MutationDeleteCharityOrganizationByUrlArgs,
    Maybe<WithTypename<DeleteCharityOrganizationPayload>>
  >
  deleteEvent?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventArgs,
    Maybe<WithTypename<DeleteEventPayload>>
  >
  deleteEventById?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventByIdArgs,
    Maybe<WithTypename<DeleteEventPayload>>
  >
  deleteEventByName?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventByNameArgs,
    Maybe<WithTypename<DeleteEventPayload>>
  >
  deleteGame?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGameArgs,
    Maybe<WithTypename<DeleteGamePayload>>
  >
  deleteGameByEventIdAndName?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGameByEventIdAndNameArgs,
    Maybe<WithTypename<DeleteGamePayload>>
  >
  deleteGameById?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGameByIdArgs,
    Maybe<WithTypename<DeleteGamePayload>>
  >
  deleteGameRandomFactsRound?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGameRandomFactsRoundArgs,
    Maybe<WithTypename<DeleteGameRandomFactsRoundPayload>>
  >
  deleteGameRandomFactsRoundById?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGameRandomFactsRoundByIdArgs,
    Maybe<WithTypename<DeleteGameRandomFactsRoundPayload>>
  >
  deleteGameRandomFactsVote?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGameRandomFactsVoteArgs,
    Maybe<WithTypename<DeleteGameRandomFactsVotePayload>>
  >
  deleteGameRandomFactsVoteById?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGameRandomFactsVoteByIdArgs,
    Maybe<WithTypename<DeleteGameRandomFactsVotePayload>>
  >
  deleteGameRandomFactsVoteByPlayerIdAndRoundId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGameRandomFactsVoteByPlayerIdAndRoundIdArgs,
    Maybe<WithTypename<DeleteGameRandomFactsVotePayload>>
  >
  deleteGameTeamScore?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGameTeamScoreArgs,
    Maybe<WithTypename<DeleteGameTeamScorePayload>>
  >
  deleteGameTeamScoreById?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGameTeamScoreByIdArgs,
    Maybe<WithTypename<DeleteGameTeamScorePayload>>
  >
  deleteKvByKey?: GraphCacheOptimisticMutationResolver<
    MutationDeleteKvByKeyArgs,
    Maybe<WithTypename<DeleteKvPayload>>
  >
  deletePlayer?: GraphCacheOptimisticMutationResolver<
    MutationDeletePlayerArgs,
    Maybe<WithTypename<DeletePlayerPayload>>
  >
  deletePlayerById?: GraphCacheOptimisticMutationResolver<
    MutationDeletePlayerByIdArgs,
    Maybe<WithTypename<DeletePlayerPayload>>
  >
  deletePlayerByInvitationCode?: GraphCacheOptimisticMutationResolver<
    MutationDeletePlayerByInvitationCodeArgs,
    Maybe<WithTypename<DeletePlayerPayload>>
  >
  deletePlayerByTeamIdAndInvitationCode?: GraphCacheOptimisticMutationResolver<
    MutationDeletePlayerByTeamIdAndInvitationCodeArgs,
    Maybe<WithTypename<DeletePlayerPayload>>
  >
  deleteTeam?: GraphCacheOptimisticMutationResolver<
    MutationDeleteTeamArgs,
    Maybe<WithTypename<DeleteTeamPayload>>
  >
  deleteTeamById?: GraphCacheOptimisticMutationResolver<
    MutationDeleteTeamByIdArgs,
    Maybe<WithTypename<DeleteTeamPayload>>
  >
  deleteTeamLeader?: GraphCacheOptimisticMutationResolver<
    MutationDeleteTeamLeaderArgs,
    Maybe<WithTypename<DeleteTeamLeaderPayload>>
  >
  deleteTeamLeaderById?: GraphCacheOptimisticMutationResolver<
    MutationDeleteTeamLeaderByIdArgs,
    Maybe<WithTypename<DeleteTeamLeaderPayload>>
  >
  updateCharityOrganization?: GraphCacheOptimisticMutationResolver<
    MutationUpdateCharityOrganizationArgs,
    Maybe<WithTypename<UpdateCharityOrganizationPayload>>
  >
  updateCharityOrganizationById?: GraphCacheOptimisticMutationResolver<
    MutationUpdateCharityOrganizationByIdArgs,
    Maybe<WithTypename<UpdateCharityOrganizationPayload>>
  >
  updateCharityOrganizationByName?: GraphCacheOptimisticMutationResolver<
    MutationUpdateCharityOrganizationByNameArgs,
    Maybe<WithTypename<UpdateCharityOrganizationPayload>>
  >
  updateCharityOrganizationByUrl?: GraphCacheOptimisticMutationResolver<
    MutationUpdateCharityOrganizationByUrlArgs,
    Maybe<WithTypename<UpdateCharityOrganizationPayload>>
  >
  updateEvent?: GraphCacheOptimisticMutationResolver<
    MutationUpdateEventArgs,
    Maybe<WithTypename<UpdateEventPayload>>
  >
  updateEventById?: GraphCacheOptimisticMutationResolver<
    MutationUpdateEventByIdArgs,
    Maybe<WithTypename<UpdateEventPayload>>
  >
  updateEventByName?: GraphCacheOptimisticMutationResolver<
    MutationUpdateEventByNameArgs,
    Maybe<WithTypename<UpdateEventPayload>>
  >
  updateGame?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGameArgs,
    Maybe<WithTypename<UpdateGamePayload>>
  >
  updateGameByEventIdAndName?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGameByEventIdAndNameArgs,
    Maybe<WithTypename<UpdateGamePayload>>
  >
  updateGameById?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGameByIdArgs,
    Maybe<WithTypename<UpdateGamePayload>>
  >
  updateGameRandomFactsRound?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGameRandomFactsRoundArgs,
    Maybe<WithTypename<UpdateGameRandomFactsRoundPayload>>
  >
  updateGameRandomFactsRoundById?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGameRandomFactsRoundByIdArgs,
    Maybe<WithTypename<UpdateGameRandomFactsRoundPayload>>
  >
  updateGameRandomFactsVote?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGameRandomFactsVoteArgs,
    Maybe<WithTypename<UpdateGameRandomFactsVotePayload>>
  >
  updateGameRandomFactsVoteById?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGameRandomFactsVoteByIdArgs,
    Maybe<WithTypename<UpdateGameRandomFactsVotePayload>>
  >
  updateGameRandomFactsVoteByPlayerIdAndRoundId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGameRandomFactsVoteByPlayerIdAndRoundIdArgs,
    Maybe<WithTypename<UpdateGameRandomFactsVotePayload>>
  >
  updateGameTeamScore?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGameTeamScoreArgs,
    Maybe<WithTypename<UpdateGameTeamScorePayload>>
  >
  updateGameTeamScoreById?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGameTeamScoreByIdArgs,
    Maybe<WithTypename<UpdateGameTeamScorePayload>>
  >
  updateKvByKey?: GraphCacheOptimisticMutationResolver<
    MutationUpdateKvByKeyArgs,
    Maybe<WithTypename<UpdateKvPayload>>
  >
  updatePlayer?: GraphCacheOptimisticMutationResolver<
    MutationUpdatePlayerArgs,
    Maybe<WithTypename<UpdatePlayerPayload>>
  >
  updatePlayerById?: GraphCacheOptimisticMutationResolver<
    MutationUpdatePlayerByIdArgs,
    Maybe<WithTypename<UpdatePlayerPayload>>
  >
  updatePlayerByInvitationCode?: GraphCacheOptimisticMutationResolver<
    MutationUpdatePlayerByInvitationCodeArgs,
    Maybe<WithTypename<UpdatePlayerPayload>>
  >
  updatePlayerByTeamIdAndInvitationCode?: GraphCacheOptimisticMutationResolver<
    MutationUpdatePlayerByTeamIdAndInvitationCodeArgs,
    Maybe<WithTypename<UpdatePlayerPayload>>
  >
  updateTeam?: GraphCacheOptimisticMutationResolver<
    MutationUpdateTeamArgs,
    Maybe<WithTypename<UpdateTeamPayload>>
  >
  updateTeamById?: GraphCacheOptimisticMutationResolver<
    MutationUpdateTeamByIdArgs,
    Maybe<WithTypename<UpdateTeamPayload>>
  >
  updateTeamLeader?: GraphCacheOptimisticMutationResolver<
    MutationUpdateTeamLeaderArgs,
    Maybe<WithTypename<UpdateTeamLeaderPayload>>
  >
  updateTeamLeaderById?: GraphCacheOptimisticMutationResolver<
    MutationUpdateTeamLeaderByIdArgs,
    Maybe<WithTypename<UpdateTeamLeaderPayload>>
  >
}

export type GraphCacheUpdaters = {
  Mutation?: {
    createCharityOrganization?: GraphCacheUpdateResolver<
      {
        createCharityOrganization: Maybe<
          WithTypename<CreateCharityOrganizationPayload>
        >
      },
      MutationCreateCharityOrganizationArgs
    >
    createEvent?: GraphCacheUpdateResolver<
      { createEvent: Maybe<WithTypename<CreateEventPayload>> },
      MutationCreateEventArgs
    >
    createGame?: GraphCacheUpdateResolver<
      { createGame: Maybe<WithTypename<CreateGamePayload>> },
      MutationCreateGameArgs
    >
    createGameRandomFactsRound?: GraphCacheUpdateResolver<
      {
        createGameRandomFactsRound: Maybe<
          WithTypename<CreateGameRandomFactsRoundPayload>
        >
      },
      MutationCreateGameRandomFactsRoundArgs
    >
    createGameRandomFactsVote?: GraphCacheUpdateResolver<
      {
        createGameRandomFactsVote: Maybe<
          WithTypename<CreateGameRandomFactsVotePayload>
        >
      },
      MutationCreateGameRandomFactsVoteArgs
    >
    createGameTeamScore?: GraphCacheUpdateResolver<
      { createGameTeamScore: Maybe<WithTypename<CreateGameTeamScorePayload>> },
      MutationCreateGameTeamScoreArgs
    >
    createKv?: GraphCacheUpdateResolver<
      { createKv: Maybe<WithTypename<CreateKvPayload>> },
      MutationCreateKvArgs
    >
    createPlayer?: GraphCacheUpdateResolver<
      { createPlayer: Maybe<WithTypename<CreatePlayerPayload>> },
      MutationCreatePlayerArgs
    >
    createTeam?: GraphCacheUpdateResolver<
      { createTeam: Maybe<WithTypename<CreateTeamPayload>> },
      MutationCreateTeamArgs
    >
    createTeamLeader?: GraphCacheUpdateResolver<
      { createTeamLeader: Maybe<WithTypename<CreateTeamLeaderPayload>> },
      MutationCreateTeamLeaderArgs
    >
    deleteCharityOrganization?: GraphCacheUpdateResolver<
      {
        deleteCharityOrganization: Maybe<
          WithTypename<DeleteCharityOrganizationPayload>
        >
      },
      MutationDeleteCharityOrganizationArgs
    >
    deleteCharityOrganizationById?: GraphCacheUpdateResolver<
      {
        deleteCharityOrganizationById: Maybe<
          WithTypename<DeleteCharityOrganizationPayload>
        >
      },
      MutationDeleteCharityOrganizationByIdArgs
    >
    deleteCharityOrganizationByName?: GraphCacheUpdateResolver<
      {
        deleteCharityOrganizationByName: Maybe<
          WithTypename<DeleteCharityOrganizationPayload>
        >
      },
      MutationDeleteCharityOrganizationByNameArgs
    >
    deleteCharityOrganizationByUrl?: GraphCacheUpdateResolver<
      {
        deleteCharityOrganizationByUrl: Maybe<
          WithTypename<DeleteCharityOrganizationPayload>
        >
      },
      MutationDeleteCharityOrganizationByUrlArgs
    >
    deleteEvent?: GraphCacheUpdateResolver<
      { deleteEvent: Maybe<WithTypename<DeleteEventPayload>> },
      MutationDeleteEventArgs
    >
    deleteEventById?: GraphCacheUpdateResolver<
      { deleteEventById: Maybe<WithTypename<DeleteEventPayload>> },
      MutationDeleteEventByIdArgs
    >
    deleteEventByName?: GraphCacheUpdateResolver<
      { deleteEventByName: Maybe<WithTypename<DeleteEventPayload>> },
      MutationDeleteEventByNameArgs
    >
    deleteGame?: GraphCacheUpdateResolver<
      { deleteGame: Maybe<WithTypename<DeleteGamePayload>> },
      MutationDeleteGameArgs
    >
    deleteGameByEventIdAndName?: GraphCacheUpdateResolver<
      { deleteGameByEventIdAndName: Maybe<WithTypename<DeleteGamePayload>> },
      MutationDeleteGameByEventIdAndNameArgs
    >
    deleteGameById?: GraphCacheUpdateResolver<
      { deleteGameById: Maybe<WithTypename<DeleteGamePayload>> },
      MutationDeleteGameByIdArgs
    >
    deleteGameRandomFactsRound?: GraphCacheUpdateResolver<
      {
        deleteGameRandomFactsRound: Maybe<
          WithTypename<DeleteGameRandomFactsRoundPayload>
        >
      },
      MutationDeleteGameRandomFactsRoundArgs
    >
    deleteGameRandomFactsRoundById?: GraphCacheUpdateResolver<
      {
        deleteGameRandomFactsRoundById: Maybe<
          WithTypename<DeleteGameRandomFactsRoundPayload>
        >
      },
      MutationDeleteGameRandomFactsRoundByIdArgs
    >
    deleteGameRandomFactsVote?: GraphCacheUpdateResolver<
      {
        deleteGameRandomFactsVote: Maybe<
          WithTypename<DeleteGameRandomFactsVotePayload>
        >
      },
      MutationDeleteGameRandomFactsVoteArgs
    >
    deleteGameRandomFactsVoteById?: GraphCacheUpdateResolver<
      {
        deleteGameRandomFactsVoteById: Maybe<
          WithTypename<DeleteGameRandomFactsVotePayload>
        >
      },
      MutationDeleteGameRandomFactsVoteByIdArgs
    >
    deleteGameRandomFactsVoteByPlayerIdAndRoundId?: GraphCacheUpdateResolver<
      {
        deleteGameRandomFactsVoteByPlayerIdAndRoundId: Maybe<
          WithTypename<DeleteGameRandomFactsVotePayload>
        >
      },
      MutationDeleteGameRandomFactsVoteByPlayerIdAndRoundIdArgs
    >
    deleteGameTeamScore?: GraphCacheUpdateResolver<
      { deleteGameTeamScore: Maybe<WithTypename<DeleteGameTeamScorePayload>> },
      MutationDeleteGameTeamScoreArgs
    >
    deleteGameTeamScoreById?: GraphCacheUpdateResolver<
      {
        deleteGameTeamScoreById: Maybe<WithTypename<DeleteGameTeamScorePayload>>
      },
      MutationDeleteGameTeamScoreByIdArgs
    >
    deleteKvByKey?: GraphCacheUpdateResolver<
      { deleteKvByKey: Maybe<WithTypename<DeleteKvPayload>> },
      MutationDeleteKvByKeyArgs
    >
    deletePlayer?: GraphCacheUpdateResolver<
      { deletePlayer: Maybe<WithTypename<DeletePlayerPayload>> },
      MutationDeletePlayerArgs
    >
    deletePlayerById?: GraphCacheUpdateResolver<
      { deletePlayerById: Maybe<WithTypename<DeletePlayerPayload>> },
      MutationDeletePlayerByIdArgs
    >
    deletePlayerByInvitationCode?: GraphCacheUpdateResolver<
      {
        deletePlayerByInvitationCode: Maybe<WithTypename<DeletePlayerPayload>>
      },
      MutationDeletePlayerByInvitationCodeArgs
    >
    deletePlayerByTeamIdAndInvitationCode?: GraphCacheUpdateResolver<
      {
        deletePlayerByTeamIdAndInvitationCode: Maybe<
          WithTypename<DeletePlayerPayload>
        >
      },
      MutationDeletePlayerByTeamIdAndInvitationCodeArgs
    >
    deleteTeam?: GraphCacheUpdateResolver<
      { deleteTeam: Maybe<WithTypename<DeleteTeamPayload>> },
      MutationDeleteTeamArgs
    >
    deleteTeamById?: GraphCacheUpdateResolver<
      { deleteTeamById: Maybe<WithTypename<DeleteTeamPayload>> },
      MutationDeleteTeamByIdArgs
    >
    deleteTeamLeader?: GraphCacheUpdateResolver<
      { deleteTeamLeader: Maybe<WithTypename<DeleteTeamLeaderPayload>> },
      MutationDeleteTeamLeaderArgs
    >
    deleteTeamLeaderById?: GraphCacheUpdateResolver<
      { deleteTeamLeaderById: Maybe<WithTypename<DeleteTeamLeaderPayload>> },
      MutationDeleteTeamLeaderByIdArgs
    >
    updateCharityOrganization?: GraphCacheUpdateResolver<
      {
        updateCharityOrganization: Maybe<
          WithTypename<UpdateCharityOrganizationPayload>
        >
      },
      MutationUpdateCharityOrganizationArgs
    >
    updateCharityOrganizationById?: GraphCacheUpdateResolver<
      {
        updateCharityOrganizationById: Maybe<
          WithTypename<UpdateCharityOrganizationPayload>
        >
      },
      MutationUpdateCharityOrganizationByIdArgs
    >
    updateCharityOrganizationByName?: GraphCacheUpdateResolver<
      {
        updateCharityOrganizationByName: Maybe<
          WithTypename<UpdateCharityOrganizationPayload>
        >
      },
      MutationUpdateCharityOrganizationByNameArgs
    >
    updateCharityOrganizationByUrl?: GraphCacheUpdateResolver<
      {
        updateCharityOrganizationByUrl: Maybe<
          WithTypename<UpdateCharityOrganizationPayload>
        >
      },
      MutationUpdateCharityOrganizationByUrlArgs
    >
    updateEvent?: GraphCacheUpdateResolver<
      { updateEvent: Maybe<WithTypename<UpdateEventPayload>> },
      MutationUpdateEventArgs
    >
    updateEventById?: GraphCacheUpdateResolver<
      { updateEventById: Maybe<WithTypename<UpdateEventPayload>> },
      MutationUpdateEventByIdArgs
    >
    updateEventByName?: GraphCacheUpdateResolver<
      { updateEventByName: Maybe<WithTypename<UpdateEventPayload>> },
      MutationUpdateEventByNameArgs
    >
    updateGame?: GraphCacheUpdateResolver<
      { updateGame: Maybe<WithTypename<UpdateGamePayload>> },
      MutationUpdateGameArgs
    >
    updateGameByEventIdAndName?: GraphCacheUpdateResolver<
      { updateGameByEventIdAndName: Maybe<WithTypename<UpdateGamePayload>> },
      MutationUpdateGameByEventIdAndNameArgs
    >
    updateGameById?: GraphCacheUpdateResolver<
      { updateGameById: Maybe<WithTypename<UpdateGamePayload>> },
      MutationUpdateGameByIdArgs
    >
    updateGameRandomFactsRound?: GraphCacheUpdateResolver<
      {
        updateGameRandomFactsRound: Maybe<
          WithTypename<UpdateGameRandomFactsRoundPayload>
        >
      },
      MutationUpdateGameRandomFactsRoundArgs
    >
    updateGameRandomFactsRoundById?: GraphCacheUpdateResolver<
      {
        updateGameRandomFactsRoundById: Maybe<
          WithTypename<UpdateGameRandomFactsRoundPayload>
        >
      },
      MutationUpdateGameRandomFactsRoundByIdArgs
    >
    updateGameRandomFactsVote?: GraphCacheUpdateResolver<
      {
        updateGameRandomFactsVote: Maybe<
          WithTypename<UpdateGameRandomFactsVotePayload>
        >
      },
      MutationUpdateGameRandomFactsVoteArgs
    >
    updateGameRandomFactsVoteById?: GraphCacheUpdateResolver<
      {
        updateGameRandomFactsVoteById: Maybe<
          WithTypename<UpdateGameRandomFactsVotePayload>
        >
      },
      MutationUpdateGameRandomFactsVoteByIdArgs
    >
    updateGameRandomFactsVoteByPlayerIdAndRoundId?: GraphCacheUpdateResolver<
      {
        updateGameRandomFactsVoteByPlayerIdAndRoundId: Maybe<
          WithTypename<UpdateGameRandomFactsVotePayload>
        >
      },
      MutationUpdateGameRandomFactsVoteByPlayerIdAndRoundIdArgs
    >
    updateGameTeamScore?: GraphCacheUpdateResolver<
      { updateGameTeamScore: Maybe<WithTypename<UpdateGameTeamScorePayload>> },
      MutationUpdateGameTeamScoreArgs
    >
    updateGameTeamScoreById?: GraphCacheUpdateResolver<
      {
        updateGameTeamScoreById: Maybe<WithTypename<UpdateGameTeamScorePayload>>
      },
      MutationUpdateGameTeamScoreByIdArgs
    >
    updateKvByKey?: GraphCacheUpdateResolver<
      { updateKvByKey: Maybe<WithTypename<UpdateKvPayload>> },
      MutationUpdateKvByKeyArgs
    >
    updatePlayer?: GraphCacheUpdateResolver<
      { updatePlayer: Maybe<WithTypename<UpdatePlayerPayload>> },
      MutationUpdatePlayerArgs
    >
    updatePlayerById?: GraphCacheUpdateResolver<
      { updatePlayerById: Maybe<WithTypename<UpdatePlayerPayload>> },
      MutationUpdatePlayerByIdArgs
    >
    updatePlayerByInvitationCode?: GraphCacheUpdateResolver<
      {
        updatePlayerByInvitationCode: Maybe<WithTypename<UpdatePlayerPayload>>
      },
      MutationUpdatePlayerByInvitationCodeArgs
    >
    updatePlayerByTeamIdAndInvitationCode?: GraphCacheUpdateResolver<
      {
        updatePlayerByTeamIdAndInvitationCode: Maybe<
          WithTypename<UpdatePlayerPayload>
        >
      },
      MutationUpdatePlayerByTeamIdAndInvitationCodeArgs
    >
    updateTeam?: GraphCacheUpdateResolver<
      { updateTeam: Maybe<WithTypename<UpdateTeamPayload>> },
      MutationUpdateTeamArgs
    >
    updateTeamById?: GraphCacheUpdateResolver<
      { updateTeamById: Maybe<WithTypename<UpdateTeamPayload>> },
      MutationUpdateTeamByIdArgs
    >
    updateTeamLeader?: GraphCacheUpdateResolver<
      { updateTeamLeader: Maybe<WithTypename<UpdateTeamLeaderPayload>> },
      MutationUpdateTeamLeaderArgs
    >
    updateTeamLeaderById?: GraphCacheUpdateResolver<
      { updateTeamLeaderById: Maybe<WithTypename<UpdateTeamLeaderPayload>> },
      MutationUpdateTeamLeaderByIdArgs
    >
  }
  Subscription?: {}
}

export type GraphCacheConfig = {
  schema?: CacheExchangeOpts['schema']
  updates?: GraphCacheUpdaters
  keys?: GraphCacheKeysConfig
  optimistic?: GraphCacheOptimisticUpdaters
  resolvers?: GraphCacheResolvers
  storage?: GraphCacheStorageAdapter
}
