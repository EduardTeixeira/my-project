import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
   providedIn: 'root'
})
export class GlobalContextService {

   private routerOutletName: string = '';

   constructor(
      private router: Router
   ) { }

   get getRouterOutletName(): string {
      return this.routerOutletName;
   }
   set setRouterOutletName(value: string) {
      this.routerOutletName = value;
   }

   loginRoute() {
      this.router.navigate(['/login']);
      this.setRouterOutletName = 'login';
   }

}
