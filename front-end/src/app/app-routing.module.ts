import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AuthGuard } from './shared/auth/auth.guard';
import { AppGuardService } from './app-guard.service';

const routes: Routes = [
   /*
   const adminRoutes: Routes = [
   {
     path: '',
     component: AdminComponent,
     canActivate: [AuthGuard],
     children: [
       {
         path: '',
         canActivateChild: [AuthGuard],
         children: [
           { path: 'crises', component: ManageCrisesComponent },
           { path: 'heroes', component: ManageHeroesComponent },
           { path: '', component: AdminDashboardComponent }
         ]
       }
     ]
   }
 ];
     {
     path: 'admin',
     loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
     canActivate: [AuthGuard],
     canLoad: [AuthGuard]
   },
   */
   {
      path: '',
      children: [
         {
            path: '',
            loadChildren: () => import('./public/public.module').then(m => m.PublicModule),
         },
         {
            path: 'private',
            loadChildren: () => import('./private/private.module').then(m => m.PrivateModule),
            // canActivate: [AppGuardService],
            // canActivateChild: [AppGuardService],
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
