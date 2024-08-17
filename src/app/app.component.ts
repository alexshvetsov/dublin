import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './utilities/services/auth.service';
import { GamesService } from './utilities/services/games.service';
import { AgentsService } from './utilities/services/agents.service';
import { PlayersService } from './utilities/services/players.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, HttpClientModule],
  providers: [AuthService, PlayersService, AgentsService, GamesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'poker management';
  constructor(private router: Router, private authService: AuthService) {}

  navigate(url: string): void {
    this.router.navigate([url]);
  }
}
