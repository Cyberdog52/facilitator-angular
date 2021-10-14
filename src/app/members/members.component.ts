import { Component, OnInit } from '@angular/core';
import { MemberService } from './member.service';
import { Member } from '../../model/member/member';
import { MemberDetailComponent } from '../member-detail/member-detail.component';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member[] = [];

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(){
    this.memberService.getMembers().subscribe(members => this.members = members);
  }

  addMember(){
    const newMember = { name: 'New Member', role: 'unassigned' };
    //this.memberService.createMember(newMember).subscribe(_ => this.getMembers() );
  }
}
