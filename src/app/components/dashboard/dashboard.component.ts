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
  players: Member[] = [];
  urlParams!: string;
  url!: string;
  showPlayers: boolean = false;

  constructor(private dataService: MemberService) { }

  ngOnInit(): void {
    this.dataService.getMembers().subscribe(members => this.members = members);
  }

  initGluecksrad() {
    this.urlParams = "";
    this.url = "";
    if (this.players.length > 0) {
      for (let i = 0; i < this.players.length; i++) {
        let paramId = i+1;
        this.urlParams += "c"+paramId+"="+this.players[i]+"&";
      }
      this.url += "https://wheeldecide.com/e.php?"+this.urlParams+"col=wof&time=8";
    }
  }
}
