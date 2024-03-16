import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";


import { getArticleAction, getArticleSuccessAction, getArticleFailureAction } from "../actions/editArticle.action";
import { SharedArticleService } from "../../../shared/services/article.service";

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
