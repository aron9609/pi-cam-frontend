import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-device-creator-form',
  templateUrl: './device-creator-form.component.html',
  styleUrls: ['./device-creator-form.component.scss']
})
export class DeviceCreatorFormComponent {

  mainForm: FormGroup = new FormGroup({
    'name': new FormControl('',[Validators.required, Validators.minLength(3)]),
    'description': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'ip': new FormControl('', [Validators.required, Validators.pattern('([0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3})*')]),
    'port': new FormControl('', [Validators.required, Validators.pattern('[0-9]*')])
  })

  constructor() {

  }

  onSubmit(){
    console.log(this.mainForm.value)
  }

}
