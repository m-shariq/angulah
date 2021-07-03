import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnDestroy } from "@angular/core";
import { Subscription, timer } from "rxjs";
import { map, share } from "rxjs/operators";
import { leaveStatus } from '../leaveStatus';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-faculty-leave-approval',
  templateUrl: './faculty-leave-approval.component.html',
  styleUrls: ['./faculty-leave-approval.component.css']
})
export class FacultyLeaveApprovalComponent implements OnInit {

  time = new Date();
  rxTime = new Date();
  intervalId;
  subscription: Subscription;
  id: string;
  name: string;
  password: string;
  email: string;
  status: string;
  leave_quota: string;
  leave_left: string;
  
  facultyleaveapprovalspending: leaveStatus[];
  facultyleaveapprovalsapproved:leaveStatus[];
  facultyleaveapprovalsrejected:leaveStatus[];
  constructor(private router:Router, private LoginService:LoginService) { 
  }

  ngOnInit(): void {
    this.name=(sessionStorage.getItem("name")||'');
    this.email=(sessionStorage.getItem("email")||'');
    this.id=(sessionStorage.getItem("id")||'');
    this.leave_quota=(sessionStorage.getItem("leave_quota")||'');
    this.leave_left=(sessionStorage.getItem("leave_left")||'');
    this.status=(sessionStorage.getItem("status")||'');
    

    this.LoginService.facultyLeaveApprovalsPending().subscribe((users: leaveStatus[])=>{
      this.facultyleaveapprovalspending = users;
    })

    this.LoginService.facultyLeaveApprovalsApproved().subscribe((users: leaveStatus[])=>{
      this.facultyleaveapprovalsapproved = users;
      console.log(this.facultyleaveapprovalsapproved);    
    })

    this.LoginService.facultyLeaveApprovalsRejected().subscribe((users: leaveStatus[])=>{
      this.facultyleaveapprovalsrejected = users;
      console.log(this.facultyleaveapprovalsrejected);  
    })
    
    //console.log(sessionStorage.getItem("user")[0].);
    if(!(sessionStorage.getItem("status")=="faculty")){
      const redirect1 = '/login';
      this.router.navigate([redirect1]);
    } // Using Basic Interval
     this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

    // Using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.rxTime = time;
      });
  }
  signout(){
    sessionStorage.removeItem("status");
    const redirect = '/login';
    this.router.navigate([redirect]);
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  approveStudentLeaveFaculty(id:number){
    console.log(id);
    this.LoginService.approveStudentLeaveByFaculty(id.toString()).subscribe(()=>{
      console.log(id);

      this.LoginService.facultyLeaveApprovalsPending().subscribe((users: leaveStatus[])=>{
        this.facultyleaveapprovalspending = users;
        console.log(this.facultyleaveapprovalspending);
      })
  
      this.LoginService.facultyLeaveApprovalsApproved().subscribe((users: leaveStatus[])=>{
        this.facultyleaveapprovalsapproved = users;
        console.log(this.facultyleaveapprovalsapproved);
      })
  
      this.LoginService.facultyLeaveApprovalsRejected().subscribe((users: leaveStatus[])=>{
        this.facultyleaveapprovalsrejected = users;
        console.log(this.facultyleaveapprovalsrejected);
      })

    })
  }
  rejectStudentLeave(id:number){
    console.log(id);
    this.LoginService.rejectStudentLeaveByFaculty(id.toString()).subscribe(()=>{
      console.log(id);

      this.LoginService.facultyLeaveApprovalsPending().subscribe((users: leaveStatus[])=>{
        this.facultyleaveapprovalspending = users;
        console.log(this.facultyleaveapprovalspending);
      })
  
      this.LoginService.facultyLeaveApprovalsApproved().subscribe((users: leaveStatus[])=>{
        this.facultyleaveapprovalsapproved = users;
        console.log(this.facultyleaveapprovalsapproved);
      })
  
      this.LoginService.facultyLeaveApprovalsRejected().subscribe((users: leaveStatus[])=>{
        this.facultyleaveapprovalsrejected = users;
        console.log(this.facultyleaveapprovalsrejected);
      })

    })
  }


}
