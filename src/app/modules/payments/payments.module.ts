import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { PaymentsComponent } from './payments.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { PaymentTableComponent } from './components/payment-table/payment-table.component';
import { PlayerAutocompleteInputComponent } from '../../utilities/component/player-autocomplete-input/player-autocomplete-input.component';

@NgModule({
  declarations: [
    PaymentsComponent,
    PaymentFormComponent,
    PaymentTableComponent,
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    PlayerAutocompleteInputComponent,
  ],
})
export class PaymentsModule {}
