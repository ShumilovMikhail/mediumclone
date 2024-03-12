import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpInterceptorFn, HttpRequest } from "@angular/common/http"
import { inject } from "@angular/core"
import { Observable } from "rxjs"
import { PersistanceService } from "./persistance.service"

export const AuthInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const token = inject(PersistanceService).get('accessToken');
  const reqClone = req.clone({
    headers: new HttpHeaders().set('Authorization', `Token ${token && typeof token === 'string' ? token : ''}`).set('Content-type', 'application/json'),
  });
  return next(reqClone);
};
