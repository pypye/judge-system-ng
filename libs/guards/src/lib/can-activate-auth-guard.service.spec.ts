import { TestBed } from '@angular/core/testing';

import { CanActivateAuthGuardService } from './can-activate-auth-guard.service';

describe('CanActivateAuthGuardService', () => {
  let service: CanActivateAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanActivateAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
