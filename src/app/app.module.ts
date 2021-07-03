import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentDashComponent } from './student-dash/student-dash.component';
import { FacultyDashComponent } from './faculty-dash/faculty-dash.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { HodDashComponent } from './hod-dash/hod-dash.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { DeleteAdminComponent } from './delete-admin/delete-admin.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { FacultyLeaveApplyComponent } from './faculty-leave-apply/faculty-leave-apply.component';
import { FacultyLeaveStatusComponent } from './faculty-leave-status/faculty-leave-status.component';
import { FacultyLeaveApprovalComponent } from './faculty-leave-approval/faculty-leave-approval.component';
import { StudentLeaveApplyComponent } from './student-leave-apply/student-leave-apply.component';
import { StudentLeaveStatusComponent } from './student-leave-status/student-leave-status.component';
import { HodLeaveApprovalComponent } from './hod-leave-approval/hod-leave-approval.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentDashComponent,
    FacultyDashComponent,
    AdminDashComponent,
    HodDashComponent,
    AddAdminComponent,
    UpdateAdminComponent,
    DeleteAdminComponent,
    LeaveFormComponent,
    FacultyLeaveApplyComponent,
    FacultyLeaveStatusComponent,
    FacultyLeaveApprovalComponent,
    StudentLeaveApplyComponent,
    StudentLeaveStatusComponent,
    HodLeaveApprovalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
