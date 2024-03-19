import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { followAction, followFailureAction, followSuccessAction } from "../actions/addToFavorites.action";
import { FollowService } from "../../services/follow.service";
import { ProfileInterface } from "../../../types/profile.interface";

@Injectable()
export class FollowEffect {
  follow$ = createEffect(() => this.actions$.pipe(
    ofType(followAction),
    switchMap(({ isFollow, slug }) => {
      const action$ = isFollow ? this.followService.unfollow(slug) : this.followService.follow(slug);
      return action$.pipe(

        map((profile: ProfileInterface) => {
          return followSuccessAction({ profile });
        }),

        catchError(() => {
          return of(followFailureAction());
        })

      );
    })
  ));

  constructor(private actions$: Actions, private followService: FollowService) { };
};
