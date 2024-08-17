import { Component } from '@angular/core';
import { Player } from '../../../../utilities/models/player';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from '../../../../utilities/services/players.service';
import { AuthService } from '../../../../utilities/services/auth.service';
import {
  AgentPlayerView,
  GameAgentPlayerView,
  GamePlayerView,
  PlayerView,
} from '../../../../utilities/models/player-view-interfaces';
import { UserType } from '../../../constants/user-type';
import { GamesService } from '../../../../utilities/services/games.service';

@Component({
  selector: 'app-player',
  standalone: false,
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent {
  adminName: string = 'admin1';
  player!: PlayerView | AgentPlayerView;
  games!: GamePlayerView[];
  userType: string = this.authcService.userType || UserType.Player;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private playerService: PlayersService,
    private authcService: AuthService,
    private gamesService: GamesService
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
      if (this.userType === UserType.Player) {
        this.getDataForPlayer(id);
      } else if (this.userType === UserType.Agent) {
        this.getDataForAgent(id);
      }
    }
  }

  getDataForPlayer(id: string): void {
    this.playerService
      .getPlayerByUserNameForPlayer(id)
      .subscribe((player: PlayerView) => {
        console.log('this.player', this.player);
        this.player = player;
      });
    this.gamesService
      .getGamesByUserNameForPlayer(id)
      .subscribe((games: GamePlayerView[]) => {
        console.log('this.games', games);
        this.games = games;
      });
  }

  getDataForAgent(id: string): void {
    this.playerService
      .getPlayerByUserNameForAgent(id)
      .subscribe((player: AgentPlayerView) => {
        console.log('this.player', this.player);
        this.player = player;
      });
    this.gamesService
      .getGamesByUserNameForAgent(id)
      .subscribe((games: GameAgentPlayerView[]) => {
        console.log('this.games', games);
        this.games = games;
      });
  }
  addOrUpdatePlayer(player: Player): void {
    console.log(player);
  }
}
