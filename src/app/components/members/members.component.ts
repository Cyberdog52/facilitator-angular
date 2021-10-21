import {Component, Inject, OnInit} from '@angular/core';
import {Member} from '../../model/member/member';
import {Router} from "@angular/router";
import {IMemberService} from "../../model/member/IMemberService";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member[] = [];

  constructor(
    private router: Router,
    @Inject('IMemberService') private memberService: IMemberService
  ) {
  }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers() {
    this.memberService.getMembers().subscribe(members => this.members = members);
  }

  addMember() {
    const newMember = {name: 'New Member', role: 'MEMBER'};
    this.memberService.createMember(newMember).subscribe((uuid) => this.router.navigate(["/member/" + uuid, {editing: "true"}]));
  }

  deleteMember(member: Member) {
    this.members.splice(this.members.indexOf(member), 1);
    this.memberService.deleteMember(member.id);
  }
}
