import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, combineLatest, combineLatestWith, filter, map, switchMap, tap } from "rxjs";
import { Store } from "@ngrx/store";

import { isLoadingSelector, isLoggedInSelector } from "./store/selectors";

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> => {
  const store = inject(Store);
  const router = inject(Router);
  console.log(1)
  return store.select(isLoggedInSelector).pipe(
    switchMap((isLoggedIn) => store.select(isLoadingSelector).pipe(
      filter((isLoading) => !isLoading),
      map(() => !isLoggedIn)
    )),
    tap((isLoggedIn: boolean) => {
      console.log(isLoggedIn)
      if (!isLoggedIn) {
        router.navigate(['/']);
      }
    }))
};
