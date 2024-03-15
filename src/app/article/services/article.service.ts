import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleAPI: string = environment.apiUrl + '/articles';

  constructor(private http: HttpClient) { };

  deleteArticle(slug: string): Observable<{}> {
    const fullUrl = `${this.articleAPI}/${slug}`;
    return this.http.delete<{}>(fullUrl);
  };
};
