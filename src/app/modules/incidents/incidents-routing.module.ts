import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentComponent } from './components/incident/incident.component';
import { IncidentsComponent } from './incidents.component';

const routes: Routes = [
  {
    path: '',
    component: IncidentsComponent,
  },
  { path: ':id', component: IncidentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncidentRoutingModule {}
