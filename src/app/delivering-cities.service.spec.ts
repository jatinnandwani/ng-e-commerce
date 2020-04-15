import { TestBed } from '@angular/core/testing';

import { DeliveringCitiesService } from './delivering-cities.service';

describe('DeliveringCitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeliveringCitiesService = TestBed.get(DeliveringCitiesService);
    expect(service).toBeTruthy();
  });
});
