import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
   declarations: [
      LoginComponent,
      SignupComponent,
   ],
   imports: [
      RouterModule.forChild([
         { path: 'signup', component: SignupComponent }
      ]),
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      SharedComponentsModule,
   ]
})
export class AuthModule { }
