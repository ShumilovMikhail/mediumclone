import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

import { environment } from "../../../environments/environment.development";
import { SaveArticleResponseInterface } from "../../shared/types/saveArticleResponse.interface";
import { ArticleInterface } from "../../shared/types/article.interface";
import { ArticleInputInterface } from "../../shared/types/articleInput.interface";

@Injectable({
  providedIn: 'root'
})
export class EditArticleService {

  private editArticleAPI: string = environment.apiUrl + '/articles';

  constructor(private http: HttpClient) { };

  updateArticle(articleInput: ArticleInputInterface, slug: string): Observable<ArticleInterface> {
    const fullUrl = `${this.editArticleAPI}/${slug}`;
    return this.http.put<SaveArticleResponseInterface>(fullUrl, { article: articleInput }).pipe(
      map((response: SaveArticleResponseInterface) => response.article)
    );
  };
};
