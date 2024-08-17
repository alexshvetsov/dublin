import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../utilities/services/players.service';
import { AgentsService } from '../../utilities/services/agents.service';
import { Observable } from 'rxjs';
import { Player } from '../../utilities/models/player';
import { Agent } from '../../utilities/models/agent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players',
  standalone: false,
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss',
})
export class PlayersComponent implements OnInit {
  // this should be replaced with data from login page or storage
  agentId: string = 'agent2';
  agentRakePercentage: number = 70;
  players$: Observable<Player[]> = this.playerService.getPlayersByAgentId(
    this.agentId
  );
  displayedColumns: string[] = [
    'inGameName',
    'weeklyBalance',
    'weeklyRake',
    'rakePercentage',
    'agentShare',
  ];
  constructor(
    private playerService: PlayersService,
    private agentsService: AgentsService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  getTotal(players: Player[], key: keyof Player): number {
    return players.reduce(
      (acc, player) => acc + ((player[key] as number) || 0),
      0
    );
  }

  getTotalAgentShare(players: Player[]): number {
    return players.reduce(
      (acc, player) =>
        acc + (player.weeklyRake * this.agentRakePercentage) / 100,
      0
    );
  }

  navigateToIncident(player: Player): void {
    this.router.navigate(['players', player.id]);
  }
}
