import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fiop2 } from './fiop2';

describe('Fiop2', () => {
  let component: Fiop2;
  let fixture: ComponentFixture<Fiop2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fiop2],
    }).compileComponents();

    fixture = TestBed.createComponent(Fiop2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
