import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceFetcherComponent } from './device-fetcher.component';

describe('DeviceFetcherComponent', () => {
  let component: DeviceFetcherComponent;
  let fixture: ComponentFixture<DeviceFetcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceFetcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceFetcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
