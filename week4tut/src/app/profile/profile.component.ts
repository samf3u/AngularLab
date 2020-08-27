import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {User} from '../models/User'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private route: Router) {}
  public User: User;
  
  public NavigateTo(page: string)  {
    this.route.navigate(['/' + page]);
  }
  user = {username: "", birthdate: "", age: 0, email: "", valid : false};
  ngOnInit(): void {
    

    if (sessionStorage.getItem("username") !== "") {
        //let ageString = this.user.age.toString(8)
        let validString = this.user.valid.toString()

        this.user.username = sessionStorage.getItem("username")
        this.user.birthdate = sessionStorage.getItem("birthdate")
        let ageString = sessionStorage.getItem("age")
        this.user.age = JSON.parse(ageString)
        this.user.email = sessionStorage.getItem("email")
        validString = sessionStorage.getItem("valid")
    }
    console.log(this.user)
  }

  saveChanges(){
    let ageString = String(this.user.age)
    //let validString = this.user.valid.toString()

    sessionStorage.setItem("username", this.user.username)
    sessionStorage.setItem("birthdate", this.user.birthdate)
    sessionStorage.setItem("age", ageString)
    sessionStorage.setItem("email", this.user.email)
    //sessionStorage.setItem("valid", validString)

    this.NavigateTo("account")
  }
}
