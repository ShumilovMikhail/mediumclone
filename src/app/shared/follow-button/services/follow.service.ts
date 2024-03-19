import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

import { environment } from "../../../../environments/environment.development";
import { ProfileInterface } from "../../types/profile.interface";
import { FollowResponseInterface } from "../types/followResponse.interface";

@Injectable({
  providedIn: 'root'
})
export class FollowService {
  private followAPI: string = environment.apiUrl + '/profiles';

  constructor(private http: HttpClient) { };

  public follow(slug: string): Observable<ProfileInterface> {
    const fullUrl = `${this.followAPI}/${slug}/follow`;
    return this.http.post<FollowResponseInterface>(fullUrl, {}).pipe(
      map(({ profile }) => profile)
    );
  };

  public unfollow(slug: string): Observable<ProfileInterface> {
    const fullUrl = `${this.followAPI}/${slug}/follow`;
    return this.http.delete<FollowResponseInterface>(fullUrl, {}).pipe(
      map(({ profile }) => profile)
    );
  };
};
