import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, map } from 'rxjs';
import { Incident } from '../../utilities/models/incident';
import { environment } from '../../../enviroments/enviroments';

@Injectable({
  providedIn: 'root',
})
export class IncidentsService {
  private baseUrl = environment.apiUrl + 'incidents';
  searchNameControlValue$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {}

  getIncidents(): Observable<Incident[]> {
    return this.http.get<Incident[]>(this.baseUrl);
  }
  getIncidents1(): Observable<string> {
    return this.http.get<string>(`${environment.apiUrl1}test`);
  }

  getIncidentsByName(nameParam: string): Observable<Incident[]> {
    // this should filter on the server side
    // but i had problem with this functionality with json-server package
    // so i added filter here, all the map pipe shouldnt exsit
    const url = `${this.baseUrl}?name_like=${nameParam}`;
    return this.http
      .get<Incident[]>(url)
      .pipe(
        map((incidents: Incident[]) =>
          incidents.filter((incident) =>
            incident.name.toLowerCase().includes(nameParam.toLowerCase())
          )
        )
      );
  }

  getIncident(id: string): Observable<Incident> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Incident>(url);
  }

  addIncident(incident: Incident): Observable<Incident> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Incident>(this.baseUrl, incident, { headers });
  }

  updateIncident(id: number, incident: Incident): Observable<Incident> {
    const url = `${this.baseUrl}/${id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Incident>(url, incident, { headers });
  }

  deleteIncident(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
