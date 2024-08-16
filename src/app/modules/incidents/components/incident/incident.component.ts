import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Incident } from '../../../../utilities/models/incident';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { hexColorValidator } from '../../../../utilities/validators/hexcode.validator';
import { IncidentsService } from '../../incidents.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-incident',
  standalone: false,
  templateUrl: './incident.component.html',
  styleUrl: './incident.component.scss',
})
export class IncidentComponent {
  incident?: Incident;
  incidentFormGroup: FormGroup = this.createFormGroup();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private incidentService: IncidentsService,
    private snackBar: MatSnackBar
  ) {
    this.getIncidentFromRouter();
    this.getIncidentFromDB();
  }

  getIncidentFromRouter(): void {
    const incident =
      this.router.getCurrentNavigation()?.extras.state?.['incident'];
    if (incident) {
      this.incident = incident;
      this.assignFormValues();
    }
  }

  getIncidentFromDB(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.router.navigate(['incidents']);
    }
    if (!this.incident && id && +id > 0) {
      this.incidentService.getIncident(id).subscribe((incident: Incident) => {
        this.incident = incident;
        this.assignFormValues();
      });
    }
  }

  assignFormValues(): void {
    if (this.incident) {
      this.incidentFormGroup.patchValue({
        ...this.incident,
        updatedDated: new Date(),
      });
    }
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      color: new FormControl('#', [Validators.required, hexColorValidator()]),
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      createDate: new FormControl({ value: new Date(), disabled: true }, [
        Validators.required,
      ]),
      updatedDated: new FormControl({ value: new Date(), disabled: true }, [
        Validators.required,
      ]),
      createdBy: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    // const newIncident: Incident = this.createNewIncident();
    // if (newIncident.id > 0) {
    //   this.updateIncident(newIncident);
    // } else {
    //   this.addIncident(newIncident);
    // }
    this.incidentService
      .getIncidents1()
      .subscribe((message) => console.log(message));
  }

  createNewIncident(): Incident {
    const id = this.incident ? this.incident.id : -1;
    return { id, ...this.incidentFormGroup.getRawValue() };
  }

  updateIncident(newIncident: Incident): void {
    this.incidentService
      .updateIncident(newIncident.id, newIncident)
      .subscribe((incident: Incident) => {
        this.incident = incident;
        this.snackBar.open(
          `Incident with ID: ${incident.id} updated`,
          'close',
          {
            verticalPosition: 'top',
          }
        );
      });
  }

  addIncident(newIncident: Incident): void {
    this.incidentService
      .addIncident(newIncident)
      .subscribe((incident: Incident) => {
        this.incident = incident;
        this.snackBar.open(
          `Incident with ID: ${incident.id} created`,
          'close',
          {
            verticalPosition: 'top',
          }
        );
        this.router.navigate(['incidents', incident.id], {});
      });
  }
}
