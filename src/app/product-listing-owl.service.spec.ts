import { TestBed } from '@angular/core/testing';

import { ProductListingOwlService } from './product-listing-owl.service';

describe('ProductListingOwlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductListingOwlService = TestBed.get(ProductListingOwlService);
    expect(service).toBeTruthy();
  });
});
