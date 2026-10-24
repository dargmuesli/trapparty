/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  cacheExchange,
  Resolver as GraphCacheResolver,
  UpdateResolver as GraphCacheUpdateResolver,
  OptimisticMutationResolver as GraphCacheOptimisticMutationResolver,
} from '@urql/exchange-graphcache'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  BigInt: { input: number; output: number }
  Cursor: { input: string; output: string }
  Datetime: { input: string; output: string }
  UUID: { input: string; output: string }
}

/** Charity organizations. */
export type CharityOrganization = Node & {
  __typename?: 'CharityOrganization'
  /** The charity organization's department. */
  department?: Maybe<Scalars['String']['output']>
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** The charity organization's name. */
  name: Scalars['String']['output']
  /** The charity organization's internal id. */
  rowId: Scalars['Int']['output']
  /** The charity organization's url. */
  url: Scalars['String']['output']
}

/**
 * A condition to be used against `CharityOrganization` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type CharityOrganizationCondition = {
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `url` field. */
  url?: InputMaybe<Scalars['String']['input']>
}

/** A connection to a list of `CharityOrganization` values. */
export type CharityOrganizationConnection = {
  __typename?: 'CharityOrganizationConnection'
  /** A list of edges which contains the `CharityOrganization` and cursor to aid in pagination. */
  edges: Array<CharityOrganizationEdge>
  /** A list of `CharityOrganization` objects. */
  nodes: Array<CharityOrganization>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `CharityOrganization` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `CharityOrganization` edge in the connection. */
export type CharityOrganizationEdge = {
  __typename?: 'CharityOrganizationEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `CharityOrganization` at the end of the edge. */
  node: CharityOrganization
}

/** An input for mutations affecting `CharityOrganization` */
export type CharityOrganizationInput = {
  /** The charity organization's department. */
  department?: InputMaybe<Scalars['String']['input']>
  /** The charity organization's name. */
  name: Scalars['String']['input']
  /** The charity organization's internal id. */
  rowId?: InputMaybe<Scalars['Int']['input']>
  /** The charity organization's url. */
  url: Scalars['String']['input']
}

/** Methods to use when ordering `CharityOrganization`. */
export enum CharityOrganizationOrderBy {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
}

/** Represents an update to a `CharityOrganization`. Fields that are set will be updated. */
export type CharityOrganizationPatch = {
  /** The charity organization's department. */
  department?: InputMaybe<Scalars['String']['input']>
  /** The charity organization's name. */
  name?: InputMaybe<Scalars['String']['input']>
  /** The charity organization's internal id. */
  rowId?: InputMaybe<Scalars['Int']['input']>
  /** The charity organization's url. */
  url?: InputMaybe<Scalars['String']['input']>
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
  charityOrganizationEdge?: Maybe<CharityOrganizationEdge>
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
  orderBy?: Array<CharityOrganizationOrderBy>
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
  eventEdge?: Maybe<EventEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Event` mutation. */
export type CreateEventPayloadEventEdgeArgs = {
  orderBy?: Array<EventOrderBy>
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
  /** The `GameEstimationNumericRound` that was created by this mutation. */
  gameEstimationNumericRound?: Maybe<GameEstimationNumericRound>
  /** An edge for our `GameEstimationNumericRound`. May be used by Relay 1. */
  gameEstimationNumericRoundEdge?: Maybe<GameEstimationNumericRoundEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `GameEstimationNumericRound` mutation. */
export type CreateGameEstimationNumericRoundPayloadGameEstimationNumericRoundEdgeArgs =
  {
    orderBy?: Array<GameEstimationNumericRoundOrderBy>
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
  /** The `GameEstimationNumericVote` that was created by this mutation. */
  gameEstimationNumericVote?: Maybe<GameEstimationNumericVote>
  /** An edge for our `GameEstimationNumericVote`. May be used by Relay 1. */
  gameEstimationNumericVoteEdge?: Maybe<GameEstimationNumericVoteEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `GameEstimationNumericVote` mutation. */
export type CreateGameEstimationNumericVotePayloadGameEstimationNumericVoteEdgeArgs =
  {
    orderBy?: Array<GameEstimationNumericVoteOrderBy>
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
  /** The `Game` that was created by this mutation. */
  game?: Maybe<Game>
  /** An edge for our `Game`. May be used by Relay 1. */
  gameEdge?: Maybe<GameEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Game` mutation. */
export type CreateGamePayloadGameEdgeArgs = {
  orderBy?: Array<GameOrderBy>
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
  /** The `GameRandomFactsRound` that was created by this mutation. */
  gameRandomFactsRound?: Maybe<GameRandomFactsRound>
  /** An edge for our `GameRandomFactsRound`. May be used by Relay 1. */
  gameRandomFactsRoundEdge?: Maybe<GameRandomFactsRoundEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `GameRandomFactsRound` mutation. */
export type CreateGameRandomFactsRoundPayloadGameRandomFactsRoundEdgeArgs = {
  orderBy?: Array<GameRandomFactsRoundOrderBy>
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
  /** The `GameRandomFactsVote` that was created by this mutation. */
  gameRandomFactsVote?: Maybe<GameRandomFactsVote>
  /** An edge for our `GameRandomFactsVote`. May be used by Relay 1. */
  gameRandomFactsVoteEdge?: Maybe<GameRandomFactsVoteEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `GameRandomFactsVote` mutation. */
export type CreateGameRandomFactsVotePayloadGameRandomFactsVoteEdgeArgs = {
  orderBy?: Array<GameRandomFactsVoteOrderBy>
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
  /** The `GameTeamScore` that was created by this mutation. */
  gameTeamScore?: Maybe<GameTeamScore>
  /** An edge for our `GameTeamScore`. May be used by Relay 1. */
  gameTeamScoreEdge?: Maybe<GameTeamScoreEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `GameTeamScore` mutation. */
export type CreateGameTeamScorePayloadGameTeamScoreEdgeArgs = {
  orderBy?: Array<GameTeamScoreOrderBy>
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
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
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
  playerEdge?: Maybe<PlayerEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Player` mutation. */
export type CreatePlayerPayloadPlayerEdgeArgs = {
  orderBy?: Array<PlayerOrderBy>
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
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `TeamLeader` that was created by this mutation. */
  teamLeader?: Maybe<TeamLeader>
  /** An edge for our `TeamLeader`. May be used by Relay 1. */
  teamLeaderEdge?: Maybe<TeamLeaderEdge>
}

/** The output of our create `TeamLeader` mutation. */
export type CreateTeamLeaderPayloadTeamLeaderEdgeArgs = {
  orderBy?: Array<TeamLeaderOrderBy>
}

/** The output of our create `Team` mutation. */
export type CreateTeamPayload = {
  __typename?: 'CreateTeamPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `Team` that was created by this mutation. */
  team?: Maybe<Team>
  /** An edge for our `Team`. May be used by Relay 1. */
  teamEdge?: Maybe<TeamEdge>
}

/** The output of our create `Team` mutation. */
export type CreateTeamPayloadTeamEdgeArgs = {
  orderBy?: Array<TeamOrderBy>
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

/** All input for the `deleteCharityOrganizationByRowId` mutation. */
export type DeleteCharityOrganizationByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The charity organization's internal id. */
  rowId: Scalars['Int']['input']
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
  id: Scalars['ID']['input']
}

/** The output of our delete `CharityOrganization` mutation. */
export type DeleteCharityOrganizationPayload = {
  __typename?: 'DeleteCharityOrganizationPayload'
  /** The `CharityOrganization` that was deleted by this mutation. */
  charityOrganization?: Maybe<CharityOrganization>
  /** An edge for our `CharityOrganization`. May be used by Relay 1. */
  charityOrganizationEdge?: Maybe<CharityOrganizationEdge>
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
  orderBy?: Array<CharityOrganizationOrderBy>
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

/** All input for the `deleteEventByRowId` mutation. */
export type DeleteEventByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The events's internal id. */
  rowId: Scalars['Int']['input']
}

/** All input for the `deleteEvent` mutation. */
export type DeleteEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Event` to be deleted. */
  id: Scalars['ID']['input']
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
  eventEdge?: Maybe<EventEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Event` mutation. */
export type DeleteEventPayloadEventEdgeArgs = {
  orderBy?: Array<EventOrderBy>
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

/** All input for the `deleteGameByRowId` mutation. */
export type DeleteGameByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The games's internal id. */
  rowId: Scalars['Int']['input']
}

/** All input for the `deleteGameEstimationNumericRoundByRowId` mutation. */
export type DeleteGameEstimationNumericRoundByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The round's internal id. */
  rowId: Scalars['Int']['input']
}

/** All input for the `deleteGameEstimationNumericRound` mutation. */
export type DeleteGameEstimationNumericRoundInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `GameEstimationNumericRound` to be deleted. */
  id: Scalars['ID']['input']
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
  /** The `GameEstimationNumericRound` that was deleted by this mutation. */
  gameEstimationNumericRound?: Maybe<GameEstimationNumericRound>
  /** An edge for our `GameEstimationNumericRound`. May be used by Relay 1. */
  gameEstimationNumericRoundEdge?: Maybe<GameEstimationNumericRoundEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `GameEstimationNumericRound` mutation. */
export type DeleteGameEstimationNumericRoundPayloadGameEstimationNumericRoundEdgeArgs =
  {
    orderBy?: Array<GameEstimationNumericRoundOrderBy>
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

/** All input for the `deleteGameEstimationNumericVoteByRowId` mutation. */
export type DeleteGameEstimationNumericVoteByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The vote's internal id. */
  rowId: Scalars['Int']['input']
}

/** All input for the `deleteGameEstimationNumericVote` mutation. */
export type DeleteGameEstimationNumericVoteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `GameEstimationNumericVote` to be deleted. */
  id: Scalars['ID']['input']
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
  /** The `GameEstimationNumericVote` that was deleted by this mutation. */
  gameEstimationNumericVote?: Maybe<GameEstimationNumericVote>
  /** An edge for our `GameEstimationNumericVote`. May be used by Relay 1. */
  gameEstimationNumericVoteEdge?: Maybe<GameEstimationNumericVoteEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `GameEstimationNumericVote` mutation. */
export type DeleteGameEstimationNumericVotePayloadGameEstimationNumericVoteEdgeArgs =
  {
    orderBy?: Array<GameEstimationNumericVoteOrderBy>
  }

/** All input for the `deleteGame` mutation. */
export type DeleteGameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Game` to be deleted. */
  id: Scalars['ID']['input']
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
  /** The `Game` that was deleted by this mutation. */
  game?: Maybe<Game>
  /** An edge for our `Game`. May be used by Relay 1. */
  gameEdge?: Maybe<GameEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Game` mutation. */
export type DeleteGamePayloadGameEdgeArgs = {
  orderBy?: Array<GameOrderBy>
}

/** All input for the `deleteGameRandomFactsRoundByRowId` mutation. */
export type DeleteGameRandomFactsRoundByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The round's internal id. */
  rowId: Scalars['Int']['input']
}

/** All input for the `deleteGameRandomFactsRound` mutation. */
export type DeleteGameRandomFactsRoundInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `GameRandomFactsRound` to be deleted. */
  id: Scalars['ID']['input']
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
  /** The `GameRandomFactsRound` that was deleted by this mutation. */
  gameRandomFactsRound?: Maybe<GameRandomFactsRound>
  /** An edge for our `GameRandomFactsRound`. May be used by Relay 1. */
  gameRandomFactsRoundEdge?: Maybe<GameRandomFactsRoundEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `GameRandomFactsRound` mutation. */
export type DeleteGameRandomFactsRoundPayloadGameRandomFactsRoundEdgeArgs = {
  orderBy?: Array<GameRandomFactsRoundOrderBy>
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

/** All input for the `deleteGameRandomFactsVoteByRowId` mutation. */
export type DeleteGameRandomFactsVoteByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The vote's internal id. */
  rowId: Scalars['Int']['input']
}

/** All input for the `deleteGameRandomFactsVote` mutation. */
export type DeleteGameRandomFactsVoteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `GameRandomFactsVote` to be deleted. */
  id: Scalars['ID']['input']
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
  /** The `GameRandomFactsVote` that was deleted by this mutation. */
  gameRandomFactsVote?: Maybe<GameRandomFactsVote>
  /** An edge for our `GameRandomFactsVote`. May be used by Relay 1. */
  gameRandomFactsVoteEdge?: Maybe<GameRandomFactsVoteEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `GameRandomFactsVote` mutation. */
export type DeleteGameRandomFactsVotePayloadGameRandomFactsVoteEdgeArgs = {
  orderBy?: Array<GameRandomFactsVoteOrderBy>
}

/** All input for the `deleteGameTeamScoreByRowId` mutation. */
export type DeleteGameTeamScoreByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The game score's internal id. */
  rowId: Scalars['Int']['input']
}

/** All input for the `deleteGameTeamScore` mutation. */
export type DeleteGameTeamScoreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `GameTeamScore` to be deleted. */
  id: Scalars['ID']['input']
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
  /** The `GameTeamScore` that was deleted by this mutation. */
  gameTeamScore?: Maybe<GameTeamScore>
  /** An edge for our `GameTeamScore`. May be used by Relay 1. */
  gameTeamScoreEdge?: Maybe<GameTeamScoreEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `GameTeamScore` mutation. */
export type DeleteGameTeamScorePayloadGameTeamScoreEdgeArgs = {
  orderBy?: Array<GameTeamScoreOrderBy>
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
  /** The `Kv` that was deleted by this mutation. */
  kv?: Maybe<Kv>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
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

/** All input for the `deletePlayerByRowId` mutation. */
export type DeletePlayerByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The players's internal id. */
  rowId: Scalars['Int']['input']
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
  id: Scalars['ID']['input']
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
  playerEdge?: Maybe<PlayerEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Player` mutation. */
export type DeletePlayerPayloadPlayerEdgeArgs = {
  orderBy?: Array<PlayerOrderBy>
}

/** All input for the `deleteTeamByRowId` mutation. */
export type DeleteTeamByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The team's internal id. */
  rowId: Scalars['Int']['input']
}

/** All input for the `deleteTeam` mutation. */
export type DeleteTeamInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `Team` to be deleted. */
  id: Scalars['ID']['input']
}

/** All input for the `deleteTeamLeaderByRowId` mutation. */
export type DeleteTeamLeaderByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The team leaders's internal id. */
  rowId: Scalars['Int']['input']
}

/** All input for the `deleteTeamLeader` mutation. */
export type DeleteTeamLeaderInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The globally unique `ID` which will identify a single `TeamLeader` to be deleted. */
  id: Scalars['ID']['input']
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
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `TeamLeader` that was deleted by this mutation. */
  teamLeader?: Maybe<TeamLeader>
  /** An edge for our `TeamLeader`. May be used by Relay 1. */
  teamLeaderEdge?: Maybe<TeamLeaderEdge>
}

/** The output of our delete `TeamLeader` mutation. */
export type DeleteTeamLeaderPayloadTeamLeaderEdgeArgs = {
  orderBy?: Array<TeamLeaderOrderBy>
}

/** The output of our delete `Team` mutation. */
export type DeleteTeamPayload = {
  __typename?: 'DeleteTeamPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  deletedTeamId?: Maybe<Scalars['ID']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `Team` that was deleted by this mutation. */
  team?: Maybe<Team>
  /** An edge for our `Team`. May be used by Relay 1. */
  teamEdge?: Maybe<TeamEdge>
}

/** The output of our delete `Team` mutation. */
export type DeleteTeamPayloadTeamEdgeArgs = {
  orderBy?: Array<TeamOrderBy>
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
  gamesByEventId: GameConnection
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  /** The events's internal id. */
  rowId: Scalars['Int']['output']
  /** The event's start timestamp. */
  start: Scalars['Datetime']['output']
  /** The event's stream url. */
  streamUrl?: Maybe<Scalars['String']['output']>
  /** Reads and enables pagination through a set of `Team`. */
  teamsByEventId: TeamConnection
}

/** Events. */
export type EventGamesByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameOrderBy>>
}

/** Events. */
export type EventTeamsByEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<TeamCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<TeamOrderBy>>
}

/** A condition to be used against `Event` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type EventCondition = {
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `start` field. */
  start?: InputMaybe<Scalars['Datetime']['input']>
}

/** A connection to a list of `Event` values. */
export type EventConnection = {
  __typename?: 'EventConnection'
  /** A list of edges which contains the `Event` and cursor to aid in pagination. */
  edges: Array<EventEdge>
  /** A list of `Event` objects. */
  nodes: Array<Event>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Event` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Event` edge in the connection. */
export type EventEdge = {
  __typename?: 'EventEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Event` at the end of the edge. */
  node: Event
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
  name: Scalars['String']['input']
  /** The events's internal id. */
  rowId?: InputMaybe<Scalars['Int']['input']>
  /** The event's start timestamp. */
  start: Scalars['Datetime']['input']
  /** The event's stream url. */
  streamUrl?: InputMaybe<Scalars['String']['input']>
}

/** Methods to use when ordering `Event`. */
export enum EventOrderBy {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  StartAsc = 'START_ASC',
  StartDesc = 'START_DESC',
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
  name?: InputMaybe<Scalars['String']['input']>
  /** The events's internal id. */
  rowId?: InputMaybe<Scalars['Int']['input']>
  /** The event's start timestamp. */
  start?: InputMaybe<Scalars['Datetime']['input']>
  /** The event's stream url. */
  streamUrl?: InputMaybe<Scalars['String']['input']>
}

/** Games. */
export type Game = Node & {
  __typename?: 'Game'
  /** Reads a single `Event` that is related to this `Game`. */
  eventByEventId?: Maybe<Event>
  /** The game's internal event id */
  eventId: Scalars['Int']['output']
  /** Reads and enables pagination through a set of `GameEstimationNumericRound`. */
  gameEstimationNumericRoundsByGameId: GameEstimationNumericRoundConnection
  /** Reads and enables pagination through a set of `GameRandomFactsRound`. */
  gameRandomFactsRoundsByGameId: GameRandomFactsRoundConnection
  /** Reads and enables pagination through a set of `GameTeamScore`. */
  gameTeamScoresByGameId: GameTeamScoreConnection
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** The games's activeness. */
  isActive: Scalars['Boolean']['output']
  /** The games's name. */
  name: Scalars['String']['output']
  /** The games's internal id. */
  rowId: Scalars['Int']['output']
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
  orderBy?: InputMaybe<Array<GameEstimationNumericRoundOrderBy>>
}

/** Games. */
export type GameGameRandomFactsRoundsByGameIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameRandomFactsRoundCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameRandomFactsRoundOrderBy>>
}

/** Games. */
export type GameGameTeamScoresByGameIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameTeamScoreCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameTeamScoreOrderBy>>
}

