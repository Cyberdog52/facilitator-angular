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

  createMeeting(meeting: any){
    this.http.post(this.meetingsURL, meeting);
  }

  getMeeting(id: number): Observable<Meeting> {
    return this.http.get<Meeting>(this.meetingsURL+'/'+id);
  }

  updateMeeting(id: number, meeting: Meeting){
    this.http.put(this.meetingsURL+'/'+id, meeting);
  }

  deleteMeeting(id: number){
    this.http.delete(this.meetingsURL+'/'+id);
  }
}
