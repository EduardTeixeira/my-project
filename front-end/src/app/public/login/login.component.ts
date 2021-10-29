import { Component, OnInit } from '@angular/core';

import { GlobalContextService } from './../../shared/services/global-context.service';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   constructor(
      private globalContextService: GlobalContextService
   ) {
      this.globalContextService.showHeaderFooter(false, false);
   }

   ngOnInit() { }

}
