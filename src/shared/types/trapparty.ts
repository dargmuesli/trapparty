export interface ParticipationDataWatcher {
  role: 'watcher'
}

export interface ParticipationDataPlayer {
  invitationCode: string
  playerId: string
  role: 'player'
}

export type ParticipationData =
  | ParticipationDataWatcher
  | ParticipationDataPlayer
