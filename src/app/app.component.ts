import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './utilities/services/auth.service';
import { GamesService } from './utilities/services/games.service';
import { AgentsService } from './utilities/services/agents.service';
import { PlayersService } from './utilities/services/players.service';
import {
  getLastFiveTuesdays,
  getLastTuesday,
} from './utilities/functions/date-function';
import { SelectOption } from './utilities/models/select-option';
import { CurrentDateService } from './utilities/services/current-date.service';
import { MatSelectChange } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { BankViewService } from './utilities/services/bank-view.service';
import { ExpenseService } from './utilities/services/expense.service';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'poker management';
  dateSelectOptions: SelectOption[] = getLastFiveTuesdays();
  selectDate: Date = this.dateSelectOptions[0].value;
  constructor(
    private router: Router,
    private authService: AuthService,
    private currentDateService: CurrentDateService
  ) {
    this.currentDateService.updateChosenDate(this.selectDate);
  }

  navigate(url: string): void {
    this.router.navigate([url]);
  }
  onSelectionChange(event: MatSelectChange): void {
    this.currentDateService.updateChosenDate(event.value);
  }
}
