import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicInfrastructure } from './academic-infrastructure';

describe('AcademicInfrastructure', () => {
  let component: AcademicInfrastructure;
  let fixture: ComponentFixture<AcademicInfrastructure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicInfrastructure],
    }).compileComponents();

    fixture = TestBed.createComponent(AcademicInfrastructure);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
