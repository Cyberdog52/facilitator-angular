import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MeetingService} from '../../../services/http/meeting.service';
import {Meeting} from '../../../model/meeting/meeting';
import {Game} from 'src/app/model/game/game';
import {Topic} from 'src/app/model/topic/topic';
import {Room} from 'src/app/model/room/room';
import {GameService} from '../../../services/http/game.service';
import {RoomService} from '../../../services/http/room.service';
import {TopicService} from '../../../services/http/topic.service';

@Component({
  selector: 'app-meeting-detail',
  templateUrl: './meeting-detail.component.html',
  styleUrls: ['./meeting-detail.component.css']
})
export class MeetingDetailComponent implements OnInit {
  meeting?: Meeting;
  game?: Game;
  room?: Room;
  topics: Topic[] = [];
  allGames: Game[] = [];
  allRooms: Room[] = [];
  allTopics: Topic[] = [];
  editing: boolean = false;

  meetingDate: Date = new Date();
  meetingTime: Date = new Date();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private meetingService: MeetingService,
    private gameService: GameService,
    private roomService: RoomService,
    private topicService: TopicService
  ) {
  }

  ngOnInit(): void {
    this.getMeeting();
    this.getComponentsLists();
  }

  getMeeting() {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.editing = this.route.snapshot.paramMap.get('editing') == "true";
    this.meetingService.getMeeting(id).subscribe(meeting => this.getComponents(meeting));
  }

  getComponentsLists() {
    this.gameService.getGames().subscribe(games => this.allGames = games);
    this.roomService.getRooms().subscribe(rooms => this.allRooms = rooms);
    this.topicService.getTopics().subscribe(topics => this.allTopics = topics);
  }

  getComponents(meeting: Meeting) {
    this.meeting = meeting;
    this.meetingDate = this.meeting?.timeInMillis ? new Date(this.meeting.timeInMillis) : new Date();
    this.meetingTime = this.meeting?.timeInMillis ? new Date(this.meeting.timeInMillis) : new Date();
    this.gameService.getGame(meeting.gameId as string).subscribe(game => this.game = game);
    this.roomService.getRoom(meeting.roomId as string).subscribe(room => this.room = room);
    for (let topicId in meeting.topicIds) {
      this.topicService.getTopic(topicId).subscribe(topic => this.topics[this.topics.length] = topic);
    }
  }

  edit() {
    this.editing = true;
  }

  updateMeeting() {
    this.editing = false;

    if (this.meeting) this.meeting.timeInMillis = this.computeMeetingDateTime();
    const updatedMeeting = this.meeting as Meeting;
    this.meetingService.updateMeeting(updatedMeeting.id, updatedMeeting).subscribe(() =>
      this.getMeeting());
  }

  computeMeetingDateTime(): number {
    let newDate = new Date();
    newDate.setFullYear(this.meetingDate.getFullYear(), this.meetingDate.getMonth(), this.meetingDate.getDate());
    newDate.setHours(this.meetingTime.getHours(), this.meetingTime.getMinutes());
    return newDate.valueOf();
  }

  deleteMeeting() {
    this.meetingService.deleteMeeting((this.meeting as Meeting).id).subscribe(() => this.router.navigateByUrl("/meetings"));
  }

  addTopic() {
    const meeting: Meeting = this.meeting as Meeting;
    console.log(meeting.topicIds);
    if (!meeting.topicIds) {
      meeting.topicIds = [];
    }
    meeting.topicIds[meeting.topicIds.length] = "1";
    this.getComponents(meeting as Meeting);
  }

  setMeetingDate($event: string) {
    this.meetingDate = new Date($event);
  }

  setMeetingTime($event: string) {
    let date = new Date();
    const hours = $event.split(':').shift() as string;
    const minutes = $event.split(':').pop() as string;
    date.setHours(parseInt(hours), parseInt(minutes));
    this.meetingTime = new Date(date);
  }
}
