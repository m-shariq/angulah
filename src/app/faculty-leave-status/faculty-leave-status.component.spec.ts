import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyLeaveStatusComponent } from './faculty-leave-status.component';

describe('FacultyLeaveStatusComponent', () => {
  let component: FacultyLeaveStatusComponent;
  let fixture: ComponentFixture<FacultyLeaveStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyLeaveStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyLeaveStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
