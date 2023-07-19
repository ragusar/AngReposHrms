import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegEmpByAdminComponent } from './reg-emp-by-admin.component';

describe('RegEmpByAdminComponent', () => {
  let component: RegEmpByAdminComponent;
  let fixture: ComponentFixture<RegEmpByAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegEmpByAdminComponent]
    });
    fixture = TestBed.createComponent(RegEmpByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
