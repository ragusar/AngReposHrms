import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPgComponent } from './about-pg.component';

describe('AboutPgComponent', () => {
  let component: AboutPgComponent;
  let fixture: ComponentFixture<AboutPgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPgComponent]
    });
    fixture = TestBed.createComponent(AboutPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
