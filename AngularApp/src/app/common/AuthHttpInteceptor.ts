import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthHttpInteceptor implements HttpInterceptor {
  constructor() { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token !== null && token !== '') {
      headers = headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);
    }
    const updatedRequest = request.clone({
      headers: headers
    });
    return next.handle(updatedRequest).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
          }
        },
        error => {
          if (event instanceof HttpResponse) {
          }
        }
      )
    );
  }
}
