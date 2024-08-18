import { Injectable } from '@angular/core';
import { Payment } from '../models/payment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/enviroments';

@Injectable({
  providedIn: 'root',
})
export class PaymentsService {
  private baseUrl = environment.apiUrl + 'payments';
  constructor(private http: HttpClient) {}

  getPayments(): Observable<Payment[]> {
    const url = `${this.baseUrl}`;
    return this.http.get<Payment[]>(url);
  }
  addPayment(payment: Payment): Observable<Payment> {
    const url = `${this.baseUrl}`;
    return this.http.post<Payment>(url, payment);
  }
}
