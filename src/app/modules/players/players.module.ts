import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';
import { MaterialModule } from '../material/material.module';
import { PlayerComponent } from './components/player/player.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayersService } from './players.service';
import { AgentsService } from '../../utilities/services/agents.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { PlayerGamesTableComponent } from './components/player-games-table/player-games-table.component';
import { GamesService } from '../../utilities/services/games.service';

@NgModule({
  declarations: [
    PlayersComponent,
    PlayerComponent,
    PlayerFormComponent,
    PlayerGamesTableComponent,
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [PlayersService, AgentsService, GamesService],
})
export class PlayersModule {}
