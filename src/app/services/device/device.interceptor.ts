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
import {PagingResponseInfo} from "../../common/paging-response-info";

@Injectable()
export class DeviceInterceptor implements HttpInterceptor {

  private devices = [
    {id: 1, port: '1111', name: 'device1', ip: 'ip1'},
    {id: 2, port: '1112', name: 'device2', ip: 'ip2'},
    {id: 3, port: '1113', name: 'device3', ip: 'ip3'},
    {id: 1, port: '1114', name: 'device4', ip: 'ip4'},
    {id: 2, port: '1115', name: 'device5', ip: 'ip5'},
    {id: 3, port: '1116', name: 'device6', ip: 'ip6'},
    {id: 1, port: '1117', name: 'device7', ip: 'ip7'},
    {id: 2, port: '1118', name: 'device8', ip: 'ip8'},
    {id: 3, port: '1119', name: 'device9', ip: 'ip9'}
  ]

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.lastIndexOf('post') > -1) {
      return of(new HttpResponse({ status: 200}));
    }
    if (req.url.lastIndexOf('get') > -1) {
      const first = +req.params.get('first');
      const pageSize = +req.params.get('pageSize');
      const responseBody: PagingResponseInfo = new PagingResponseInfo();
      const data = this.devices.slice(first, first + pageSize)
      responseBody.count = this.devices.length;
      responseBody.lastIndex = first + pageSize - 1;
      responseBody.data = data;
      return of(new HttpResponse({
        body: responseBody,
        status: 200
      }));
    }
    return next.handle(req);
  }
}

export let deviceInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: DeviceInterceptor,
  multi: true
};
