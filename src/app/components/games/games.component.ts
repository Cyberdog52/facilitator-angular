import {Component, Inject, OnInit} from '@angular/core';
import {Game} from 'src/app/model/game/game';
import {Router} from "@angular/router";
import {IGameService} from "../../model/game/IGameService";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[] = [];

  constructor(
    private router: Router,
    @Inject('IGameService') private gameService: IGameService
  ) {
  }

  ngOnInit(): void {
    this.getGames();
  }

  getGames() {
    this.gameService.getGames().subscribe(games => this.games = games);
  }

  addGame() {
    const newGame = {title: 'New Game', uri: 'https://samplegame.com'};
    this.gameService.createGame(newGame).subscribe((uuid) => this.router.navigate(["/game/" + uuid, {editing: "true"}]));
  }
}
