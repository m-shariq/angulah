import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLeaveApplyComponent } from './student-leave-apply.component';

describe('StudentLeaveApplyComponent', () => {
  let component: StudentLeaveApplyComponent;
  let fixture: ComponentFixture<StudentLeaveApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLeaveApplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLeaveApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
