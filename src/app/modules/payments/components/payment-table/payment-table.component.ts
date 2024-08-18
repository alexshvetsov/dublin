import { Component } from '@angular/core';
import { PaymentsService } from '../../../../utilities/services/payments.service';
import { Observable } from 'rxjs';
import { Payment } from '../../../../utilities/models/payment';

@Component({
  selector: 'app-payment-table',
  standalone: false,
  templateUrl: './payment-table.component.html',
  styleUrl: './payment-table.component.scss',
})
export class PaymentTableComponent {
  displayedColumns: string[] = [
    'amount',
    'payerId',
    'receiverId',
    'updatedBalancePayer',
    'updatedBalanceReceiver',
  ];
  dataSource$: Observable<Payment[]> = this.paymentsService.getPayments();

  constructor(private paymentsService: PaymentsService) {}
}
