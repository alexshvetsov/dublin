import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/enviroments';
import { Observable } from 'rxjs';
import { AgentView } from '../models/agent-view';

@Injectable({
  providedIn: 'root',
})
export class AgentsService {
  private baseUrl = environment.apiUrl + 'agents';
  constructor(private http: HttpClient) {}

  getAgentDataByUsername(username: string): Observable<AgentView> {
    // const url = `${this.baseUrl}/${username}`;
    return this.http.get<AgentView>(this.baseUrl);
  }
}
