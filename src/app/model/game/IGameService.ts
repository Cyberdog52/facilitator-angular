import {Observable} from "rxjs";
import {Game} from "./game";

export interface IGameService {
  getGames(): Observable<Game[]>;

  createGame(game: any): Observable<any>;

  getGame(id: string): Observable<Game>;

  updateGame(game: Game): Observable<any>;

  deleteGame(id: string): Observable<any>;
}
