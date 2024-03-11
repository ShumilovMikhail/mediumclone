import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http"
import { inject } from "@angular/core"
import { Observable } from "rxjs"
import { PersistanceService } from "./persistance.service"

export const AuthInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const token = inject(PersistanceService).get('accessToken');
  const reqClone = req.clone({
    setHeaders: {
      Authorization: token && typeof token === 'string' ? token : ''
    }
  });
  return next(reqClone);
};
