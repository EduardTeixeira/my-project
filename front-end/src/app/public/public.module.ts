import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { PublicRoutingModule } from './public-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterModule } from '../shared/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PublicRoutingModule,
    FooterModule,
  ],
  declarations: [
    LoginComponent,
    HomePageComponent,
  ],
})
export class PublicModule { }
