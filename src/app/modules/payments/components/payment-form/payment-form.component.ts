import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Payment } from '../../../../utilities/models/payment';
import { PaymentsService } from '../../../../utilities/services/payments.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
})
export class PaymentFormComponent {
  paymentForm: FormGroup;
  @Output() formSubmit: EventEmitter<Payment> = new EventEmitter<Payment>();

  constructor(
    private paymentsService: PaymentsService,
    private fb: FormBuilder
  ) {
    this.paymentForm = this.createPaymentForm(); // Initialize the form in the constructor
  }

  get payerIdControl(): FormControl {
    return this.paymentForm.get('payerId') as FormControl;
  }

  get receiverIdControl(): FormControl {
    return this.paymentForm.get('receiverId') as FormControl;
  }

  createPaymentForm(): FormGroup {
    return this.fb.group({
      amount: [0, [Validators.required, Validators.min(0)]],
      payerId: ['', Validators.required],
      receiverId: ['', Validators.required],
      updatedBalancePayer: [{ value: 0, disabled: true }, Validators.required],
      updatedBalanceReceiver: [
        { value: 0, disabled: true },
        Validators.required,
      ],
    });
  }

  onSubmit(): void {
    if (this.paymentForm.valid) {
      const payment: Payment = this.paymentForm.getRawValue();
      this.formSubmit.emit(payment);
      this.paymentsService.addPayment(payment).subscribe((val) => {
        this.paymentForm.reset({
          id: '',
          amount: 0,
          payerId: '',
          receiverId: '',
          updatedBalancePayer: 0,
          updatedBalanceReceiver: 0,
        });
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
