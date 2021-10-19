import {GameService} from "../app/services/http/game.service";
import {MeetingService} from "../app/services/http/meeting.service";
import {TopicService} from "../app/services/http/topic.service";
import {RoomService} from "../app/services/http/room.service";
import {MemberService} from "../app/services/http/member.service";

export const environment = {
  production: true,
  gameService: GameService,
  meetingService: MeetingService,
  memberService: MemberService,
  roomService: RoomService,
  topicService: TopicService,
};
