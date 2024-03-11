import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { EffectsModule } from '@ngrx/effects';
import { TopBarModule } from './shared/top-bar/top-bar.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    EffectsModule.forRoot([]),
    TopBarModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useFactory: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
