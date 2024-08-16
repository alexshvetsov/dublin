import { Component, Input } from '@angular/core';
import { Game } from '../../../../utilities/models/game';
import { GamesService } from '../../../../utilities/services/games.service';
import { Player } from '../../../../utilities/models/player';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player-games-table',
  standalone: false,
  templateUrl: './player-games-table.component.html',
  styleUrl: './player-games-table.component.scss',
})
export class PlayerGamesTableComponent {
  @Input() player?: Player;
  displayedColumns: string[] = ['gameNum', 'gameType', 'result', 'date'];
  games$: Observable<Game[]> = this.gamesService.getGamesByIds(
    this.player?.games || ['asdad']
  );

  constructor(private gamesService: GamesService) {}
}
