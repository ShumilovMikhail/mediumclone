import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";

import { registerSuccessAction } from "../actions/register.action";
import { loginSuccessAction } from "../actions/login.action";
import { PersistanceService } from "../../../shared/services/persistance.service";
import { PersistanceKeys } from "../../../shared/types/persistanceKeys";

@Injectable()
export class AuthEffect {

  redirectAfterAuth$ = createEffect(() => this.actions$.pipe(
    ofType(registerSuccessAction, loginSuccessAction),
    tap(({ currentUser }) => {
      this.persistanceService.set(PersistanceKeys.TOKEN, currentUser.token);
      this.router.navigate(['../'], { relativeTo: this.route });
    })
  ), {
    dispatch: false
  });

  constructor(private actions$: Actions, private route: ActivatedRoute, private router: Router, private persistanceService: PersistanceService) { }
}

// hello world
