import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { PageNotFoundComponent } from './../../shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
   {
      path: '',
      component: LoginComponent,
      outlet: 'login',
   },
   /*
   children: [
      { path: '**', component: PageNotFoundComponent }
    ]
    */
];

@NgModule({
   imports: [
      RouterModule.forChild(routes),
   ],
   exports: [
      RouterModule
   ]
})
export class LoginRoutingModule { }
