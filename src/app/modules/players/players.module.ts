import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';
import { MaterialModule } from '../material/material.module';
import { PlayerComponent } from './components/player/player.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { PlayerGamesTableComponent } from './components/player-games-table/player-games-table.component';
import { PlayerViewDataComponent } from './components/player-view-data/player-view-data.component';

@NgModule({
  declarations: [
    PlayersComponent,
    PlayerComponent,
    PlayerFormComponent,
    PlayerGamesTableComponent,
    PlayerViewDataComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
})
export class PlayersModule {}
