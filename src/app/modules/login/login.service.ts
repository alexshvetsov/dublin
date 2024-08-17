import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/enviroments';
import { UserType } from '../constants/user-type';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = environment.apiUrl1 + 'userManagement';

  constructor(private http: HttpClient) {}

  login(password: string, username: string): Observable<UserType> {
    return this.http.post<UserType>(this.baseUrl + '/login', {
      username,
      password,
    });
  }
}
