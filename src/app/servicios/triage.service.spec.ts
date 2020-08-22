import { TestBed } from '@angular/core/testing';

import { TriageService } from './triage.service';

describe('TriageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TriageService = TestBed.get(TriageService);
    expect(service).toBeTruthy();
  });
});
