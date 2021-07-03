import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnDestroy } from "@angular/core";
import { quota } from '../quota';
import { LoginService } from '../login.service';
import { Subscription, timer } from "rxjs";
import { map, share } from "rxjs/operators";
import { leaveStatus } from '../leaveStatus';

@Component({
  selector: 'app-hod-leave-approval',
  templateUrl: './hod-leave-approval.component.html',
  styleUrls: ['./hod-leave-approval.component.css']
})
export class HodLeaveApprovalComponent implements OnInit {
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

  hodleaveapprovalspendingforstudents: leaveStatus[];
  hodleaveapprovalspendingforfaculty: leaveStatus[];
  
  replyMessage:string;
  constructor(private router:Router,private LoginService:LoginService) { 
    this.replyMessage="";
  }

  ngOnInit(): void {
    this.name=(sessionStorage.getItem("name")||'');
    this.email=(sessionStorage.getItem("email")||'');
    this.id=(sessionStorage.getItem("id")||'');


    this.LoginService.hodLeaveApprovalsPendingForStuds().subscribe((users: leaveStatus[])=>{
      this.hodleaveapprovalspendingforstudents = users;
      console.log(this.hodleaveapprovalspendingforstudents);
    })
    this.LoginService.hodLeaveApprovalsPendingForFacs().subscribe((users: leaveStatus[])=>{
      this.hodleaveapprovalspendingforfaculty = users;
      console.log(this.hodleaveapprovalspendingforfaculty);
    })
    



    if(!(sessionStorage.getItem("status")=="hod")){
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

  approveStudentLeaveHOD(uid:number, id:number,ldays:number){
    console.log(id);
    this.LoginService.approveStudentLeaveHOD(id.toString(), this.replyMessage).subscribe(()=>{
      this.LoginService.hodLeaveApprovalsPendingForStuds().subscribe((users: leaveStatus[])=>{
        
        this.hodleaveapprovalspendingforstudents = users;
  
        console.log(this.hodleaveapprovalspendingforstudents);

        this.LoginService.deductLeave(uid.toString(),ldays.toString()).subscribe(()=>{
          console.log("quota deducted");
        })
      })
    })

    
    
  }
  rejectStudentLeaveHOD(id:number){
    console.log(id);
    this.LoginService.rejectStudentLeaveHOD(id.toString(),this.replyMessage).subscribe(()=>{
      this.LoginService.hodLeaveApprovalsPendingForStuds().subscribe((users: leaveStatus[])=>{
        this.hodleaveapprovalspendingforstudents = users;
        console.log(this.hodleaveapprovalspendingforstudents);
      })
    })
    
  }

  approveFacultytLeaveHOD(uid:number ,id:number,msg:string,ldays:number){

    this.LoginService.approveFacultyLeaveHOD(id.toString(),this.replyMessage).subscribe(()=>{

      this.LoginService.hodLeaveApprovalsPendingForFacs().subscribe((users: leaveStatus[])=>{
        this.hodleaveapprovalspendingforfaculty = users;
        console.log(this.hodleaveapprovalspendingforfaculty);

        this.LoginService.deductLeave(uid.toString(),ldays.toString()).subscribe(()=>{
          console.log("quota deducted");
        })

      })
    })
   
  }
  rejectFacultyLeaveHOD(id:number){
    console.log(id);

    this.LoginService.rejectFacultyLeaveHOD(id.toString(),this.replyMessage).subscribe(()=>{
      this.LoginService.hodLeaveApprovalsPendingForFacs().subscribe((users: leaveStatus[])=>{
        this.hodleaveapprovalspendingforfaculty = users;
        console.log(this.hodleaveapprovalspendingforfaculty);
      })
    })
    
  }
}
