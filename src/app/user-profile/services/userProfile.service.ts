import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

import { ProfileInterface } from "../../shared/types/profile.interface";
import { environment } from "../../../environments/environment.development";
import { GetUserProfileResponseInterface } from "../types/getUserProfileResponse.interface";

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private profileAPI: string = environment.apiUrl + '/profiles';

  constructor(private http: HttpClient) { };

  public getUserProfile(slug: string): Observable<ProfileInterface> {
    const fullUrl = `${this.profileAPI}/${slug} `;
    return this.http.get<GetUserProfileResponseInterface>(fullUrl).pipe(
      map(({ profile }) => profile)
    );
  };
};
