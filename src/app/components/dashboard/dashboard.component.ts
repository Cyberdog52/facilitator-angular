import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../services/http/member.service';
import { Member } from '../../model/member/member';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  members: Member[] = [];

  constructor(private dataService: MemberService) { }

  ngOnInit(): void {
    this.dataService.getMembers().subscribe(members => this.members = members);
  }
}
