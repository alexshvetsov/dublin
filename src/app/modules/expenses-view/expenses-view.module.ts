import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesViewRoutingModule } from './expenses-view-routing.module';
import { ExpensesViewComponent } from './expenses-view.component';
import { ExpensesTableComponent } from './components/expenses-table/expenses-table.component';
import { ExpensesFormComponent } from './components/expenses-form/expenses-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ExpensesViewComponent,
    ExpensesFormComponent,
    ExpensesTableComponent,
  ],
  imports: [
    CommonModule,
    ExpensesViewRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
})
export class ExpensesViewModule {}
