import { TestBed } from '@angular/core/testing';

import { DeliverableCitiesService } from './deliverable-cities.service';

describe('DeliverableCitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeliverableCitiesService = TestBed.get(DeliverableCitiesService);
    expect(service).toBeTruthy();
  });
});
