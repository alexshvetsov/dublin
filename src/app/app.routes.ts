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
    path: 'gamesView',
    loadComponent: () =>
      import('./modules/games-view/games-view.component').then(
        (m) => m.GamesViewComponent
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
  {
    path: 'expenses',
    loadChildren: () =>
      import('./modules/expenses-view/expenses-view.module').then(
        (m) => m.ExpensesViewModule
      ),
  },
  // { path: '**', redirectTo: 'incidents' },
];
