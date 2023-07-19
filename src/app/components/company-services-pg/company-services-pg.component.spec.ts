import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyServicesPgComponent } from './company-services-pg.component';

describe('CompanyServicesPgComponent', () => {
  let component: CompanyServicesPgComponent;
  let fixture: ComponentFixture<CompanyServicesPgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyServicesPgComponent]
    });
    fixture = TestBed.createComponent(CompanyServicesPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
