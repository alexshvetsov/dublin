import { Component, Input } from '@angular/core';
import { Incident } from '../../../../utilities/models/incident';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-incident-card',
  standalone: false,
  templateUrl: './incident-card.component.html',
  styleUrl: './incident-card.component.scss',
})
export class IncidentCardComponent {
  @Input({ required: true }) incident!: Incident;

  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateToIncident(): void {
    this.router.navigate([this.incident.id], {
      relativeTo: this.route,
      state: { incident: this.incident }, 
    });
  }
}
