import {Component, OnInit} from '@angular/core';
import {Meeting} from 'src/app/model/meeting/meeting';
import {MeetingService} from '../../services/http/meeting.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {
  meetings: Meeting[] = [];

  constructor(
    private router: Router,
    private meetingService: MeetingService,
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
}
