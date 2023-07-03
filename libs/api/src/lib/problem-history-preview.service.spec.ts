import { TestBed } from '@angular/core/testing';

import { ProblemHistoryPreviewService } from './problem-history-preview.service';

describe('ProblemHistoryPreviewService', () => {
  let service: ProblemHistoryPreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProblemHistoryPreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
