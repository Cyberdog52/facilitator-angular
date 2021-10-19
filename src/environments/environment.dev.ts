import {GameService} from "../app/services/httpMock/game.service";
import {MemberService} from "../app/services/httpMock/member.service";
import {TopicService} from "../app/services/httpMock/topic.service";
import {RoomService} from "../app/services/httpMock/room.service";
import {MeetingService} from "../app/services/httpMock/meeting.service";

export const environment = {
  production: false,
  gameService: GameService,
  meetingService: MeetingService,
  memberService: MemberService,
  roomService: RoomService,
  topicService: TopicService,
};
