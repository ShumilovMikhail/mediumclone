import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../../../environments/environment.development";
import { Observable, map } from "rxjs";
import { PopularTagType } from "../../types/popularTag.type";
import { GetPopularTagsResponseInterface } from "../types/getPopularTagsResponse.interface";

@Injectable({ providedIn: 'root' })
export class PopularTagsService {
  tagUrl: string = environment.apiUrl + '/tags';

  constructor(private http: HttpClient) { };

  getPopularTags(): Observable<PopularTagType[]> {
    return this.http.get<GetPopularTagsResponseInterface>(this.tagUrl).pipe(
      map((response) => {
        return response.tags;
      })
    );
  };
};
