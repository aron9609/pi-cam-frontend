import {Injectable} from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable()
export class DeviceInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.lastIndexOf('createdevice') > -1) {
      return of(new HttpResponse({ status: 200}));
    }
    return next.handle(req);
  }
}

export let deviceInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: DeviceInterceptor,
  multi: true
};
