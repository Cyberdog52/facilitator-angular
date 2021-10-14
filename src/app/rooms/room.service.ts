import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Room } from '../../model/room/room';
import { ROOMS } from 'src/model/room/mock-rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  private roomsURL = 'https://lambda-facilitator-backend.herokuapp.com/api/rooms';
  
  getRooms(): Observable<Room[]>{
    return this.http.get<Room[]>(this.roomsURL);
  }

  createRoom(room: any){
    this.http.post(this.roomsURL, room);
  }

  getRoom(id: number): Observable<Room> {
    return this.http.get<Room>(this.roomsURL+'/'+id);
  }

  updateRoom(id: number, room: Room){
    this.http.put(this.roomsURL+'/'+id, room);
  }

  deleteRoom(id: number){
    this.http.delete(this.roomsURL+'/'+id);
  }
}
