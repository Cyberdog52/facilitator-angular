import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Member } from '../members/member';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  members: Member[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getMembers().subscribe(members => this.members = members);
  }
}
