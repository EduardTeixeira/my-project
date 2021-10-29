import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
   {
      path: '',
      data: {
         title: 'Área restrita'
      },
      children: [
         {
            path: '',
            component: DashboardComponent,
            // loadChildren: () => import('./dashboard/private.module').then(m => m.PrivateModule)
         },
         {
            path: 'teste',
            component: DashboardComponent,
            // loadChildren: () => import('./dashboard/private.module').then(m => m.PrivateModule)
         },
      ]
   },
];

@NgModule({
   imports: [
      RouterModule.forChild(routes),
   ],
   exports: [
      RouterModule
   ]
})
export class PrivateRoutingModule { }
