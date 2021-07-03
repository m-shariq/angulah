import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnDestroy } from "@angular/core";
import { Subscription, timer } from "rxjs";
import { map, share } from "rxjs/operators";
import { login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit,OnDestroy {

  time = new Date();
  rxTime = new Date();
  intervalId;
  subscription: Subscription;
  
  userCurrent:  login  = { id :  0 , username:"", password:  "", email: "", status: "",leave_left:0,leave_quota:0};
  constructor(private router:Router, private LoginService:LoginService) { }

  ngOnInit(): void {
    if(!(sessionStorage.getItem("status")=="admin")){
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

  createUser(form: { value: login; }){
    console.log(form.value);
        this.LoginService.addUser(form.value).subscribe((user: login)=>{
          console.log("User created, ", user);
        }); 
    }


}


