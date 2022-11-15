import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalAnalysisComponent } from './interval_analysis.component';

describe('IntervalAnalysisComponent', () => {
  let component: IntervalAnalysisComponent;
  let fixture: ComponentFixture<IntervalAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
