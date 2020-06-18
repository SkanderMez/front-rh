import {Injectable} from '@angular/core';
import {HttpBackend, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {Globals} from '../_globals/globals';

@Injectable(
)
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private globals: Globals) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {this.globals.loading = true;
    return next.handle(req).pipe(
      finalize(() =>     this.globals.loading = false)
    );
  }
}
