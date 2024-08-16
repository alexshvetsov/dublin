import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players.component';
import { PlayerComponent } from './components/player/player.component';

const routes: Routes = [
  { path: '', component: PlayersComponent },
  { path: '\:id', component: PlayerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayersRoutingModule {}
