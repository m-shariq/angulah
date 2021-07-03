import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodLeaveApprovalComponent } from './hod-leave-approval.component';

describe('HodLeaveApprovalComponent', () => {
  let component: HodLeaveApprovalComponent;
  let fixture: ComponentFixture<HodLeaveApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodLeaveApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HodLeaveApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
