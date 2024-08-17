import { Component, Input } from '@angular/core';
import { Game } from '../../../../utilities/models/game';
import { GamesService } from '../../../../utilities/services/games.service';
import { Player } from '../../../../utilities/models/player';
import { Observable } from 'rxjs';
import { GamePlayerView } from '../../../../utilities/models/player-view-interfaces';
import { AuthService } from '../../../../utilities/services/auth.service';
import { UserType } from '../../../constants/user-type';

@Component({
  selector: 'app-player-games-table',
  standalone: false,
  templateUrl: './player-games-table.component.html',
  styleUrl: './player-games-table.component.scss',
})
export class PlayerGamesTableComponent {
  @Input({ required: true }) games!: GamePlayerView[];
  displayedColumns: string[] = ['gameNum', 'gameType', 'result', 'date'];
  userType: string = this.authService.userType || 'Player';
  // games$: Observable<Game[]> = this.gamesService.getGamesByIds(
  //   this.player?.games || ['asdad']
  // );

  constructor(private authService: AuthService) {
    if (this.userType !== UserType.Player) {
      this.displayedColumns.splice(1, 0, 'rake');
      console.log('displayedColumns', this.displayedColumns);
    }
  }
}
