import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsNumericComponent } from './results-numeric.component';

describe('ResultsNumericComponent', () => {
  let component: ResultsNumericComponent;
  let fixture: ComponentFixture<ResultsNumericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsNumericComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsNumericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
