import { HttpEvent, HttpHandler, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export const authInterceptor: (req: HttpRequest<any>, next: HttpHandler) => Observable<HttpEvent<any>> = (
  req: HttpRequest<any>,
  next: HttpHandler
): Observable<HttpEvent<any>> => {
  const token = localStorage.getItem('authToken');
  const cloned = token
    ? req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) })
    : req;

  return next.handle(cloned);
};
