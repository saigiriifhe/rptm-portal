import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnableDigitalization } from './enable-digitalization';

describe('EnableDigitalization', () => {
  let component: EnableDigitalization;
  let fixture: ComponentFixture<EnableDigitalization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnableDigitalization],
    }).compileComponents();

    fixture = TestBed.createComponent(EnableDigitalization);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
