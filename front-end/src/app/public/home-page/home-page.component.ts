import { Component, OnInit } from '@angular/core';

import { GlobalContextService } from './../../shared/services/global-context.service';

@Component({
   selector: 'app-home-page',
   templateUrl: './home-page.component.html',
   styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

   constructor(
      private globalContextService: GlobalContextService
   ) {
      this.globalContextService.showHeaderFooter(true, true);
   }

   ngOnInit() {
   }

}
