import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GameService} from '../../../services/http/game.service';
import {Game} from '../../../model/game/game';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  game?: Game;
  editing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService
  ) {
  }

  ngOnInit(): void {
    this.getGame();
  }

  getGame() {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.editing = this.route.snapshot.paramMap.get('editing') == "true";
    this.gameService.getGame(id).subscribe(game => this.game = game);
  }

  edit() {
    this.editing = true;
  }

  updateGame() {
    this.editing = false;
    const updatedGame = this.game as Game;
    this.gameService.updateGame(updatedGame.id, updatedGame).subscribe(() => this.getGame());
  }

  deleteGame() {
    this.gameService.deleteGame((this.game as Game).id).subscribe(() => this.router.navigateByUrl("/games"));
  }
}
