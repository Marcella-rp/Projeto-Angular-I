import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('USER_TOKEN');
    const modifiedRequest = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)
    })
    return next.handle(modifiedRequest);
  }
}
