import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Room} from '../../../model/room/room';
import {IRoomService} from "../../../model/room/IRoomService";

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
  room?: Room;
  editing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject('IRoomService') private roomService: IRoomService
  ) {
  }

  ngOnInit(): void {
    this.getRoom();
  }

  getRoom() {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.editing = this.route.snapshot.paramMap.get('editing') == "true";
    this.roomService.getRoom(id).subscribe(room => this.room = room);
  }

  edit() {
    this.editing = !this.editing;
    this.router.navigate(["/room/" + (this.room as Room).id, {editing: this.editing}]).then();
  }

  updateRoom() {
    const updatedRoom = this.room as Room;
    this.roomService.updateRoom(updatedRoom).subscribe(() => this.getRoom());
  }

  deleteRoom() {
    this.roomService.deleteRoom((this.room as Room).id).subscribe(() => this.router.navigateByUrl("/rooms"));
  }
}
