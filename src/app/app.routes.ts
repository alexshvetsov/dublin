import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./modules/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'bankView',
    loadComponent: () =>
      import('./modules/bank-view/bank-view.component').then(
        (m) => m.BankViewComponent
      ),
  },
  {
    path: 'incidents',
    loadChildren: () =>
      import('./modules/incidents/incidents.module').then(
        (m) => m.IncidentsModule
      ),
  },
  {
    path: 'players',
    loadChildren: () =>
      import('./modules/players/players.module').then((m) => m.PlayersModule),
  },
  // { path: '**', redirectTo: 'incidents' },
];
