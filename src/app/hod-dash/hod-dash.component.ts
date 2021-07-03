import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnDestroy } from "@angular/core";
import { quota } from '../quota';
import { LoginService } from '../login.service';
import { Subscription, timer } from "rxjs";
import { map, share } from "rxjs/operators";

@Component({
  selector: 'app-hod-dash',
  templateUrl: './hod-dash.component.html',
  styleUrls: ['./hod-dash.component.css']
})
export class HodDashComponent implements OnInit {
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
  selectedUser1:quota  = { quota :  0, status: "student"};
  selectedUser2:quota  = { quota :  0, status: "faculty"};

  constructor(private router:Router,private LoginService:LoginService) { }

  ngOnInit(): void {
    this.name=(sessionStorage.getItem("name")||'');
    this.email=(sessionStorage.getItem("email")||'');
    this.id=(sessionStorage.getItem("id")||'');
    this.leave_quota=(sessionStorage.getItem("leave_quota")||'');
    this.leave_left=(sessionStorage.getItem("leave_left")||'');
    this.status=(sessionStorage.getItem("status")||'');

    
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
  updateQuota(form: { value: quota; }){
    
    //form.value.username = this.selectedUser.username;
		 //form.value.email = this.selectedUser.email;
		 //form.value.status = this.selectedUser.status;
      console.log(form.value);
			this.LoginService.updateQuota(form.value).subscribe((quota:quota)=>{
			console.log("quota updated" , quota);
			//this.LoginService.readUsers().subscribe((users: quota[])=>{
				//this.users = users;
			//})
		});
  }

}
