import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { login } from '../login';
import { Router } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { OnDestroy } from "@angular/core";
import { Subscription, timer } from "rxjs";
import { map, share } from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userCurrent:  login  = { id :  0 , username:"", password:  "", email: "", status: "",leave_left:0,leave_quota:0};
  message: String="";
  time = new Date();
  rxTime = new Date();
  intervalId;
  subscription: Subscription;

  constructor(private LoginService: LoginService,private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("status")=="student"){
      const redirect1 = '/student';
      this.router.navigate([redirect1]);
    }
    if(sessionStorage.getItem("status")=="hod"){
      const redirect1 = '/hod';
      this.router.navigate([redirect1]);
    }
    if(sessionStorage.getItem("status")=="faculty"){
      const redirect1 = '/faculty';
      this.router.navigate([redirect1]);
    }
    if(sessionStorage.getItem("status")=="admin"){
      const redirect1 = '/admin';
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
  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  loginUser(form: { value: login; }){ 
    if(form.value.email=="" && form.value.password==""){
      this.message="Kindly fill all the fields";
      return;
    }  
    this.LoginService.loginUser(form.value).subscribe((login: login[])=>{
      console.log("Course created, ",login[0]);
      if(login.length==0){
        this.message= "Incorrect Credentials";
      }
      else{
        sessionStorage.setItem("id",(login[0].id).toString());
        console.log(login[0].username);
        sessionStorage.setItem("name",login[0].username);
        sessionStorage.setItem("email",login[0].email);
        sessionStorage.setItem("leave_quota",(login[0].leave_quota).toString());
        sessionStorage.setItem("leave_left",(login[0].leave_left).toString());
        this.message= "";
        switch(login[0].status){
          case "student":
            sessionStorage.removeItem("status");
            sessionStorage.setItem("status","student");
            const redirect = '/student';
            this.router.navigate([redirect]);
            break;
          case "hod":
            sessionStorage.removeItem("status");
            sessionStorage.setItem("status","hod");
            const redirect1 = '/hod';
            this.router.navigate([redirect1]);
            break;
          case "faculty":
            sessionStorage.removeItem("status");
            sessionStorage.setItem("status","faculty");
            const redirect2 = '/faculty';
            this.router.navigate([redirect2]);
            break;
          case "admin":
            sessionStorage.removeItem("status");
            sessionStorage.setItem("status","admin");
            const redirect3 = '/admin';
            this.router.navigate([redirect3]);
            break;
        }        
      }
    });
  }
}
