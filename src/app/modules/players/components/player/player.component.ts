import { Component } from '@angular/core';
import { Player } from '../../../../utilities/models/player';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from '../../../../utilities/services/players.service';
import { AuthService } from '../../../../utilities/services/auth.service';
import {
  AdminPlayerView,
  AgentPlayerView,
  GameAdminPlayerView,
  GameAgentPlayerView,
  GamePlayerView,
  PlayerView,
} from '../../../../utilities/models/player-view-interfaces';
import { UserType } from '../../../constants/user-type';
import { GamesService } from '../../../../utilities/services/games.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player',
  standalone: false,
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent {
  adminName: string = 'admin1';
  player!: PlayerView | AgentPlayerView | AdminPlayerView;
  games!: GamePlayerView[];
  userType: string = this.authcService.userType || UserType.Player;
  userType$: Observable<string> = this.authcService.userType$.asObservable();

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

    if (!id) {
      this.router.navigate(['players']);
    }
    if (!this.player && id && +id > -1) {
      if (this.authcService.userType$.getValue() === UserType.Player) {
        this.getDataForPlayer(id);
      } else if (this.authcService.userType$.getValue() === UserType.Agent) {
        this.getDataForAgent(id);
      } else if (this.authcService.userType$.getValue() === UserType.Admin) {
        this.getDataForAdmin(id);
      }
    }
  }

  getDataForPlayer(id: string): void {
    this.playerService
      .getPlayerByUserNameForPlayer(id)
      .subscribe((player: PlayerView) => {
        this.player = player;
      });
    this.gamesService
      .getGamesByUserNameForPlayer(id)
      .subscribe((games: GamePlayerView[]) => {
        this.games = games;
      });
  }

  getDataForAgent(id: string): void {
    this.playerService
      .getPlayerByUserNameForAgent(id)
      .subscribe((player: AgentPlayerView) => {
        this.player = player;
        console.log(this.player);
      });
    this.gamesService
      .getGamesByUserNameForAgent(id)
      .subscribe((games: GameAgentPlayerView[]) => {
        this.games = games;
      });
  }

  getDataForAdmin(id: string): void {
    this.playerService
      .getPlayerByUserNameForAdmin(id)
      .subscribe((player: AdminPlayerView) => {
        this.player = player;
      });
    this.gamesService
      .getGamesByUserNameForAgent(id)
      .subscribe((games: GameAdminPlayerView[]) => {
        this.games = games;
      });
  }

  addOrUpdatePlayer(player: AdminPlayerView): void {
    if (+player.id != -1) {
      this.playerService.addPlayer(player).subscribe(() => {
        this.router.navigate(['players']);
      });
    } else {
      this.playerService.updatePlayer(player).subscribe(() => {
        this.router.navigate(['players']);
      });
    }
  }
  isAdminPlayerView(
    player: AdminPlayerView | AgentPlayerView | PlayerView
  ): player is AdminPlayerView {
    return this.authcService.userType$.getValue() === 'admin';
  }
}
