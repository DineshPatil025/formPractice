import { Inject, Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, Subject, finalize, pipe, takeUntil } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  private loaderService = inject(LoaderService)

  private unSubscribeAll$: Subject<void> = new Subject();
  unSubscribeAllAsObs = this.unSubscribeAll$.asObservable();

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    this.loaderService.sendLoaderState(true)
   
   
    return next.handle(request)
      .pipe(
        takeUntil(this.unSubscribeAll$),
        finalize(() => {
          this.loaderService.sendLoaderState(false)
        }
        )
      )
  }

  unSubscribeAll(){
    this.unSubscribeAll$.next()
    this.unSubscribeAll$.complete()
  }
}
