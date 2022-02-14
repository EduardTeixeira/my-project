import { Component, OnInit } from '@angular/core';

import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

import { BehaviorSubject } from 'rxjs';

import { GlobalContextService } from './../../shared/services/global-context.service';

@Component({
   selector: 'app-home-page',
   templateUrl: './home-page.component.html',
   styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

   color: ThemePalette = 'accent';
   mode: ProgressSpinnerMode = 'indeterminate';
   value = 50;

   constructor(
      public globalContextService: GlobalContextService
   ) {
      this.globalContextService.showHeaderFooter(true, true);
   }

   ngOnInit() {
   }

   teste() {
      // this.globalContextService.setMyObject({ obj: 1 });
      this.globalContextService.objeto = 'puisdfsdf';
   }

}
