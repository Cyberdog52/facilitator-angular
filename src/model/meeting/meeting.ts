export interface Meeting {
  id: number,
  timeInMillis: number,
  gameId?: number,
  memberIdReplyMap?: {},
  roomId?: number,
  topicIds?: number[]
}