import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Meeting } from '../../model/meeting/meeting';
import { MEETINGS } from 'src/model/meeting/mock-meetings';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private http: HttpClient) { }

  private meetingsURL = 'https://lambda-facilitator-backend.herokuapp.com/api/meetings';
  
  getMeetings(): Observable<Meeting[]>{
    return this.http.get<Meeting[]>(this.meetingsURL);
  }

  createMeeting(meeting: any): Observable<any>{
    return this.http.post(this.meetingsURL, meeting);
  }

  getMeeting(id: string): Observable<Meeting> {
    return this.http.get<Meeting>(this.meetingsURL+'/'+id);
  }

  updateMeeting(id: string, meeting: Meeting): Observable<any>{
    return this.http.put(this.meetingsURL+'/'+id, meeting);
  }

  deleteMeeting(id: string): Observable<any>{
    return this.http.delete(this.meetingsURL+'/'+id);
  }
}
