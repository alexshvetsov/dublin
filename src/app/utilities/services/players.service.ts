import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../enviroments/enviroments';
import { Agent } from '../models/agent';
import { Player } from '../models/player';
import { GamePlayerView, PlayerView } from '../models/player-view-interfaces';

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
    const url = `${this.baseUrl}?username=${IdParam}`;
    return this.http.get<Player[]>(url);
  }

  getPlayerByUserNameForPlayer(username: string): Observable<PlayerView> {
    // const url = `${this.baseUrl}?username=${username}`;
    // return this.http.get<PlayerView>(url);
    // change once api ready for now localhost3000
    return this.http.get<PlayerView>(this.baseUrl);
  }
  getGamesByUserNameForPlayer(username: string): Observable<GamePlayerView[]> {
    // const url = `${this.baseUrl}?username=${username}`;
    // return this.http.get<GamePlayerView>(url);
    // change once api ready for now localhost3000
    return this.http.get<GamePlayerView[]>(this.baseUrl + 'games');
  }
}
