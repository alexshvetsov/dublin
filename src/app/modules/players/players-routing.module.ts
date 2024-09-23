import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players.component';
import { PlayerComponent } from './components/player/player.component';
import { AuthGuard } from '../../utilities/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PlayersComponent,
    canActivate: [AuthGuard],
    data: { expectedUserType: ['admin', 'agent'] },
  },
  {
    path: ':id',
    component: PlayerComponent,
    canActivate: [AuthGuard],
    data: { expectedUserType: ['admin', 'agent', 'player'] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayersRoutingModule {}
