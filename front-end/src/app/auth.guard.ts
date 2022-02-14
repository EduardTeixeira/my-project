import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';

import { UserService } from './shared/services/user.service';

@Injectable({
   providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

   // store the URL so we can redirect after logging in
   redirectUrl: string | null = null;

   constructor(
      private router: Router,
      private userService: UserService
   ) { }

   canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this.userService.userIsAuthenticated()) {
         this.redirectUrl = state.url;
         return true;
      } else {
         this.router.navigate(['/login']);
         return false;
      }
   }

   canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      return this.canActivate(route, state);
   }

}
