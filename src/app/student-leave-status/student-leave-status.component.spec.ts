import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLeaveStatusComponent } from './student-leave-status.component';

describe('StudentLeaveStatusComponent', () => {
  let component: StudentLeaveStatusComponent;
  let fixture: ComponentFixture<StudentLeaveStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLeaveStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLeaveStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
