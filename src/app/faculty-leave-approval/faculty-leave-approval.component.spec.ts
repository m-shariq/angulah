import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyLeaveApprovalComponent } from './faculty-leave-approval.component';

describe('FacultyLeaveApprovalComponent', () => {
  let component: FacultyLeaveApprovalComponent;
  let fixture: ComponentFixture<FacultyLeaveApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyLeaveApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyLeaveApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
