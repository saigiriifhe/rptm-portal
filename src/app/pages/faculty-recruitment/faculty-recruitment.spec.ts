import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyRecruitment } from './faculty-recruitment';

describe('FacultyRecruitment', () => {
  let component: FacultyRecruitment;
  let fixture: ComponentFixture<FacultyRecruitment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyRecruitment],
    }).compileComponents();

    fixture = TestBed.createComponent(FacultyRecruitment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
