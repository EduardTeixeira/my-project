import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
   providedIn: 'root'
})
export class GlobalContextService {

   private showMenu: boolean = true;
   private showFooter: boolean = true;

   constructor(
      private router: Router
   ) { }

   get getShowMenu(): boolean {
      return this.showMenu;
   }
   set setShowMenu(value: boolean) {
      this.showMenu = value;
   }

   get getShowFooter(): boolean {
      return this.showFooter;
   }
   set setShowFooter(value: boolean) {
      this.showFooter = value;
   }

   showHeaderFooter(header: boolean, footer: boolean) {
      this.showMenu = header;
      this.showFooter = footer;
   }

}
