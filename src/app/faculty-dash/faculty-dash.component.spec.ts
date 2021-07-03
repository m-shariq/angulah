import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyDashComponent } from './faculty-dash.component';

describe('FacultyDashComponent', () => {
  let component: FacultyDashComponent;
  let fixture: ComponentFixture<FacultyDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
