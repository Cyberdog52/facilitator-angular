import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MeetingService } from '../meetings/meeting.service';
import { Meeting } from '../../model/meeting/meeting';
import { Game } from 'src/model/game/game';
import { Topic } from 'src/model/topic/topic';
import { Room } from 'src/model/room/room';
import { GameService } from '../games/game.service';
import { RoomService } from '../rooms/room.service';
import { TopicService } from '../topics/topic.service';

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
  editing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private meetingService: MeetingService,
    private gameService: GameService,
    private roomService: RoomService,
    private topicService: TopicService
  ) {}

  ngOnInit(): void {
    this.getMeeting();
  }

  getMeeting(){
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.meetingService.getMeeting(id).subscribe(meeting => this.getComponents(meeting));
  }

  getComponents(meeting: Meeting){
    this.meeting = meeting;
    this.gameService.getGame(meeting.gameId as string).subscribe(game => this.game = game);
    this.roomService.getRoom(meeting.roomId as string).subscribe(room => this.room = room);
    for(let topicId in meeting.topicIds){
      this.topicService.getTopic(topicId).subscribe(topic => this.topics[this.topics.length] = topic);
    }
  }

  edit(){
    this.editing = true;
  }

  updateMeeting(){
    this.editing = false;
    const updatedMeeting = this.meeting as Meeting;
    this.meetingService.updateMeeting(updatedMeeting.id, updatedMeeting).subscribe(() => this.getMeeting());
  }

  deleteMeeting(){
    this.meetingService.deleteMeeting((this.meeting as Meeting).id).subscribe(() => this.router.navigateByUrl("/meetings"));
  }
}
