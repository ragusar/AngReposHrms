import { TestBed } from '@angular/core/testing';

import { EmployeeInterceptorInterceptor } from '../interceptors/employee-interceptor.interceptor';

describe('EmployeeInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      EmployeeInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: EmployeeInterceptorInterceptor = TestBed.inject(EmployeeInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
