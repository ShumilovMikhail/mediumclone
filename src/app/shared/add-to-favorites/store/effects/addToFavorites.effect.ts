import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addToFavoritesAction, addToFavoritesFailureAction, addToFavoritesSuccessAction } from "../actions/addToFavorites.action";
import { catchError, map, of, switchMap } from "rxjs";
import { ArticleInterface } from "../../../types/article.interface";
import { AddToFavoritesService } from "../../services/addToFavorites.service";

@Injectable()
export class AddToFavoritesEffect {
  addToFavorites$ = createEffect(() => this.actions$.pipe(
    ofType(addToFavoritesAction),
    switchMap(({ isFavorite, slug }) => {
      const article$ = isFavorite ? this.addToFavoritesService.removeFormFavorites(slug) : this.addToFavoritesService.addToFavorites(slug);
      return article$.pipe(

        map((article: ArticleInterface) => {
          return addToFavoritesSuccessAction({ article })
        }),
        catchError(() => {
          return of(addToFavoritesFailureAction())
        })
      )
    })
  ))

  constructor(private actions$: Actions, private addToFavoritesService: AddToFavoritesService) { }
}
