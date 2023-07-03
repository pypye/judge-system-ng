import { TestBed } from '@angular/core/testing';

import { ProblemDetailService } from './problem-detail.service';

describe('ProblemDetailService', () => {
  let service: ProblemDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProblemDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
