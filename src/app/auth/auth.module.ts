import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store/reducers';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './store/effects/register.effect';
import { LoginEffect } from './store/effects/login.effect';
import { AuthEffect } from './store/effects/auth.effect';
import { GetCurrentUserEffect } from './store/effects/getCurrentUser.effect';
import { BackendErrorsMessagesModule } from '../shared/backend-errors-messages/backend-errors-messages.module';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect, AuthEffect, GetCurrentUserEffect]),
    BackendErrorsMessagesModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
