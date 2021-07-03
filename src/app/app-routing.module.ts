import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentDashComponent } from './student-dash/student-dash.component';
import { FacultyDashComponent } from './faculty-dash/faculty-dash.component';
import { HodDashComponent } from './hod-dash/hod-dash.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { DeleteAdminComponent } from './delete-admin/delete-admin.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { FacultyLeaveApplyComponent } from './faculty-leave-apply/faculty-leave-apply.component';
import { FacultyLeaveApprovalComponent } from './faculty-leave-approval/faculty-leave-approval.component';
import { FacultyLeaveStatusComponent } from './faculty-leave-status/faculty-leave-status.component';
import { StudentLeaveApplyComponent } from './student-leave-apply/student-leave-apply.component';
import { StudentLeaveStatusComponent } from './student-leave-status/student-leave-status.component';
import { HodLeaveApprovalComponent } from './hod-leave-approval/hod-leave-approval.component';
const routes: Routes = [{path: "login", component:LoginComponent},
                        {path: "student", component:StudentDashComponent},
                        {path: "faculty", component:FacultyDashComponent},
                        {path: "hod", component:HodDashComponent},
                        {path: "admin", component:AdminDashComponent},
                        {path: "addUser", component:AddAdminComponent},
                        {path: "updateUser", component:UpdateAdminComponent},
                        {path: "deleteUser", component:DeleteAdminComponent},
                        {path: "leaveForm/:id/:userId", component:LeaveFormComponent},
                        {path: "facultyApply", component:FacultyLeaveApplyComponent},
                        {path: "facultyStatus", component:FacultyLeaveStatusComponent},
                        {path: "facultyApproval", component:FacultyLeaveApprovalComponent},
                        {path: "studentStatus", component:StudentLeaveStatusComponent},
                        {path: "studentApply", component:StudentLeaveApplyComponent},
                        {path:"hodApproval",component:HodLeaveApprovalComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
