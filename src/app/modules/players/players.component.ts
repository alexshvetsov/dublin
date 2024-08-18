import { Component, OnInit } from '@angular/core';
import { AgentsService } from '../../utilities/services/agents.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AgentPlayerData, AgentView } from '../../utilities/models/agent-view';
import { AuthService } from '../../utilities/services/auth.service';

@Component({
  selector: 'app-players',
  standalone: false,
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss',
})
export class PlayersComponent implements OnInit {
  displayedColumns: string[] = [
    'playerName',
    'balance',
    'weeklyRake',
    'agentRakePercentage',
    'agentActualRake',
  ];
  username: string = this.authService.username || 'username';
  dataSource: Observable<AgentView> = this.agentService.getAgentDataByUsername(
    this.username
  );

  constructor(
    private agentService: AgentsService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  getTotal(players: AgentPlayerData[], key: keyof AgentPlayerData): number {
    return players.reduce(
      (acc, player) => acc + ((player[key] as number) || 0),
      0
    );
  }

  getTotalAgentShare(
    players: AgentPlayerData[],
    rakePercentage: number
  ): number {
    return players.reduce(
      (acc, player) => acc + (player.weeklyRake * rakePercentage) / 100,
      0
    );
  }
  navigateToPlayer(player: AgentPlayerData): void {
    this.router.navigate(['players', player.username || 'as']);
  }
}
