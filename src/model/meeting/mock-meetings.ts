import { Meeting } from './meeting';

export const MEETINGS: Meeting[] = [
  {
    id: 1,
    timeInMillis: 1632831652840,
    gameId: 1,
    roomId: 1,
    topicIds: [],
    memberIdReplyMap: {}
  },
  {
    id: 2,
    timeInMillis: 1317427200000,
    gameId: 2,
    roomId: 2,
    topicIds: [
      1,
      2
    ],
    memberIdReplyMap: {
      1: "DECLINED"
    }
  },
  {
    id: 3,
    timeInMillis: 2232164600000,
    gameId: undefined,
    roomId: undefined,
    topicIds: undefined,
    memberIdReplyMap: undefined
  }
]