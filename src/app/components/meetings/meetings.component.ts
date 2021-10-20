import {Component, Inject, OnInit} from '@angular/core';
import {Meeting} from 'src/app/model/meeting/meeting';
import {Router} from "@angular/router";
import {IMeetingService} from "../../model/meeting/IMeetingService";

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {
  meetings: Meeting[] = [];

  constructor(
    private router: Router,
    @Inject('IMeetingService') private meetingService: IMeetingService
  ) {
  }

  ngOnInit(): void {
    this.getMeetings();
  }

  getMeetings() {
    this.meetingService.getMeetings().subscribe(meetings => this.meetings = meetings);
  }

  addMeeting() {
    const newMeeting = {timeInMillis: Date.now()};
    this.meetingService.createMeeting(newMeeting).subscribe((uuid) => this.router.navigate(["/meeting/" + uuid, {editing: "true"}]));
  }

  deleteMeeting(meeting: Meeting) {
    this.meetings.splice(this.meetings.indexOf(meeting), 1);
    this.meetingService.deleteMeeting(meeting.id);
  }
}
