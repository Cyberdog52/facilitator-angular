import {Observable} from "rxjs";
import {Member} from "./member";

export interface IMemberService {
  getMembers(): Observable<Member[]>;

  createMember(member: any): Observable<any>;

  getMember(id: string): Observable<Member>;

  updateMember(id: string, member: Member): Observable<any>;

  deleteMember(id: string): Observable<any>;
}
