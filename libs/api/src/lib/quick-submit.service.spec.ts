import { TestBed } from '@angular/core/testing';

import { QuickSubmitService } from './quick-submit.service';

describe('QuickSubmitService', () => {
  let service: QuickSubmitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuickSubmitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
