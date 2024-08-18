import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/enviroments';
import { HttpClient } from '@angular/common/http';
import { Expense } from '../models/expense-view';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private baseUrl = environment.apiUrl + 'expenses';
  constructor(private http: HttpClient) {}

  getExpenses(): Observable<Expense[]> {
    const url = `${this.baseUrl}`;
    return this.http.get<Expense[]>(url);
  }
  addExpenses(expense: Expense): Observable<Expense> {
    const url = `${this.baseUrl}`;
    return this.http.post<Expense>(url, expense);
  }
}
