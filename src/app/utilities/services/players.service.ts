import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../enviroments/enviroments';
import { Agent } from '../models/agent';
import { Player } from '../models/player';
import {
  AdminPlayerView,
  AgentPlayerView,
  GamePlayerView,
  PlayerView,
} from '../models/player-view-interfaces';
import { SelectOption } from '../models/select-option';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private baseUrl = environment.apiUrl + 'players';
  private baseUrl1 = environment.apiUrl1 + 'games';
  constructor(private http: HttpClient) {}

  getPlayersByAgentId(agentIdParam: string): Observable<Player[]> {
    const url = `${this.baseUrl}?agentId=${agentIdParam}`;
    return this.http.get<Player[]>(url);
  }
  getPlayersById(IdParam: string): Observable<Player[]> {
    const url = `${this.baseUrl}?username=${IdParam}`;
    return this.http.get<Player[]>(url);
  }

  addPlayer(player: AdminPlayerView): Observable<AdminPlayerView> {
    return this.http.post<AdminPlayerView>(this.baseUrl, player);
  }
  updatePlayer(player: AdminPlayerView): Observable<AdminPlayerView> {
    return this.http.put<AdminPlayerView>(this.baseUrl, player);
  }

  getPlayerByUserNameForPlayer(username: string): Observable<PlayerView> {
    // const url = `${this.baseUrl}?username=${username}`;
    // return this.http.get<PlayerView>(url);
    // change once api ready for now localhost3000
    return this.http.get<PlayerView>(this.baseUrl);
  }

  getPlayerByUserNameForAgent(username: string): Observable<AgentPlayerView> {
    // const url = `${this.baseUrl}?username=${username}`;
    // return this.http.get<PlayerView>(url);
    // change once api ready for now localhost3000
    return this.http.get<AgentPlayerView>(this.baseUrl + 'Agent');
  }
  getPlayerByUserNameForAdmin(username: string): Observable<AdminPlayerView> {
    // const url = `${this.baseUrl}?username=${username}`;
    // return this.http.get<PlayerView>(url);
    // change once api ready for now localhost3000
    return this.http.get<AdminPlayerView>(this.baseUrl + 'Admin');
  }

  getPlayersForAutocomplete(username: string): Observable<SelectOption[]> {
    // const url = `${this.baseUrl}?username=${username}`;
    // return this.http.get<PlayerView>(url);
    // change once api ready for now localhost3000
    return this.http.get<SelectOption[]>(this.baseUrl + 'autocomplete');
  }
}
