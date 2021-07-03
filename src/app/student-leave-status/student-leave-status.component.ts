import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnDestroy } from "@angular/core";
import { Subscription, timer } from "rxjs";

import { leaveStatus } from '../leaveStatus';

import { LoginService } from '../login.service';
import { map, share } from "rxjs/operators";

@Component({
  selector: 'app-student-leave-status',
  templateUrl: './student-leave-status.component.html',
  styleUrls: ['./student-leave-status.component.css']
})
export class StudentLeaveStatusComponent implements OnInit {
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
  leaves: leaveStatus[];
  constructor(private router:Router, private LoginService:LoginService) { }

  ngOnInit(): void {    

    this.name=(sessionStorage.getItem("name")||'');
    this.email=(sessionStorage.getItem("email")||'');
    this.id=(sessionStorage.getItem("id")||'');
    this.leave_quota=(sessionStorage.getItem("leave_quota")||'');
    this.leave_left=(sessionStorage.getItem("leave_left")||'');
    this.status=(sessionStorage.getItem("status")||'');

    this.LoginService.readStudentLeave(this.id).subscribe((leaves: leaveStatus[])=>{
      this.leaves = leaves;
      console.log(this.leaves);
    })
    
    if(!(sessionStorage.getItem("status")=="student")){
      const redirect1 = '/login';
      this.router.navigate([redirect1]);
    } 
    // Using Basic Interval
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

 genLeaveForm(nummy:number){
   console.log(nummy);
   console.log(sessionStorage.getItem("id"));
   const redirect = `/leaveForm/${nummy}/${sessionStorage.getItem("id")}`;
   this.router.navigate([redirect]);
 }

}
