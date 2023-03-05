import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

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
    if (this.authService.isLoggedIn) {
      console.log('route', route.data['role']);
      console.log('authService', this.authService.getRole());
      if (
        route.data['role'] &&
        this.authService.getRole() &&
        route.data['role'].indexOf(this.authService.getRole()) >= 0
      ) {
        return true;
      } else if (!route.data['role']) {
        return true;
      }
      alert('You do not have access as an admin');
      this.router.navigate(['/']);
      return false;
    }
    alert('You do not have access');
    this.router.navigate(['/']);

    return false;
  }
}
