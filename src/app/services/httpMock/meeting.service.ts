import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Meeting} from '../../model/meeting/meeting';
import {MEETINGS} from "../../model/meeting/mock-meetings";
import {IMeetingService} from "../../model/meeting/IMeetingService";

@Injectable({
  providedIn: 'root'
})
export class MeetingService implements IMeetingService {

  constructor() {
  }

  getMeetings(): Observable<Meeting[]> {
    return of(MEETINGS);
  }

  createMeeting(meeting: any): Observable<any> {
    meeting.id = MEETINGS.length + 1;
    MEETINGS.push(meeting);
    return of(MEETINGS.length);
  }

  getMeeting(id: string): Observable<Meeting> {
    return of(MEETINGS.find(x => x.id == id) as Meeting);
  }

  updateMeeting(id: string, meeting: Meeting): Observable<any> {
    const index = MEETINGS.findIndex(x => x.id == id);
    MEETINGS[index] = meeting;
    return of();
  }

  deleteMeeting(id: string): Observable<any> {
    const index = MEETINGS.findIndex(x => x.id == id);
    MEETINGS.splice(index, 1);
    return of(0);
  }
}
