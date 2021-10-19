import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Room} from '../../model/room/room';
import {IRoomService} from "../../model/room/IRoomService";

@Injectable({
  providedIn: 'root'
})
export class RoomService implements IRoomService {

  constructor(private http: HttpClient) {
  }

  private roomsURL = 'https://lambda-facilitator-backend.herokuapp.com/api/rooms';

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.roomsURL);
  }

  createRoom(room: any): Observable<any> {
    return this.http.post(this.roomsURL, room, {responseType: 'text'});
  }

  getRoom(id: string): Observable<Room> {
    return this.http.get<Room>(this.roomsURL + '/' + id);
  }

  updateRoom(room: Room): Observable<any> {
    return this.http.put(this.roomsURL, room);
  }

  deleteRoom(id: string): Observable<any> {
    return this.http.delete(this.roomsURL + '/' + id);
  }
}
