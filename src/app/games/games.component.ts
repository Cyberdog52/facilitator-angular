import { Component, OnInit } from '@angular/core';
import { Game } from 'src/model/game/game';
import { GameService } from './game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[] = [];

  constructor(
    private gameService: GameService,
  ) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(){
    this.gameService.getGames().subscribe(games => this.games = games);
  }

  addGame(){
    const newGame = { title: 'New Game', uri: 'https://samplegame.com' };
    this.gameService.createGame(newGame).subscribe(() => this.getGames());
  }
}
