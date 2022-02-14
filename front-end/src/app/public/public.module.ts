import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { HomePageComponent } from './home-page/home-page.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';

import { PublicRoutingModule } from './public-routing.module';

import { FooterModule } from '../shared/components/footer/footer.module';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { LoginModule } from './login/login.module';
import { LoaderModule } from './../shared/components/loader/loader.module';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      PublicRoutingModule,
      FooterModule,
      RouterModule,
      LoginModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      SharedComponentsModule,
      LoaderModule
   ],
   declarations: [
      HomePageComponent,
      ProductComponent,
      SignupComponent,
   ],
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
   ],
   exports: [],
})
export class PublicModule { }
