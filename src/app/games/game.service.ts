import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Game } from '../../model/game/game';
import { GAMES } from '../../model/game/mock-games';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  private gamesURL = 'https://lambda-facilitator-backend.herokuapp.com/api/games';
  
  getGames(): Observable<Game[]>{
    return this.http.get<Game[]>(this.gamesURL);
  }

  createGame(game: any): Observable<any>{
    return this.http.post(this.gamesURL, game);
  }

  getGame(id: string): Observable<Game> {
    return this.http.get<Game>(this.gamesURL+'/'+id);
  }

  updateGame(id: string, game: Game): Observable<any>{
    return this.http.put(this.gamesURL+'/'+id, game);
  }

  deleteGame(id: string): Observable<any>{
    return this.http.delete(this.gamesURL+'/'+id);
  }
}
