import { TestBed } from '@angular/core/testing';

import { ProblemHistoryService } from './problem-history.service';

describe('HistoryService', () => {
  let service: ProblemHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProblemHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
