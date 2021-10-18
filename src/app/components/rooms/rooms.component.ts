import {Component, OnInit} from '@angular/core';
import {Room} from 'src/app/model/room/room';
import {RoomService} from '../../services/http/room.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: Room[] = [];

  constructor(
    private roomService: RoomService,
    private router: Router,
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
}
