import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/enviroments';
import { Agent } from '../models/agent';
import { Game, GameView } from '../models/game';
import {
  AdminPlayerView,
  GameAdminPlayerView,
  GameAgentPlayerView,
  GamePlayerView,
} from '../models/player-view-interfaces';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private baseUrl = environment.apiUrl + 'games';

  constructor(private http: HttpClient) {}

  getGamesByIds(ids: string[]): Observable<Game[]> {
    const url = `${this.baseUrl}?ids=${ids.join(',')}`;
    return this.http.get<Game[]>(url);
  }
  getGames(): Observable<GameView[]> {
    // const url = `${this.baseUrl}?ids=${ids.join(',')}`;
    return this.http.get<GameView[]>(this.baseUrl + 'View');
  }
  getGamesByUserNameForPlayer(username: string): Observable<GamePlayerView[]> {
    // const url = `${this.baseUrl}Players?userName=${username}`;
    // return this.http.get<GamePlayerView[]>(url);
    // change once api ready for now localhost3000
    return this.http.get<GamePlayerView[]>(this.baseUrl + 'Players');
  }
  getGamesByUserNameForAgent(
    username: string
  ): Observable<GameAgentPlayerView[]> {
    // const url = `${this.baseUrl}Players?userName=${username}`;
    // return this.http.get<GameAgentPlayerView[]>(url);
    // change once api ready for now localhost3000
    return this.http.get<GameAgentPlayerView[]>(this.baseUrl + 'PlayersAgent');
  }

}
