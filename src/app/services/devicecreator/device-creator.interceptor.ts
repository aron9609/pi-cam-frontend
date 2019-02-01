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
export class DeviceCreatorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req.url)
    if (req.url.lastIndexOf('createdevice') > -1) {
      console.log('intercepted')
      return of(new HttpResponse({ status: 200}));
    }
    return next.handle(req);
  }
}

export let deviceCreatorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: DeviceCreatorInterceptor,
  multi: true
};
