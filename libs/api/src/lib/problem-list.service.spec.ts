import { TestBed } from '@angular/core/testing';

import { ProblemListService } from './problem-list.service';

describe('ProblemListService', () => {
  let service: ProblemListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProblemListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
