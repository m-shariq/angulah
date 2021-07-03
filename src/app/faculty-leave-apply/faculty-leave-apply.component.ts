import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnDestroy } from "@angular/core";
import { Subscription, timer } from "rxjs";
import { leave } from '../leave';
import { map, share } from "rxjs/operators";
import { LoginService } from '../login.service';

@Component({
  selector: 'app-faculty-leave-apply',
  templateUrl: './faculty-leave-apply.component.html',
  styleUrls: ['./faculty-leave-apply.component.css']
})
export class FacultyLeaveApplyComponent implements OnInit {
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
  

  userCurrent:  leave  = { user_id :  0 , date_from:"", leave_days:  0, student_message: "", faculty_message: ""};
  constructor(private router:Router, private LoginService:LoginService) {}


  ngOnInit(): void {
    this.name=(sessionStorage.getItem("name")||'');
    this.email=(sessionStorage.getItem("email")||'');
    this.id=(sessionStorage.getItem("id")||'');
    this.leave_quota=(sessionStorage.getItem("leave_quota")||'');
    this.leave_left=(sessionStorage.getItem("leave_left")||'');
    this.status=(sessionStorage.getItem("status")||'');
    this.userCurrent.user_id=Number(this.id);
    
    
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
  facultyLeave(form: { value: leave; }){
    console.log(form.value);
        this.LoginService.facultyLeave(form.value).subscribe((leave: leave)=>{
          console.log("User created, ", leave);
        }); 
    }
}
