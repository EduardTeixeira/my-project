import { Component } from '@angular/core';

import { GlobalContextService } from './shared/services/global-context.service';
import { UserService } from './shared/services/user.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {

   constructor(
      public globalContextService: GlobalContextService,
      private userService: UserService,
   ) { }

   userIsAuthenticated(): boolean {
      return this.userService.userIsAuthenticated();
   }

}
