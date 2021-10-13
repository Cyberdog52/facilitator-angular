import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Member } from './member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getMembers().subscribe(members => this.members = members);
  }
}
