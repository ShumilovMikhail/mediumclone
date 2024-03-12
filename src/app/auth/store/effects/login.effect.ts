import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { AuthService } from "../../services/auth.service";
import { loginAction, loginFailureAction, loginSuccessAction } from "../actions/login.action";
import { catchError, map, of, switchMap } from "rxjs";
import { CurrentUserInterface } from "../../../shared/types/currentUser.interface";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class LoginEffect {
  login$ = createEffect(() => this.actions$.pipe(
    ofType(loginAction),
    switchMap(({ request }) => {
      return this.authService.login(request).pipe(

        map((currentUser: CurrentUserInterface) => {
          return loginSuccessAction({ currentUser })
        }),
        catchError((response: HttpErrorResponse) => {
          return of(loginFailureAction({ errors: response.error }))
        })
      )
    })
  ))

  constructor(private actions$: Actions, private authService: AuthService) { }
}
