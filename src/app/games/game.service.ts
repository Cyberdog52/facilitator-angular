import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Game } from '../../model/game/game';
import { GAMES } from 'src/model/game/mock-games';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  private gamesURL = 'https://lambda-facilitator-backend.herokuapp.com/api/games';
  
  getGames(): Observable<Game[]>{
    return this.http.get<Game[]>(this.gamesURL);
  }

  createGame (game: any){
    this.http.post(this.gamesURL, game);
  }

  getGame(id: number): Observable<Game > {
    return this.http.get<Game>(this.gamesURL+'/'+id);
  }

  updateGame (id: number, game: Game ){
    this.http.put(this.gamesURL+'/'+id, game);
  }

  deleteGame (id: number){
    this.http.delete(this.gamesURL+'/'+id);
  }
}
