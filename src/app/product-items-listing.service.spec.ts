import { TestBed } from '@angular/core/testing';

import { ProductItemsListingService } from './product-items-listing.service';

describe('ProductItemsListingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductItemsListingService = TestBed.get(ProductItemsListingService);
    expect(service).toBeTruthy();
  });
});
