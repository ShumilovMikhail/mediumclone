import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";

import { PersistanceService } from "../../../shared/services/persistance.service";
import { PersistanceKeys } from "../../../shared/types/persistanceKeys";
import { Router } from "@angular/router";
import { logoutAction } from "../actions/sync.action";

@Injectable()
export class LogoutEffect {
  logout$ = createEffect(() => this.actions$.pipe(
    ofType(logoutAction),
    tap(() => {
      this.router.navigate(['/']);
      this.persistanceService.remove(PersistanceKeys.TOKEN);
    })
  ),
    {
      dispatch: false
    });

  constructor(private actions$: Actions, private persistanceService: PersistanceService, private router: Router) { };
};
