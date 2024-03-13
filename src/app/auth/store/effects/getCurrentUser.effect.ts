import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from "../actions/getCurrentUser.action";
import { AuthService } from "../../services/auth.service";
import { CurrentUserInterface } from "../../../shared/types/currentUser.interface";
import { PersistanceService } from "../../../shared/services/persistance.service";
import { PersistanceKeys } from "../../../shared/types/persistanceKeys";

@Injectable()
export class GetCurrentUserEffect {

  getCurrentUser$ = createEffect(() => this.actions$.pipe(
    ofType(getCurrentUserAction),

    switchMap(() => {
      const token = this.persistanceService.get(PersistanceKeys.TOKEN);
      if (!token) {
        return of(getCurrentUserFailureAction());
      };

      return this.authService.getCurrentUser().pipe(
        map((currentUser: CurrentUserInterface) => {
          return getCurrentUserSuccessAction({ currentUser });
        }),
        catchError(() => {
          return of(getCurrentUserFailureAction());
        })
      );

    })

  ));

  constructor(private actions$: Actions, private authService: AuthService, private persistanceService: PersistanceService) { };
};
