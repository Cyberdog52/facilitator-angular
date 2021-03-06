import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Game} from '../../../model/game/game';
import {IGameService} from "../../../model/game/IGameService";

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
    @Inject('IGameService') private gameService: IGameService
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
    this.editing = !this.editing;
    this.router.navigate(["/game/" + (this.game as Game).id, {editing: this.editing}]).then();
  }

  updateGame() {
    const updatedGame = this.game as Game;
    this.gameService.updateGame(updatedGame).subscribe(() => this.getGame());
  }

  deleteGame() {
    this.gameService.deleteGame((this.game as Game).id).subscribe(() => this.router.navigateByUrl("/games"));
  }
}
