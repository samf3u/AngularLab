import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private route: Router) {}

  public NavigateTo(page: string)  {
    this.route.navigate(['/' + page]);
  }
  isLoggedIn = true;
  
  user = {username: "", birthdate: "", age: 0, email: "", valid : false};
  ngOnInit(): void {

    let storedValid = sessionStorage.getItem("valid");
    this.isLoggedIn = JSON.parse(storedValid)

    console.log("ACCOUNT: " + storedValid)
    if ( storedValid = "true"){
      //console.log("Is logged in changes to true")
      //this.isLoggedIn = true
      this.user.username = sessionStorage.getItem("username")
      this.user.birthdate = sessionStorage.getItem("birthdate")
      this.user.age = Number(sessionStorage.getItem("age"))
      this.user.email = sessionStorage.getItem("email")
    } else {
      console.log("Is logged in changes to false")
      //this.isLoggedIn = false
    }
  }

  editProfile(){
    this.NavigateTo("profile")
  }
}
