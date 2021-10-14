import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../members/member.service';
import { MeetingsComponent } from '../meetings/meetings.component';
import { Member } from '../../model/member/member';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  member?: Member;

  constructor(
    private route: ActivatedRoute,
    private dataService: MemberService
    ) {}

  ngOnInit(): void {
    this.getMember();
  }

  getMember(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataService.getMember(id).subscribe(member => this.member = member);
  }
}
