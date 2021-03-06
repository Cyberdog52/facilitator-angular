import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Meeting} from '../../model/meeting/meeting';
import {IMeetingService} from "../../model/meeting/IMeetingService";

@Injectable({
  providedIn: 'root'
})
export class MeetingService implements IMeetingService {

  constructor(private http: HttpClient) {
  }

  private meetingsURL = 'https://lambda-facilitator-backend.herokuapp.com/api/meetings';

  getMeetings(): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(this.meetingsURL);
  }

  createMeeting(meeting: any): Observable<any> {
    return this.http.post(this.meetingsURL, meeting, {responseType: 'text'});
  }

  getMeeting(id: string): Observable<Meeting> {
    return this.http.get<Meeting>(this.meetingsURL + '/' + id);
  }

  updateMeeting(meeting: Meeting): Observable<any> {
    return this.http.put(this.meetingsURL, meeting);
  }

  deleteMeeting(id: string): Observable<any> {
    return this.http.delete(this.meetingsURL + '/' + id);
  }
}
