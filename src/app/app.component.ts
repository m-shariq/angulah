import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message: String="";
  constructor(private router:Router) { }

  ngOnInit(): void {
    
    if(this.message==""){
      const redirect1 = '/login';
      this.router.navigate([redirect1]);
    }
  }
}
