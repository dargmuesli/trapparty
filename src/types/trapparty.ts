export interface ParticipationDataWatcher {
  role: 'watcher'
}

export interface ParticipationDataPlayer {
  invitationCode: string
  role: 'player'
}

export type ParticipationData =
  | ParticipationDataWatcher
  | ParticipationDataPlayer
