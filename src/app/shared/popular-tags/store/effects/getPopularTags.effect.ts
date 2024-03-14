import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { PopularTagsService } from "../../services/popularTags.service";
import { getPopularTagsAction, getPopularTagsFailureAction, getPopularTagsSuccessAction } from "../actions/getPopularTags.action";
import { PopularTagType } from "../../../types/popularTag.type";

@Injectable()
export class GetPopularTagsEffect {

  getPopularTags$ = createEffect(() => this.actions$.pipe(
    ofType(getPopularTagsAction),
    switchMap(() => {
      return this.popularTagsService.getPopularTags().pipe(
        map((tags: PopularTagType[]) => {
          return getPopularTagsSuccessAction({ tags });
        }),
        catchError(() => {
          return of(getPopularTagsFailureAction());
        })
      );
    })
  ));

  constructor(private actions$: Actions, private popularTagsService: PopularTagsService) { };
};