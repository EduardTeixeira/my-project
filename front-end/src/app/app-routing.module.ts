import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
   {
      path: '',
      children: [
         {
            path: '',
            loadChildren: () => import('./public/public.module').then(m => m.PublicModule),
         },
         {
            path: '',
            loadChildren: () => import('./private/private.module').then(m => m.PrivateModule),
            canActivate: [AuthGuard],
            // canActivate: [AuthGuard],
            // canLoad: [AuthGuard],
            canActivateChild: [AuthGuard],
         },
      ]
   },
   {
      path: '**',
      component: PageNotFoundComponent,
   },
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes),
   ],
   exports: [
      RouterModule,
   ]
})
export class AppRoutingModule { }
