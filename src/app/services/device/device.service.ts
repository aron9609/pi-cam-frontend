import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import 'rxjs/operators';
import {catchError, map} from 'rxjs/operators';
import {AppError} from '../../common/error/app-error';
import {NotFoundError} from '../../common/error/not-found-error';
import {BadInputError} from '../../common/error/bad-input-error';
import {PagingInfo} from '../../common/paging-info';
import {PagingResponseInfo} from '../../common/paging-response-info';

const requestUrl = '/rest';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private httpClient: HttpClient) {
  }

  createDevice(formData): Observable<any> {
    return this.httpClient.post(requestUrl + 'post', formData, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  fetchDevices(pagingInfo: PagingInfo): Observable<PagingResponseInfo> {
    let params = new HttpParams();
    params = params.set('first', pagingInfo.first.toString());
    params = params.set('pageSize', pagingInfo.pageSize.toString());
    return this.httpClient.get<PagingResponseInfo>(requestUrl + '/get', {params: params})
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadInputError(error.url));
    } else if (error.status === 404) {
      return throwError(new NotFoundError(error.url));
    } else {
      return throwError(new AppError(error));
    }
  }
}
