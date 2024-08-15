import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'incidents',
    loadChildren: () =>
      import('./modules/incidents/incidents.module').then(
        (m) => m.IncidentsModule
      ),
  },
  { path: '**', redirectTo: 'incidents' },
];
