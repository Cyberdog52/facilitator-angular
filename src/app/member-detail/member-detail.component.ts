import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../members/member.service';
import { Member } from '../../model/member/member';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  member?: Member;
  editing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private memberService: MemberService
    ) {}

  ngOnInit(): void {
    this.getMember();
  }

  getMember(){
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.memberService.getMember(id).subscribe(member => this.member = member);
  }

  edit(){
    this.editing = true;
  }

  updateMember(){
    this.editing = false;
    const updatedMember = this.member as Member;
    this.memberService.updateMember(updatedMember.id, updatedMember).subscribe(() => this.getMember());
  }

  deleteMember(){
    this.memberService.deleteMember((this.member as Member).id).subscribe(() => this.router.navigateByUrl("/members"));
  }
}
