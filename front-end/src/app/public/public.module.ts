import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PublicRoutingModule } from './public-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterModule } from '../shared/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PublicRoutingModule,
    FooterModule,
    RouterModule
  ],
  declarations: [
    HomePageComponent,
  ],
  exports:[

  ],
})
export class PublicModule { }
