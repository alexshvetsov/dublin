import { Component, Input, SimpleChanges } from '@angular/core';
import {
  AgentPlayerView,
  PlayerView,
} from '../../../../utilities/models/player-view-interfaces';
import { AuthService } from '../../../../utilities/services/auth.service';
import { UserType } from '../../../constants/user-type';

@Component({
  selector: 'app-player-view-data',
  standalone: false,
  templateUrl: './player-view-data.component.html',
  styleUrl: './player-view-data.component.scss',
})
export class PlayerViewDataComponent {
  @Input({ required: true }) player!: any;
  userType: string = this.authService.userType || UserType.Player;
  constructor(private authService: AuthService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    if (changes['player'].currentValue) {
      this.player = changes['player'].currentValue;
      console.log('asd', this.player);
    }
  }
}
