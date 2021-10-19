import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Room} from '../../model/room/room';
import {ROOMS} from "../../model/room/mock-rooms";
import {IRoomService} from "../../model/room/IRoomService";

@Injectable({
  providedIn: 'root'
})
export class RoomService implements IRoomService {

  constructor() {
  }

  getRooms(): Observable<Room[]> {
    return of(ROOMS);
  }

  createRoom(room: any): Observable<any> {
    room.id = ROOMS.length + 1;
    ROOMS.push(room);
    return of(ROOMS.length);
  }

  getRoom(id: string): Observable<Room> {
    return of(ROOMS.find(x => x.id == id) as Room);
  }

  updateRoom(room: Room): Observable<any> {
    const index = ROOMS.findIndex(x => x.id == room.id);
    ROOMS[index] = room;
    return of({});
  }

  deleteRoom(id: string): Observable<any> {
    const index = ROOMS.findIndex(x => x.id == id);
    ROOMS.splice(index, 1);
    return of(0);
  }
}
