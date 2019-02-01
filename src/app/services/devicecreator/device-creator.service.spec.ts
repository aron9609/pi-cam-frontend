import { TestBed } from '@angular/core/testing';

import { DeviceCreatorService } from './device-creator.service';

describe('DeviceCreatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceCreatorService = TestBed.get(DeviceCreatorService);
    expect(service).toBeTruthy();
  });
});
