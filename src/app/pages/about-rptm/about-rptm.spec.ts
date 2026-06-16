import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRptm } from './about-rptm';

describe('AboutRptm', () => {
  let component: AboutRptm;
  let fixture: ComponentFixture<AboutRptm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutRptm],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutRptm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
