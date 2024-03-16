import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, from, map, of, switchMap } from "rxjs";

import { SharedArticleService } from "../../../shared/services/article.service";
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from "../actions/getArticle.action";

@Injectable()
export class GetArticleEffect {

  getArticle$ = createEffect(() => this.actions$.pipe(
    ofType(getArticleAction),

    switchMap(({ slug }) => {
      return this.articleService.getArticle(slug).pipe(

        map((article) => {
          return getArticleSuccessAction({ article });
        }),
        catchError(() => {
          return of(getArticleFailureAction());
        })
      );
    })
  ));

  constructor(private actions$: Actions, private articleService: SharedArticleService) { };
};
