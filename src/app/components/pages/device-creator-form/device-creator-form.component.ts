import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {DeviceCreatorService} from '../../../services/devicecreator/device-creator.service';

@Component({
  selector: 'app-device-creator-form',
  templateUrl: './device-creator-form.component.html',
  styleUrls: ['./device-creator-form.component.scss']
})
export class DeviceCreatorFormComponent {

  mainForm: FormGroup;

  constructor(private deviceCreatorService: DeviceCreatorService,
              private formBuilder: FormBuilder) {
    this.mainForm = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      ip: ['', [Validators.required, Validators.pattern('([0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3})*')]],
      port: ['', [Validators.required, Validators.pattern('[0-9]*')]]
    } );
  }

  onSubmit() {
    this.deviceCreatorService.postData(this.mainForm.value);
  }

}
