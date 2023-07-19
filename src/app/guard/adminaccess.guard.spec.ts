import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminaccessGuard } from './adminaccess.guard';

describe('adminaccessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminaccessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
