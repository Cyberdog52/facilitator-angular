import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../../../services/http/room.service';
import { Room } from '../../../model/room/room';

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
    private roomService: RoomService
  ) {}

  ngOnInit(): void {
    this.getRoom();
  }

  getRoom(){
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.roomService.getRoom(id).subscribe(room => this.room = room);
  }

  edit(){
    this.editing = true;
  }

  updateRoom(){
    this.editing = false;
    const updatedRoom = this.room as Room;
    this.roomService.updateRoom(updatedRoom.id, updatedRoom).subscribe(() => this.getRoom());
  }

  deleteRoom(){
    this.roomService.deleteRoom((this.room as Room).id).subscribe(() => this.router.navigateByUrl("/rooms"));
  }
}
