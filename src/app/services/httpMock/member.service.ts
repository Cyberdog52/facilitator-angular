import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Member} from '../../model/member/member';
import {MEMBERS} from "../../model/member/mock-members";
import {IMemberService} from "../../model/member/IMemberService";

@Injectable({
  providedIn: 'root'
})
export class MemberService implements IMemberService {

  constructor() {
  }

  getMembers(): Observable<Member[]> {
    return of(MEMBERS);
  }

  createMember(member: any): Observable<any> {
    member.id = MEMBERS.length + 1;
    MEMBERS.push(member);
    return of(MEMBERS.length);
  }

  getMember(id: string): Observable<Member> {
    return of(MEMBERS.find(x => x.id == id) as Member);
  }

  updateMember(id: string, member: Member): Observable<any> {
    const index = MEMBERS.findIndex(x => x.id == id);
    MEMBERS[index] = member;
    return of();
  }

  deleteMember(id: string): Observable<any> {
    const index = MEMBERS.findIndex(x => x.id == id);
    MEMBERS.splice(index, 1);
    return of(0);
  }
}
