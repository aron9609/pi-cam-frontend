import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCreatorFormComponent } from './device-creator-form.component';

describe('DeviceCreatorFormComponent', () => {
  let component: DeviceCreatorFormComponent;
  let fixture: ComponentFixture<DeviceCreatorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceCreatorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceCreatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
