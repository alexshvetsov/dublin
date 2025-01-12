import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesViewComponent } from './expenses-view.component';

const routes: Routes = [{ path: '', component: ExpensesViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpensesViewRoutingModule {}
