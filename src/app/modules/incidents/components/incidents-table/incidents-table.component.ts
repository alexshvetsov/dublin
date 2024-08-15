import { Component, Input } from '@angular/core';
import { Incident } from '../../../../utilities/models/incident';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-incidents-table',
  standalone: false,
  templateUrl: './incidents-table.component.html',
  styleUrl: './incidents-table.component.scss',
})
export class IncidentsTableComponent {
  displayedColumns: string[] = [
    'color',
    'name',
    'createDate',
    'updatedDated',
    'createdBy',
  ];
  @Input({ required: true }) dataSource!: Incident[];

  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateToIncident(incident: Incident): void {
    this.router.navigate([incident.id], {
      relativeTo: this.route,
      state: { incident: incident },
    });
  }
}
