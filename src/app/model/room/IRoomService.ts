import {Observable} from "rxjs";
import {Room} from "./room";

export interface IRoomService {
  getRooms(): Observable<Room[]>;

  createRoom(room: any): Observable<any>;

  getRoom(id: string): Observable<Room>;

  updateRoom(room: Room): Observable<any>;

  deleteRoom(id: string): Observable<any>;
}
