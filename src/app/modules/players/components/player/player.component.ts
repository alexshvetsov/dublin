import { Component } from '@angular/core';
import { Player } from '../../../../utilities/models/player';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from '../../players.service';

@Component({
  selector: 'app-player',
  standalone: false,
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent {
  adminName: string = 'admin1';
  player?: Player;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private playerService: PlayersService
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
      this.playerService.getPlayersById(id).subscribe((player: Player[]) => {
        console.log('this.player', this.player);
        this.player = player[0];
      });
    }
  }

  addOrUpdatePlayer(player: Player): void {
    console.log(player);
  }
}
