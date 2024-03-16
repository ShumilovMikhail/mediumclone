import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { RegisterRequestInterface } from "../types/registerRequest.interface";
import { CurrentUserInterface } from "../../shared/types/currentUser.interface";
import { Observable, map } from "rxjs";
import { environment } from "../../../environments/environment.development";
import { AuthResponseInterface } from "../types/authResponse.interface";
import { LoginRequestInterface } from "../types/loginRequest.interface";
import { CurrentUserInputInterface } from "../../shared/types/currentUserInput.interface";
import { UpdateCurrentUserResponseInterface } from "../types/updateCurrentUserResponse.interface";
import { updateCurrentUserRequestInterface } from "../types/updateCurrentUserRequest.interface";

@Injectable()
export class AuthService {
  private usersAPI: string = environment.apiUrl + '/users';
  private loginAPI: string = this.usersAPI + '/login';
  private userAPI: string = environment.apiUrl + '/user';

  constructor(private http: HttpClient) { }

  public register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    return this.http.post<AuthResponseInterface>(this.usersAPI, data).pipe(
      map(({ user }) => user)
    );
  };

  public login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    return this.http.post<AuthResponseInterface>(this.loginAPI, data).pipe(
      map((response) => {
        return response.user
      })
    );
  };

  public getCurrentUser(): Observable<CurrentUserInterface> {
    return this.http.get<AuthResponseInterface>(this.userAPI).pipe(
      map(({ user }) => user)
    );
  };

  public updateCurrentUser(currentUserInput: updateCurrentUserRequestInterface): Observable<CurrentUserInterface> {
    return this.http.put<UpdateCurrentUserResponseInterface>(this.userAPI, currentUserInput).pipe(
      map(({ user }) => user)
    );
  };

};
