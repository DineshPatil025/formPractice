import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let reqHeader = request.clone({
      headers:request.headers.set('header','test-header/json')
    })
    return next.handle(reqHeader)
    .pipe(
      tap(event =>{
        if(event instanceof HttpResponse){
          // let respHeader = event.headers.get('header')!
          localStorage.setItem('header',"respHeader")
          // console.log('header',"respHeader");
      
        }
      })
    )
  }
}
