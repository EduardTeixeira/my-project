import { Component, OnInit } from '@angular/core';

import { Util } from './../../utils/util';

@Component({
   selector: 'app-footer',
   templateUrl: './footer.component.html',
   styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

   year: number = Util.getYear();

   constructor() { }

   ngOnInit() { }

}
