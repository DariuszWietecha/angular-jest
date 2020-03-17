import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/index';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const baseUrl = document.getElementsByTagName('apibase')[0].id;
    const apiReq = req.clone({ url: `${baseUrl}${req.url}` });
    return next.handle(apiReq);
  }
}