/** A condition to be used against `Game` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type GameCondition = {
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<GameType>
}

/** A connection to a list of `Game` values. */
export type GameConnection = {
  __typename?: 'GameConnection'
  /** A list of edges which contains the `Game` and cursor to aid in pagination. */
  edges: Array<GameEdge>
  /** A list of `Game` objects. */
  nodes: Array<Game>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Game` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Game` edge in the connection. */
export type GameEdge = {
  __typename?: 'GameEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Game` at the end of the edge. */
  node: Game
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
export type GameEstimationNumericLeaderboardViewConnection = {
  __typename?: 'GameEstimationNumericLeaderboardViewConnection'
  /** A list of edges which contains the `GameEstimationNumericLeaderboardView` and cursor to aid in pagination. */
  edges: Array<GameEstimationNumericLeaderboardViewEdge>
  /** A list of `GameEstimationNumericLeaderboardView` objects. */
  nodes: Array<GameEstimationNumericLeaderboardView>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GameEstimationNumericLeaderboardView` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `GameEstimationNumericLeaderboardView` edge in the connection. */
export type GameEstimationNumericLeaderboardViewEdge = {
  __typename?: 'GameEstimationNumericLeaderboardViewEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `GameEstimationNumericLeaderboardView` at the end of the edge. */
  node: GameEstimationNumericLeaderboardView
}

/** Methods to use when ordering `GameEstimationNumericLeaderboardView`. */
export enum GameEstimationNumericLeaderboardViewOrderBy {
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
  gameEstimationNumericVotesByRoundId: GameEstimationNumericVoteConnection
  /** The round's internal game id */
  gameId: Scalars['Int']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** The round's internal id. */
  rowId: Scalars['Int']['output']
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
    orderBy?: InputMaybe<Array<GameEstimationNumericVoteOrderBy>>
  }

/**
 * A condition to be used against `GameEstimationNumericRound` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type GameEstimationNumericRoundCondition = {
  /** Checks for equality with the object’s `gameId` field. */
  gameId?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['Int']['input']>
}

/** A connection to a list of `GameEstimationNumericRound` values. */
export type GameEstimationNumericRoundConnection = {
  __typename?: 'GameEstimationNumericRoundConnection'
  /** A list of edges which contains the `GameEstimationNumericRound` and cursor to aid in pagination. */
  edges: Array<GameEstimationNumericRoundEdge>
  /** A list of `GameEstimationNumericRound` objects. */
  nodes: Array<GameEstimationNumericRound>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GameEstimationNumericRound` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `GameEstimationNumericRound` edge in the connection. */
export type GameEstimationNumericRoundEdge = {
  __typename?: 'GameEstimationNumericRoundEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `GameEstimationNumericRound` at the end of the edge. */
  node: GameEstimationNumericRound
}

/** An input for mutations affecting `GameEstimationNumericRound` */
export type GameEstimationNumericRoundInput = {
  /** The round's correct answer. */
  answerCorrect?: InputMaybe<Scalars['Float']['input']>
  /** The round's element name */
  elementName: Scalars['String']['input']
  /** The round's internal game id */
  gameId: Scalars['Int']['input']
}

/** Methods to use when ordering `GameEstimationNumericRound`. */
export enum GameEstimationNumericRoundOrderBy {
  GameIdAsc = 'GAME_ID_ASC',
  GameIdDesc = 'GAME_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
}

/** Represents an update to a `GameEstimationNumericRound`. Fields that are set will be updated. */
export type GameEstimationNumericRoundPatch = {
  /** The round's correct answer. */
  answerCorrect?: InputMaybe<Scalars['Float']['input']>
  /** The round's element name */
  elementName?: InputMaybe<Scalars['String']['input']>
  /** The round's internal game id */
  gameId?: InputMaybe<Scalars['Int']['input']>
  /** The round's internal id. */
  rowId?: InputMaybe<Scalars['Int']['input']>
}

/** A vote of a numeric estimation game round. */
export type GameEstimationNumericVote = Node & {
  __typename?: 'GameEstimationNumericVote'
  /** The vote's answer. */
  answer: Scalars['Float']['output']
  /** Reads a single `GameEstimationNumericRound` that is related to this `GameEstimationNumericVote`. */
  gameEstimationNumericRoundByRoundId?: Maybe<GameEstimationNumericRound>
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** Reads a single `Player` that is related to this `GameEstimationNumericVote`. */
  playerByPlayerId?: Maybe<Player>
  /** The vote's internal player id */
  playerId: Scalars['Int']['output']
  /** The vote's internal round id. */
  roundId: Scalars['Int']['output']
  /** The vote's internal id. */
  rowId: Scalars['Int']['output']
}

/**
 * A condition to be used against `GameEstimationNumericVote` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type GameEstimationNumericVoteCondition = {
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `roundId` field. */
  roundId?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['Int']['input']>
}

/** A connection to a list of `GameEstimationNumericVote` values. */
export type GameEstimationNumericVoteConnection = {
  __typename?: 'GameEstimationNumericVoteConnection'
  /** A list of edges which contains the `GameEstimationNumericVote` and cursor to aid in pagination. */
  edges: Array<GameEstimationNumericVoteEdge>
  /** A list of `GameEstimationNumericVote` objects. */
  nodes: Array<GameEstimationNumericVote>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GameEstimationNumericVote` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `GameEstimationNumericVote` edge in the connection. */
export type GameEstimationNumericVoteEdge = {
  __typename?: 'GameEstimationNumericVoteEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `GameEstimationNumericVote` at the end of the edge. */
  node: GameEstimationNumericVote
}

/** An input for mutations affecting `GameEstimationNumericVote` */
export type GameEstimationNumericVoteInput = {
  /** The vote's answer. */
  answer: Scalars['Float']['input']
  /** The vote's internal player id */
  playerId: Scalars['Int']['input']
  /** The vote's internal round id. */
  roundId: Scalars['Int']['input']
}

/** Methods to use when ordering `GameEstimationNumericVote`. */
export enum GameEstimationNumericVoteOrderBy {
  Natural = 'NATURAL',
  PlayerIdAsc = 'PLAYER_ID_ASC',
  PlayerIdDesc = 'PLAYER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RoundIdAsc = 'ROUND_ID_ASC',
  RoundIdDesc = 'ROUND_ID_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
}

/** Represents an update to a `GameEstimationNumericVote`. Fields that are set will be updated. */
export type GameEstimationNumericVotePatch = {
  /** The vote's answer. */
  answer?: InputMaybe<Scalars['Float']['input']>
  /** The vote's internal player id */
  playerId?: InputMaybe<Scalars['Int']['input']>
  /** The vote's internal round id. */
  roundId?: InputMaybe<Scalars['Int']['input']>
  /** The vote's internal id. */
  rowId?: InputMaybe<Scalars['Int']['input']>
}

/** An input for mutations affecting `Game` */
export type GameInput = {
  /** The game's internal event id */
  eventId: Scalars['Int']['input']
  /** The games's activeness. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  /** The games's name. */
  name: Scalars['String']['input']
  /** The games's internal id. */
  rowId?: InputMaybe<Scalars['Int']['input']>
  /** The game's type */
  type: GameType
}

/** Methods to use when ordering `Game`. */
export enum GameOrderBy {
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
}

/** Represents an update to a `Game`. Fields that are set will be updated. */
export type GamePatch = {
  /** The game's internal event id */
  eventId?: InputMaybe<Scalars['Int']['input']>
  /** The games's activeness. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  /** The games's name. */
  name?: InputMaybe<Scalars['String']['input']>
  /** The games's internal id. */
  rowId?: InputMaybe<Scalars['Int']['input']>
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
  gameRandomFactsVotesByRoundId: GameRandomFactsVoteConnection
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** The round's questioner name */
  questionerName: Scalars['String']['output']
  /** The round's internal id. */
  rowId: Scalars['Int']['output']
}

/** A round of a random facts game. */
export type GameRandomFactsRoundGameRandomFactsVotesByRoundIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameRandomFactsVoteCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameRandomFactsVoteOrderBy>>
}

/**
 * A condition to be used against `GameRandomFactsRound` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type GameRandomFactsRoundCondition = {
  /** Checks for equality with the object’s `gameId` field. */
  gameId?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['Int']['input']>
}

/** A connection to a list of `GameRandomFactsRound` values. */
export type GameRandomFactsRoundConnection = {
  __typename?: 'GameRandomFactsRoundConnection'
  /** A list of edges which contains the `GameRandomFactsRound` and cursor to aid in pagination. */
  edges: Array<GameRandomFactsRoundEdge>
  /** A list of `GameRandomFactsRound` objects. */
  nodes: Array<GameRandomFactsRound>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GameRandomFactsRound` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `GameRandomFactsRound` edge in the connection. */
export type GameRandomFactsRoundEdge = {
  __typename?: 'GameRandomFactsRoundEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `GameRandomFactsRound` at the end of the edge. */
  node: GameRandomFactsRound
}

/** An input for mutations affecting `GameRandomFactsRound` */
export type GameRandomFactsRoundInput = {
  /** The round's correct answer. */
  answerCorrect?: InputMaybe<Scalars['Int']['input']>
  /** The round's internal game id */
  gameId: Scalars['Int']['input']
  /** The round's questioner name */
  questionerName: Scalars['String']['input']
  /** The round's internal id. */
  rowId?: InputMaybe<Scalars['Int']['input']>
}

/** Methods to use when ordering `GameRandomFactsRound`. */
export enum GameRandomFactsRoundOrderBy {
  GameIdAsc = 'GAME_ID_ASC',
  GameIdDesc = 'GAME_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
}

/** Represents an update to a `GameRandomFactsRound`. Fields that are set will be updated. */
export type GameRandomFactsRoundPatch = {
  /** The round's correct answer. */
  answerCorrect?: InputMaybe<Scalars['Int']['input']>
  /** The round's internal game id */
  gameId?: InputMaybe<Scalars['Int']['input']>
  /** The round's questioner name */
  questionerName?: InputMaybe<Scalars['String']['input']>
  /** The round's internal id. */
  rowId?: InputMaybe<Scalars['Int']['input']>
}

/** A vote of a random facts game round. */
export type GameRandomFactsVote = Node & {
  __typename?: 'GameRandomFactsVote'
  /** The vote's answer. */
  answer: Scalars['Int']['output']
  /** Reads a single `GameRandomFactsRound` that is related to this `GameRandomFactsVote`. */
  gameRandomFactsRoundByRoundId?: Maybe<GameRandomFactsRound>
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** Reads a single `Player` that is related to this `GameRandomFactsVote`. */
  playerByPlayerId?: Maybe<Player>
  /** The vote's internal player id */
  playerId: Scalars['Int']['output']
  /** The vote's internal round id. */
  roundId: Scalars['Int']['output']
  /** The vote's internal id. */
  rowId: Scalars['Int']['output']
}

/**
 * A condition to be used against `GameRandomFactsVote` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type GameRandomFactsVoteCondition = {
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `roundId` field. */
  roundId?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['Int']['input']>
}

/** A connection to a list of `GameRandomFactsVote` values. */
export type GameRandomFactsVoteConnection = {
  __typename?: 'GameRandomFactsVoteConnection'
  /** A list of edges which contains the `GameRandomFactsVote` and cursor to aid in pagination. */
  edges: Array<GameRandomFactsVoteEdge>
  /** A list of `GameRandomFactsVote` objects. */
  nodes: Array<GameRandomFactsVote>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GameRandomFactsVote` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `GameRandomFactsVote` edge in the connection. */
export type GameRandomFactsVoteEdge = {
  __typename?: 'GameRandomFactsVoteEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `GameRandomFactsVote` at the end of the edge. */
  node: GameRandomFactsVote
}

/** An input for mutations affecting `GameRandomFactsVote` */
export type GameRandomFactsVoteInput = {
  /** The vote's answer. */
  answer: Scalars['Int']['input']
  /** The vote's internal player id */
  playerId: Scalars['Int']['input']
  /** The vote's internal round id. */
  roundId: Scalars['Int']['input']
  /** The vote's internal id. */
  rowId?: InputMaybe<Scalars['Int']['input']>
}

/** Methods to use when ordering `GameRandomFactsVote`. */
export enum GameRandomFactsVoteOrderBy {
  Natural = 'NATURAL',
  PlayerIdAsc = 'PLAYER_ID_ASC',
  PlayerIdDesc = 'PLAYER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RoundIdAsc = 'ROUND_ID_ASC',
  RoundIdDesc = 'ROUND_ID_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
}

/** Represents an update to a `GameRandomFactsVote`. Fields that are set will be updated. */
export type GameRandomFactsVotePatch = {
  /** The vote's answer. */
  answer?: InputMaybe<Scalars['Int']['input']>
  /** The vote's internal player id */
  playerId?: InputMaybe<Scalars['Int']['input']>
  /** The vote's internal round id. */
  roundId?: InputMaybe<Scalars['Int']['input']>
  /** The vote's internal id. */
  rowId?: InputMaybe<Scalars['Int']['input']>
}

/** Game scores. */
export type GameTeamScore = Node & {
  __typename?: 'GameTeamScore'
  /** Reads a single `Game` that is related to this `GameTeamScore`. */
  gameByGameId?: Maybe<Game>
  /** The score's internal game id */
  gameId: Scalars['Int']['output']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** The game score's internal id. */
  rowId: Scalars['Int']['output']
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
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `teamId` field. */
  teamId?: InputMaybe<Scalars['Int']['input']>
}

/** A connection to a list of `GameTeamScore` values. */
export type GameTeamScoreConnection = {
  __typename?: 'GameTeamScoreConnection'
  /** A list of edges which contains the `GameTeamScore` and cursor to aid in pagination. */
  edges: Array<GameTeamScoreEdge>
  /** A list of `GameTeamScore` objects. */
  nodes: Array<GameTeamScore>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GameTeamScore` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `GameTeamScore` edge in the connection. */
export type GameTeamScoreEdge = {
  __typename?: 'GameTeamScoreEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `GameTeamScore` at the end of the edge. */
  node: GameTeamScore
}

/** An input for mutations affecting `GameTeamScore` */
export type GameTeamScoreInput = {
  /** The score's internal game id */
  gameId: Scalars['Int']['input']
  /** The game score's internal id. */
  rowId?: InputMaybe<Scalars['Int']['input']>
  /** The score. */
  score: Scalars['Int']['input']
  /** The score's internal team id */
  teamId: Scalars['Int']['input']
}

/** Methods to use when ordering `GameTeamScore`. */
export enum GameTeamScoreOrderBy {
  GameIdAsc = 'GAME_ID_ASC',
  GameIdDesc = 'GAME_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  TeamIdAsc = 'TEAM_ID_ASC',
  TeamIdDesc = 'TEAM_ID_DESC',
}

/** Represents an update to a `GameTeamScore`. Fields that are set will be updated. */
export type GameTeamScorePatch = {
  /** The score's internal game id */
  gameId?: InputMaybe<Scalars['Int']['input']>
  /** The game score's internal id. */
  rowId?: InputMaybe<Scalars['Int']['input']>
  /** The score. */
  score?: InputMaybe<Scalars['Int']['input']>
  /** The score's internal team id */
  teamId?: InputMaybe<Scalars['Int']['input']>
}

/** Available game types: estimation_numeric, random_facts, team_score. */
export enum GameType {
  EstimationNumeric = 'estimation_numeric',
  RandomFacts = 'random_facts',
  TeamScore = 'team_score',
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
}

/** A connection to a list of `Kv` values. */
export type KvConnection = {
  __typename?: 'KvConnection'
  /** A list of edges which contains the `Kv` and cursor to aid in pagination. */
  edges: Array<KvEdge>
  /** A list of `Kv` objects. */
  nodes: Array<Kv>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Kv` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Kv` edge in the connection. */
export type KvEdge = {
  __typename?: 'KvEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Kv` at the end of the edge. */
  node: Kv
}

/** An input for mutations affecting `Kv` */
export type KvInput = {
  /** The key. */
  key?: InputMaybe<Scalars['String']['input']>
  /** A value. */
  value?: InputMaybe<Scalars['String']['input']>
}

/** Methods to use when ordering `Kv`. */
export enum KvOrderBy {
  KeyAsc = 'KEY_ASC',
  KeyDesc = 'KEY_DESC',
  Natural = 'NATURAL',
}

/** Represents an update to a `Kv`. Fields that are set will be updated. */
export type KvPatch = {
  /** The key. */
  key?: InputMaybe<Scalars['String']['input']>
  /** A value. */
  value?: InputMaybe<Scalars['String']['input']>
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
  deleteCharityOrganizationByName?: Maybe<DeleteCharityOrganizationPayload>
  /** Deletes a single `CharityOrganization` using a unique key. */
  deleteCharityOrganizationByRowId?: Maybe<DeleteCharityOrganizationPayload>
  /** Deletes a single `CharityOrganization` using a unique key. */
  deleteCharityOrganizationByUrl?: Maybe<DeleteCharityOrganizationPayload>
  /** Deletes a single `Event` using its globally unique id. */
  deleteEvent?: Maybe<DeleteEventPayload>
  /** Deletes a single `Event` using a unique key. */
  deleteEventByName?: Maybe<DeleteEventPayload>
  /** Deletes a single `Event` using a unique key. */
  deleteEventByRowId?: Maybe<DeleteEventPayload>
  /** Deletes a single `Game` using its globally unique id. */
  deleteGame?: Maybe<DeleteGamePayload>
  /** Deletes a single `Game` using a unique key. */
  deleteGameByEventIdAndName?: Maybe<DeleteGamePayload>
  /** Deletes a single `Game` using a unique key. */
  deleteGameByRowId?: Maybe<DeleteGamePayload>
  /** Deletes a single `GameEstimationNumericRound` using its globally unique id. */
  deleteGameEstimationNumericRound?: Maybe<DeleteGameEstimationNumericRoundPayload>
  /** Deletes a single `GameEstimationNumericRound` using a unique key. */
  deleteGameEstimationNumericRoundByRowId?: Maybe<DeleteGameEstimationNumericRoundPayload>
  /** Deletes a single `GameEstimationNumericVote` using its globally unique id. */
  deleteGameEstimationNumericVote?: Maybe<DeleteGameEstimationNumericVotePayload>
  /** Deletes a single `GameEstimationNumericVote` using a unique key. */
  deleteGameEstimationNumericVoteByPlayerIdAndRoundId?: Maybe<DeleteGameEstimationNumericVotePayload>
  /** Deletes a single `GameEstimationNumericVote` using a unique key. */
  deleteGameEstimationNumericVoteByRowId?: Maybe<DeleteGameEstimationNumericVotePayload>
  /** Deletes a single `GameRandomFactsRound` using its globally unique id. */
  deleteGameRandomFactsRound?: Maybe<DeleteGameRandomFactsRoundPayload>
  /** Deletes a single `GameRandomFactsRound` using a unique key. */
  deleteGameRandomFactsRoundByRowId?: Maybe<DeleteGameRandomFactsRoundPayload>
  /** Deletes a single `GameRandomFactsVote` using its globally unique id. */
  deleteGameRandomFactsVote?: Maybe<DeleteGameRandomFactsVotePayload>
  /** Deletes a single `GameRandomFactsVote` using a unique key. */
  deleteGameRandomFactsVoteByPlayerIdAndRoundId?: Maybe<DeleteGameRandomFactsVotePayload>
  /** Deletes a single `GameRandomFactsVote` using a unique key. */
  deleteGameRandomFactsVoteByRowId?: Maybe<DeleteGameRandomFactsVotePayload>
  /** Deletes a single `GameTeamScore` using its globally unique id. */
  deleteGameTeamScore?: Maybe<DeleteGameTeamScorePayload>
  /** Deletes a single `GameTeamScore` using a unique key. */
  deleteGameTeamScoreByRowId?: Maybe<DeleteGameTeamScorePayload>
  /** Deletes a single `Kv` using a unique key. */
  deleteKvByKey?: Maybe<DeleteKvPayload>
  /** Deletes a single `Player` using its globally unique id. */
  deletePlayer?: Maybe<DeletePlayerPayload>
  /** Deletes a single `Player` using a unique key. */
  deletePlayerByInvitationCode?: Maybe<DeletePlayerPayload>
  /** Deletes a single `Player` using a unique key. */
  deletePlayerByRowId?: Maybe<DeletePlayerPayload>
  /** Deletes a single `Player` using a unique key. */
  deletePlayerByTeamIdAndInvitationCode?: Maybe<DeletePlayerPayload>
  /** Deletes a single `Team` using its globally unique id. */
  deleteTeam?: Maybe<DeleteTeamPayload>
  /** Deletes a single `Team` using a unique key. */
  deleteTeamByRowId?: Maybe<DeleteTeamPayload>
  /** Deletes a single `TeamLeader` using its globally unique id. */
  deleteTeamLeader?: Maybe<DeleteTeamLeaderPayload>
  /** Deletes a single `TeamLeader` using a unique key. */
  deleteTeamLeaderByRowId?: Maybe<DeleteTeamLeaderPayload>
  /** Updates a single `CharityOrganization` using its globally unique id and a patch. */
  updateCharityOrganization?: Maybe<UpdateCharityOrganizationPayload>
  /** Updates a single `CharityOrganization` using a unique key and a patch. */
  updateCharityOrganizationByName?: Maybe<UpdateCharityOrganizationPayload>
  /** Updates a single `CharityOrganization` using a unique key and a patch. */
  updateCharityOrganizationByRowId?: Maybe<UpdateCharityOrganizationPayload>
  /** Updates a single `CharityOrganization` using a unique key and a patch. */
  updateCharityOrganizationByUrl?: Maybe<UpdateCharityOrganizationPayload>
  /** Updates a single `Event` using its globally unique id and a patch. */
  updateEvent?: Maybe<UpdateEventPayload>
  /** Updates a single `Event` using a unique key and a patch. */
  updateEventByName?: Maybe<UpdateEventPayload>
  /** Updates a single `Event` using a unique key and a patch. */
  updateEventByRowId?: Maybe<UpdateEventPayload>
  /** Updates a single `Game` using its globally unique id and a patch. */
  updateGame?: Maybe<UpdateGamePayload>
  /** Updates a single `Game` using a unique key and a patch. */
  updateGameByEventIdAndName?: Maybe<UpdateGamePayload>
  /** Updates a single `Game` using a unique key and a patch. */
  updateGameByRowId?: Maybe<UpdateGamePayload>
  /** Updates a single `GameEstimationNumericRound` using its globally unique id and a patch. */
  updateGameEstimationNumericRound?: Maybe<UpdateGameEstimationNumericRoundPayload>
  /** Updates a single `GameEstimationNumericRound` using a unique key and a patch. */
  updateGameEstimationNumericRoundByRowId?: Maybe<UpdateGameEstimationNumericRoundPayload>
  /** Updates a single `GameEstimationNumericVote` using its globally unique id and a patch. */
  updateGameEstimationNumericVote?: Maybe<UpdateGameEstimationNumericVotePayload>
  /** Updates a single `GameEstimationNumericVote` using a unique key and a patch. */
  updateGameEstimationNumericVoteByPlayerIdAndRoundId?: Maybe<UpdateGameEstimationNumericVotePayload>
  /** Updates a single `GameEstimationNumericVote` using a unique key and a patch. */
  updateGameEstimationNumericVoteByRowId?: Maybe<UpdateGameEstimationNumericVotePayload>
  /** Updates a single `GameRandomFactsRound` using its globally unique id and a patch. */
  updateGameRandomFactsRound?: Maybe<UpdateGameRandomFactsRoundPayload>
  /** Updates a single `GameRandomFactsRound` using a unique key and a patch. */
  updateGameRandomFactsRoundByRowId?: Maybe<UpdateGameRandomFactsRoundPayload>
  /** Updates a single `GameRandomFactsVote` using its globally unique id and a patch. */
  updateGameRandomFactsVote?: Maybe<UpdateGameRandomFactsVotePayload>
  /** Updates a single `GameRandomFactsVote` using a unique key and a patch. */
  updateGameRandomFactsVoteByPlayerIdAndRoundId?: Maybe<UpdateGameRandomFactsVotePayload>
  /** Updates a single `GameRandomFactsVote` using a unique key and a patch. */
  updateGameRandomFactsVoteByRowId?: Maybe<UpdateGameRandomFactsVotePayload>
  /** Updates a single `GameTeamScore` using its globally unique id and a patch. */
  updateGameTeamScore?: Maybe<UpdateGameTeamScorePayload>
  /** Updates a single `GameTeamScore` using a unique key and a patch. */
  updateGameTeamScoreByRowId?: Maybe<UpdateGameTeamScorePayload>
  /** Updates a single `Kv` using a unique key and a patch. */
  updateKvByKey?: Maybe<UpdateKvPayload>
  /** Updates a single `Player` using its globally unique id and a patch. */
  updatePlayer?: Maybe<UpdatePlayerPayload>
  /** Updates a single `Player` using a unique key and a patch. */
  updatePlayerByInvitationCode?: Maybe<UpdatePlayerPayload>
  /** Updates a single `Player` using a unique key and a patch. */
  updatePlayerByRowId?: Maybe<UpdatePlayerPayload>
  /** Updates a single `Player` using a unique key and a patch. */
  updatePlayerByTeamIdAndInvitationCode?: Maybe<UpdatePlayerPayload>
  /** Updates a single `Team` using its globally unique id and a patch. */
  updateTeam?: Maybe<UpdateTeamPayload>
  /** Updates a single `Team` using a unique key and a patch. */
  updateTeamByRowId?: Maybe<UpdateTeamPayload>
  /** Updates a single `TeamLeader` using its globally unique id and a patch. */
  updateTeamLeader?: Maybe<UpdateTeamLeaderPayload>
  /** Updates a single `TeamLeader` using a unique key and a patch. */
  updateTeamLeaderByRowId?: Maybe<UpdateTeamLeaderPayload>
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
export type MutationDeleteCharityOrganizationByNameArgs = {
  input: DeleteCharityOrganizationByNameInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCharityOrganizationByRowIdArgs = {
  input: DeleteCharityOrganizationByRowIdInput
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
export type MutationDeleteEventByNameArgs = {
  input: DeleteEventByNameInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventByRowIdArgs = {
  input: DeleteEventByRowIdInput
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
export type MutationDeleteGameByRowIdArgs = {
  input: DeleteGameByRowIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameEstimationNumericRoundArgs = {
  input: DeleteGameEstimationNumericRoundInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameEstimationNumericRoundByRowIdArgs = {
  input: DeleteGameEstimationNumericRoundByRowIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameEstimationNumericVoteArgs = {
  input: DeleteGameEstimationNumericVoteInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameEstimationNumericVoteByPlayerIdAndRoundIdArgs = {
  input: DeleteGameEstimationNumericVoteByPlayerIdAndRoundIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameEstimationNumericVoteByRowIdArgs = {
  input: DeleteGameEstimationNumericVoteByRowIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameRandomFactsRoundArgs = {
  input: DeleteGameRandomFactsRoundInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameRandomFactsRoundByRowIdArgs = {
  input: DeleteGameRandomFactsRoundByRowIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameRandomFactsVoteArgs = {
  input: DeleteGameRandomFactsVoteInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameRandomFactsVoteByPlayerIdAndRoundIdArgs = {
  input: DeleteGameRandomFactsVoteByPlayerIdAndRoundIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameRandomFactsVoteByRowIdArgs = {
  input: DeleteGameRandomFactsVoteByRowIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameTeamScoreArgs = {
  input: DeleteGameTeamScoreInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGameTeamScoreByRowIdArgs = {
  input: DeleteGameTeamScoreByRowIdInput
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
export type MutationDeletePlayerByInvitationCodeArgs = {
  input: DeletePlayerByInvitationCodeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePlayerByRowIdArgs = {
  input: DeletePlayerByRowIdInput
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
export type MutationDeleteTeamByRowIdArgs = {
  input: DeleteTeamByRowIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTeamLeaderArgs = {
  input: DeleteTeamLeaderInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTeamLeaderByRowIdArgs = {
  input: DeleteTeamLeaderByRowIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCharityOrganizationArgs = {
  input: UpdateCharityOrganizationInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCharityOrganizationByNameArgs = {
  input: UpdateCharityOrganizationByNameInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCharityOrganizationByRowIdArgs = {
  input: UpdateCharityOrganizationByRowIdInput
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
export type MutationUpdateEventByNameArgs = {
  input: UpdateEventByNameInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventByRowIdArgs = {
  input: UpdateEventByRowIdInput
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
export type MutationUpdateGameByRowIdArgs = {
  input: UpdateGameByRowIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameEstimationNumericRoundArgs = {
  input: UpdateGameEstimationNumericRoundInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameEstimationNumericRoundByRowIdArgs = {
  input: UpdateGameEstimationNumericRoundByRowIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameEstimationNumericVoteArgs = {
  input: UpdateGameEstimationNumericVoteInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameEstimationNumericVoteByPlayerIdAndRoundIdArgs = {
  input: UpdateGameEstimationNumericVoteByPlayerIdAndRoundIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameEstimationNumericVoteByRowIdArgs = {
  input: UpdateGameEstimationNumericVoteByRowIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameRandomFactsRoundArgs = {
  input: UpdateGameRandomFactsRoundInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameRandomFactsRoundByRowIdArgs = {
  input: UpdateGameRandomFactsRoundByRowIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameRandomFactsVoteArgs = {
  input: UpdateGameRandomFactsVoteInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameRandomFactsVoteByPlayerIdAndRoundIdArgs = {
  input: UpdateGameRandomFactsVoteByPlayerIdAndRoundIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameRandomFactsVoteByRowIdArgs = {
  input: UpdateGameRandomFactsVoteByRowIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameTeamScoreArgs = {
  input: UpdateGameTeamScoreInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGameTeamScoreByRowIdArgs = {
  input: UpdateGameTeamScoreByRowIdInput
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
export type MutationUpdatePlayerByInvitationCodeArgs = {
  input: UpdatePlayerByInvitationCodeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePlayerByRowIdArgs = {
  input: UpdatePlayerByRowIdInput
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
export type MutationUpdateTeamByRowIdArgs = {
  input: UpdateTeamByRowIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTeamLeaderArgs = {
  input: UpdateTeamLeaderInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTeamLeaderByRowIdArgs = {
  input: UpdateTeamLeaderByRowIdInput
}

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
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
  gameEstimationNumericVotesByPlayerId: GameEstimationNumericVoteConnection
  /** Reads and enables pagination through a set of `GameRandomFactsVote`. */
  gameRandomFactsVotesByPlayerId: GameRandomFactsVoteConnection
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** The player's invitation code. */
  invitationCode: Scalars['UUID']['output']
  /** The player's name. */
  name: Scalars['String']['output']
  /** The players's internal id. */
  rowId: Scalars['Int']['output']
  /** Reads a single `Team` that is related to this `Player`. */
  teamByTeamId?: Maybe<Team>
  /** The player's internal team id. */
  teamId?: Maybe<Scalars['Int']['output']>
}

/** Players. */
export type PlayerGameEstimationNumericVotesByPlayerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameEstimationNumericVoteCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameEstimationNumericVoteOrderBy>>
}

/** Players. */
export type PlayerGameRandomFactsVotesByPlayerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameRandomFactsVoteCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameRandomFactsVoteOrderBy>>
}

/** A condition to be used against `Player` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PlayerCondition = {
  /** Checks for equality with the object’s `invitationCode` field. */
  invitationCode?: InputMaybe<Scalars['UUID']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `teamId` field. */
  teamId?: InputMaybe<Scalars['Int']['input']>
}

/** A connection to a list of `Player` values. */
export type PlayerConnection = {
  __typename?: 'PlayerConnection'
  /** A list of edges which contains the `Player` and cursor to aid in pagination. */
  edges: Array<PlayerEdge>
  /** A list of `Player` objects. */
  nodes: Array<Player>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Player` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Player` edge in the connection. */
export type PlayerEdge = {
  __typename?: 'PlayerEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Player` at the end of the edge. */
  node: Player
}

/** An input for mutations affecting `Player` */
export type PlayerInput = {
  /** The player's invitation code. */
  invitationCode?: InputMaybe<Scalars['UUID']['input']>
  /** The player's name. */
  name: Scalars['String']['input']
  /** The players's internal id. */
  rowId?: InputMaybe<Scalars['Int']['input']>
  /** The player's internal team id. */
  teamId?: InputMaybe<Scalars['Int']['input']>
}

/** Methods to use when ordering `Player`. */
export enum PlayerOrderBy {
  InvitationCodeAsc = 'INVITATION_CODE_ASC',
  InvitationCodeDesc = 'INVITATION_CODE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  TeamIdAsc = 'TEAM_ID_ASC',
  TeamIdDesc = 'TEAM_ID_DESC',
}

/** Represents an update to a `Player`. Fields that are set will be updated. */
export type PlayerPatch = {
  /** The player's invitation code. */
  invitationCode?: InputMaybe<Scalars['UUID']['input']>
  /** The player's name. */
  name?: InputMaybe<Scalars['String']['input']>
  /** The players's internal id. */
  rowId?: InputMaybe<Scalars['Int']['input']>
  /** The player's internal team id. */
  teamId?: InputMaybe<Scalars['Int']['input']>
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query'
  /** Reads and enables pagination through a set of `CharityOrganization`. */
  allCharityOrganizations?: Maybe<CharityOrganizationConnection>
  /** Reads and enables pagination through a set of `Event`. */
  allEvents?: Maybe<EventConnection>
  /** Reads and enables pagination through a set of `GameEstimationNumericLeaderboardView`. */
  allGameEstimationNumericLeaderboardViews?: Maybe<GameEstimationNumericLeaderboardViewConnection>
  /** Reads and enables pagination through a set of `GameEstimationNumericRound`. */
  allGameEstimationNumericRounds?: Maybe<GameEstimationNumericRoundConnection>
  /** Reads and enables pagination through a set of `GameEstimationNumericVote`. */
  allGameEstimationNumericVotes?: Maybe<GameEstimationNumericVoteConnection>
  /** Reads and enables pagination through a set of `GameRandomFactsRound`. */
  allGameRandomFactsRounds?: Maybe<GameRandomFactsRoundConnection>
  /** Reads and enables pagination through a set of `GameRandomFactsVote`. */
  allGameRandomFactsVotes?: Maybe<GameRandomFactsVoteConnection>
  /** Reads and enables pagination through a set of `GameTeamScore`. */
  allGameTeamScores?: Maybe<GameTeamScoreConnection>
  /** Reads and enables pagination through a set of `Game`. */
  allGames?: Maybe<GameConnection>
  /** Reads and enables pagination through a set of `Kv`. */
  allKvs?: Maybe<KvConnection>
  /** Reads and enables pagination through a set of `Player`. */
  allPlayers?: Maybe<PlayerConnection>
  /** Reads and enables pagination through a set of `TeamLeader`. */
  allTeamLeaders?: Maybe<TeamLeaderConnection>
  /** Reads and enables pagination through a set of `Team`. */
  allTeams?: Maybe<TeamConnection>
  /** Reads a single `CharityOrganization` using its globally unique `ID`. */
  charityOrganization?: Maybe<CharityOrganization>
  /** Get a single `CharityOrganization`. */
  charityOrganizationByName?: Maybe<CharityOrganization>
  /** Get a single `CharityOrganization`. */
  charityOrganizationByRowId?: Maybe<CharityOrganization>
  /** Get a single `CharityOrganization`. */
  charityOrganizationByUrl?: Maybe<CharityOrganization>
  /** Reads a single `Event` using its globally unique `ID`. */
  event?: Maybe<Event>
  /** Get a single `Event`. */
  eventByName?: Maybe<Event>
  /** Get a single `Event`. */
  eventByRowId?: Maybe<Event>
  /** Reads a single `Game` using its globally unique `ID`. */
  game?: Maybe<Game>
  /** Get a single `Game`. */
  gameByEventIdAndName?: Maybe<Game>
  /** Get a single `Game`. */
  gameByRowId?: Maybe<Game>
  /** Reads a single `GameEstimationNumericRound` using its globally unique `ID`. */
  gameEstimationNumericRound?: Maybe<GameEstimationNumericRound>
  /** Get a single `GameEstimationNumericRound`. */
  gameEstimationNumericRoundByRowId?: Maybe<GameEstimationNumericRound>
  /** Reads a single `GameEstimationNumericVote` using its globally unique `ID`. */
  gameEstimationNumericVote?: Maybe<GameEstimationNumericVote>
  /** Get a single `GameEstimationNumericVote`. */
  gameEstimationNumericVoteByPlayerIdAndRoundId?: Maybe<GameEstimationNumericVote>
  /** Get a single `GameEstimationNumericVote`. */
  gameEstimationNumericVoteByRowId?: Maybe<GameEstimationNumericVote>
  /** Reads a single `GameRandomFactsRound` using its globally unique `ID`. */
  gameRandomFactsRound?: Maybe<GameRandomFactsRound>
  /** Get a single `GameRandomFactsRound`. */
  gameRandomFactsRoundByRowId?: Maybe<GameRandomFactsRound>
  /** Reads a single `GameRandomFactsVote` using its globally unique `ID`. */
  gameRandomFactsVote?: Maybe<GameRandomFactsVote>
  /** Get a single `GameRandomFactsVote`. */
  gameRandomFactsVoteByPlayerIdAndRoundId?: Maybe<GameRandomFactsVote>
  /** Get a single `GameRandomFactsVote`. */
  gameRandomFactsVoteByRowId?: Maybe<GameRandomFactsVote>
  /** Reads a single `GameTeamScore` using its globally unique `ID`. */
  gameTeamScore?: Maybe<GameTeamScore>
  /** Get a single `GameTeamScore`. */
  gameTeamScoreByRowId?: Maybe<GameTeamScore>
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  id: Scalars['ID']['output']
  /** Get a single `Kv`. */
  kvByKey?: Maybe<Kv>
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>
  /** Reads a single `Player` using its globally unique `ID`. */
  player?: Maybe<Player>
  /** Get a single `Player`. */
  playerByInvitationCode?: Maybe<Player>
  /** Retrieves player data by invitation code. */
  playerByInvitationCodeFn?: Maybe<PlayerConnection>
  /** Get a single `Player`. */
  playerByRowId?: Maybe<Player>
  /** Get a single `Player`. */
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
  /** Get a single `Team`. */
  teamByRowId?: Maybe<Team>
  /** Reads a single `TeamLeader` using its globally unique `ID`. */
  teamLeader?: Maybe<TeamLeader>
  /** Get a single `TeamLeader`. */
  teamLeaderByRowId?: Maybe<TeamLeader>
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
  orderBy?: InputMaybe<Array<CharityOrganizationOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<EventCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<EventOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGameEstimationNumericLeaderboardViewsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameEstimationNumericLeaderboardViewCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameEstimationNumericLeaderboardViewOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGameEstimationNumericRoundsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameEstimationNumericRoundCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameEstimationNumericRoundOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGameEstimationNumericVotesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameEstimationNumericVoteCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameEstimationNumericVoteOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGameRandomFactsRoundsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameRandomFactsRoundCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameRandomFactsRoundOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGameRandomFactsVotesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameRandomFactsVoteCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameRandomFactsVoteOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGameTeamScoresArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameTeamScoreCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameTeamScoreOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGamesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllKvsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<KvCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<KvOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllPlayersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PlayerCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<PlayerOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllTeamLeadersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<TeamLeaderCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<TeamLeaderOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllTeamsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<TeamCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<TeamOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryCharityOrganizationArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryCharityOrganizationByNameArgs = {
  name: Scalars['String']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryCharityOrganizationByRowIdArgs = {
  rowId: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryCharityOrganizationByUrlArgs = {
  url: Scalars['String']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventByNameArgs = {
  name: Scalars['String']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryEventByRowIdArgs = {
  rowId: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameByEventIdAndNameArgs = {
  eventId: Scalars['Int']['input']
  name: Scalars['String']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameByRowIdArgs = {
  rowId: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameEstimationNumericRoundArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameEstimationNumericRoundByRowIdArgs = {
  rowId: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameEstimationNumericVoteArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameEstimationNumericVoteByPlayerIdAndRoundIdArgs = {
  playerId: Scalars['Int']['input']
  roundId: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameEstimationNumericVoteByRowIdArgs = {
  rowId: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameRandomFactsRoundArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameRandomFactsRoundByRowIdArgs = {
  rowId: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameRandomFactsVoteArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameRandomFactsVoteByPlayerIdAndRoundIdArgs = {
  playerId: Scalars['Int']['input']
  roundId: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameRandomFactsVoteByRowIdArgs = {
  rowId: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameTeamScoreArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryGameTeamScoreByRowIdArgs = {
  rowId: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryKvByKeyArgs = {
  key: Scalars['String']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPlayerArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPlayerByInvitationCodeArgs = {
  invitationCode: Scalars['UUID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryPlayerByInvitationCodeFnArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  invitationCode: Scalars['UUID']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
}

/** The root query type which gives access points into the data universe. */
export type QueryPlayerByRowIdArgs = {
  rowId: Scalars['Int']['input']
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
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryTeamByRowIdArgs = {
  rowId: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryTeamLeaderArgs = {
  id: Scalars['ID']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryTeamLeaderByRowIdArgs = {
  rowId: Scalars['Int']['input']
}

/** The root query type which gives access points into the data universe. */
export type QueryTeamPlayerCountArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  eventId: Scalars['Int']['input']
  first?: InputMaybe<Scalars['Int']['input']>
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
  gameTeamScoresByTeamId: GameTeamScoreConnection
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** The team's name. */
  name: Scalars['String']['output']
  /** Reads and enables pagination through a set of `Player`. */
  playersByTeamId: PlayerConnection
  /** The team's internal id. */
  rowId: Scalars['Int']['output']
}

/** Teams. */
export type TeamGameTeamScoresByTeamIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<GameTeamScoreCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<GameTeamScoreOrderBy>>
}

/** Teams. */
export type TeamPlayersByTeamIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  condition?: InputMaybe<PlayerCondition>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<PlayerOrderBy>>
}

/** A condition to be used against `Team` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type TeamCondition = {
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['Int']['input']>
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['Int']['input']>
}

/** A connection to a list of `Team` values. */
export type TeamConnection = {
  __typename?: 'TeamConnection'
  /** A list of edges which contains the `Team` and cursor to aid in pagination. */
  edges: Array<TeamEdge>
  /** A list of `Team` objects. */
  nodes: Array<Team>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Team` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `Team` edge in the connection. */
export type TeamEdge = {
  __typename?: 'TeamEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `Team` at the end of the edge. */
  node: Team
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
  /** The team's name. */
  name: Scalars['String']['input']
  /** The team's internal id. */
  rowId?: InputMaybe<Scalars['Int']['input']>
}

/** Leaders. */
export type TeamLeader = Node & {
  __typename?: 'TeamLeader'
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output']
  /** Reads a single `Player` that is related to this `TeamLeader`. */
  playerByPlayerId?: Maybe<Player>
  /** The team leader's internal player id. */
  playerId: Scalars['Int']['output']
  /** The team leaders's internal id. */
  rowId: Scalars['Int']['output']
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
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['Int']['input']>
}

/** A connection to a list of `TeamLeader` values. */
export type TeamLeaderConnection = {
  __typename?: 'TeamLeaderConnection'
  /** A list of edges which contains the `TeamLeader` and cursor to aid in pagination. */
  edges: Array<TeamLeaderEdge>
  /** A list of `TeamLeader` objects. */
  nodes: Array<TeamLeader>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `TeamLeader` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `TeamLeader` edge in the connection. */
export type TeamLeaderEdge = {
  __typename?: 'TeamLeaderEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `TeamLeader` at the end of the edge. */
  node: TeamLeader
}

/** An input for mutations affecting `TeamLeader` */
export type TeamLeaderInput = {
  /** The team leader's internal player id. */
  playerId: Scalars['Int']['input']
  /** The team leaders's internal id. */
  rowId?: InputMaybe<Scalars['Int']['input']>
  /** The team leader's internal team id. */
  teamId: Scalars['Int']['input']
}

/** Methods to use when ordering `TeamLeader`. */
export enum TeamLeaderOrderBy {
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
}

/** Represents an update to a `TeamLeader`. Fields that are set will be updated. */
export type TeamLeaderPatch = {
  /** The team leader's internal player id. */
  playerId?: InputMaybe<Scalars['Int']['input']>
  /** The team leaders's internal id. */
  rowId?: InputMaybe<Scalars['Int']['input']>
  /** The team leader's internal team id. */
  teamId?: InputMaybe<Scalars['Int']['input']>
}

/** Methods to use when ordering `Team`. */
export enum TeamOrderBy {
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
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
  /** The team's name. */
  name?: InputMaybe<Scalars['String']['input']>
  /** The team's internal id. */
  rowId?: InputMaybe<Scalars['Int']['input']>
}

/** A connection to a list of `TeamPlayerCountRecord` values. */
export type TeamPlayerCountConnection = {
  __typename?: 'TeamPlayerCountConnection'
  /** A list of edges which contains the `TeamPlayerCountRecord` and cursor to aid in pagination. */
  edges: Array<TeamPlayerCountEdge>
  /** A list of `TeamPlayerCountRecord` objects. */
  nodes: Array<TeamPlayerCountRecord>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `TeamPlayerCountRecord` you could get from the connection. */
  totalCount: Scalars['Int']['output']
}

/** A `TeamPlayerCountRecord` edge in the connection. */
export type TeamPlayerCountEdge = {
  __typename?: 'TeamPlayerCountEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>
  /** The `TeamPlayerCountRecord` at the end of the edge. */
  node: TeamPlayerCountRecord
}

export type TeamPlayerCountRecord = {
  __typename?: 'TeamPlayerCountRecord'
  id?: Maybe<Scalars['Int']['output']>
  playerCount?: Maybe<Scalars['BigInt']['output']>
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

/** All input for the `updateCharityOrganizationByRowId` mutation. */
export type UpdateCharityOrganizationByRowIdInput = {
  /** An object where the defined keys will be set on the `CharityOrganization` being updated. */
  charityOrganizationPatch: CharityOrganizationPatch
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The charity organization's internal id. */
  rowId: Scalars['Int']['input']
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
  id: Scalars['ID']['input']
}

/** The output of our update `CharityOrganization` mutation. */
export type UpdateCharityOrganizationPayload = {
  __typename?: 'UpdateCharityOrganizationPayload'
  /** The `CharityOrganization` that was updated by this mutation. */
  charityOrganization?: Maybe<CharityOrganization>
  /** An edge for our `CharityOrganization`. May be used by Relay 1. */
  charityOrganizationEdge?: Maybe<CharityOrganizationEdge>
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
  orderBy?: Array<CharityOrganizationOrderBy>
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

/** All input for the `updateEventByRowId` mutation. */
export type UpdateEventByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Event` being updated. */
  eventPatch: EventPatch
  /** The events's internal id. */
  rowId: Scalars['Int']['input']
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
  id: Scalars['ID']['input']
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
  eventEdge?: Maybe<EventEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Event` mutation. */
export type UpdateEventPayloadEventEdgeArgs = {
  orderBy?: Array<EventOrderBy>
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

/** All input for the `updateGameByRowId` mutation. */
export type UpdateGameByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Game` being updated. */
  gamePatch: GamePatch
  /** The games's internal id. */
  rowId: Scalars['Int']['input']
}

/** All input for the `updateGameEstimationNumericRoundByRowId` mutation. */
export type UpdateGameEstimationNumericRoundByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `GameEstimationNumericRound` being updated. */
  gameEstimationNumericRoundPatch: GameEstimationNumericRoundPatch
  /** The round's internal id. */
  rowId: Scalars['Int']['input']
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
  id: Scalars['ID']['input']
}

/** The output of our update `GameEstimationNumericRound` mutation. */
export type UpdateGameEstimationNumericRoundPayload = {
  __typename?: 'UpdateGameEstimationNumericRoundPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `GameEstimationNumericRound` that was updated by this mutation. */
  gameEstimationNumericRound?: Maybe<GameEstimationNumericRound>
  /** An edge for our `GameEstimationNumericRound`. May be used by Relay 1. */
  gameEstimationNumericRoundEdge?: Maybe<GameEstimationNumericRoundEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `GameEstimationNumericRound` mutation. */
export type UpdateGameEstimationNumericRoundPayloadGameEstimationNumericRoundEdgeArgs =
  {
    orderBy?: Array<GameEstimationNumericRoundOrderBy>
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

/** All input for the `updateGameEstimationNumericVoteByRowId` mutation. */
export type UpdateGameEstimationNumericVoteByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `GameEstimationNumericVote` being updated. */
  gameEstimationNumericVotePatch: GameEstimationNumericVotePatch
  /** The vote's internal id. */
  rowId: Scalars['Int']['input']
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
  id: Scalars['ID']['input']
}

/** The output of our update `GameEstimationNumericVote` mutation. */
export type UpdateGameEstimationNumericVotePayload = {
  __typename?: 'UpdateGameEstimationNumericVotePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `GameEstimationNumericVote` that was updated by this mutation. */
  gameEstimationNumericVote?: Maybe<GameEstimationNumericVote>
  /** An edge for our `GameEstimationNumericVote`. May be used by Relay 1. */
  gameEstimationNumericVoteEdge?: Maybe<GameEstimationNumericVoteEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `GameEstimationNumericVote` mutation. */
export type UpdateGameEstimationNumericVotePayloadGameEstimationNumericVoteEdgeArgs =
  {
    orderBy?: Array<GameEstimationNumericVoteOrderBy>
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
  id: Scalars['ID']['input']
}

/** The output of our update `Game` mutation. */
export type UpdateGamePayload = {
  __typename?: 'UpdateGamePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `Game` that was updated by this mutation. */
  game?: Maybe<Game>
  /** An edge for our `Game`. May be used by Relay 1. */
  gameEdge?: Maybe<GameEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Game` mutation. */
export type UpdateGamePayloadGameEdgeArgs = {
  orderBy?: Array<GameOrderBy>
}

/** All input for the `updateGameRandomFactsRoundByRowId` mutation. */
export type UpdateGameRandomFactsRoundByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `GameRandomFactsRound` being updated. */
  gameRandomFactsRoundPatch: GameRandomFactsRoundPatch
  /** The round's internal id. */
  rowId: Scalars['Int']['input']
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
  id: Scalars['ID']['input']
}

/** The output of our update `GameRandomFactsRound` mutation. */
export type UpdateGameRandomFactsRoundPayload = {
  __typename?: 'UpdateGameRandomFactsRoundPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `GameRandomFactsRound` that was updated by this mutation. */
  gameRandomFactsRound?: Maybe<GameRandomFactsRound>
  /** An edge for our `GameRandomFactsRound`. May be used by Relay 1. */
  gameRandomFactsRoundEdge?: Maybe<GameRandomFactsRoundEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `GameRandomFactsRound` mutation. */
export type UpdateGameRandomFactsRoundPayloadGameRandomFactsRoundEdgeArgs = {
  orderBy?: Array<GameRandomFactsRoundOrderBy>
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

/** All input for the `updateGameRandomFactsVoteByRowId` mutation. */
export type UpdateGameRandomFactsVoteByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `GameRandomFactsVote` being updated. */
  gameRandomFactsVotePatch: GameRandomFactsVotePatch
  /** The vote's internal id. */
  rowId: Scalars['Int']['input']
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
  id: Scalars['ID']['input']
}

/** The output of our update `GameRandomFactsVote` mutation. */
export type UpdateGameRandomFactsVotePayload = {
  __typename?: 'UpdateGameRandomFactsVotePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `GameRandomFactsVote` that was updated by this mutation. */
  gameRandomFactsVote?: Maybe<GameRandomFactsVote>
  /** An edge for our `GameRandomFactsVote`. May be used by Relay 1. */
  gameRandomFactsVoteEdge?: Maybe<GameRandomFactsVoteEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `GameRandomFactsVote` mutation. */
export type UpdateGameRandomFactsVotePayloadGameRandomFactsVoteEdgeArgs = {
  orderBy?: Array<GameRandomFactsVoteOrderBy>
}

/** All input for the `updateGameTeamScoreByRowId` mutation. */
export type UpdateGameTeamScoreByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `GameTeamScore` being updated. */
  gameTeamScorePatch: GameTeamScorePatch
  /** The game score's internal id. */
  rowId: Scalars['Int']['input']
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
  id: Scalars['ID']['input']
}

/** The output of our update `GameTeamScore` mutation. */
export type UpdateGameTeamScorePayload = {
  __typename?: 'UpdateGameTeamScorePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The `GameTeamScore` that was updated by this mutation. */
  gameTeamScore?: Maybe<GameTeamScore>
  /** An edge for our `GameTeamScore`. May be used by Relay 1. */
  gameTeamScoreEdge?: Maybe<GameTeamScoreEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `GameTeamScore` mutation. */
export type UpdateGameTeamScorePayloadGameTeamScoreEdgeArgs = {
  orderBy?: Array<GameTeamScoreOrderBy>
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
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
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

/** All input for the `updatePlayerByRowId` mutation. */
export type UpdatePlayerByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** An object where the defined keys will be set on the `Player` being updated. */
  playerPatch: PlayerPatch
  /** The players's internal id. */
  rowId: Scalars['Int']['input']
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
  id: Scalars['ID']['input']
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
  playerEdge?: Maybe<PlayerEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Player` mutation. */
export type UpdatePlayerPayloadPlayerEdgeArgs = {
  orderBy?: Array<PlayerOrderBy>
}

/** All input for the `updateTeamByRowId` mutation. */
export type UpdateTeamByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The team's internal id. */
  rowId: Scalars['Int']['input']
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
  id: Scalars['ID']['input']
  /** An object where the defined keys will be set on the `Team` being updated. */
  teamPatch: TeamPatch
}

/** All input for the `updateTeamLeaderByRowId` mutation. */
export type UpdateTeamLeaderByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The team leaders's internal id. */
  rowId: Scalars['Int']['input']
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
  id: Scalars['ID']['input']
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
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `TeamLeader` that was updated by this mutation. */
  teamLeader?: Maybe<TeamLeader>
  /** An edge for our `TeamLeader`. May be used by Relay 1. */
  teamLeaderEdge?: Maybe<TeamLeaderEdge>
}

/** The output of our update `TeamLeader` mutation. */
export type UpdateTeamLeaderPayloadTeamLeaderEdgeArgs = {
  orderBy?: Array<TeamLeaderOrderBy>
}

/** The output of our update `Team` mutation. */
export type UpdateTeamPayload = {
  __typename?: 'UpdateTeamPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `Team` that was updated by this mutation. */
  team?: Maybe<Team>
  /** An edge for our `Team`. May be used by Relay 1. */
  teamEdge?: Maybe<TeamEdge>
}

/** The output of our update `Team` mutation. */
export type UpdateTeamPayloadTeamEdgeArgs = {
  orderBy?: Array<TeamOrderBy>
}

export type WithTypename<T extends { __typename?: any }> = Partial<T> & {
  __typename: NonNullable<T['__typename']>
}

export type GraphCacheKeysConfig = {
  CharityOrganization?: (
    data: WithTypename<CharityOrganization>,
  ) => null | string
  CharityOrganizationConnection?: (
    data: WithTypename<CharityOrganizationConnection>,
  ) => null | string
  CharityOrganizationEdge?: (
    data: WithTypename<CharityOrganizationEdge>,
  ) => null | string
  CreateCharityOrganizationPayload?: (
    data: WithTypename<CreateCharityOrganizationPayload>,
  ) => null | string
  CreateEventPayload?: (data: WithTypename<CreateEventPayload>) => null | string
  CreateGameEstimationNumericRoundPayload?: (
    data: WithTypename<CreateGameEstimationNumericRoundPayload>,
  ) => null | string
  CreateGameEstimationNumericVotePayload?: (
    data: WithTypename<CreateGameEstimationNumericVotePayload>,
  ) => null | string
  CreateGamePayload?: (data: WithTypename<CreateGamePayload>) => null | string
  CreateGameRandomFactsRoundPayload?: (
    data: WithTypename<CreateGameRandomFactsRoundPayload>,
  ) => null | string
  CreateGameRandomFactsVotePayload?: (
    data: WithTypename<CreateGameRandomFactsVotePayload>,
  ) => null | string
  CreateGameTeamScorePayload?: (
    data: WithTypename<CreateGameTeamScorePayload>,
  ) => null | string
  CreateKvPayload?: (data: WithTypename<CreateKvPayload>) => null | string
  CreatePlayerPayload?: (
    data: WithTypename<CreatePlayerPayload>,
  ) => null | string
  CreateTeamLeaderPayload?: (
    data: WithTypename<CreateTeamLeaderPayload>,
  ) => null | string
  CreateTeamPayload?: (data: WithTypename<CreateTeamPayload>) => null | string
  DeleteCharityOrganizationPayload?: (
    data: WithTypename<DeleteCharityOrganizationPayload>,
  ) => null | string
  DeleteEventPayload?: (data: WithTypename<DeleteEventPayload>) => null | string
  DeleteGameEstimationNumericRoundPayload?: (
    data: WithTypename<DeleteGameEstimationNumericRoundPayload>,
  ) => null | string
  DeleteGameEstimationNumericVotePayload?: (
    data: WithTypename<DeleteGameEstimationNumericVotePayload>,
  ) => null | string
  DeleteGamePayload?: (data: WithTypename<DeleteGamePayload>) => null | string
  DeleteGameRandomFactsRoundPayload?: (
    data: WithTypename<DeleteGameRandomFactsRoundPayload>,
  ) => null | string
  DeleteGameRandomFactsVotePayload?: (
    data: WithTypename<DeleteGameRandomFactsVotePayload>,
  ) => null | string
  DeleteGameTeamScorePayload?: (
    data: WithTypename<DeleteGameTeamScorePayload>,
  ) => null | string
  DeleteKvPayload?: (data: WithTypename<DeleteKvPayload>) => null | string
  DeletePlayerPayload?: (
    data: WithTypename<DeletePlayerPayload>,
  ) => null | string
  DeleteTeamLeaderPayload?: (
    data: WithTypename<DeleteTeamLeaderPayload>,
  ) => null | string
  DeleteTeamPayload?: (data: WithTypename<DeleteTeamPayload>) => null | string
  Event?: (data: WithTypename<Event>) => null | string
  EventConnection?: (data: WithTypename<EventConnection>) => null | string
  EventEdge?: (data: WithTypename<EventEdge>) => null | string
  Game?: (data: WithTypename<Game>) => null | string
  GameConnection?: (data: WithTypename<GameConnection>) => null | string
  GameEdge?: (data: WithTypename<GameEdge>) => null | string
  GameEstimationNumericLeaderboardView?: (
    data: WithTypename<GameEstimationNumericLeaderboardView>,
  ) => null | string
  GameEstimationNumericLeaderboardViewConnection?: (
    data: WithTypename<GameEstimationNumericLeaderboardViewConnection>,
  ) => null | string
  GameEstimationNumericLeaderboardViewEdge?: (
    data: WithTypename<GameEstimationNumericLeaderboardViewEdge>,
  ) => null | string
  GameEstimationNumericRound?: (
    data: WithTypename<GameEstimationNumericRound>,
  ) => null | string
  GameEstimationNumericRoundConnection?: (
    data: WithTypename<GameEstimationNumericRoundConnection>,
  ) => null | string
  GameEstimationNumericRoundEdge?: (
    data: WithTypename<GameEstimationNumericRoundEdge>,
  ) => null | string
  GameEstimationNumericVote?: (
    data: WithTypename<GameEstimationNumericVote>,
  ) => null | string
  GameEstimationNumericVoteConnection?: (
    data: WithTypename<GameEstimationNumericVoteConnection>,
  ) => null | string
  GameEstimationNumericVoteEdge?: (
    data: WithTypename<GameEstimationNumericVoteEdge>,
  ) => null | string
  GameRandomFactsRound?: (
    data: WithTypename<GameRandomFactsRound>,
  ) => null | string
  GameRandomFactsRoundConnection?: (
    data: WithTypename<GameRandomFactsRoundConnection>,
  ) => null | string
  GameRandomFactsRoundEdge?: (
    data: WithTypename<GameRandomFactsRoundEdge>,
  ) => null | string
  GameRandomFactsVote?: (
    data: WithTypename<GameRandomFactsVote>,
  ) => null | string
  GameRandomFactsVoteConnection?: (
    data: WithTypename<GameRandomFactsVoteConnection>,
  ) => null | string
  GameRandomFactsVoteEdge?: (
    data: WithTypename<GameRandomFactsVoteEdge>,
  ) => null | string
  GameTeamScore?: (data: WithTypename<GameTeamScore>) => null | string
  GameTeamScoreConnection?: (
    data: WithTypename<GameTeamScoreConnection>,
  ) => null | string
  GameTeamScoreEdge?: (data: WithTypename<GameTeamScoreEdge>) => null | string
  Kv?: (data: WithTypename<Kv>) => null | string
  KvConnection?: (data: WithTypename<KvConnection>) => null | string
  KvEdge?: (data: WithTypename<KvEdge>) => null | string
  PageInfo?: (data: WithTypename<PageInfo>) => null | string
  Player?: (data: WithTypename<Player>) => null | string
  PlayerConnection?: (data: WithTypename<PlayerConnection>) => null | string
  PlayerEdge?: (data: WithTypename<PlayerEdge>) => null | string
  Team?: (data: WithTypename<Team>) => null | string
  TeamConnection?: (data: WithTypename<TeamConnection>) => null | string
  TeamEdge?: (data: WithTypename<TeamEdge>) => null | string
  TeamLeader?: (data: WithTypename<TeamLeader>) => null | string
  TeamLeaderConnection?: (
    data: WithTypename<TeamLeaderConnection>,
  ) => null | string
  TeamLeaderEdge?: (data: WithTypename<TeamLeaderEdge>) => null | string
  TeamPlayerCountConnection?: (
    data: WithTypename<TeamPlayerCountConnection>,
  ) => null | string
  TeamPlayerCountEdge?: (
    data: WithTypename<TeamPlayerCountEdge>,
  ) => null | string
  TeamPlayerCountRecord?: (
    data: WithTypename<TeamPlayerCountRecord>,
  ) => null | string
  UpdateCharityOrganizationPayload?: (
    data: WithTypename<UpdateCharityOrganizationPayload>,
  ) => null | string
  UpdateEventPayload?: (data: WithTypename<UpdateEventPayload>) => null | string
  UpdateGameEstimationNumericRoundPayload?: (
    data: WithTypename<UpdateGameEstimationNumericRoundPayload>,
  ) => null | string
  UpdateGameEstimationNumericVotePayload?: (
    data: WithTypename<UpdateGameEstimationNumericVotePayload>,
  ) => null | string
  UpdateGamePayload?: (data: WithTypename<UpdateGamePayload>) => null | string
  UpdateGameRandomFactsRoundPayload?: (
    data: WithTypename<UpdateGameRandomFactsRoundPayload>,
  ) => null | string
  UpdateGameRandomFactsVotePayload?: (
    data: WithTypename<UpdateGameRandomFactsVotePayload>,
  ) => null | string
  UpdateGameTeamScorePayload?: (
    data: WithTypename<UpdateGameTeamScorePayload>,
  ) => null | string
  UpdateKvPayload?: (data: WithTypename<UpdateKvPayload>) => null | string
  UpdatePlayerPayload?: (
    data: WithTypename<UpdatePlayerPayload>,
  ) => null | string
  UpdateTeamLeaderPayload?: (
    data: WithTypename<UpdateTeamLeaderPayload>,
  ) => null | string
  UpdateTeamPayload?: (data: WithTypename<UpdateTeamPayload>) => null | string
}

export type GraphCacheResolvers = {
  Query?: {
    allCharityOrganizations?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllCharityOrganizationsArgs,
      WithTypename<CharityOrganizationConnection> | string
    >
    allEvents?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllEventsArgs,
      WithTypename<EventConnection> | string
    >
    allGameEstimationNumericLeaderboardViews?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllGameEstimationNumericLeaderboardViewsArgs,
      WithTypename<GameEstimationNumericLeaderboardViewConnection> | string
    >
    allGameEstimationNumericRounds?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllGameEstimationNumericRoundsArgs,
      WithTypename<GameEstimationNumericRoundConnection> | string
    >
    allGameEstimationNumericVotes?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllGameEstimationNumericVotesArgs,
      WithTypename<GameEstimationNumericVoteConnection> | string
    >
    allGameRandomFactsRounds?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllGameRandomFactsRoundsArgs,
      WithTypename<GameRandomFactsRoundConnection> | string
    >
    allGameRandomFactsVotes?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllGameRandomFactsVotesArgs,
      WithTypename<GameRandomFactsVoteConnection> | string
    >
    allGameTeamScores?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllGameTeamScoresArgs,
      WithTypename<GameTeamScoreConnection> | string
    >
    allGames?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllGamesArgs,
      WithTypename<GameConnection> | string
    >
    allKvs?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllKvsArgs,
      WithTypename<KvConnection> | string
    >
    allPlayers?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllPlayersArgs,
      WithTypename<PlayerConnection> | string
    >
    allTeamLeaders?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllTeamLeadersArgs,
      WithTypename<TeamLeaderConnection> | string
    >
    allTeams?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAllTeamsArgs,
      WithTypename<TeamConnection> | string
    >
    charityOrganization?: GraphCacheResolver<
      WithTypename<Query>,
      QueryCharityOrganizationArgs,
      WithTypename<CharityOrganization> | string
    >
    charityOrganizationByName?: GraphCacheResolver<
      WithTypename<Query>,
      QueryCharityOrganizationByNameArgs,
      WithTypename<CharityOrganization> | string
    >
    charityOrganizationByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryCharityOrganizationByRowIdArgs,
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
    eventByName?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventByNameArgs,
      WithTypename<Event> | string
    >
    eventByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventByRowIdArgs,
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
    gameByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGameByRowIdArgs,
      WithTypename<Game> | string
    >
    gameEstimationNumericRound?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGameEstimationNumericRoundArgs,
      WithTypename<GameEstimationNumericRound> | string
    >
    gameEstimationNumericRoundByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGameEstimationNumericRoundByRowIdArgs,
      WithTypename<GameEstimationNumericRound> | string
    >
    gameEstimationNumericVote?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGameEstimationNumericVoteArgs,
      WithTypename<GameEstimationNumericVote> | string
    >
    gameEstimationNumericVoteByPlayerIdAndRoundId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGameEstimationNumericVoteByPlayerIdAndRoundIdArgs,
      WithTypename<GameEstimationNumericVote> | string
    >
    gameEstimationNumericVoteByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGameEstimationNumericVoteByRowIdArgs,
      WithTypename<GameEstimationNumericVote> | string
    >
    gameRandomFactsRound?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGameRandomFactsRoundArgs,
      WithTypename<GameRandomFactsRound> | string
    >
    gameRandomFactsRoundByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGameRandomFactsRoundByRowIdArgs,
      WithTypename<GameRandomFactsRound> | string
    >
    gameRandomFactsVote?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGameRandomFactsVoteArgs,
      WithTypename<GameRandomFactsVote> | string
    >
    gameRandomFactsVoteByPlayerIdAndRoundId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGameRandomFactsVoteByPlayerIdAndRoundIdArgs,
      WithTypename<GameRandomFactsVote> | string
    >
    gameRandomFactsVoteByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGameRandomFactsVoteByRowIdArgs,
      WithTypename<GameRandomFactsVote> | string
    >
    gameTeamScore?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGameTeamScoreArgs,
      WithTypename<GameTeamScore> | string
    >
    gameTeamScoreByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryGameTeamScoreByRowIdArgs,
      WithTypename<GameTeamScore> | string
    >
    id?: GraphCacheResolver<
      WithTypename<Query>,
      Record<string, never>,
      Scalars['ID']['output'] | string
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
      | WithTypename<GameEstimationNumericRound>
      | WithTypename<GameEstimationNumericVote>
      | WithTypename<GameRandomFactsRound>
      | WithTypename<GameRandomFactsVote>
      | WithTypename<GameTeamScore>
      | WithTypename<Player>
      | WithTypename<Query>
      | WithTypename<Team>
      | WithTypename<TeamLeader>
      | string
    >
    player?: GraphCacheResolver<
      WithTypename<Query>,
      QueryPlayerArgs,
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
      WithTypename<PlayerConnection> | string
    >
    playerByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryPlayerByRowIdArgs,
      WithTypename<Player> | string
    >
    playerByTeamIdAndInvitationCode?: GraphCacheResolver<
      WithTypename<Query>,
      QueryPlayerByTeamIdAndInvitationCodeArgs,
      WithTypename<Player> | string
    >
    playerNameById?: GraphCacheResolver<
      WithTypename<Query>,
      QueryPlayerNameByIdArgs,
      Scalars['String']['output'] | string
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
    teamByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryTeamByRowIdArgs,
      WithTypename<Team> | string
    >
    teamLeader?: GraphCacheResolver<
      WithTypename<Query>,
      QueryTeamLeaderArgs,
      WithTypename<TeamLeader> | string
    >
    teamLeaderByRowId?: GraphCacheResolver<
      WithTypename<Query>,
      QueryTeamLeaderByRowIdArgs,
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
      Scalars['String']['output'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<CharityOrganization>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    name?: GraphCacheResolver<
      WithTypename<CharityOrganization>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<CharityOrganization>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
    url?: GraphCacheResolver<
      WithTypename<CharityOrganization>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
  }
  CharityOrganizationConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<CharityOrganizationConnection>,
      Record<string, never>,
      Array<WithTypename<CharityOrganizationEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<CharityOrganizationConnection>,
      Record<string, never>,
      Array<WithTypename<CharityOrganization> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<CharityOrganizationConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<CharityOrganizationConnection>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  CharityOrganizationEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<CharityOrganizationEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<CharityOrganizationEdge>,
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
      WithTypename<CharityOrganizationEdge> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateCharityOrganizationPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
    >
    event?: GraphCacheResolver<
      WithTypename<CreateEventPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventEdge?: GraphCacheResolver<
      WithTypename<CreateEventPayload>,
      CreateEventPayloadEventEdgeArgs,
      WithTypename<EventEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateEventPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateGameEstimationNumericRoundPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateGameEstimationNumericRoundPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    gameEstimationNumericRound?: GraphCacheResolver<
      WithTypename<CreateGameEstimationNumericRoundPayload>,
      Record<string, never>,
      WithTypename<GameEstimationNumericRound> | string
    >
    gameEstimationNumericRoundEdge?: GraphCacheResolver<
      WithTypename<CreateGameEstimationNumericRoundPayload>,
      CreateGameEstimationNumericRoundPayloadGameEstimationNumericRoundEdgeArgs,
      WithTypename<GameEstimationNumericRoundEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateGameEstimationNumericRoundPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateGameEstimationNumericVotePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateGameEstimationNumericVotePayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    gameEstimationNumericVote?: GraphCacheResolver<
      WithTypename<CreateGameEstimationNumericVotePayload>,
      Record<string, never>,
      WithTypename<GameEstimationNumericVote> | string
    >
    gameEstimationNumericVoteEdge?: GraphCacheResolver<
      WithTypename<CreateGameEstimationNumericVotePayload>,
      CreateGameEstimationNumericVotePayloadGameEstimationNumericVoteEdgeArgs,
      WithTypename<GameEstimationNumericVoteEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateGameEstimationNumericVotePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateGamePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateGamePayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    game?: GraphCacheResolver<
      WithTypename<CreateGamePayload>,
      Record<string, never>,
      WithTypename<Game> | string
    >
    gameEdge?: GraphCacheResolver<
      WithTypename<CreateGamePayload>,
      CreateGamePayloadGameEdgeArgs,
      WithTypename<GameEdge> | string
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
      Scalars['String']['output'] | string
    >
    gameRandomFactsRound?: GraphCacheResolver<
      WithTypename<CreateGameRandomFactsRoundPayload>,
      Record<string, never>,
      WithTypename<GameRandomFactsRound> | string
    >
    gameRandomFactsRoundEdge?: GraphCacheResolver<
      WithTypename<CreateGameRandomFactsRoundPayload>,
      CreateGameRandomFactsRoundPayloadGameRandomFactsRoundEdgeArgs,
      WithTypename<GameRandomFactsRoundEdge> | string
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
      Scalars['String']['output'] | string
    >
    gameRandomFactsVote?: GraphCacheResolver<
      WithTypename<CreateGameRandomFactsVotePayload>,
      Record<string, never>,
      WithTypename<GameRandomFactsVote> | string
    >
    gameRandomFactsVoteEdge?: GraphCacheResolver<
      WithTypename<CreateGameRandomFactsVotePayload>,
      CreateGameRandomFactsVotePayloadGameRandomFactsVoteEdgeArgs,
      WithTypename<GameRandomFactsVoteEdge> | string
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
      Scalars['String']['output'] | string
    >
    gameTeamScore?: GraphCacheResolver<
      WithTypename<CreateGameTeamScorePayload>,
      Record<string, never>,
      WithTypename<GameTeamScore> | string
    >
    gameTeamScoreEdge?: GraphCacheResolver<
      WithTypename<CreateGameTeamScorePayload>,
      CreateGameTeamScorePayloadGameTeamScoreEdgeArgs,
      WithTypename<GameTeamScoreEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateGameTeamScorePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateKvPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateKvPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    kv?: GraphCacheResolver<
      WithTypename<CreateKvPayload>,
      Record<string, never>,
      WithTypename<Kv> | string
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
      Scalars['String']['output'] | string
    >
    player?: GraphCacheResolver<
      WithTypename<CreatePlayerPayload>,
      Record<string, never>,
      WithTypename<Player> | string
    >
    playerEdge?: GraphCacheResolver<
      WithTypename<CreatePlayerPayload>,
      CreatePlayerPayloadPlayerEdgeArgs,
      WithTypename<PlayerEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreatePlayerPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  CreateTeamLeaderPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateTeamLeaderPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<CreateTeamLeaderPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    teamLeader?: GraphCacheResolver<
      WithTypename<CreateTeamLeaderPayload>,
      Record<string, never>,
      WithTypename<TeamLeader> | string
    >
    teamLeaderEdge?: GraphCacheResolver<
      WithTypename<CreateTeamLeaderPayload>,
      CreateTeamLeaderPayloadTeamLeaderEdgeArgs,
      WithTypename<TeamLeaderEdge> | string
    >
  }
  CreateTeamPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<CreateTeamPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
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
      WithTypename<TeamEdge> | string
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
      WithTypename<CharityOrganizationEdge> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteCharityOrganizationPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    deletedCharityOrganizationId?: GraphCacheResolver<
      WithTypename<DeleteCharityOrganizationPayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
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
      Scalars['String']['output'] | string
    >
    deletedEventId?: GraphCacheResolver<
      WithTypename<DeleteEventPayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    event?: GraphCacheResolver<
      WithTypename<DeleteEventPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventEdge?: GraphCacheResolver<
      WithTypename<DeleteEventPayload>,
      DeleteEventPayloadEventEdgeArgs,
      WithTypename<EventEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteEventPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteGameEstimationNumericRoundPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteGameEstimationNumericRoundPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    deletedGameEstimationNumericRoundId?: GraphCacheResolver<
      WithTypename<DeleteGameEstimationNumericRoundPayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    gameEstimationNumericRound?: GraphCacheResolver<
      WithTypename<DeleteGameEstimationNumericRoundPayload>,
      Record<string, never>,
      WithTypename<GameEstimationNumericRound> | string
    >
    gameEstimationNumericRoundEdge?: GraphCacheResolver<
      WithTypename<DeleteGameEstimationNumericRoundPayload>,
      DeleteGameEstimationNumericRoundPayloadGameEstimationNumericRoundEdgeArgs,
      WithTypename<GameEstimationNumericRoundEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteGameEstimationNumericRoundPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteGameEstimationNumericVotePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteGameEstimationNumericVotePayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    deletedGameEstimationNumericVoteId?: GraphCacheResolver<
      WithTypename<DeleteGameEstimationNumericVotePayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    gameEstimationNumericVote?: GraphCacheResolver<
      WithTypename<DeleteGameEstimationNumericVotePayload>,
      Record<string, never>,
      WithTypename<GameEstimationNumericVote> | string
    >
    gameEstimationNumericVoteEdge?: GraphCacheResolver<
      WithTypename<DeleteGameEstimationNumericVotePayload>,
      DeleteGameEstimationNumericVotePayloadGameEstimationNumericVoteEdgeArgs,
      WithTypename<GameEstimationNumericVoteEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteGameEstimationNumericVotePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteGamePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteGamePayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    deletedGameId?: GraphCacheResolver<
      WithTypename<DeleteGamePayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    game?: GraphCacheResolver<
      WithTypename<DeleteGamePayload>,
      Record<string, never>,
      WithTypename<Game> | string
    >
    gameEdge?: GraphCacheResolver<
      WithTypename<DeleteGamePayload>,
      DeleteGamePayloadGameEdgeArgs,
      WithTypename<GameEdge> | string
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
      Scalars['String']['output'] | string
    >
    deletedGameRandomFactsRoundId?: GraphCacheResolver<
      WithTypename<DeleteGameRandomFactsRoundPayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    gameRandomFactsRound?: GraphCacheResolver<
      WithTypename<DeleteGameRandomFactsRoundPayload>,
      Record<string, never>,
      WithTypename<GameRandomFactsRound> | string
    >
    gameRandomFactsRoundEdge?: GraphCacheResolver<
      WithTypename<DeleteGameRandomFactsRoundPayload>,
      DeleteGameRandomFactsRoundPayloadGameRandomFactsRoundEdgeArgs,
      WithTypename<GameRandomFactsRoundEdge> | string
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
      Scalars['String']['output'] | string
    >
    deletedGameRandomFactsVoteId?: GraphCacheResolver<
      WithTypename<DeleteGameRandomFactsVotePayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    gameRandomFactsVote?: GraphCacheResolver<
      WithTypename<DeleteGameRandomFactsVotePayload>,
      Record<string, never>,
      WithTypename<GameRandomFactsVote> | string
    >
    gameRandomFactsVoteEdge?: GraphCacheResolver<
      WithTypename<DeleteGameRandomFactsVotePayload>,
      DeleteGameRandomFactsVotePayloadGameRandomFactsVoteEdgeArgs,
      WithTypename<GameRandomFactsVoteEdge> | string
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
      Scalars['String']['output'] | string
    >
    deletedGameTeamScoreId?: GraphCacheResolver<
      WithTypename<DeleteGameTeamScorePayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    gameTeamScore?: GraphCacheResolver<
      WithTypename<DeleteGameTeamScorePayload>,
      Record<string, never>,
      WithTypename<GameTeamScore> | string
    >
    gameTeamScoreEdge?: GraphCacheResolver<
      WithTypename<DeleteGameTeamScorePayload>,
      DeleteGameTeamScorePayloadGameTeamScoreEdgeArgs,
      WithTypename<GameTeamScoreEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteGameTeamScorePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteKvPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteKvPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    kv?: GraphCacheResolver<
      WithTypename<DeleteKvPayload>,
      Record<string, never>,
      WithTypename<Kv> | string
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
      Scalars['String']['output'] | string
    >
    deletedPlayerId?: GraphCacheResolver<
      WithTypename<DeletePlayerPayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    player?: GraphCacheResolver<
      WithTypename<DeletePlayerPayload>,
      Record<string, never>,
      WithTypename<Player> | string
    >
    playerEdge?: GraphCacheResolver<
      WithTypename<DeletePlayerPayload>,
      DeletePlayerPayloadPlayerEdgeArgs,
      WithTypename<PlayerEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeletePlayerPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  DeleteTeamLeaderPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteTeamLeaderPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    deletedTeamLeaderId?: GraphCacheResolver<
      WithTypename<DeleteTeamLeaderPayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<DeleteTeamLeaderPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    teamLeader?: GraphCacheResolver<
      WithTypename<DeleteTeamLeaderPayload>,
      Record<string, never>,
      WithTypename<TeamLeader> | string
    >
    teamLeaderEdge?: GraphCacheResolver<
      WithTypename<DeleteTeamLeaderPayload>,
      DeleteTeamLeaderPayloadTeamLeaderEdgeArgs,
      WithTypename<TeamLeaderEdge> | string
    >
  }
  DeleteTeamPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<DeleteTeamPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    deletedTeamId?: GraphCacheResolver<
      WithTypename<DeleteTeamPayload>,
      Record<string, never>,
      Scalars['ID']['output'] | string
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
      WithTypename<TeamEdge> | string
    >
  }
  Event?: {
    commonDonationAmount?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Float']['output'] | string
    >
    commonDonationIsLive?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Boolean']['output'] | string
    >
    commonDonationUrl?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    discordInviteCode?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    end?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Datetime']['output'] | string
    >
    gamesByEventId?: GraphCacheResolver<
      WithTypename<Event>,
      EventGamesByEventIdArgs,
      WithTypename<GameConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    name?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
    start?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['Datetime']['output'] | string
    >
    streamUrl?: GraphCacheResolver<
      WithTypename<Event>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    teamsByEventId?: GraphCacheResolver<
      WithTypename<Event>,
      EventTeamsByEventIdArgs,
      WithTypename<TeamConnection> | string
    >
  }
  EventConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<EventConnection>,
      Record<string, never>,
      Array<WithTypename<EventEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<EventConnection>,
      Record<string, never>,
      Array<WithTypename<Event> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<EventConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<EventConnection>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  EventEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<EventEdge>,
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
      Scalars['Int']['output'] | string
    >
    gameEstimationNumericRoundsByGameId?: GraphCacheResolver<
      WithTypename<Game>,
      GameGameEstimationNumericRoundsByGameIdArgs,
      WithTypename<GameEstimationNumericRoundConnection> | string
    >
    gameRandomFactsRoundsByGameId?: GraphCacheResolver<
      WithTypename<Game>,
      GameGameRandomFactsRoundsByGameIdArgs,
      WithTypename<GameRandomFactsRoundConnection> | string
    >
    gameTeamScoresByGameId?: GraphCacheResolver<
      WithTypename<Game>,
      GameGameTeamScoresByGameIdArgs,
      WithTypename<GameTeamScoreConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<Game>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    isActive?: GraphCacheResolver<
      WithTypename<Game>,
      Record<string, never>,
      Scalars['Boolean']['output'] | string
    >
    name?: GraphCacheResolver<
      WithTypename<Game>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<Game>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
    type?: GraphCacheResolver<
      WithTypename<Game>,
      Record<string, never>,
      GameType | string
    >
  }
  GameConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<GameConnection>,
      Record<string, never>,
      Array<WithTypename<GameEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<GameConnection>,
      Record<string, never>,
      Array<WithTypename<Game> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<GameConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<GameConnection>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  GameEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<GameEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<GameEdge>,
      Record<string, never>,
      WithTypename<Game> | string
    >
  }
  GameEstimationNumericLeaderboardView?: {
    gameId?: GraphCacheResolver<
      WithTypename<GameEstimationNumericLeaderboardView>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
    playerName?: GraphCacheResolver<
      WithTypename<GameEstimationNumericLeaderboardView>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    totalPoints?: GraphCacheResolver<
      WithTypename<GameEstimationNumericLeaderboardView>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  GameEstimationNumericLeaderboardViewConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<GameEstimationNumericLeaderboardViewConnection>,
      Record<string, never>,
      Array<WithTypename<GameEstimationNumericLeaderboardViewEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<GameEstimationNumericLeaderboardViewConnection>,
      Record<string, never>,
      Array<WithTypename<GameEstimationNumericLeaderboardView> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<GameEstimationNumericLeaderboardViewConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<GameEstimationNumericLeaderboardViewConnection>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  GameEstimationNumericLeaderboardViewEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<GameEstimationNumericLeaderboardViewEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<GameEstimationNumericLeaderboardViewEdge>,
      Record<string, never>,
      WithTypename<GameEstimationNumericLeaderboardView> | string
    >
  }
  GameEstimationNumericRound?: {
    answerCorrect?: GraphCacheResolver<
      WithTypename<GameEstimationNumericRound>,
      Record<string, never>,
      Scalars['Float']['output'] | string
    >
    elementName?: GraphCacheResolver<
      WithTypename<GameEstimationNumericRound>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    gameByGameId?: GraphCacheResolver<
      WithTypename<GameEstimationNumericRound>,
      Record<string, never>,
      WithTypename<Game> | string
    >
    gameEstimationNumericVotesByRoundId?: GraphCacheResolver<
      WithTypename<GameEstimationNumericRound>,
      GameEstimationNumericRoundGameEstimationNumericVotesByRoundIdArgs,
      WithTypename<GameEstimationNumericVoteConnection> | string
    >
    gameId?: GraphCacheResolver<
      WithTypename<GameEstimationNumericRound>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<GameEstimationNumericRound>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<GameEstimationNumericRound>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  GameEstimationNumericRoundConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<GameEstimationNumericRoundConnection>,
      Record<string, never>,
      Array<WithTypename<GameEstimationNumericRoundEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<GameEstimationNumericRoundConnection>,
      Record<string, never>,
      Array<WithTypename<GameEstimationNumericRound> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<GameEstimationNumericRoundConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<GameEstimationNumericRoundConnection>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  GameEstimationNumericRoundEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<GameEstimationNumericRoundEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<GameEstimationNumericRoundEdge>,
      Record<string, never>,
      WithTypename<GameEstimationNumericRound> | string
    >
  }
  GameEstimationNumericVote?: {
    answer?: GraphCacheResolver<
      WithTypename<GameEstimationNumericVote>,
      Record<string, never>,
      Scalars['Float']['output'] | string
    >
    gameEstimationNumericRoundByRoundId?: GraphCacheResolver<
      WithTypename<GameEstimationNumericVote>,
      Record<string, never>,
      WithTypename<GameEstimationNumericRound> | string
    >
    id?: GraphCacheResolver<
      WithTypename<GameEstimationNumericVote>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    playerByPlayerId?: GraphCacheResolver<
      WithTypename<GameEstimationNumericVote>,
      Record<string, never>,
      WithTypename<Player> | string
    >
    playerId?: GraphCacheResolver<
      WithTypename<GameEstimationNumericVote>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
    roundId?: GraphCacheResolver<
      WithTypename<GameEstimationNumericVote>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<GameEstimationNumericVote>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  GameEstimationNumericVoteConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<GameEstimationNumericVoteConnection>,
      Record<string, never>,
      Array<WithTypename<GameEstimationNumericVoteEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<GameEstimationNumericVoteConnection>,
      Record<string, never>,
      Array<WithTypename<GameEstimationNumericVote> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<GameEstimationNumericVoteConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<GameEstimationNumericVoteConnection>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  GameEstimationNumericVoteEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<GameEstimationNumericVoteEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<GameEstimationNumericVoteEdge>,
      Record<string, never>,
      WithTypename<GameEstimationNumericVote> | string
    >
  }
  GameRandomFactsRound?: {
    answerCorrect?: GraphCacheResolver<
      WithTypename<GameRandomFactsRound>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
    gameByGameId?: GraphCacheResolver<
      WithTypename<GameRandomFactsRound>,
      Record<string, never>,
      WithTypename<Game> | string
    >
    gameId?: GraphCacheResolver<
      WithTypename<GameRandomFactsRound>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
    gameRandomFactsVotesByRoundId?: GraphCacheResolver<
      WithTypename<GameRandomFactsRound>,
      GameRandomFactsRoundGameRandomFactsVotesByRoundIdArgs,
      WithTypename<GameRandomFactsVoteConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<GameRandomFactsRound>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    questionerName?: GraphCacheResolver<
      WithTypename<GameRandomFactsRound>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<GameRandomFactsRound>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  GameRandomFactsRoundConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<GameRandomFactsRoundConnection>,
      Record<string, never>,
      Array<WithTypename<GameRandomFactsRoundEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<GameRandomFactsRoundConnection>,
      Record<string, never>,
      Array<WithTypename<GameRandomFactsRound> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<GameRandomFactsRoundConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<GameRandomFactsRoundConnection>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  GameRandomFactsRoundEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<GameRandomFactsRoundEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<GameRandomFactsRoundEdge>,
      Record<string, never>,
      WithTypename<GameRandomFactsRound> | string
    >
  }
  GameRandomFactsVote?: {
    answer?: GraphCacheResolver<
      WithTypename<GameRandomFactsVote>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
    gameRandomFactsRoundByRoundId?: GraphCacheResolver<
      WithTypename<GameRandomFactsVote>,
      Record<string, never>,
      WithTypename<GameRandomFactsRound> | string
    >
    id?: GraphCacheResolver<
      WithTypename<GameRandomFactsVote>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    playerByPlayerId?: GraphCacheResolver<
      WithTypename<GameRandomFactsVote>,
      Record<string, never>,
      WithTypename<Player> | string
    >
    playerId?: GraphCacheResolver<
      WithTypename<GameRandomFactsVote>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
    roundId?: GraphCacheResolver<
      WithTypename<GameRandomFactsVote>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<GameRandomFactsVote>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  GameRandomFactsVoteConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<GameRandomFactsVoteConnection>,
      Record<string, never>,
      Array<WithTypename<GameRandomFactsVoteEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<GameRandomFactsVoteConnection>,
      Record<string, never>,
      Array<WithTypename<GameRandomFactsVote> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<GameRandomFactsVoteConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<GameRandomFactsVoteConnection>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  GameRandomFactsVoteEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<GameRandomFactsVoteEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<GameRandomFactsVoteEdge>,
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
      Scalars['Int']['output'] | string
    >
    id?: GraphCacheResolver<
      WithTypename<GameTeamScore>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<GameTeamScore>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
    score?: GraphCacheResolver<
      WithTypename<GameTeamScore>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
    teamByTeamId?: GraphCacheResolver<
      WithTypename<GameTeamScore>,
      Record<string, never>,
      WithTypename<Team> | string
    >
    teamId?: GraphCacheResolver<
      WithTypename<GameTeamScore>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  GameTeamScoreConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<GameTeamScoreConnection>,
      Record<string, never>,
      Array<WithTypename<GameTeamScoreEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<GameTeamScoreConnection>,
      Record<string, never>,
      Array<WithTypename<GameTeamScore> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<GameTeamScoreConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<GameTeamScoreConnection>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  GameTeamScoreEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<GameTeamScoreEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<GameTeamScoreEdge>,
      Record<string, never>,
      WithTypename<GameTeamScore> | string
    >
  }
  Kv?: {
    key?: GraphCacheResolver<
      WithTypename<Kv>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    value?: GraphCacheResolver<
      WithTypename<Kv>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
  }
  KvConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<KvConnection>,
      Record<string, never>,
      Array<WithTypename<KvEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<KvConnection>,
      Record<string, never>,
      Array<WithTypename<Kv> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<KvConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<KvConnection>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  KvEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<KvEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<KvEdge>,
      Record<string, never>,
      WithTypename<Kv> | string
    >
  }
  PageInfo?: {
    endCursor?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
    >
    hasNextPage?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars['Boolean']['output'] | string
    >
    hasPreviousPage?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars['Boolean']['output'] | string
    >
    startCursor?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
    >
  }
  Player?: {
    gameEstimationNumericVotesByPlayerId?: GraphCacheResolver<
      WithTypename<Player>,
      PlayerGameEstimationNumericVotesByPlayerIdArgs,
      WithTypename<GameEstimationNumericVoteConnection> | string
    >
    gameRandomFactsVotesByPlayerId?: GraphCacheResolver<
      WithTypename<Player>,
      PlayerGameRandomFactsVotesByPlayerIdArgs,
      WithTypename<GameRandomFactsVoteConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<Player>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    invitationCode?: GraphCacheResolver<
      WithTypename<Player>,
      Record<string, never>,
      Scalars['UUID']['output'] | string
    >
    name?: GraphCacheResolver<
      WithTypename<Player>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<Player>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
    teamByTeamId?: GraphCacheResolver<
      WithTypename<Player>,
      Record<string, never>,
      WithTypename<Team> | string
    >
    teamId?: GraphCacheResolver<
      WithTypename<Player>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  PlayerConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<PlayerConnection>,
      Record<string, never>,
      Array<WithTypename<PlayerEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<PlayerConnection>,
      Record<string, never>,
      Array<WithTypename<Player> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<PlayerConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<PlayerConnection>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  PlayerEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<PlayerEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<PlayerEdge>,
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
      Scalars['Int']['output'] | string
    >
    donationAmount?: GraphCacheResolver<
      WithTypename<Team>,
      Record<string, never>,
      Scalars['Float']['output'] | string
    >
    donationUrl?: GraphCacheResolver<
      WithTypename<Team>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    emoji?: GraphCacheResolver<
      WithTypename<Team>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    eventByEventId?: GraphCacheResolver<
      WithTypename<Team>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventId?: GraphCacheResolver<
      WithTypename<Team>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
    gameTeamScoresByTeamId?: GraphCacheResolver<
      WithTypename<Team>,
      TeamGameTeamScoresByTeamIdArgs,
      WithTypename<GameTeamScoreConnection> | string
    >
    id?: GraphCacheResolver<
      WithTypename<Team>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    name?: GraphCacheResolver<
      WithTypename<Team>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    playersByTeamId?: GraphCacheResolver<
      WithTypename<Team>,
      TeamPlayersByTeamIdArgs,
      WithTypename<PlayerConnection> | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<Team>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  TeamConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<TeamConnection>,
      Record<string, never>,
      Array<WithTypename<TeamEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<TeamConnection>,
      Record<string, never>,
      Array<WithTypename<Team> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<TeamConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<TeamConnection>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  TeamEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<TeamEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<TeamEdge>,
      Record<string, never>,
      WithTypename<Team> | string
    >
  }
  TeamLeader?: {
    id?: GraphCacheResolver<
      WithTypename<TeamLeader>,
      Record<string, never>,
      Scalars['ID']['output'] | string
    >
    playerByPlayerId?: GraphCacheResolver<
      WithTypename<TeamLeader>,
      Record<string, never>,
      WithTypename<Player> | string
    >
    playerId?: GraphCacheResolver<
      WithTypename<TeamLeader>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
    rowId?: GraphCacheResolver<
      WithTypename<TeamLeader>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
    teamByTeamId?: GraphCacheResolver<
      WithTypename<TeamLeader>,
      Record<string, never>,
      WithTypename<Team> | string
    >
    teamId?: GraphCacheResolver<
      WithTypename<TeamLeader>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  TeamLeaderConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<TeamLeaderConnection>,
      Record<string, never>,
      Array<WithTypename<TeamLeaderEdge> | string>
    >
    nodes?: GraphCacheResolver<
      WithTypename<TeamLeaderConnection>,
      Record<string, never>,
      Array<WithTypename<TeamLeader> | string>
    >
    pageInfo?: GraphCacheResolver<
      WithTypename<TeamLeaderConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<TeamLeaderConnection>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  TeamLeaderEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<TeamLeaderEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
    >
    node?: GraphCacheResolver<
      WithTypename<TeamLeaderEdge>,
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
    pageInfo?: GraphCacheResolver<
      WithTypename<TeamPlayerCountConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >
    totalCount?: GraphCacheResolver<
      WithTypename<TeamPlayerCountConnection>,
      Record<string, never>,
      Scalars['Int']['output'] | string
    >
  }
  TeamPlayerCountEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<TeamPlayerCountEdge>,
      Record<string, never>,
      Scalars['Cursor']['output'] | string
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
      Scalars['Int']['output'] | string
    >
    playerCount?: GraphCacheResolver<
      WithTypename<TeamPlayerCountRecord>,
      Record<string, never>,
      Scalars['BigInt']['output'] | string
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
      WithTypename<CharityOrganizationEdge> | string
    >
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateCharityOrganizationPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
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
      Scalars['String']['output'] | string
    >
    event?: GraphCacheResolver<
      WithTypename<UpdateEventPayload>,
      Record<string, never>,
      WithTypename<Event> | string
    >
    eventEdge?: GraphCacheResolver<
      WithTypename<UpdateEventPayload>,
      UpdateEventPayloadEventEdgeArgs,
      WithTypename<EventEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateEventPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateGameEstimationNumericRoundPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateGameEstimationNumericRoundPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    gameEstimationNumericRound?: GraphCacheResolver<
      WithTypename<UpdateGameEstimationNumericRoundPayload>,
      Record<string, never>,
      WithTypename<GameEstimationNumericRound> | string
    >
    gameEstimationNumericRoundEdge?: GraphCacheResolver<
      WithTypename<UpdateGameEstimationNumericRoundPayload>,
      UpdateGameEstimationNumericRoundPayloadGameEstimationNumericRoundEdgeArgs,
      WithTypename<GameEstimationNumericRoundEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateGameEstimationNumericRoundPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateGameEstimationNumericVotePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateGameEstimationNumericVotePayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    gameEstimationNumericVote?: GraphCacheResolver<
      WithTypename<UpdateGameEstimationNumericVotePayload>,
      Record<string, never>,
      WithTypename<GameEstimationNumericVote> | string
    >
    gameEstimationNumericVoteEdge?: GraphCacheResolver<
      WithTypename<UpdateGameEstimationNumericVotePayload>,
      UpdateGameEstimationNumericVotePayloadGameEstimationNumericVoteEdgeArgs,
      WithTypename<GameEstimationNumericVoteEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateGameEstimationNumericVotePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateGamePayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateGamePayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    game?: GraphCacheResolver<
      WithTypename<UpdateGamePayload>,
      Record<string, never>,
      WithTypename<Game> | string
    >
    gameEdge?: GraphCacheResolver<
      WithTypename<UpdateGamePayload>,
      UpdateGamePayloadGameEdgeArgs,
      WithTypename<GameEdge> | string
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
      Scalars['String']['output'] | string
    >
    gameRandomFactsRound?: GraphCacheResolver<
      WithTypename<UpdateGameRandomFactsRoundPayload>,
      Record<string, never>,
      WithTypename<GameRandomFactsRound> | string
    >
    gameRandomFactsRoundEdge?: GraphCacheResolver<
      WithTypename<UpdateGameRandomFactsRoundPayload>,
      UpdateGameRandomFactsRoundPayloadGameRandomFactsRoundEdgeArgs,
      WithTypename<GameRandomFactsRoundEdge> | string
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
      Scalars['String']['output'] | string
    >
    gameRandomFactsVote?: GraphCacheResolver<
      WithTypename<UpdateGameRandomFactsVotePayload>,
      Record<string, never>,
      WithTypename<GameRandomFactsVote> | string
    >
    gameRandomFactsVoteEdge?: GraphCacheResolver<
      WithTypename<UpdateGameRandomFactsVotePayload>,
      UpdateGameRandomFactsVotePayloadGameRandomFactsVoteEdgeArgs,
      WithTypename<GameRandomFactsVoteEdge> | string
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
      Scalars['String']['output'] | string
    >
    gameTeamScore?: GraphCacheResolver<
      WithTypename<UpdateGameTeamScorePayload>,
      Record<string, never>,
      WithTypename<GameTeamScore> | string
    >
    gameTeamScoreEdge?: GraphCacheResolver<
      WithTypename<UpdateGameTeamScorePayload>,
      UpdateGameTeamScorePayloadGameTeamScoreEdgeArgs,
      WithTypename<GameTeamScoreEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateGameTeamScorePayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateKvPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateKvPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    kv?: GraphCacheResolver<
      WithTypename<UpdateKvPayload>,
      Record<string, never>,
      WithTypename<Kv> | string
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
      Scalars['String']['output'] | string
    >
    player?: GraphCacheResolver<
      WithTypename<UpdatePlayerPayload>,
      Record<string, never>,
      WithTypename<Player> | string
    >
    playerEdge?: GraphCacheResolver<
      WithTypename<UpdatePlayerPayload>,
      UpdatePlayerPayloadPlayerEdgeArgs,
      WithTypename<PlayerEdge> | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdatePlayerPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
  }
  UpdateTeamLeaderPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateTeamLeaderPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
    >
    query?: GraphCacheResolver<
      WithTypename<UpdateTeamLeaderPayload>,
      Record<string, never>,
      WithTypename<Query> | string
    >
    teamLeader?: GraphCacheResolver<
      WithTypename<UpdateTeamLeaderPayload>,
      Record<string, never>,
      WithTypename<TeamLeader> | string
    >
    teamLeaderEdge?: GraphCacheResolver<
      WithTypename<UpdateTeamLeaderPayload>,
      UpdateTeamLeaderPayloadTeamLeaderEdgeArgs,
      WithTypename<TeamLeaderEdge> | string
    >
  }
  UpdateTeamPayload?: {
    clientMutationId?: GraphCacheResolver<
      WithTypename<UpdateTeamPayload>,
      Record<string, never>,
      Scalars['String']['output'] | string
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
      WithTypename<TeamEdge> | string
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
  createGameEstimationNumericRound?: GraphCacheOptimisticMutationResolver<
    MutationCreateGameEstimationNumericRoundArgs,
    Maybe<WithTypename<CreateGameEstimationNumericRoundPayload>>
  >
  createGameEstimationNumericVote?: GraphCacheOptimisticMutationResolver<
    MutationCreateGameEstimationNumericVoteArgs,
    Maybe<WithTypename<CreateGameEstimationNumericVotePayload>>
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
  deleteCharityOrganizationByName?: GraphCacheOptimisticMutationResolver<
    MutationDeleteCharityOrganizationByNameArgs,
    Maybe<WithTypename<DeleteCharityOrganizationPayload>>
  >
  deleteCharityOrganizationByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteCharityOrganizationByRowIdArgs,
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
  deleteEventByName?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventByNameArgs,
    Maybe<WithTypename<DeleteEventPayload>>
  >
  deleteEventByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteEventByRowIdArgs,
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
  deleteGameByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGameByRowIdArgs,
    Maybe<WithTypename<DeleteGamePayload>>
  >
  deleteGameEstimationNumericRound?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGameEstimationNumericRoundArgs,
    Maybe<WithTypename<DeleteGameEstimationNumericRoundPayload>>
  >
  deleteGameEstimationNumericRoundByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGameEstimationNumericRoundByRowIdArgs,
    Maybe<WithTypename<DeleteGameEstimationNumericRoundPayload>>
  >
  deleteGameEstimationNumericVote?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGameEstimationNumericVoteArgs,
    Maybe<WithTypename<DeleteGameEstimationNumericVotePayload>>
  >
  deleteGameEstimationNumericVoteByPlayerIdAndRoundId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGameEstimationNumericVoteByPlayerIdAndRoundIdArgs,
    Maybe<WithTypename<DeleteGameEstimationNumericVotePayload>>
  >
  deleteGameEstimationNumericVoteByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGameEstimationNumericVoteByRowIdArgs,
    Maybe<WithTypename<DeleteGameEstimationNumericVotePayload>>
  >
  deleteGameRandomFactsRound?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGameRandomFactsRoundArgs,
    Maybe<WithTypename<DeleteGameRandomFactsRoundPayload>>
  >
  deleteGameRandomFactsRoundByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGameRandomFactsRoundByRowIdArgs,
    Maybe<WithTypename<DeleteGameRandomFactsRoundPayload>>
  >
  deleteGameRandomFactsVote?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGameRandomFactsVoteArgs,
    Maybe<WithTypename<DeleteGameRandomFactsVotePayload>>
  >
  deleteGameRandomFactsVoteByPlayerIdAndRoundId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGameRandomFactsVoteByPlayerIdAndRoundIdArgs,
    Maybe<WithTypename<DeleteGameRandomFactsVotePayload>>
  >
  deleteGameRandomFactsVoteByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGameRandomFactsVoteByRowIdArgs,
    Maybe<WithTypename<DeleteGameRandomFactsVotePayload>>
  >
  deleteGameTeamScore?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGameTeamScoreArgs,
    Maybe<WithTypename<DeleteGameTeamScorePayload>>
  >
  deleteGameTeamScoreByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteGameTeamScoreByRowIdArgs,
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
  deletePlayerByInvitationCode?: GraphCacheOptimisticMutationResolver<
    MutationDeletePlayerByInvitationCodeArgs,
    Maybe<WithTypename<DeletePlayerPayload>>
  >
  deletePlayerByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeletePlayerByRowIdArgs,
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
  deleteTeamByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteTeamByRowIdArgs,
    Maybe<WithTypename<DeleteTeamPayload>>
  >
  deleteTeamLeader?: GraphCacheOptimisticMutationResolver<
    MutationDeleteTeamLeaderArgs,
    Maybe<WithTypename<DeleteTeamLeaderPayload>>
  >
  deleteTeamLeaderByRowId?: GraphCacheOptimisticMutationResolver<
    MutationDeleteTeamLeaderByRowIdArgs,
    Maybe<WithTypename<DeleteTeamLeaderPayload>>
  >
  updateCharityOrganization?: GraphCacheOptimisticMutationResolver<
    MutationUpdateCharityOrganizationArgs,
    Maybe<WithTypename<UpdateCharityOrganizationPayload>>
  >
  updateCharityOrganizationByName?: GraphCacheOptimisticMutationResolver<
    MutationUpdateCharityOrganizationByNameArgs,
    Maybe<WithTypename<UpdateCharityOrganizationPayload>>
  >
  updateCharityOrganizationByRowId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateCharityOrganizationByRowIdArgs,
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
  updateEventByName?: GraphCacheOptimisticMutationResolver<
    MutationUpdateEventByNameArgs,
    Maybe<WithTypename<UpdateEventPayload>>
  >
  updateEventByRowId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateEventByRowIdArgs,
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
  updateGameByRowId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGameByRowIdArgs,
    Maybe<WithTypename<UpdateGamePayload>>
  >
  updateGameEstimationNumericRound?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGameEstimationNumericRoundArgs,
    Maybe<WithTypename<UpdateGameEstimationNumericRoundPayload>>
  >
  updateGameEstimationNumericRoundByRowId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGameEstimationNumericRoundByRowIdArgs,
    Maybe<WithTypename<UpdateGameEstimationNumericRoundPayload>>
  >
  updateGameEstimationNumericVote?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGameEstimationNumericVoteArgs,
    Maybe<WithTypename<UpdateGameEstimationNumericVotePayload>>
  >
  updateGameEstimationNumericVoteByPlayerIdAndRoundId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGameEstimationNumericVoteByPlayerIdAndRoundIdArgs,
    Maybe<WithTypename<UpdateGameEstimationNumericVotePayload>>
  >
  updateGameEstimationNumericVoteByRowId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGameEstimationNumericVoteByRowIdArgs,
    Maybe<WithTypename<UpdateGameEstimationNumericVotePayload>>
  >
  updateGameRandomFactsRound?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGameRandomFactsRoundArgs,
    Maybe<WithTypename<UpdateGameRandomFactsRoundPayload>>
  >
  updateGameRandomFactsRoundByRowId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGameRandomFactsRoundByRowIdArgs,
    Maybe<WithTypename<UpdateGameRandomFactsRoundPayload>>
  >
  updateGameRandomFactsVote?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGameRandomFactsVoteArgs,
    Maybe<WithTypename<UpdateGameRandomFactsVotePayload>>
  >
  updateGameRandomFactsVoteByPlayerIdAndRoundId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGameRandomFactsVoteByPlayerIdAndRoundIdArgs,
    Maybe<WithTypename<UpdateGameRandomFactsVotePayload>>
  >
  updateGameRandomFactsVoteByRowId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGameRandomFactsVoteByRowIdArgs,
    Maybe<WithTypename<UpdateGameRandomFactsVotePayload>>
  >
  updateGameTeamScore?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGameTeamScoreArgs,
    Maybe<WithTypename<UpdateGameTeamScorePayload>>
  >
  updateGameTeamScoreByRowId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateGameTeamScoreByRowIdArgs,
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
  updatePlayerByInvitationCode?: GraphCacheOptimisticMutationResolver<
    MutationUpdatePlayerByInvitationCodeArgs,
    Maybe<WithTypename<UpdatePlayerPayload>>
  >
  updatePlayerByRowId?: GraphCacheOptimisticMutationResolver<
    MutationUpdatePlayerByRowIdArgs,
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
  updateTeamByRowId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateTeamByRowIdArgs,
    Maybe<WithTypename<UpdateTeamPayload>>
  >
  updateTeamLeader?: GraphCacheOptimisticMutationResolver<
    MutationUpdateTeamLeaderArgs,
    Maybe<WithTypename<UpdateTeamLeaderPayload>>
  >
  updateTeamLeaderByRowId?: GraphCacheOptimisticMutationResolver<
    MutationUpdateTeamLeaderByRowIdArgs,
    Maybe<WithTypename<UpdateTeamLeaderPayload>>
  >
}

export type GraphCacheUpdaters = {
  Query?: {
    allCharityOrganizations?: GraphCacheUpdateResolver<
      {
        allCharityOrganizations: Maybe<
          WithTypename<CharityOrganizationConnection>
        >
      },
      QueryAllCharityOrganizationsArgs
    >
    allEvents?: GraphCacheUpdateResolver<
      { allEvents: Maybe<WithTypename<EventConnection>> },
      QueryAllEventsArgs
    >
    allGameEstimationNumericLeaderboardViews?: GraphCacheUpdateResolver<
      {
        allGameEstimationNumericLeaderboardViews: Maybe<
          WithTypename<GameEstimationNumericLeaderboardViewConnection>
        >
      },
      QueryAllGameEstimationNumericLeaderboardViewsArgs
    >
    allGameEstimationNumericRounds?: GraphCacheUpdateResolver<
      {
        allGameEstimationNumericRounds: Maybe<
          WithTypename<GameEstimationNumericRoundConnection>
        >
      },
      QueryAllGameEstimationNumericRoundsArgs
    >
    allGameEstimationNumericVotes?: GraphCacheUpdateResolver<
      {
        allGameEstimationNumericVotes: Maybe<
          WithTypename<GameEstimationNumericVoteConnection>
        >
      },
      QueryAllGameEstimationNumericVotesArgs
    >
    allGameRandomFactsRounds?: GraphCacheUpdateResolver<
      {
        allGameRandomFactsRounds: Maybe<
          WithTypename<GameRandomFactsRoundConnection>
        >
      },
      QueryAllGameRandomFactsRoundsArgs
    >
    allGameRandomFactsVotes?: GraphCacheUpdateResolver<
      {
        allGameRandomFactsVotes: Maybe<
          WithTypename<GameRandomFactsVoteConnection>
        >
      },
      QueryAllGameRandomFactsVotesArgs
    >
    allGameTeamScores?: GraphCacheUpdateResolver<
      { allGameTeamScores: Maybe<WithTypename<GameTeamScoreConnection>> },
      QueryAllGameTeamScoresArgs
    >
    allGames?: GraphCacheUpdateResolver<
      { allGames: Maybe<WithTypename<GameConnection>> },
      QueryAllGamesArgs
    >
    allKvs?: GraphCacheUpdateResolver<
      { allKvs: Maybe<WithTypename<KvConnection>> },
      QueryAllKvsArgs
    >
    allPlayers?: GraphCacheUpdateResolver<
      { allPlayers: Maybe<WithTypename<PlayerConnection>> },
      QueryAllPlayersArgs
    >
    allTeamLeaders?: GraphCacheUpdateResolver<
      { allTeamLeaders: Maybe<WithTypename<TeamLeaderConnection>> },
      QueryAllTeamLeadersArgs
    >
    allTeams?: GraphCacheUpdateResolver<
      { allTeams: Maybe<WithTypename<TeamConnection>> },
      QueryAllTeamsArgs
    >
    charityOrganization?: GraphCacheUpdateResolver<
      { charityOrganization: Maybe<WithTypename<CharityOrganization>> },
      QueryCharityOrganizationArgs
    >
    charityOrganizationByName?: GraphCacheUpdateResolver<
      { charityOrganizationByName: Maybe<WithTypename<CharityOrganization>> },
      QueryCharityOrganizationByNameArgs
    >
    charityOrganizationByRowId?: GraphCacheUpdateResolver<
      { charityOrganizationByRowId: Maybe<WithTypename<CharityOrganization>> },
      QueryCharityOrganizationByRowIdArgs
    >
    charityOrganizationByUrl?: GraphCacheUpdateResolver<
      { charityOrganizationByUrl: Maybe<WithTypename<CharityOrganization>> },
      QueryCharityOrganizationByUrlArgs
    >
    event?: GraphCacheUpdateResolver<
      { event: Maybe<WithTypename<Event>> },
      QueryEventArgs
    >
    eventByName?: GraphCacheUpdateResolver<
      { eventByName: Maybe<WithTypename<Event>> },
      QueryEventByNameArgs
    >
    eventByRowId?: GraphCacheUpdateResolver<
      { eventByRowId: Maybe<WithTypename<Event>> },
      QueryEventByRowIdArgs
    >
    game?: GraphCacheUpdateResolver<
      { game: Maybe<WithTypename<Game>> },
      QueryGameArgs
    >
    gameByEventIdAndName?: GraphCacheUpdateResolver<
      { gameByEventIdAndName: Maybe<WithTypename<Game>> },
      QueryGameByEventIdAndNameArgs
    >
    gameByRowId?: GraphCacheUpdateResolver<
      { gameByRowId: Maybe<WithTypename<Game>> },
      QueryGameByRowIdArgs
    >
    gameEstimationNumericRound?: GraphCacheUpdateResolver<
      {
        gameEstimationNumericRound: Maybe<
          WithTypename<GameEstimationNumericRound>
        >
      },
      QueryGameEstimationNumericRoundArgs
    >
    gameEstimationNumericRoundByRowId?: GraphCacheUpdateResolver<
      {
        gameEstimationNumericRoundByRowId: Maybe<
          WithTypename<GameEstimationNumericRound>
        >
      },
      QueryGameEstimationNumericRoundByRowIdArgs
    >
    gameEstimationNumericVote?: GraphCacheUpdateResolver<
      {
        gameEstimationNumericVote: Maybe<
          WithTypename<GameEstimationNumericVote>
        >
      },
      QueryGameEstimationNumericVoteArgs
    >
    gameEstimationNumericVoteByPlayerIdAndRoundId?: GraphCacheUpdateResolver<
      {
        gameEstimationNumericVoteByPlayerIdAndRoundId: Maybe<
          WithTypename<GameEstimationNumericVote>
        >
      },
      QueryGameEstimationNumericVoteByPlayerIdAndRoundIdArgs
    >
    gameEstimationNumericVoteByRowId?: GraphCacheUpdateResolver<
      {
        gameEstimationNumericVoteByRowId: Maybe<
          WithTypename<GameEstimationNumericVote>
        >
      },
      QueryGameEstimationNumericVoteByRowIdArgs
    >
    gameRandomFactsRound?: GraphCacheUpdateResolver<
      { gameRandomFactsRound: Maybe<WithTypename<GameRandomFactsRound>> },
      QueryGameRandomFactsRoundArgs
    >
    gameRandomFactsRoundByRowId?: GraphCacheUpdateResolver<
      {
        gameRandomFactsRoundByRowId: Maybe<WithTypename<GameRandomFactsRound>>
      },
      QueryGameRandomFactsRoundByRowIdArgs
    >
    gameRandomFactsVote?: GraphCacheUpdateResolver<
      { gameRandomFactsVote: Maybe<WithTypename<GameRandomFactsVote>> },
      QueryGameRandomFactsVoteArgs
    >
    gameRandomFactsVoteByPlayerIdAndRoundId?: GraphCacheUpdateResolver<
      {
        gameRandomFactsVoteByPlayerIdAndRoundId: Maybe<
          WithTypename<GameRandomFactsVote>
        >
      },
      QueryGameRandomFactsVoteByPlayerIdAndRoundIdArgs
    >
    gameRandomFactsVoteByRowId?: GraphCacheUpdateResolver<
      { gameRandomFactsVoteByRowId: Maybe<WithTypename<GameRandomFactsVote>> },
      QueryGameRandomFactsVoteByRowIdArgs
    >
    gameTeamScore?: GraphCacheUpdateResolver<
      { gameTeamScore: Maybe<WithTypename<GameTeamScore>> },
      QueryGameTeamScoreArgs
    >
    gameTeamScoreByRowId?: GraphCacheUpdateResolver<
      { gameTeamScoreByRowId: Maybe<WithTypename<GameTeamScore>> },
      QueryGameTeamScoreByRowIdArgs
    >
    id?: GraphCacheUpdateResolver<
      { id: Scalars['ID']['output'] },
      Record<string, never>
    >
    kvByKey?: GraphCacheUpdateResolver<
      { kvByKey: Maybe<WithTypename<Kv>> },
      QueryKvByKeyArgs
    >
    node?: GraphCacheUpdateResolver<
      {
        node: Maybe<
          | WithTypename<CharityOrganization>
          | WithTypename<Event>
          | WithTypename<Game>
          | WithTypename<GameEstimationNumericRound>
          | WithTypename<GameEstimationNumericVote>
          | WithTypename<GameRandomFactsRound>
          | WithTypename<GameRandomFactsVote>
          | WithTypename<GameTeamScore>
          | WithTypename<Player>
          | WithTypename<Query>
          | WithTypename<Team>
          | WithTypename<TeamLeader>
        >
      },
      QueryNodeArgs
    >
    player?: GraphCacheUpdateResolver<
      { player: Maybe<WithTypename<Player>> },
      QueryPlayerArgs
    >
    playerByInvitationCode?: GraphCacheUpdateResolver<
      { playerByInvitationCode: Maybe<WithTypename<Player>> },
      QueryPlayerByInvitationCodeArgs
    >
    playerByInvitationCodeFn?: GraphCacheUpdateResolver<
      { playerByInvitationCodeFn: Maybe<WithTypename<PlayerConnection>> },
      QueryPlayerByInvitationCodeFnArgs
    >
    playerByRowId?: GraphCacheUpdateResolver<
      { playerByRowId: Maybe<WithTypename<Player>> },
      QueryPlayerByRowIdArgs
    >
    playerByTeamIdAndInvitationCode?: GraphCacheUpdateResolver<
      { playerByTeamIdAndInvitationCode: Maybe<WithTypename<Player>> },
      QueryPlayerByTeamIdAndInvitationCodeArgs
    >
    playerNameById?: GraphCacheUpdateResolver<
      { playerNameById: Maybe<Scalars['String']['output']> },
      QueryPlayerNameByIdArgs
    >
    query?: GraphCacheUpdateResolver<
      { query: WithTypename<Query> },
      Record<string, never>
    >
    team?: GraphCacheUpdateResolver<
      { team: Maybe<WithTypename<Team>> },
      QueryTeamArgs
    >
    teamByRowId?: GraphCacheUpdateResolver<
      { teamByRowId: Maybe<WithTypename<Team>> },
      QueryTeamByRowIdArgs
    >
    teamLeader?: GraphCacheUpdateResolver<
      { teamLeader: Maybe<WithTypename<TeamLeader>> },
      QueryTeamLeaderArgs
    >
    teamLeaderByRowId?: GraphCacheUpdateResolver<
      { teamLeaderByRowId: Maybe<WithTypename<TeamLeader>> },
      QueryTeamLeaderByRowIdArgs
    >
    teamPlayerCount?: GraphCacheUpdateResolver<
      { teamPlayerCount: Maybe<WithTypename<TeamPlayerCountConnection>> },
      QueryTeamPlayerCountArgs
    >
  }
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
    createGameEstimationNumericRound?: GraphCacheUpdateResolver<
      {
        createGameEstimationNumericRound: Maybe<
          WithTypename<CreateGameEstimationNumericRoundPayload>
        >
      },
      MutationCreateGameEstimationNumericRoundArgs
    >
    createGameEstimationNumericVote?: GraphCacheUpdateResolver<
      {
        createGameEstimationNumericVote: Maybe<
          WithTypename<CreateGameEstimationNumericVotePayload>
        >
      },
      MutationCreateGameEstimationNumericVoteArgs
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
    deleteCharityOrganizationByName?: GraphCacheUpdateResolver<
      {
        deleteCharityOrganizationByName: Maybe<
          WithTypename<DeleteCharityOrganizationPayload>
        >
      },
      MutationDeleteCharityOrganizationByNameArgs
    >
    deleteCharityOrganizationByRowId?: GraphCacheUpdateResolver<
      {
        deleteCharityOrganizationByRowId: Maybe<
          WithTypename<DeleteCharityOrganizationPayload>
        >
      },
      MutationDeleteCharityOrganizationByRowIdArgs
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
    deleteEventByName?: GraphCacheUpdateResolver<
      { deleteEventByName: Maybe<WithTypename<DeleteEventPayload>> },
      MutationDeleteEventByNameArgs
    >
    deleteEventByRowId?: GraphCacheUpdateResolver<
      { deleteEventByRowId: Maybe<WithTypename<DeleteEventPayload>> },
      MutationDeleteEventByRowIdArgs
    >
    deleteGame?: GraphCacheUpdateResolver<
      { deleteGame: Maybe<WithTypename<DeleteGamePayload>> },
      MutationDeleteGameArgs
    >
    deleteGameByEventIdAndName?: GraphCacheUpdateResolver<
      { deleteGameByEventIdAndName: Maybe<WithTypename<DeleteGamePayload>> },
      MutationDeleteGameByEventIdAndNameArgs
    >
    deleteGameByRowId?: GraphCacheUpdateResolver<
      { deleteGameByRowId: Maybe<WithTypename<DeleteGamePayload>> },
      MutationDeleteGameByRowIdArgs
    >
    deleteGameEstimationNumericRound?: GraphCacheUpdateResolver<
      {
        deleteGameEstimationNumericRound: Maybe<
          WithTypename<DeleteGameEstimationNumericRoundPayload>
        >
      },
      MutationDeleteGameEstimationNumericRoundArgs
    >
    deleteGameEstimationNumericRoundByRowId?: GraphCacheUpdateResolver<
      {
        deleteGameEstimationNumericRoundByRowId: Maybe<
          WithTypename<DeleteGameEstimationNumericRoundPayload>
        >
      },
      MutationDeleteGameEstimationNumericRoundByRowIdArgs
    >
    deleteGameEstimationNumericVote?: GraphCacheUpdateResolver<
      {
        deleteGameEstimationNumericVote: Maybe<
          WithTypename<DeleteGameEstimationNumericVotePayload>
        >
      },
      MutationDeleteGameEstimationNumericVoteArgs
    >
    deleteGameEstimationNumericVoteByPlayerIdAndRoundId?: GraphCacheUpdateResolver<
      {
        deleteGameEstimationNumericVoteByPlayerIdAndRoundId: Maybe<
          WithTypename<DeleteGameEstimationNumericVotePayload>
        >
      },
      MutationDeleteGameEstimationNumericVoteByPlayerIdAndRoundIdArgs
    >
    deleteGameEstimationNumericVoteByRowId?: GraphCacheUpdateResolver<
      {
        deleteGameEstimationNumericVoteByRowId: Maybe<
          WithTypename<DeleteGameEstimationNumericVotePayload>
        >
      },
      MutationDeleteGameEstimationNumericVoteByRowIdArgs
    >
    deleteGameRandomFactsRound?: GraphCacheUpdateResolver<
      {
        deleteGameRandomFactsRound: Maybe<
          WithTypename<DeleteGameRandomFactsRoundPayload>
        >
      },
      MutationDeleteGameRandomFactsRoundArgs
    >
    deleteGameRandomFactsRoundByRowId?: GraphCacheUpdateResolver<
      {
        deleteGameRandomFactsRoundByRowId: Maybe<
          WithTypename<DeleteGameRandomFactsRoundPayload>
        >
      },
      MutationDeleteGameRandomFactsRoundByRowIdArgs
    >
    deleteGameRandomFactsVote?: GraphCacheUpdateResolver<
      {
        deleteGameRandomFactsVote: Maybe<
          WithTypename<DeleteGameRandomFactsVotePayload>
        >
      },
      MutationDeleteGameRandomFactsVoteArgs
    >
    deleteGameRandomFactsVoteByPlayerIdAndRoundId?: GraphCacheUpdateResolver<
      {
        deleteGameRandomFactsVoteByPlayerIdAndRoundId: Maybe<
          WithTypename<DeleteGameRandomFactsVotePayload>
        >
      },
      MutationDeleteGameRandomFactsVoteByPlayerIdAndRoundIdArgs
    >
    deleteGameRandomFactsVoteByRowId?: GraphCacheUpdateResolver<
      {
        deleteGameRandomFactsVoteByRowId: Maybe<
          WithTypename<DeleteGameRandomFactsVotePayload>
        >
      },
      MutationDeleteGameRandomFactsVoteByRowIdArgs
    >
    deleteGameTeamScore?: GraphCacheUpdateResolver<
      { deleteGameTeamScore: Maybe<WithTypename<DeleteGameTeamScorePayload>> },
      MutationDeleteGameTeamScoreArgs
    >
    deleteGameTeamScoreByRowId?: GraphCacheUpdateResolver<
      {
        deleteGameTeamScoreByRowId: Maybe<
          WithTypename<DeleteGameTeamScorePayload>
        >
      },
      MutationDeleteGameTeamScoreByRowIdArgs
    >
    deleteKvByKey?: GraphCacheUpdateResolver<
      { deleteKvByKey: Maybe<WithTypename<DeleteKvPayload>> },
      MutationDeleteKvByKeyArgs
    >
    deletePlayer?: GraphCacheUpdateResolver<
      { deletePlayer: Maybe<WithTypename<DeletePlayerPayload>> },
      MutationDeletePlayerArgs
    >
    deletePlayerByInvitationCode?: GraphCacheUpdateResolver<
      {
        deletePlayerByInvitationCode: Maybe<WithTypename<DeletePlayerPayload>>
      },
      MutationDeletePlayerByInvitationCodeArgs
    >
    deletePlayerByRowId?: GraphCacheUpdateResolver<
      { deletePlayerByRowId: Maybe<WithTypename<DeletePlayerPayload>> },
      MutationDeletePlayerByRowIdArgs
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
    deleteTeamByRowId?: GraphCacheUpdateResolver<
      { deleteTeamByRowId: Maybe<WithTypename<DeleteTeamPayload>> },
      MutationDeleteTeamByRowIdArgs
    >
    deleteTeamLeader?: GraphCacheUpdateResolver<
      { deleteTeamLeader: Maybe<WithTypename<DeleteTeamLeaderPayload>> },
      MutationDeleteTeamLeaderArgs
    >
    deleteTeamLeaderByRowId?: GraphCacheUpdateResolver<
      { deleteTeamLeaderByRowId: Maybe<WithTypename<DeleteTeamLeaderPayload>> },
      MutationDeleteTeamLeaderByRowIdArgs
    >
    updateCharityOrganization?: GraphCacheUpdateResolver<
      {
        updateCharityOrganization: Maybe<
          WithTypename<UpdateCharityOrganizationPayload>
        >
      },
      MutationUpdateCharityOrganizationArgs
    >
    updateCharityOrganizationByName?: GraphCacheUpdateResolver<
      {
        updateCharityOrganizationByName: Maybe<
          WithTypename<UpdateCharityOrganizationPayload>
        >
      },
      MutationUpdateCharityOrganizationByNameArgs
    >
    updateCharityOrganizationByRowId?: GraphCacheUpdateResolver<
      {
        updateCharityOrganizationByRowId: Maybe<
          WithTypename<UpdateCharityOrganizationPayload>
        >
      },
      MutationUpdateCharityOrganizationByRowIdArgs
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
    updateEventByName?: GraphCacheUpdateResolver<
      { updateEventByName: Maybe<WithTypename<UpdateEventPayload>> },
      MutationUpdateEventByNameArgs
    >
    updateEventByRowId?: GraphCacheUpdateResolver<
      { updateEventByRowId: Maybe<WithTypename<UpdateEventPayload>> },
      MutationUpdateEventByRowIdArgs
    >
    updateGame?: GraphCacheUpdateResolver<
      { updateGame: Maybe<WithTypename<UpdateGamePayload>> },
      MutationUpdateGameArgs
    >
    updateGameByEventIdAndName?: GraphCacheUpdateResolver<
      { updateGameByEventIdAndName: Maybe<WithTypename<UpdateGamePayload>> },
      MutationUpdateGameByEventIdAndNameArgs
    >
    updateGameByRowId?: GraphCacheUpdateResolver<
      { updateGameByRowId: Maybe<WithTypename<UpdateGamePayload>> },
      MutationUpdateGameByRowIdArgs
    >
    updateGameEstimationNumericRound?: GraphCacheUpdateResolver<
      {
        updateGameEstimationNumericRound: Maybe<
          WithTypename<UpdateGameEstimationNumericRoundPayload>
        >
      },
      MutationUpdateGameEstimationNumericRoundArgs
    >
    updateGameEstimationNumericRoundByRowId?: GraphCacheUpdateResolver<
      {
        updateGameEstimationNumericRoundByRowId: Maybe<
          WithTypename<UpdateGameEstimationNumericRoundPayload>
        >
      },
      MutationUpdateGameEstimationNumericRoundByRowIdArgs
    >
    updateGameEstimationNumericVote?: GraphCacheUpdateResolver<
      {
        updateGameEstimationNumericVote: Maybe<
          WithTypename<UpdateGameEstimationNumericVotePayload>
        >
      },
      MutationUpdateGameEstimationNumericVoteArgs
    >
    updateGameEstimationNumericVoteByPlayerIdAndRoundId?: GraphCacheUpdateResolver<
      {
        updateGameEstimationNumericVoteByPlayerIdAndRoundId: Maybe<
          WithTypename<UpdateGameEstimationNumericVotePayload>
        >
      },
      MutationUpdateGameEstimationNumericVoteByPlayerIdAndRoundIdArgs
    >
    updateGameEstimationNumericVoteByRowId?: GraphCacheUpdateResolver<
      {
        updateGameEstimationNumericVoteByRowId: Maybe<
          WithTypename<UpdateGameEstimationNumericVotePayload>
        >
      },
      MutationUpdateGameEstimationNumericVoteByRowIdArgs
    >
    updateGameRandomFactsRound?: GraphCacheUpdateResolver<
      {
        updateGameRandomFactsRound: Maybe<
          WithTypename<UpdateGameRandomFactsRoundPayload>
        >
      },
      MutationUpdateGameRandomFactsRoundArgs
    >
    updateGameRandomFactsRoundByRowId?: GraphCacheUpdateResolver<
      {
        updateGameRandomFactsRoundByRowId: Maybe<
          WithTypename<UpdateGameRandomFactsRoundPayload>
        >
      },
      MutationUpdateGameRandomFactsRoundByRowIdArgs
    >
    updateGameRandomFactsVote?: GraphCacheUpdateResolver<
      {
        updateGameRandomFactsVote: Maybe<
          WithTypename<UpdateGameRandomFactsVotePayload>
        >
      },
      MutationUpdateGameRandomFactsVoteArgs
    >
    updateGameRandomFactsVoteByPlayerIdAndRoundId?: GraphCacheUpdateResolver<
      {
        updateGameRandomFactsVoteByPlayerIdAndRoundId: Maybe<
          WithTypename<UpdateGameRandomFactsVotePayload>
        >
      },
      MutationUpdateGameRandomFactsVoteByPlayerIdAndRoundIdArgs
    >
    updateGameRandomFactsVoteByRowId?: GraphCacheUpdateResolver<
      {
        updateGameRandomFactsVoteByRowId: Maybe<
          WithTypename<UpdateGameRandomFactsVotePayload>
        >
      },
      MutationUpdateGameRandomFactsVoteByRowIdArgs
    >
    updateGameTeamScore?: GraphCacheUpdateResolver<
      { updateGameTeamScore: Maybe<WithTypename<UpdateGameTeamScorePayload>> },
      MutationUpdateGameTeamScoreArgs
    >
    updateGameTeamScoreByRowId?: GraphCacheUpdateResolver<
      {
        updateGameTeamScoreByRowId: Maybe<
          WithTypename<UpdateGameTeamScorePayload>
        >
      },
      MutationUpdateGameTeamScoreByRowIdArgs
    >
    updateKvByKey?: GraphCacheUpdateResolver<
      { updateKvByKey: Maybe<WithTypename<UpdateKvPayload>> },
      MutationUpdateKvByKeyArgs
    >
    updatePlayer?: GraphCacheUpdateResolver<
      { updatePlayer: Maybe<WithTypename<UpdatePlayerPayload>> },
      MutationUpdatePlayerArgs
    >
    updatePlayerByInvitationCode?: GraphCacheUpdateResolver<
      {
        updatePlayerByInvitationCode: Maybe<WithTypename<UpdatePlayerPayload>>
      },
      MutationUpdatePlayerByInvitationCodeArgs
    >
    updatePlayerByRowId?: GraphCacheUpdateResolver<
      { updatePlayerByRowId: Maybe<WithTypename<UpdatePlayerPayload>> },
      MutationUpdatePlayerByRowIdArgs
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
    updateTeamByRowId?: GraphCacheUpdateResolver<
      { updateTeamByRowId: Maybe<WithTypename<UpdateTeamPayload>> },
      MutationUpdateTeamByRowIdArgs
    >
    updateTeamLeader?: GraphCacheUpdateResolver<
      { updateTeamLeader: Maybe<WithTypename<UpdateTeamLeaderPayload>> },
      MutationUpdateTeamLeaderArgs
    >
    updateTeamLeaderByRowId?: GraphCacheUpdateResolver<
      { updateTeamLeaderByRowId: Maybe<WithTypename<UpdateTeamLeaderPayload>> },
      MutationUpdateTeamLeaderByRowIdArgs
    >
  }
  Subscription?: object
  CharityOrganization?: {
    department?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CharityOrganization>>,
      Record<string, never>
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CharityOrganization>>,
      Record<string, never>
    >
    name?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CharityOrganization>>,
      Record<string, never>
    >
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CharityOrganization>>,
      Record<string, never>
    >
    url?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CharityOrganization>>,
      Record<string, never>
    >
  }
  CharityOrganizationConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CharityOrganizationConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CharityOrganizationConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CharityOrganizationConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CharityOrganizationConnection>>,
      Record<string, never>
    >
  }
  CharityOrganizationEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CharityOrganizationEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CharityOrganizationEdge>>,
      Record<string, never>
    >
  }
  CreateCharityOrganizationPayload?: {
    charityOrganization?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateCharityOrganizationPayload>>,
      Record<string, never>
    >
    charityOrganizationEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateCharityOrganizationPayload>>,
      CreateCharityOrganizationPayloadCharityOrganizationEdgeArgs
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateCharityOrganizationPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateCharityOrganizationPayload>>,
      Record<string, never>
    >
  }
  CreateEventPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventPayload>>,
      Record<string, never>
    >
    event?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventPayload>>,
      Record<string, never>
    >
    eventEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventPayload>>,
      CreateEventPayloadEventEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateEventPayload>>,
      Record<string, never>
    >
  }
  CreateGameEstimationNumericRoundPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGameEstimationNumericRoundPayload>>,
      Record<string, never>
    >
    gameEstimationNumericRound?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGameEstimationNumericRoundPayload>>,
      Record<string, never>
    >
    gameEstimationNumericRoundEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGameEstimationNumericRoundPayload>>,
      CreateGameEstimationNumericRoundPayloadGameEstimationNumericRoundEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGameEstimationNumericRoundPayload>>,
      Record<string, never>
    >
  }
  CreateGameEstimationNumericVotePayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGameEstimationNumericVotePayload>>,
      Record<string, never>
    >
    gameEstimationNumericVote?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGameEstimationNumericVotePayload>>,
      Record<string, never>
    >
    gameEstimationNumericVoteEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGameEstimationNumericVotePayload>>,
      CreateGameEstimationNumericVotePayloadGameEstimationNumericVoteEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGameEstimationNumericVotePayload>>,
      Record<string, never>
    >
  }
  CreateGamePayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGamePayload>>,
      Record<string, never>
    >
    game?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGamePayload>>,
      Record<string, never>
    >
    gameEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGamePayload>>,
      CreateGamePayloadGameEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGamePayload>>,
      Record<string, never>
    >
  }
  CreateGameRandomFactsRoundPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGameRandomFactsRoundPayload>>,
      Record<string, never>
    >
    gameRandomFactsRound?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGameRandomFactsRoundPayload>>,
      Record<string, never>
    >
    gameRandomFactsRoundEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGameRandomFactsRoundPayload>>,
      CreateGameRandomFactsRoundPayloadGameRandomFactsRoundEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGameRandomFactsRoundPayload>>,
      Record<string, never>
    >
  }
  CreateGameRandomFactsVotePayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGameRandomFactsVotePayload>>,
      Record<string, never>
    >
    gameRandomFactsVote?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGameRandomFactsVotePayload>>,
      Record<string, never>
    >
    gameRandomFactsVoteEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGameRandomFactsVotePayload>>,
      CreateGameRandomFactsVotePayloadGameRandomFactsVoteEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGameRandomFactsVotePayload>>,
      Record<string, never>
    >
  }
  CreateGameTeamScorePayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGameTeamScorePayload>>,
      Record<string, never>
    >
    gameTeamScore?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGameTeamScorePayload>>,
      Record<string, never>
    >
    gameTeamScoreEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGameTeamScorePayload>>,
      CreateGameTeamScorePayloadGameTeamScoreEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateGameTeamScorePayload>>,
      Record<string, never>
    >
  }
  CreateKvPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateKvPayload>>,
      Record<string, never>
    >
    kv?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateKvPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateKvPayload>>,
      Record<string, never>
    >
  }
  CreatePlayerPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreatePlayerPayload>>,
      Record<string, never>
    >
    player?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreatePlayerPayload>>,
      Record<string, never>
    >
    playerEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreatePlayerPayload>>,
      CreatePlayerPayloadPlayerEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreatePlayerPayload>>,
      Record<string, never>
    >
  }
  CreateTeamLeaderPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateTeamLeaderPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateTeamLeaderPayload>>,
      Record<string, never>
    >
    teamLeader?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateTeamLeaderPayload>>,
      Record<string, never>
    >
    teamLeaderEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateTeamLeaderPayload>>,
      CreateTeamLeaderPayloadTeamLeaderEdgeArgs
    >
  }
  CreateTeamPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateTeamPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateTeamPayload>>,
      Record<string, never>
    >
    team?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateTeamPayload>>,
      Record<string, never>
    >
    teamEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<CreateTeamPayload>>,
      CreateTeamPayloadTeamEdgeArgs
    >
  }
  DeleteCharityOrganizationPayload?: {
    charityOrganization?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteCharityOrganizationPayload>>,
      Record<string, never>
    >
    charityOrganizationEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteCharityOrganizationPayload>>,
      DeleteCharityOrganizationPayloadCharityOrganizationEdgeArgs
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteCharityOrganizationPayload>>,
      Record<string, never>
    >
    deletedCharityOrganizationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteCharityOrganizationPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteCharityOrganizationPayload>>,
      Record<string, never>
    >
  }
  DeleteEventPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventPayload>>,
      Record<string, never>
    >
    deletedEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventPayload>>,
      Record<string, never>
    >
    event?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventPayload>>,
      Record<string, never>
    >
    eventEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventPayload>>,
      DeleteEventPayloadEventEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteEventPayload>>,
      Record<string, never>
    >
  }
  DeleteGameEstimationNumericRoundPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGameEstimationNumericRoundPayload>>,
      Record<string, never>
    >
    deletedGameEstimationNumericRoundId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGameEstimationNumericRoundPayload>>,
      Record<string, never>
    >
    gameEstimationNumericRound?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGameEstimationNumericRoundPayload>>,
      Record<string, never>
    >
    gameEstimationNumericRoundEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGameEstimationNumericRoundPayload>>,
      DeleteGameEstimationNumericRoundPayloadGameEstimationNumericRoundEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGameEstimationNumericRoundPayload>>,
      Record<string, never>
    >
  }
  DeleteGameEstimationNumericVotePayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGameEstimationNumericVotePayload>>,
      Record<string, never>
    >
    deletedGameEstimationNumericVoteId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGameEstimationNumericVotePayload>>,
      Record<string, never>
    >
    gameEstimationNumericVote?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGameEstimationNumericVotePayload>>,
      Record<string, never>
    >
    gameEstimationNumericVoteEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGameEstimationNumericVotePayload>>,
      DeleteGameEstimationNumericVotePayloadGameEstimationNumericVoteEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGameEstimationNumericVotePayload>>,
      Record<string, never>
    >
  }
  DeleteGamePayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGamePayload>>,
      Record<string, never>
    >
    deletedGameId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGamePayload>>,
      Record<string, never>
    >
    game?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGamePayload>>,
      Record<string, never>
    >
    gameEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGamePayload>>,
      DeleteGamePayloadGameEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGamePayload>>,
      Record<string, never>
    >
  }
  DeleteGameRandomFactsRoundPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGameRandomFactsRoundPayload>>,
      Record<string, never>
    >
    deletedGameRandomFactsRoundId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGameRandomFactsRoundPayload>>,
      Record<string, never>
    >
    gameRandomFactsRound?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGameRandomFactsRoundPayload>>,
      Record<string, never>
    >
    gameRandomFactsRoundEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGameRandomFactsRoundPayload>>,
      DeleteGameRandomFactsRoundPayloadGameRandomFactsRoundEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGameRandomFactsRoundPayload>>,
      Record<string, never>
    >
  }
  DeleteGameRandomFactsVotePayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGameRandomFactsVotePayload>>,
      Record<string, never>
    >
    deletedGameRandomFactsVoteId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGameRandomFactsVotePayload>>,
      Record<string, never>
    >
    gameRandomFactsVote?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGameRandomFactsVotePayload>>,
      Record<string, never>
    >
    gameRandomFactsVoteEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGameRandomFactsVotePayload>>,
      DeleteGameRandomFactsVotePayloadGameRandomFactsVoteEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGameRandomFactsVotePayload>>,
      Record<string, never>
    >
  }
  DeleteGameTeamScorePayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGameTeamScorePayload>>,
      Record<string, never>
    >
    deletedGameTeamScoreId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGameTeamScorePayload>>,
      Record<string, never>
    >
    gameTeamScore?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGameTeamScorePayload>>,
      Record<string, never>
    >
    gameTeamScoreEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGameTeamScorePayload>>,
      DeleteGameTeamScorePayloadGameTeamScoreEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteGameTeamScorePayload>>,
      Record<string, never>
    >
  }
  DeleteKvPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteKvPayload>>,
      Record<string, never>
    >
    kv?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteKvPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteKvPayload>>,
      Record<string, never>
    >
  }
  DeletePlayerPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePlayerPayload>>,
      Record<string, never>
    >
    deletedPlayerId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePlayerPayload>>,
      Record<string, never>
    >
    player?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePlayerPayload>>,
      Record<string, never>
    >
    playerEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePlayerPayload>>,
      DeletePlayerPayloadPlayerEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeletePlayerPayload>>,
      Record<string, never>
    >
  }
  DeleteTeamLeaderPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteTeamLeaderPayload>>,
      Record<string, never>
    >
    deletedTeamLeaderId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteTeamLeaderPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteTeamLeaderPayload>>,
      Record<string, never>
    >
    teamLeader?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteTeamLeaderPayload>>,
      Record<string, never>
    >
    teamLeaderEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteTeamLeaderPayload>>,
      DeleteTeamLeaderPayloadTeamLeaderEdgeArgs
    >
  }
  DeleteTeamPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteTeamPayload>>,
      Record<string, never>
    >
    deletedTeamId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteTeamPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteTeamPayload>>,
      Record<string, never>
    >
    team?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteTeamPayload>>,
      Record<string, never>
    >
    teamEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<DeleteTeamPayload>>,
      DeleteTeamPayloadTeamEdgeArgs
    >
  }
  Event?: {
    commonDonationAmount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    commonDonationIsLive?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    commonDonationUrl?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    discordInviteCode?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    end?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    gamesByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      EventGamesByEventIdArgs
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    name?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    start?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    streamUrl?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      Record<string, never>
    >
    teamsByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Event>>,
      EventTeamsByEventIdArgs
    >
  }
  EventConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventConnection>>,
      Record<string, never>
    >
  }
  EventEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<EventEdge>>,
      Record<string, never>
    >
  }
  Game?: {
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Game>>,
      Record<string, never>
    >
    eventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Game>>,
      Record<string, never>
    >
    gameEstimationNumericRoundsByGameId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Game>>,
      GameGameEstimationNumericRoundsByGameIdArgs
    >
    gameRandomFactsRoundsByGameId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Game>>,
      GameGameRandomFactsRoundsByGameIdArgs
    >
    gameTeamScoresByGameId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Game>>,
      GameGameTeamScoresByGameIdArgs
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Game>>,
      Record<string, never>
    >
    isActive?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Game>>,
      Record<string, never>
    >
    name?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Game>>,
      Record<string, never>
    >
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Game>>,
      Record<string, never>
    >
    type?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Game>>,
      Record<string, never>
    >
  }
  GameConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameConnection>>,
      Record<string, never>
    >
  }
  GameEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEdge>>,
      Record<string, never>
    >
  }
  GameEstimationNumericLeaderboardView?: {
    gameId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericLeaderboardView>>,
      Record<string, never>
    >
    playerName?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericLeaderboardView>>,
      Record<string, never>
    >
    totalPoints?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericLeaderboardView>>,
      Record<string, never>
    >
  }
  GameEstimationNumericLeaderboardViewConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericLeaderboardViewConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericLeaderboardViewConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericLeaderboardViewConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericLeaderboardViewConnection>>,
      Record<string, never>
    >
  }
  GameEstimationNumericLeaderboardViewEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericLeaderboardViewEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericLeaderboardViewEdge>>,
      Record<string, never>
    >
  }
  GameEstimationNumericRound?: {
    answerCorrect?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericRound>>,
      Record<string, never>
    >
    elementName?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericRound>>,
      Record<string, never>
    >
    gameByGameId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericRound>>,
      Record<string, never>
    >
    gameEstimationNumericVotesByRoundId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericRound>>,
      GameEstimationNumericRoundGameEstimationNumericVotesByRoundIdArgs
    >
    gameId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericRound>>,
      Record<string, never>
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericRound>>,
      Record<string, never>
    >
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericRound>>,
      Record<string, never>
    >
  }
  GameEstimationNumericRoundConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericRoundConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericRoundConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericRoundConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericRoundConnection>>,
      Record<string, never>
    >
  }
  GameEstimationNumericRoundEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericRoundEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericRoundEdge>>,
      Record<string, never>
    >
  }
  GameEstimationNumericVote?: {
    answer?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericVote>>,
      Record<string, never>
    >
    gameEstimationNumericRoundByRoundId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericVote>>,
      Record<string, never>
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericVote>>,
      Record<string, never>
    >
    playerByPlayerId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericVote>>,
      Record<string, never>
    >
    playerId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericVote>>,
      Record<string, never>
    >
    roundId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericVote>>,
      Record<string, never>
    >
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericVote>>,
      Record<string, never>
    >
  }
  GameEstimationNumericVoteConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericVoteConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericVoteConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericVoteConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericVoteConnection>>,
      Record<string, never>
    >
  }
  GameEstimationNumericVoteEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericVoteEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameEstimationNumericVoteEdge>>,
      Record<string, never>
    >
  }
  GameRandomFactsRound?: {
    answerCorrect?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameRandomFactsRound>>,
      Record<string, never>
    >
    gameByGameId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameRandomFactsRound>>,
      Record<string, never>
    >
    gameId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameRandomFactsRound>>,
      Record<string, never>
    >
    gameRandomFactsVotesByRoundId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameRandomFactsRound>>,
      GameRandomFactsRoundGameRandomFactsVotesByRoundIdArgs
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameRandomFactsRound>>,
      Record<string, never>
    >
    questionerName?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameRandomFactsRound>>,
      Record<string, never>
    >
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameRandomFactsRound>>,
      Record<string, never>
    >
  }
  GameRandomFactsRoundConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameRandomFactsRoundConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameRandomFactsRoundConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameRandomFactsRoundConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameRandomFactsRoundConnection>>,
      Record<string, never>
    >
  }
  GameRandomFactsRoundEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameRandomFactsRoundEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameRandomFactsRoundEdge>>,
      Record<string, never>
    >
  }
  GameRandomFactsVote?: {
    answer?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameRandomFactsVote>>,
      Record<string, never>
    >
    gameRandomFactsRoundByRoundId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameRandomFactsVote>>,
      Record<string, never>
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameRandomFactsVote>>,
      Record<string, never>
    >
    playerByPlayerId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameRandomFactsVote>>,
      Record<string, never>
    >
    playerId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameRandomFactsVote>>,
      Record<string, never>
    >
    roundId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameRandomFactsVote>>,
      Record<string, never>
    >
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameRandomFactsVote>>,
      Record<string, never>
    >
  }
  GameRandomFactsVoteConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameRandomFactsVoteConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameRandomFactsVoteConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameRandomFactsVoteConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameRandomFactsVoteConnection>>,
      Record<string, never>
    >
  }
  GameRandomFactsVoteEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameRandomFactsVoteEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameRandomFactsVoteEdge>>,
      Record<string, never>
    >
  }
  GameTeamScore?: {
    gameByGameId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameTeamScore>>,
      Record<string, never>
    >
    gameId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameTeamScore>>,
      Record<string, never>
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameTeamScore>>,
      Record<string, never>
    >
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameTeamScore>>,
      Record<string, never>
    >
    score?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameTeamScore>>,
      Record<string, never>
    >
    teamByTeamId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameTeamScore>>,
      Record<string, never>
    >
    teamId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameTeamScore>>,
      Record<string, never>
    >
  }
  GameTeamScoreConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameTeamScoreConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameTeamScoreConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameTeamScoreConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameTeamScoreConnection>>,
      Record<string, never>
    >
  }
  GameTeamScoreEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameTeamScoreEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<GameTeamScoreEdge>>,
      Record<string, never>
    >
  }
  Kv?: {
    key?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Kv>>,
      Record<string, never>
    >
    value?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Kv>>,
      Record<string, never>
    >
  }
  KvConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<KvConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<KvConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<KvConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<KvConnection>>,
      Record<string, never>
    >
  }
  KvEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<KvEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<KvEdge>>,
      Record<string, never>
    >
  }
  PageInfo?: {
    endCursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PageInfo>>,
      Record<string, never>
    >
    hasNextPage?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PageInfo>>,
      Record<string, never>
    >
    hasPreviousPage?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PageInfo>>,
      Record<string, never>
    >
    startCursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PageInfo>>,
      Record<string, never>
    >
  }
  Player?: {
    gameEstimationNumericVotesByPlayerId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Player>>,
      PlayerGameEstimationNumericVotesByPlayerIdArgs
    >
    gameRandomFactsVotesByPlayerId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Player>>,
      PlayerGameRandomFactsVotesByPlayerIdArgs
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Player>>,
      Record<string, never>
    >
    invitationCode?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Player>>,
      Record<string, never>
    >
    name?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Player>>,
      Record<string, never>
    >
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Player>>,
      Record<string, never>
    >
    teamByTeamId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Player>>,
      Record<string, never>
    >
    teamId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Player>>,
      Record<string, never>
    >
  }
  PlayerConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PlayerConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PlayerConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PlayerConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PlayerConnection>>,
      Record<string, never>
    >
  }
  PlayerEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PlayerEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<PlayerEdge>>,
      Record<string, never>
    >
  }
  Team?: {
    charityOrganizationByCharityOrganizationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Team>>,
      Record<string, never>
    >
    charityOrganizationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Team>>,
      Record<string, never>
    >
    donationAmount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Team>>,
      Record<string, never>
    >
    donationUrl?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Team>>,
      Record<string, never>
    >
    emoji?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Team>>,
      Record<string, never>
    >
    eventByEventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Team>>,
      Record<string, never>
    >
    eventId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Team>>,
      Record<string, never>
    >
    gameTeamScoresByTeamId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Team>>,
      TeamGameTeamScoresByTeamIdArgs
    >
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Team>>,
      Record<string, never>
    >
    name?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Team>>,
      Record<string, never>
    >
    playersByTeamId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Team>>,
      TeamPlayersByTeamIdArgs
    >
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<Team>>,
      Record<string, never>
    >
  }
  TeamConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<TeamConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<TeamConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<TeamConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<TeamConnection>>,
      Record<string, never>
    >
  }
  TeamEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<TeamEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<TeamEdge>>,
      Record<string, never>
    >
  }
  TeamLeader?: {
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<TeamLeader>>,
      Record<string, never>
    >
    playerByPlayerId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<TeamLeader>>,
      Record<string, never>
    >
    playerId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<TeamLeader>>,
      Record<string, never>
    >
    rowId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<TeamLeader>>,
      Record<string, never>
    >
    teamByTeamId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<TeamLeader>>,
      Record<string, never>
    >
    teamId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<TeamLeader>>,
      Record<string, never>
    >
  }
  TeamLeaderConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<TeamLeaderConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<TeamLeaderConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<TeamLeaderConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<TeamLeaderConnection>>,
      Record<string, never>
    >
  }
  TeamLeaderEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<TeamLeaderEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<TeamLeaderEdge>>,
      Record<string, never>
    >
  }
  TeamPlayerCountConnection?: {
    edges?: GraphCacheUpdateResolver<
      Maybe<WithTypename<TeamPlayerCountConnection>>,
      Record<string, never>
    >
    nodes?: GraphCacheUpdateResolver<
      Maybe<WithTypename<TeamPlayerCountConnection>>,
      Record<string, never>
    >
    pageInfo?: GraphCacheUpdateResolver<
      Maybe<WithTypename<TeamPlayerCountConnection>>,
      Record<string, never>
    >
    totalCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<TeamPlayerCountConnection>>,
      Record<string, never>
    >
  }
  TeamPlayerCountEdge?: {
    cursor?: GraphCacheUpdateResolver<
      Maybe<WithTypename<TeamPlayerCountEdge>>,
      Record<string, never>
    >
    node?: GraphCacheUpdateResolver<
      Maybe<WithTypename<TeamPlayerCountEdge>>,
      Record<string, never>
    >
  }
  TeamPlayerCountRecord?: {
    id?: GraphCacheUpdateResolver<
      Maybe<WithTypename<TeamPlayerCountRecord>>,
      Record<string, never>
    >
    playerCount?: GraphCacheUpdateResolver<
      Maybe<WithTypename<TeamPlayerCountRecord>>,
      Record<string, never>
    >
  }
  UpdateCharityOrganizationPayload?: {
    charityOrganization?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateCharityOrganizationPayload>>,
      Record<string, never>
    >
    charityOrganizationEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateCharityOrganizationPayload>>,
      UpdateCharityOrganizationPayloadCharityOrganizationEdgeArgs
    >
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateCharityOrganizationPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateCharityOrganizationPayload>>,
      Record<string, never>
    >
  }
  UpdateEventPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventPayload>>,
      Record<string, never>
    >
    event?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventPayload>>,
      Record<string, never>
    >
    eventEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventPayload>>,
      UpdateEventPayloadEventEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateEventPayload>>,
      Record<string, never>
    >
  }
  UpdateGameEstimationNumericRoundPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGameEstimationNumericRoundPayload>>,
      Record<string, never>
    >
    gameEstimationNumericRound?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGameEstimationNumericRoundPayload>>,
      Record<string, never>
    >
    gameEstimationNumericRoundEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGameEstimationNumericRoundPayload>>,
      UpdateGameEstimationNumericRoundPayloadGameEstimationNumericRoundEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGameEstimationNumericRoundPayload>>,
      Record<string, never>
    >
  }
  UpdateGameEstimationNumericVotePayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGameEstimationNumericVotePayload>>,
      Record<string, never>
    >
    gameEstimationNumericVote?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGameEstimationNumericVotePayload>>,
      Record<string, never>
    >
    gameEstimationNumericVoteEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGameEstimationNumericVotePayload>>,
      UpdateGameEstimationNumericVotePayloadGameEstimationNumericVoteEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGameEstimationNumericVotePayload>>,
      Record<string, never>
    >
  }
  UpdateGamePayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGamePayload>>,
      Record<string, never>
    >
    game?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGamePayload>>,
      Record<string, never>
    >
    gameEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGamePayload>>,
      UpdateGamePayloadGameEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGamePayload>>,
      Record<string, never>
    >
  }
  UpdateGameRandomFactsRoundPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGameRandomFactsRoundPayload>>,
      Record<string, never>
    >
    gameRandomFactsRound?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGameRandomFactsRoundPayload>>,
      Record<string, never>
    >
    gameRandomFactsRoundEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGameRandomFactsRoundPayload>>,
      UpdateGameRandomFactsRoundPayloadGameRandomFactsRoundEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGameRandomFactsRoundPayload>>,
      Record<string, never>
    >
  }
  UpdateGameRandomFactsVotePayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGameRandomFactsVotePayload>>,
      Record<string, never>
    >
    gameRandomFactsVote?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGameRandomFactsVotePayload>>,
      Record<string, never>
    >
    gameRandomFactsVoteEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGameRandomFactsVotePayload>>,
      UpdateGameRandomFactsVotePayloadGameRandomFactsVoteEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGameRandomFactsVotePayload>>,
      Record<string, never>
    >
  }
  UpdateGameTeamScorePayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGameTeamScorePayload>>,
      Record<string, never>
    >
    gameTeamScore?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGameTeamScorePayload>>,
      Record<string, never>
    >
    gameTeamScoreEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGameTeamScorePayload>>,
      UpdateGameTeamScorePayloadGameTeamScoreEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateGameTeamScorePayload>>,
      Record<string, never>
    >
  }
  UpdateKvPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateKvPayload>>,
      Record<string, never>
    >
    kv?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateKvPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateKvPayload>>,
      Record<string, never>
    >
  }
  UpdatePlayerPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdatePlayerPayload>>,
      Record<string, never>
    >
    player?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdatePlayerPayload>>,
      Record<string, never>
    >
    playerEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdatePlayerPayload>>,
      UpdatePlayerPayloadPlayerEdgeArgs
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdatePlayerPayload>>,
      Record<string, never>
    >
  }
  UpdateTeamLeaderPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateTeamLeaderPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateTeamLeaderPayload>>,
      Record<string, never>
    >
    teamLeader?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateTeamLeaderPayload>>,
      Record<string, never>
    >
    teamLeaderEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateTeamLeaderPayload>>,
      UpdateTeamLeaderPayloadTeamLeaderEdgeArgs
    >
  }
  UpdateTeamPayload?: {
    clientMutationId?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateTeamPayload>>,
      Record<string, never>
    >
    query?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateTeamPayload>>,
      Record<string, never>
    >
    team?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateTeamPayload>>,
      Record<string, never>
    >
    teamEdge?: GraphCacheUpdateResolver<
      Maybe<WithTypename<UpdateTeamPayload>>,
      UpdateTeamPayloadTeamEdgeArgs
    >
  }
}

export type GraphCacheConfig = Parameters<typeof cacheExchange>[0] & {
  updates?: GraphCacheUpdaters
  keys?: GraphCacheKeysConfig
  optimistic?: GraphCacheOptimisticUpdaters
  resolvers?: GraphCacheResolvers
}
