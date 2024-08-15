import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentsComponent } from './incidents.component';
import { IncidentComponent } from './components/incident/incident.component';
import { IncidentCardComponent } from './components/incident-card/incident-card.component';
import { IncidentsTableComponent } from './components/incidents-table/incidents-table.component';
import { IncidentRoutingModule } from './incidents-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncidentsHeaderComponent } from './components/incidents-header/incidents-header.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { IncidentsService } from './incidents.service';
import { ColorSquarePipe } from '../../utilities/pipes/color-square.pipe';

@NgModule({
  declarations: [
    IncidentsComponent,
    IncidentComponent,
    IncidentCardComponent,
    IncidentsTableComponent,
    IncidentsHeaderComponent,
  ],
  imports: [
    CommonModule,
    IncidentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    ColorSquarePipe
  ],
  exports: [IncidentsComponent, IncidentComponent],
  providers: [IncidentsService],
})
export class IncidentsModule {}
