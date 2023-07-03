import { TestBed } from '@angular/core/testing';

import { CanActivateAppGuardService } from './can-activate-app-guard.service';

describe('CanActivateAppGuardService', () => {
  let service: CanActivateAppGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanActivateAppGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
