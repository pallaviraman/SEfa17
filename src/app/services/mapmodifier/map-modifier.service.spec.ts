import { TestBed, inject } from '@angular/core/testing';

import { MapModifierService } from './map-modifier.service';

describe('MapModifierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapModifierService]
    });
  });

  it('should be created', inject([MapModifierService], (service: MapModifierService) => {
    expect(service).toBeTruthy();
  }));
});
