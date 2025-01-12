import { Component, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './utilities/services/auth.service';
import { GamesService } from './utilities/services/games.service';
import { AgentsService } from './utilities/services/agents.service';
import { PlayersService } from './utilities/services/players.service';
import { getLastFiveTuesdays } from './utilities/functions/date-function';
import { SelectOption } from './utilities/models/select-option';
import { CurrentDateService } from './utilities/services/current-date.service';
import { MatSelectChange } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { BankViewService } from './utilities/services/bank-view.service';
import { ExpenseService } from './utilities/services/expense.service';
import { PaymentsService } from './utilities/services/payments.service';
import { CsvUploadService } from './utilities/services/csv-upload.service';
import { Observable } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, HttpClientModule, CommonModule],
  providers: [
    AuthService,
    PlayersService,
    AgentsService,
    GamesService,
    CurrentDateService,
    BankViewService,
    ExpenseService,
    PaymentsService,
    CsvUploadService,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  title = 'poker management';
  dateSelectOptions: SelectOption[] = getLastFiveTuesdays();
  selectDate: Date = this.dateSelectOptions[0].value;
  userType: string = this.authService.userType || '';
  userType$: Observable<string> = this.authService.userType$.asObservable();
  constructor(
    private router: Router,
    private authService: AuthService,
    private currentDateService: CurrentDateService
  ) {
    this.currentDateService.updateChosenDate(this.selectDate);
  }

  toggleSidenav(): void {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }
  navigate(url: string): void {
    this.router.navigate([url]);
  }
  onSelectionChange(event: MatSelectChange): void {
    this.currentDateService.updateChosenDate(event.value);
  }
}
