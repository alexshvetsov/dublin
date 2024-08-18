import { Component } from '@angular/core';
import { BankViewService } from '../../utilities/services/bank-view.service';
import { BankView } from '../../utilities/models/bank-view';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { Observable } from 'rxjs';
import { GameView } from '../../utilities/models/game';
import { GamesService } from '../../utilities/services/games.service';

@Component({
  selector: 'app-games-view',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './games-view.component.html',
  styleUrl: './games-view.component.scss',
})
export class GamesViewComponent {
  displayedColumns: string[] = [
    'GameCode',
    'DateStarted',
    'DateEnded',
    'GameType',
    'BigBlind',
    'TotalTips',
  ];

  dataSource$: Observable<GameView[]> = this.gameService.getGames();

  constructor(private gameService: GamesService) {}

  ngOnInit(): void {}
}
