import {Injectable} from '@angular/core';
import {HttpBackend, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {LoaderService} from '../_services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(public loaderService: LoaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Http');
    this.loaderService.show();
    return next.handle(req).pipe(
      finalize(() => this.loaderService.hide())
    );
  }
}

/*
@Injectable()
export class LoaderInterceptor implements HttpBackend {

  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    console.log('Intercepted');
    return undefined;
  }
} */
