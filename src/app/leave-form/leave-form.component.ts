import { Component, OnInit } from '@angular/core';
import { leaveForm } from '../leaveForm';
import { LoginService } from '../login.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.css']
})
export class LeaveFormComponent implements OnInit {

  hod:string = "No Data";
  faculty:string= "No Data";
  user:string= "No Data";
  email:string = "No Data";
  status:string  = "No Data";
  reason:string = "No Data";
  numberOfDays:string = "No Data";
  startDate:string = "No Data";
  hodMessage:string = "";

  users:leaveForm[];

  constructor(private LoginService:LoginService, private route: ActivatedRoute,
    private router: Router) { 
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    const userId = this.route.snapshot.params['userId'];
    this.LoginService.readUsersLeaveForm(id,userId).subscribe((users: leaveForm[])=>{
      
      console.log(users);

      this.user = users[0].username;
      this.email = users[0].email;
      this.startDate = users[0].date_from;
      
      if(users[0].status == "faculty")
        this.reason = users[0].faculty_message;
      else
        this.reason = users[0].student_message;

      this.numberOfDays = users[0].leave_days;
      this.status = users[0].status;
      this.hodMessage = users[0].hod_message;
      this.faculty = "Faculty";
      this.hod = "HOD"
      
      

    })
  }

  printPage() {
    window.print();
  }

}
