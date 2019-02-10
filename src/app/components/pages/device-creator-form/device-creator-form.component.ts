import { Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DeviceService} from '../../../services/device/device.service';
import {catchError} from 'rxjs/operators';
import {BadInputError} from '../../../common/error/bad-input-error';
import {NotFoundError} from '../../../common/error/not-found-error';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-device-creator-form',
  templateUrl: './device-creator-form.component.html',
  styleUrls: ['./device-creator-form.component.scss']
})
export class DeviceCreatorFormComponent {

  mainForm: FormGroup;

  constructor(private deviceService: DeviceService,
              private formBuilder: FormBuilder,
              private toaster: ToastrService ) {
    this.mainForm = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      ip: ['', [Validators.required, Validators.pattern('([0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3})*')]],
      port: ['', [Validators.required, Validators.pattern('[0-9]*')]]
    } );
  }

  onSubmit() {
    this.deviceService.createDevice(this.mainForm.value).subscribe(
      null,
       err => {
         console.log(err)
        if (err instanceof NotFoundError) {
          this.toaster.error('NotFoundError');
        } else if (err instanceof BadInputError) {
          this.toaster.error('BadInputError');
        } else {
          this.toaster.error('Unexpected error');
        }
      });
  }

}
