import { Component } from '@angular/core';
import { Player } from '../../../../utilities/models/player';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from '../../../../utilities/services/players.service';
import { AuthService } from '../../../../utilities/services/auth.service';
import {
  GamePlayerView,
  PlayerView,
} from '../../../../utilities/models/player-view-interfaces';
import { UserType } from '../../../constants/user-type';

@Component({
  selector: 'app-player',
  standalone: false,
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent {
  adminName: string = 'admin1';
  player!: PlayerView;
  games!: GamePlayerView[];
  userType: string = this.authcService.userType || UserType.Player;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private playerService: PlayersService,
    private authcService: AuthService
  ) {
    this.getPlayerFromDB();
  }
  getPlayerFromDB(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    if (!id) {
      this.router.navigate(['players']);
    }
    if (!this.player && id) {
      this.playerService
        .getPlayerByUserNameForPlayer(id)
        .subscribe((player: PlayerView) => {
          console.log('this.player', this.player);
          this.player = player;
        });
      this.playerService
        .getGamesByUserNameForPlayer(id)
        .subscribe((games: GamePlayerView[]) => {
          console.log('this.games', games);
          this.games = games;
        });
    }
  }

  addOrUpdatePlayer(player: Player): void {
    console.log(player);
  }
}
