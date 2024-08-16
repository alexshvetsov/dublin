import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../enviroments/enviroments';
import { Agent } from '../../utilities/models/agent';
import { Player } from '../../utilities/models/player';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private baseUrl = environment.apiUrl + 'players';
  constructor(private http: HttpClient) {}

  getPlayersByAgentId(agentIdParam: string): Observable<Player[]> {
    const url = `${this.baseUrl}?agentId=${agentIdParam}`;
    return this.http.get<Player[]>(url);
  }
  getPlayersById(IdParam: string): Observable<Player[]> {
    const url = `${this.baseUrl}?id=${IdParam}`;
    return this.http.get<Player[]>(url);
  }
}
