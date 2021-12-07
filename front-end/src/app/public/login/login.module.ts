import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedComponentsModule } from './../../shared/components/shared-components.module';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      LoginRoutingModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      MatIconModule,
      SharedComponentsModule,
   ],
   declarations: [
      LoginComponent,
   ],
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
   ],
   exports: [],
})
export class LoginModule { }
