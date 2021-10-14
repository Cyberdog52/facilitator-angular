export interface Meeting {
  id: string,
  timeInMillis: number,
  gameId?: string,
  memberIdReplyMap?: {},
  roomId?: string,
  topicIds?: number[]
}