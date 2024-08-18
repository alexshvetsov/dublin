import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/enviroments';
import { Observable } from 'rxjs';
import { BankView } from '../models/bank-view';

@Injectable({
  providedIn: 'root',
})
export class BankViewService {
  private baseUrl = environment.apiUrl + 'bankView';
  private baseUrl1 = environment.apiUrl1 + 'bankView';
  constructor(private http: HttpClient) {}

  getBankViewData(): Observable<BankView[]> {
    const url = `${this.baseUrl}`;
    return this.http.get<BankView[]>(url);
  }
}
