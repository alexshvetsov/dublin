import { Component } from '@angular/core';
import { Incident } from '../../utilities/models/incident';
import { Observable, merge, switchMap } from 'rxjs';
import { IncidentsService } from './incidents.service';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrl: './incidents.component.scss',
})
export class IncidentsComponent {
  incidents$: Observable<Incident[]> = this.getIncidents();
  isTableLayout: boolean = true;

  constructor(private incidentsService: IncidentsService) {}

  toggleIsTableLayout(value: boolean): void {
    this.isTableLayout = value;
  }

  getIncidents(): Observable<Incident[]> {
    return merge(
      this.incidentsService.getIncidents(),
      this.getIncidentsByName()
    );
  }
  getIncidentsByName(): Observable<Incident[]> {
    return this.incidentsService.searchNameControlValue$.asObservable().pipe(
      switchMap((nameValue: string) => {
        return this.incidentsService.getIncidentsByName(nameValue);
      })
    );
  }
}
