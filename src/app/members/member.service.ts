import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Member } from '../../model/member/member';
import { MEMBERS } from './mock-members';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  private membersURL = 'https://lambda-facilitator-backend.herokuapp.com/api/members';
  
  getMembers(): Observable<Member[]>{
    return this.http.get<Member[]>(this.membersURL);
  }

  createMember(member: any){
    this.http.post(this.membersURL, member);
  }

  getMember(id: number): Observable<Member> {
    return this.http.get<Member>(this.membersURL+'/'+id);
  }

  updateMember(id: number, member: Member){
    this.http.put(this.membersURL+'/'+id, member);
  }

  deleteMember(id: number){
    this.http.delete(this.membersURL+'/'+id);
  }
}
