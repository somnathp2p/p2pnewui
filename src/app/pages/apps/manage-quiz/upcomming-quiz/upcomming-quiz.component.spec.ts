import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingQuizComponent } from './upcomming-quiz.component';

describe('UpcommingQuizComponent', () => {
  let component: UpcommingQuizComponent;
  let fixture: ComponentFixture<UpcommingQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcommingQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcommingQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
