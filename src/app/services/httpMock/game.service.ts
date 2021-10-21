import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Game} from '../../model/game/game';
import {GAMES} from "../../model/game/mock-games";
import {IGameService} from "../../model/game/IGameService";
// @ts-ignore
import {v4 as uuidv4} from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class GameService implements IGameService {

  constructor() {
  }

  getGames(): Observable<Game[]> {
    return of(GAMES);
  }

  createGame(game: any): Observable<any> {
    game.id = uuidv4();
    GAMES.push(game);
    return of(game.id);
  }

  getGame(id: string): Observable<Game> {
    return of(GAMES.find(x => x.id == id) as Game);
  }

  updateGame(game: Game): Observable<any> {
    const index = GAMES.findIndex(x => x.id == game.id);
    GAMES[index] = game;
    return of({});
  }

  deleteGame(id: string): Observable<any> {
    const index = GAMES.findIndex(x => x.id == id);
    GAMES.splice(index, 1);
    return of(0);
  }
}
