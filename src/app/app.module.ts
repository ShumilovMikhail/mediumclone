import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { TopBarModule } from './shared/top-bar/top-bar.module';
import { AuthInterceptor } from './shared/services/auth-interceptor.service';
import { GlobalFeedModule } from './global-feed/global-feed.module';

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
    GlobalFeedModule
  ],
  providers: [provideHttpClient(withInterceptors([AuthInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
