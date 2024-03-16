import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";

import { EditArticleService } from "../../services/editArticle.service";
import { editArticleAction, editArticleFailureAction, editArticleSuccessAction } from "../actions/editArticle.action";

@Injectable()
export class EditArticleEffect {

  createArticle$ = createEffect(() => this.actions$.pipe(
    ofType(editArticleAction),

    switchMap(({ articleInput, slug }) => {
      return this.editArticleService.updateArticle(articleInput, slug).pipe(

        map((article) => {
          return editArticleSuccessAction({ article });
        }),
        catchError(() => {
          return of(editArticleFailureAction());
        })
      );
    })
  ));

  redirectAfterCreate = createEffect(() => this.actions$.pipe(
    ofType(editArticleSuccessAction),
    tap(({ article }) => {
      this.router.navigate(['/articles', article.slug]);
    })
  ), {
    dispatch: false
  });

  constructor(private actions$: Actions, private editArticleService: EditArticleService, private router: Router) { };
};
