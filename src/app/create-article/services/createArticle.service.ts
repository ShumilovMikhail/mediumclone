import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

import { ArticleInputInterface } from "../../shared/types/articleInput.interface";
import { environment } from "../../../environments/environment.development";
import { SaveArticleResponseInterface } from "../../shared/types/saveArticleResponse.interface";
import { ArticleInterface } from "../../shared/types/article.interface";

@Injectable({
  providedIn: 'root'
})
export class CreateArticleService {

  private createArticleAPI: string = environment.apiUrl + '/articles';

  constructor(private http: HttpClient) { };

  createArticle(articleInput: ArticleInputInterface): Observable<ArticleInterface> {
    return this.http.post<SaveArticleResponseInterface>(this.createArticleAPI, { article: articleInput }).pipe(
      map((response: SaveArticleResponseInterface) => response.article)
    );
  };
};
