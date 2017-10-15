import { TestBed, inject } from '@angular/core/testing';

import { PhotobucketService } from './photobucket.service';

describe('PhotobucketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotobucketService]
    });
  });

  it('should be created', inject([PhotobucketService], (service: PhotobucketService) => {
    expect(service).toBeTruthy();
  }));
});
