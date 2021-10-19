// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {GameService} from "../app/services/http/game.service";
import {MeetingService} from "../app/services/http/meeting.service";
import {MemberService} from "../app/services/http/member.service";
import {RoomService} from "../app/services/http/room.service";
import {TopicService} from "../app/services/http/topic.service";

export const environment = {
  production: false,
  gameService: GameService,
  meetingService: MeetingService,
  memberService: MemberService,
  roomService: RoomService,
  topicService: TopicService,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
