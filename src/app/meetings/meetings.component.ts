import { Component, OnInit } from '@angular/core';
import { Meeting } from 'src/model/meeting/meeting';
import { MeetingService } from './meeting.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {
  meetings: Meeting[] = [];

  constructor(
    private meetingService: MeetingService,
  ) { }

  ngOnInit(): void {
    this.getMeetings();
  }

  getMeetings(){
    this.meetingService.getMeetings().subscribe(meetings => this.meetings = meetings);
  }

  addMeeting(){
    const newMeeting = { name: 'New Meeting', role: 'unassigned' };
    this.meetingService.createMeeting(newMeeting);
  }
}
