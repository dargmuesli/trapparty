/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
/** An input for mutations affecting `GameEstimationNumericVote` */
export type GameEstimationNumericVoteInput = {
  /** The vote's answer. */
  answer: number
  id?: number | null | undefined
  /** The vote's internal player id */
  playerId: number
  /** The vote's internal round id. */
  roundId: number
}

/** An input for mutations affecting `GameRandomFactsRound` */
export type GameRandomFactsRoundInput = {
  /** The round's correct answer. */
  answerCorrect?: number | null | undefined
  /** The round's internal game id */
  gameId: number
  /** The round's internal id. */
  id?: number | null | undefined
  /** The round's questioner name */
  questionerName: string
}

/** Represents an update to a `GameRandomFactsRound`. Fields that are set will be updated. */
export type GameRandomFactsRoundPatch = {
  /** The round's correct answer. */
  answerCorrect?: number | null | undefined
  /** The round's internal game id */
  gameId?: number | null | undefined
  /** The round's internal id. */
  id?: number | null | undefined
  /** The round's questioner name */
  questionerName?: string | null | undefined
}

/** An input for mutations affecting `GameRandomFactsVote` */
export type GameRandomFactsVoteInput = {
  /** The vote's answer. */
  answer: number
  /** The vote's internal id. */
  id?: number | null | undefined
  /** The vote's internal player id */
  playerId: number
  /** The vote's internal round id. */
  roundId: number
}

/** Available game types: estimation_numeric, random_facts, team_score. */
export type GameType = 'ESTIMATION_NUMERIC' | 'RANDOM_FACTS' | 'TEAM_SCORE'

export type CharityOrganizationItemFragment = {
  nodeId: string
  id: number
  name: string
  url: string
} & { ' $fragmentName'?: 'CharityOrganizationItemFragment' }

export type EventItemFragment = {
  nodeId: string
  id: number
  name: string
  start: string
  end: string | null
  discordInviteCode: string | null
  streamUrl: string | null
  commonDonationUrl: string | null
  commonDonationIsLive: boolean | null
  commonDonationAmount: number | null
  gamesByEventId: {
    nodes: Array<{
      ' $fragmentRefs'?: { GameItemFragment: GameItemFragment }
    } | null>
  }
} & { ' $fragmentName'?: 'EventItemFragment' }

export type GameEstimationNumericRoundItemFragment = {
  nodeId: string
  id: number
  answerCorrect: number | null
  elementName: string
  gameId: number
} & { ' $fragmentName'?: 'GameEstimationNumericRoundItemFragment' }

export type GameEstimationNumericVoteItemFragment = {
  nodeId: string
  id: number
  answer: number
  playerId: number
  roundId: number
} & { ' $fragmentName'?: 'GameEstimationNumericVoteItemFragment' }

export type GameItemFragment = {
  nodeId: string
  id: number
  eventId: number
  isActive: boolean
  name: string
  type: GameType
} & { ' $fragmentName'?: 'GameItemFragment' }

export type GameRandomFactsRoundItemFragment = {
  nodeId: string
  id: number
  answerCorrect: number | null
  gameId: number
  questionerName: string
} & { ' $fragmentName'?: 'GameRandomFactsRoundItemFragment' }

export type GameRandomFactsVoteItemFragment = {
  nodeId: string
  id: number
  answer: number
  playerId: number
  roundId: number
} & { ' $fragmentName'?: 'GameRandomFactsVoteItemFragment' }

export type PlayerItemFragment = {
  nodeId: string
  id: number
  invitationCode: string
  name: string
  teamId: number | null
} & { ' $fragmentName'?: 'PlayerItemFragment' }

export type TeamItemFragment = {
  nodeId: string
  id: number
  eventId: number
  name: string
  emoji: string
  charityOrganizationId: number | null
  donationUrl: string | null
  donationAmount: number | null
  charityOrganizationByCharityOrganizationId: {
    ' $fragmentRefs'?: {
      CharityOrganizationItemFragment: CharityOrganizationItemFragment
    }
  } | null
} & { ' $fragmentName'?: 'TeamItemFragment' }

export type CreateGameEstimationNumericVoteMutationVariables = Exact<{
  gameEstimationNumericVoteInput: GameEstimationNumericVoteInput
}>

export type CreateGameEstimationNumericVoteMutation = {
  createGameEstimationNumericVote: {
    gameEstimationNumericVote: {
      ' $fragmentRefs'?: {
        GameEstimationNumericVoteItemFragment: GameEstimationNumericVoteItemFragment
      }
    } | null
  } | null
}

export type CreateGameRandomFactsRoundMutationVariables = Exact<{
  gameRandomFactsRoundInput: GameRandomFactsRoundInput
}>

export type CreateGameRandomFactsRoundMutation = {
  createGameRandomFactsRound: {
    gameRandomFactsRound: {
      ' $fragmentRefs'?: {
        GameRandomFactsRoundItemFragment: GameRandomFactsRoundItemFragment
      }
    } | null
  } | null
}

export type CreateGameRandomFactsVoteMutationVariables = Exact<{
  gameRandomFactsVoteInput: GameRandomFactsVoteInput
}>

export type CreateGameRandomFactsVoteMutation = {
  createGameRandomFactsVote: {
    gameRandomFactsVote: {
      ' $fragmentRefs'?: {
        GameRandomFactsVoteItemFragment: GameRandomFactsVoteItemFragment
      }
    } | null
  } | null
}

export type UpdateGameRandomFactsRoundByIdMutationVariables = Exact<{
  gameRandomFactsRoundPatch: GameRandomFactsRoundPatch
  id: number
}>

