import { Component, Input } from '@angular/core';
import { PlayerView } from '../../../../utilities/models/player-view-interfaces';
import { AuthService } from '../../../../utilities/services/auth.service';
import { UserType } from '../../../constants/user-type';

@Component({
  selector: 'app-player-view-data',
  standalone: false,
  templateUrl: './player-view-data.component.html',
  styleUrl: './player-view-data.component.scss',
})
export class PlayerViewDataComponent {
  @Input({ required: true }) player!: PlayerView;
userType: string = this.authService.userType || UserType.Player;
  constructor(private authService:AuthService) {
  }
}
