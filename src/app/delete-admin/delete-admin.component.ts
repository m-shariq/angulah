import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnDestroy } from "@angular/core";
import { Subscription, timer } from "rxjs";
import { map, share } from "rxjs/operators";
import { login } from '../login';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-delete-admin',
  templateUrl: './delete-admin.component.html',
  styleUrls: ['./delete-admin.component.css']
})
export class DeleteAdminComponent implements OnInit,OnDestroy {

  
  time = new Date();
  rxTime = new Date();
  intervalId;
  subscription: Subscription;
  userCurrent:  login  = { id :  0 , username:"", password:  "", email: "", status: "",leave_left:0,leave_quota:0};
  users:login[];
  constructor(private router:Router, private LoginService:LoginService) { }

  ngOnInit(): void {

    this.LoginService.readUsers().subscribe((users: login[])=>{
      this.users = users;
      console.log(this.users);
    })

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

  deleteUser(id:number){
    this.LoginService.deleteUser(id).subscribe((user:login)=>{
      console.log("user deleted, ",user);
      this.LoginService.readUsers().subscribe((users: login[])=>{
        this.users = users;
      })
    });
  }



}


