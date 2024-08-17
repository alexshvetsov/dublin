import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agent } from '../models/agent';
import { environment } from '../../../enviroments/enviroments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgentsService {
  private baseUrl = environment.apiUrl + 'agents';
  constructor(private http: HttpClient) {}

  getAgentById(username: string): Observable<Agent> {
    const url = `${this.baseUrl}/${username}`;
    return this.http.get<Agent>(url);
  }
}
