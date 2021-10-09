import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './public/login/login.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HomePageComponent } from './public/home-page/home-page.component';
import { AuthGuard } from './shared/auth/auth.guard';
import { AppGuardService } from './app-guard.service';

const routes: Routes = [
   /*
   {
     path: '',
     component: PrivateTestComponent,
     outlet: 'privateRoute',
     children: [
       {
         path: '',
         // canActivateChild: [AuthGuard],
         children: [
           { path: '**', component: PageNotFoundComponent }
         ]
       }
     ]
   },
   */

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


   { path: 'heroes',  component: HeroListComponent },
   { path: 'hero/:id', component: HeroDetailComponent },

   {
     path: 'compose',
     component: ComposeMessageComponent,
     outlet: 'popup'
   },
   {
     path: 'admin',
     loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
     canLoad: [AuthGuard]
   },
     {
     path: 'admin',
     loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
     canActivate: [AuthGuard]
   },
   {
     path: 'crisis-center',
     loadChildren: () => import('./crisis-center/crisis-center.module').then(m => m.CrisisCenterModule),
     data: { preload: true }
   },
   { path: '', redirectTo: '/superheroes', pathMatch: 'full' },
   */

   // { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },

   /*
   {
     path: '',
     component: HomePageComponent,
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
            canActivate: [AppGuardService],
            // canActivateChild: [AppGuardService],
         },
      ]
   },

   {
      path: 'login',
      children: [
         {
            path: '',
            loadChildren: () => import('./public/login/login.module').then(m => m.LoginModule),
         }
      ]
   },



   /*
   {
     path: '',
     children: [
       {
         path: '',
         loadChildren: () => import('./public/public.module').then(m => m.PublicModule),
       },
     ]
   },
   {
     path: 'private',
     loadChildren: () => import('./private/private.module').then(m => m.PrivateModule),
     // canActivate: [AppGuardService],
     // canActivateChild: [AppGuardService],
     */
   /*
   children: [
     {
       path: 'private',
       loadChildren: () => import('./private/private.module').then(m => m.PrivateModule),
       canActivate: [AppGuardService],
       canActivateChild: [AppGuardService],
     },
   ]
   */
   // },
   {
      path: '**',
      component: PageNotFoundComponent
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
