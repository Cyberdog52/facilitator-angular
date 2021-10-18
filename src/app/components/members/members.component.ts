import {Component, OnInit} from '@angular/core';
import {MemberService} from '../../services/http/member.service';
import {Member} from '../../model/member/member';
import {Router} from "@angular/router";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member[] = [];

  constructor(
    private router: Router,
    private memberService: MemberService
  ) {
  }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers() {
    this.memberService.getMembers().subscribe(members => this.members = members);
  }

  addMember() {
    const newMember = {name: 'New Member', role: 'unassigned'};
    this.memberService.createMember(newMember).subscribe((uuid) => this.router.navigate(["/member/" + uuid, {editing: "true"}]));
  }
}
