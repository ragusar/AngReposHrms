import { TestBed } from '@angular/core/testing';

import { EmplService } from '../services/empl.service';

describe('EmplService', () => {
  let service: EmplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
