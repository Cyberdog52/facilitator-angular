import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Meeting} from '../../model/meeting/meeting';
import {MEETINGS} from "../../model/meeting/mock-meetings";
import {IMeetingService} from "../../model/meeting/IMeetingService";

// @ts-ignore
import {v4 as uuidv4} from 'uuid';

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
    meeting.id = uuidv4();
    MEETINGS.push(meeting);
    return of(meeting.id);
  }

  getMeeting(id: string): Observable<Meeting> {
    return of(MEETINGS.find(x => x.id == id) as Meeting);
  }

  updateMeeting(meeting: Meeting): Observable<any> {
    const index = MEETINGS.findIndex(x => x.id == meeting.id);
    MEETINGS[index] = meeting;
    return of({});
  }

  deleteMeeting(id: string): Observable<any> {
    const index = MEETINGS.findIndex(x => x.id == id);
    MEETINGS.splice(index, 1);
    return of(0);
  }
}
