import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // Get the expected user type from the route data
    const expectedUserType: string[] = route.data['expectedUserType'];

    // Get the actual user type from the AuthService
    const currentUserType: string = this.authService.userType || '';

    // Check if the user type matches the expected type
    if (expectedUserType.includes(currentUserType)) {
      return true; // Allow access
    } else {
      // Optionally redirect to a 'not authorized' page or login
      this.router.navigate(['/login']);
      return false; // Deny access
    }
  }
}
