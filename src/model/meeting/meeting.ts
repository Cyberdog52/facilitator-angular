export interface Meeting {
  gameId: number,
  id: number,
  memberIdReplyMap: {
    additionalProp1: string,
    additionalProp2: string,
    additionalProp3: string
  },
  roomId: number,
  timeInMillis: 0,
  topicIds: number[]
}