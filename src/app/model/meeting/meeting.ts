export interface Meeting {
  id: string,
  timeInMillis: number,
  gameId?: string,
  roomId?: string,
  topicIds?: string[],
  memberIdReplyMap?: {}
}