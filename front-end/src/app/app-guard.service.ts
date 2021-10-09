import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';

import { UserService } from './shared/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuardService implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userService.userIsAuthenticated()) {
      this.router.navigate(['/dashboard']);
      return true;
    } else {
      // this.router.navigate(['/auth']);
      // window.location.href = '/';
      this.router.navigate(['/private']);
      return false;
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

}
