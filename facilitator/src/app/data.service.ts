import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Member } from './members/member';
import { MEMBERS } from './members/mock-members';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
  getMembers(): Observable<Member[]>{
    const members = of(MEMBERS)
    return members;
  }
  
  getmember(id: number): Observable<Member> {
    const member = MEMBERS.find(h => h.id === id)!;
    return of(member);
  }
}
