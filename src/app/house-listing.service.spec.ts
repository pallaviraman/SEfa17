import { TestBed, inject } from '@angular/core/testing';

import { HouseListingService } from './house-listing.service';

describe('HouseListingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HouseListingService]
    });
  });

  it('should be created', inject([HouseListingService], (service: HouseListingService) => {
    expect(service).toBeTruthy();
  }));
});
