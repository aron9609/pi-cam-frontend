import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-device-creator-form',
  templateUrl: './device-creator-form.component.html',
  styleUrls: ['./device-creator-form.component.scss']
})
export class DeviceCreatorFormComponent implements OnInit {

  mainForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
  })

  constructor() {

  }

  ngOnInit() {
  }

}
