import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fiop1 } from './fiop1';

describe('Fiop1', () => {
  let component: Fiop1;
  let fixture: ComponentFixture<Fiop1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fiop1],
    }).compileComponents();

    fixture = TestBed.createComponent(Fiop1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
