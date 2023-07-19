import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PNF404Component } from './pnf404.component';

describe('PNF404Component', () => {
  let component: PNF404Component;
  let fixture: ComponentFixture<PNF404Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PNF404Component]
    });
    fixture = TestBed.createComponent(PNF404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
