import { TestBed } from '@angular/core/testing';

import { BestSellingItemServiceService } from './best-selling-item-service.service';

describe('BestSellingItemServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BestSellingItemServiceService = TestBed.get(BestSellingItemServiceService);
    expect(service).toBeTruthy();
  });
});
