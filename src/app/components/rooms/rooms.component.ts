import {Component, Inject, OnInit} from '@angular/core';
import {Room} from 'src/app/model/room/room';
import {Router} from "@angular/router";
import {IRoomService} from "../../model/room/IRoomService";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: Room[] = [];

  constructor(
    private router: Router,
    @Inject('IRoomService') private roomService: IRoomService
  ) {
  }

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms() {
    this.roomService.getRooms().subscribe(rooms => this.rooms = rooms);
  }

  addRoom() {
    const newRoom = {name: 'New Room', capacity: 10};
    this.roomService.createRoom(newRoom).subscribe((uuid) => this.router.navigate(["/room/" + uuid, {editing: "true"}]));
  }

  deleteRoom(room: Room) {
    this.rooms.splice(this.rooms.indexOf(room), 1);
    this.roomService.deleteRoom(room.id);
  }
}
