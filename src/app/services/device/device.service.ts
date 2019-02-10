import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import 'rxjs/operators';
import {catchError, map} from 'rxjs/operators';
import {AppError} from '../../common/error/app-error';
import {NotFoundError} from '../../common/error/not-found-error';
import {BadInputError} from '../../common/error/bad-input-error';

const requestUrl = '/afaszom';

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
    return this.httpClient.post(requestUrl, formData, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadInputError());
    } else if (error.status === 404) {
      return throwError(new NotFoundError());
    } else {
      return throwError(new AppError(error));
    }
  }
}
