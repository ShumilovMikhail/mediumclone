import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { isLoggedInSelector } from "./store/selectors";

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> => {
  const store = inject(Store);
  const router = inject(Router)
  if (Boolean(store.select(isLoggedInSelector))) {
    router.navigate(['/']);
    return false;
  } else {
    return true;
  };
};
