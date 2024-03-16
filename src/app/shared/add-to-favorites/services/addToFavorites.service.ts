import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment.development";
import { AddToFavoritesResponseInterface } from "../types/addToFavoritesResponse.interface";
import { Observable, map } from "rxjs";
import { ArticleInterface } from "../../types/article.interface";

@Injectable({
  providedIn: 'root'
})
export class AddToFavoritesService {

  private favoritesAPI = environment.apiUrl + '/articles'

  constructor(private http: HttpClient) { };

  addToFavorites(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${this.favoritesAPI}/${slug}/favorite`;
    return this.http.post<AddToFavoritesResponseInterface>(fullUrl, {}).pipe(
      map(({ article }) => article)
    )
  };

  removeFormFavorites(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${this.favoritesAPI}/${slug}/favorite`;
    return this.http.delete<AddToFavoritesResponseInterface>(fullUrl, {}).pipe(
      map(({ article }) => article)
    )
  };
};
