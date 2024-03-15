import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

import { environment } from "../../../environments/environment.development";
import { GetArticleResponseInterface } from "../types/getArticleResponse.interface";
import { ArticleInterface } from "../types/article.interface";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articleAPI = environment.apiUrl + '/articles';

  constructor(private http: HttpClient) { };

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${this.articleAPI}/${slug}`;
    return this.http.get<GetArticleResponseInterface>(fullUrl).pipe(
      map((response) => {
        return response.article;
      })
    );
  };
};
