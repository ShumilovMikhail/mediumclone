import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { AuthService } from "../../services/auth.service";
import { catchError, map, of, switchMap } from "rxjs";
import { CurrentUserInterface } from "../../../shared/types/currentUser.interface";
import { HttpErrorResponse } from "@angular/common/http";
import { updateCurrentUserAction, updateCurrentUserFailureAction, updateCurrentUserSuccessAction } from "../actions/updateCurrentUser.action";

@Injectable()
export class UpdateCurrentUserEffect {
  updateCurrentUser$ = createEffect(() => this.actions$.pipe(
    ofType(updateCurrentUserAction),
    switchMap(({ currentUserInput }) => {
      return this.authService.updateCurrentUser(currentUserInput).pipe(

        map((currentUser: CurrentUserInterface) => {
          return updateCurrentUserSuccessAction({ currentUser })
        }),
        catchError((response: HttpErrorResponse) => {
          return of(updateCurrentUserFailureAction({ errors: response.error }))
        })
      )
    })
  ))

  constructor(private actions$: Actions, private authService: AuthService) { }
}
