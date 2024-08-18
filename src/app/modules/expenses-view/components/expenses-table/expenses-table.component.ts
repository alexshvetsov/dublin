import { Component } from '@angular/core';
import { Expense } from '../../../../utilities/models/expense-view';
import { ExpenseService } from '../../../../utilities/services/expense.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expenses-table',
  standalone: false,
  templateUrl: './expenses-table.component.html',
  styleUrl: './expenses-table.component.scss',
})
export class ExpensesTableComponent {
  displayedColumns: string[] = ['comment', 'amount', 'date'];
  dataSource$: Observable<Expense[]> = this.expenseService.getExpenses();

  constructor(private expenseService: ExpenseService) {}
}
