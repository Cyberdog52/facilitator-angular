import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Member } from './members/member';
import { MEMBERS } from './members/mock-members';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private membersURL = 'https://lambda-facilitator-backend.herokuapp.com/api/members';
  
  getMembers(): Observable<Member[]>{
    return this.http.get<Member[]>(this.membersURL);
  }
  
  getMember(id: number): Observable<Member> {
    return this.http.get<Member>(this.membersURL+'/'+id);
  }
}
