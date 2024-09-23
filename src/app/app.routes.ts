import { Routes } from '@angular/router';
import { AuthGuard } from './utilities/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./modules/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'bankView',
    canActivate: [AuthGuard],
    data: { expectedUserType: ['admin'] },
    loadComponent: () =>
      import('./modules/bank-view/bank-view.component').then(
        (m) => m.BankViewComponent
      ),
  },
  {
    path: 'gamesView',
    canActivate: [AuthGuard],
    data: { expectedUserType: ['admin'] },
    loadComponent: () =>
      import('./modules/games-view/games-view.component').then(
        (m) => m.GamesViewComponent
      ),
  },
  {
    path: 'incidents',
    canActivate: [AuthGuard],
    data: { expectedUserType: ['admin'] },
    loadChildren: () =>
      import('./modules/incidents/incidents.module').then(
        (m) => m.IncidentsModule
      ),
  },
  {
    path: 'players',
    // canActivate: [AuthGuard],
    // data: { expectedUserType: ['admin'] },
    loadChildren: () =>
      import('./modules/players/players.module').then((m) => m.PlayersModule),
  },
  {
    path: 'expenses',
    canActivate: [AuthGuard],
    data: { expectedUserType: ['admin'] },
    loadChildren: () =>
      import('./modules/expenses-view/expenses-view.module').then(
        (m) => m.ExpensesViewModule
      ),
  },
  {
    path: 'payments',
    canActivate: [AuthGuard],
    data: { expectedUserType: ['admin'] },
    loadChildren: () =>
      import('./modules/payments/payments.module').then(
        (m) => m.PaymentsModule
      ),
  },
  {
    path: 'csv-upload',
    canActivate: [AuthGuard],
    data: { expectedUserType: ['admin'] },
    loadChildren: () =>
      import('./modules/csv-upload/csv-upload.module').then(
        (m) => m.CsvUploadModule
      ),
  },
  // { path: '**', redirectTo: 'incidents' },
];
