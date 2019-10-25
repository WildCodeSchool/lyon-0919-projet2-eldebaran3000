import { TestBed } from '@angular/core/testing';

import { TimeSpeedService } from './time-speed.service';

describe('TimeSpeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeSpeedService = TestBed.get(TimeSpeedService);
    expect(service).toBeTruthy();
  });
});
