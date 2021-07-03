import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyLeaveApplyComponent } from './faculty-leave-apply.component';

describe('FacultyLeaveApplyComponent', () => {
  let component: FacultyLeaveApplyComponent;
  let fixture: ComponentFixture<FacultyLeaveApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyLeaveApplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyLeaveApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
