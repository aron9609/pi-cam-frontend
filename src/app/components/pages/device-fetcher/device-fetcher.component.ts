import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../../../services/device/device.service';
import {ToastrService} from 'ngx-toastr';
import {NotFoundError} from "../../../common/error/not-found-error";
import {BadInputError} from "../../../common/error/bad-input-error";
import {PagingInfo} from "../../../common/paging-info";
import {PagingResponseInfo} from "../../../common/paging-response-info";

@Component({
  selector: 'app-device-fetcher',
  templateUrl: './device-fetcher.component.html',
  styleUrls: ['./device-fetcher.component.scss']
})

export class DeviceFetcherComponent implements OnInit {

  pagingResponseInfo: PagingResponseInfo;
  pagingInfo: PagingInfo = new PagingInfo();

  constructor(private deviceService: DeviceService,
              private toaster: ToastrService) {
  }

  ngOnInit() {
    this.fetchDevices();
  }

  open(id: number) {
    console.log('open: ' + id);
  }

  modify(id: number) {
    console.log('open: ' + id);
  }

  remove(id: number) {
    console.log('open: ' + id);
  }

  nextPage() {
    this.pagingInfo.first += this.pagingInfo.pageSize;
    this.fetchDevices();
  }

  prevPage() {
    this.pagingInfo.first -= this.pagingInfo.pageSize;
    this.fetchDevices();
  }

  private fetchDevices() {
    console.log(this.pagingInfo)
    this.deviceService.fetchDevices(this.pagingInfo).subscribe(
      pagingResponseInfo => {
        this.pagingResponseInfo = pagingResponseInfo;
        console.log(this.pagingResponseInfo)
      },
      err => {
        if (err instanceof NotFoundError) {
          this.toaster.error('NotFoundError');
        } else if (err instanceof BadInputError) {
          this.toaster.error('BadInputError');
        } else {
          this.toaster.error(err);
        }
      });
  }
}
