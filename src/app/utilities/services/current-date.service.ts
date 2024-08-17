import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentDateService {
  private chosenDate$: Subject<Date> = new Subject<Date>();
  constructor() {}

  getChosenDateasobservable(): Subject<Date> {
    return this.chosenDate$;
  }

  updateChosenDate(date: Date): void {
    this.chosenDate$.next(date);
  }
}
