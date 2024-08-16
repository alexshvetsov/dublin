import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/enviroments';
import { Agent } from '../models/agent';
import { Game } from '../models/game';

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
}
