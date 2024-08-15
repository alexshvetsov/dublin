import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnDestroy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { IncidentsService } from '../../incidents.service';

@Component({
  selector: 'app-incidents-header',
  standalone: false,
  templateUrl: './incidents-header.component.html',
  styleUrl: './incidents-header.component.scss',
})
export class IncidentsHeaderComponent implements OnDestroy {
  @Input({ required: true }) isTableLayout!: boolean;
  incidentNameControl: FormControl = new FormControl();
  unsubscribeAll: Subject<void> = new Subject<void>();

  @Output() toggleIsTableLayoutEmitter: EventEmitter<boolean> =
    new EventEmitter();
  @Output() incidentNameControlEmitter: EventEmitter<string> =
    new EventEmitter();

  constructor(
    private router: Router,
    private incidentsService: IncidentsService
  ) {
    this.subscriveToFormControl();
  }

  subscriveToFormControl(): void {
    this.incidentNameControl.valueChanges
      .pipe(
        takeUntil(this.unsubscribeAll),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((controlValue: string) => {
        this.incidentsService.searchNameControlValue$.next(controlValue);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
  }
  navigateToAddIncident(): void {
    this.router.navigate([`incidents/-1`]);
  }

  emitToggleIsTableLayout(value: boolean): void {
    this.toggleIsTableLayoutEmitter.emit(value);
  }
}
