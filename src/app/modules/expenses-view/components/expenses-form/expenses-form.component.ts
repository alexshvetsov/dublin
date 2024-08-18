import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Expense } from '../../../../utilities/models/expense-view';
import { ExpenseService } from '../../../../utilities/services/expense.service';

@Component({
  selector: 'app-expenses-form',
  standalone: false,
  templateUrl: './expenses-form.component.html',
  styleUrl: './expenses-form.component.scss',
})
export class ExpensesFormComponent {
  expenseForm: FormGroup = this.createExpenseForm();
  @Output() formSubmit: EventEmitter<Expense> = new EventEmitter<Expense>();
  constructor(
    private expenseService: ExpenseService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  createExpenseForm(): FormGroup {
    return this.fb.group({
      comment: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(0)]],
      date: [{ value: new Date(), disabled: true }, Validators.required],
    });
  }
  onSubmit(): void {
    if (this.expenseForm.valid) {
      const expense: Expense = this.expenseForm.getRawValue();
      this.formSubmit.emit(expense);
      this.expenseService
        .addExpenses(expense)
        .subscribe((value) => console.log(value));
      this.expenseForm = this.createExpenseForm();
    } else {
      console.error('Form is invalid');
    }
  }
}
