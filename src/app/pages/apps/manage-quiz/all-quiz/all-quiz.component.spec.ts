import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQuizComponent } from './all-quiz.component';

describe('AllQuizComponent', () => {
  let component: AllQuizComponent;
  let fixture: ComponentFixture<AllQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
