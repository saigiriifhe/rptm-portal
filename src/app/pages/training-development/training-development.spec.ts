import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDevelopment } from './training-development';

describe('TrainingDevelopment', () => {
  let component: TrainingDevelopment;
  let fixture: ComponentFixture<TrainingDevelopment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingDevelopment],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainingDevelopment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
