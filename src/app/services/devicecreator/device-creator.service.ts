import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {handleError} from '../errorhandler';

const requestUrl = '/createdevice'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class DeviceCreatorService {

  constructor(private httpClient: HttpClient) { }

  postData(formData): void {
    this.httpClient.post(requestUrl, formData, httpOptions)
      .subscribe(
        () => {},
        (error) => {handleError(error); }
      );
  }
}
