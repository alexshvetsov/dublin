import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserType } from '../../modules/constants/user-type';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userType?: string;
  username?: string;
  userType$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  username$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private router: Router) {
    this.checkUserData();
  }

  private checkUserData(): void {
    const userData = localStorage.getItem('userData');

    if (userData) {
      const parsedUserData = JSON.parse(userData);
      this.userType = parsedUserData.userType;
      this.username = parsedUserData.username;
      this.userType$.next(parsedUserData.userType);
      this.username$.next(parsedUserData.username);
      const url =
        this.userType === UserType.Player
          ? '/players/' + this.username
          : '/players';
      this.router.navigate([url]);
    }
  }
}
