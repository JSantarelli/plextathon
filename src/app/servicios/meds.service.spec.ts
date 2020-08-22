import { TestBed } from '@angular/core/testing';

import { MedsService } from './meds.service';

describe('MedsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedsService = TestBed.get(MedsService);
    expect(service).toBeTruthy();
  });
});
