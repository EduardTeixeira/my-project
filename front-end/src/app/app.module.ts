import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { PageNotFoundModule } from './shared/components/page-not-found/page-not-found.module';
import { TopMenuModule } from './shared/components/top-menu/top-menu.module';
import { FooterModule } from './shared/components/footer/footer.module';
import { LoaderModule } from './shared/components/loader/loader.module';

import { AuthGuard } from './auth.guard';
import { GlobalContextService } from './shared/services/global-context.service';
import { OptionsInterceptor } from './core/interceptors/options.interceptor';

@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule,
      PageNotFoundModule,
      AppRoutingModule,
      TopMenuModule,
      FooterModule,
      LoaderModule,
   ],
   providers: [
      {
         provide: HTTP_INTERCEPTORS,
         useClass: OptionsInterceptor,
         multi: true
      },
      AuthGuard,
      GlobalContextService,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
