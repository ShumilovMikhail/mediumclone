import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register.action";
import { AuthService } from "../../services/auth.service";
import { CurrentUserInterface } from "../../../shared/types/currentUser.interface";

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() => this.actions$.pipe(
    ofType(registerAction),

    switchMap(({ request }) => {

      return this.authService.register(request).pipe(
        map((currentUser: CurrentUserInterface) => {
          return registerSuccessAction({ currentUser });
        }),
        catchError((response: HttpErrorResponse) => {
          return of(registerFailureAction(response.error));
        })
      );
    })

  ));

  constructor(private actions$: Actions, private authService: AuthService) { };
};