export type UpdateGameRandomFactsRoundByIdMutation = {
  updateGameRandomFactsRoundById: {
    gameRandomFactsRound: {
      ' $fragmentRefs'?: {
        GameRandomFactsRoundItemFragment: GameRandomFactsRoundItemFragment
      }
    } | null
  } | null
}

export type AllEventsQueryVariables = Exact<{ [key: string]: never }>

export type AllEventsQuery = {
  allEvents: {
    nodes: Array<{
      ' $fragmentRefs'?: { EventItemFragment: EventItemFragment }
    } | null>
  } | null
}

export type EventByNameQueryVariables = Exact<{
  eventName: string
}>

export type EventByNameQuery = {
  eventByName:
    | ({
        gamesByEventId: {
          nodes: Array<{
            nodeId: string
            id: number
            isActive: boolean
            name: string
            type: GameType
          } | null>
        }
        teamsByEventId: {
          nodes: Array<{
            ' $fragmentRefs'?: { TeamItemFragment: TeamItemFragment }
          } | null>
        }
      } & { ' $fragmentRefs'?: { EventItemFragment: EventItemFragment } })
    | null
}

export type AllGameEstimationNumericLeaderboardViewsQueryVariables = Exact<{
  gameId: number
}>

export type AllGameEstimationNumericLeaderboardViewsQuery = {
  allGameEstimationNumericLeaderboardViews: {
    nodes: Array<{
      gameId: number | null
      playerName: string | null
      totalPoints: number | null
    } | null>
  } | null
}

export type AllGameEstimationNumericRoundsQueryVariables = Exact<{
  gameId: number
}>

export type AllGameEstimationNumericRoundsQuery = {
  allGameEstimationNumericRounds: {
    nodes: Array<{
      ' $fragmentRefs'?: {
        GameEstimationNumericRoundItemFragment: GameEstimationNumericRoundItemFragment
      }
    } | null>
  } | null
}

export type AllGameRandomFactsRoundsQueryVariables = Exact<{
  gameId: number
}>

export type AllGameRandomFactsRoundsQuery = {
  allGameRandomFactsRounds: {
    nodes: Array<{
      ' $fragmentRefs'?: {
        GameRandomFactsRoundItemFragment: GameRandomFactsRoundItemFragment
      }
    } | null>
  } | null
}

export type GameRandomFactsVotesQueryVariables = Exact<{
  roundId: number
}>

export type GameRandomFactsVotesQuery = {
  allGameRandomFactsVotes: {
    nodes: Array<{
      ' $fragmentRefs'?: {
        GameRandomFactsVoteItemFragment: GameRandomFactsVoteItemFragment
      }
    } | null>
  } | null
}

export type AllGamesQueryVariables = Exact<{
  eventId: number
  type?: GameType | null | undefined
}>

export type AllGamesQuery = {
  allGames: {
    nodes: Array<{
      ' $fragmentRefs'?: { GameItemFragment: GameItemFragment }
    } | null>
  } | null
}

export type GameByIdQueryVariables = Exact<{
  gameId: number
}>

export type GameByIdQuery = {
  gameById: { ' $fragmentRefs'?: { GameItemFragment: GameItemFragment } } | null
}

export type GameEstimationNumericVoteByPlayerIdAndRoundIdQueryVariables =
  Exact<{
    playerId: number
    roundId: number
  }>

export type GameEstimationNumericVoteByPlayerIdAndRoundIdQuery = {
  gameEstimationNumericVoteByPlayerIdAndRoundId: {
    ' $fragmentRefs'?: {
      GameEstimationNumericVoteItemFragment: GameEstimationNumericVoteItemFragment
    }
  } | null
}

export type GameRandomFactsVoteByPlayerIdAndRoundIdQueryVariables = Exact<{
  playerId: number
  roundId: number
}>

export type GameRandomFactsVoteByPlayerIdAndRoundIdQuery = {
  gameRandomFactsVoteByPlayerIdAndRoundId: {
    ' $fragmentRefs'?: {
      GameRandomFactsVoteItemFragment: GameRandomFactsVoteItemFragment
    }
  } | null
}

export type PlayerByInvitationCodeFnQueryVariables = Exact<{
  invitationCode: string
}>

export type PlayerByInvitationCodeFnQuery = {
  playerByInvitationCodeFn: {
    nodes: Array<{
      id: number
      name: string
      teamByTeamId: {
        id: number
        name: string
        emoji: string
        donationUrl: string | null
        charityOrganizationByCharityOrganizationId: {
          id: number
          name: string
          url: string
        } | null
        eventByEventId: {
          id: number
          name: string
          start: string
          end: string | null
          discordInviteCode: string | null
          streamUrl: string | null
          commonDonationUrl: string | null
        } | null
      } | null
    } | null>
  } | null
}

export type PlayerNameByIdQueryVariables = Exact<{
  id: number
}>

export type PlayerNameByIdQuery = { playerNameById: string | null }

export type StatsQueryVariables = Exact<{
  eventId: number
}>

export type StatsQuery = {
  teamPlayerCount: {
    nodes: Array<{ id: number | null; playerCount: number | null } | null>
  } | null
  allTeams: {
    totalCount: number
    nodes: Array<{
      ' $fragmentRefs'?: { TeamItemFragment: TeamItemFragment }
    } | null>
  } | null
  allGames: {
    totalCount: number
    nodes: Array<{
      nodeId: string
      id: number
      name: string
      gameTeamScoresByGameId: {
        nodes: Array<{ id: number; score: number } | null>
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
