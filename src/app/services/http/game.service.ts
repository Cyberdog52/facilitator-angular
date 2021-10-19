import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Game} from '../../model/game/game';
import {IGameService} from "../../model/game/IGameService";

@Injectable({
  providedIn: 'root'
})
export class GameService implements IGameService {

  constructor(private http: HttpClient) {
  }

  private gamesURL = 'https://lambda-facilitator-backend.herokuapp.com/api/games';

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesURL);
  }

  createGame(game: any): Observable<any> {
    return this.http.post(this.gamesURL, game, {responseType: 'text'});
  }

  getGame(id: string): Observable<Game> {
    return this.http.get<Game>(this.gamesURL + '/' + id);
  }

  updateGame(game: Game): Observable<any> {
    return this.http.put(this.gamesURL, game);
  }

  deleteGame(id: string): Observable<any> {
    return this.http.delete(this.gamesURL + '/' + id);
  }
}
