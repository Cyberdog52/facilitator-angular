import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Member} from '../../model/member/member';
import {IMemberService} from "../../model/member/IMemberService";

@Injectable({
  providedIn: 'root'
})
export class MemberService implements IMemberService {

  constructor(private http: HttpClient) {
  }

  private membersURL = 'https://lambda-facilitator-backend.herokuapp.com/api/members';

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.membersURL);
  }

  createMember(member: any): Observable<any> {
    return this.http.post(this.membersURL, member, {responseType: 'text'});
  }

  getMember(id: string): Observable<Member> {
    return this.http.get<Member>(this.membersURL + '/' + id);
  }

  updateMember(member: Member): Observable<any> {
    return this.http.put(this.membersURL, member);
  }

  deleteMember(id: string): Observable<any> {
    return this.http.delete(this.membersURL + '/' + id);
  }
}
