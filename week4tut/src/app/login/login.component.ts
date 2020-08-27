import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { Injectable, Injector } from '@angular/core';
// Importing HttpClient Module
import { HttpClient, HttpErrorResponse, HttpXhrBackend } from '@angular/common/http';
import { Observable} from 'rxjs';

interface User {
  username: string;
  password: string;
  birthday: string;
  age: number;
  email: string;
  valid: boolean
  };

@Injectable({
providedIn: 'root'
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})


export class LoginComponent implements OnInit {
  httpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
  //validUsers = [{login: "abc", upwd: "123"}, {login: "def", upwd: "123"}, {login: "ghi", upwd: "123"}];
  constructor(private route: Router) {}

  public NavigateTo(page: string)  {
    this.route.navigate(['/' + page]);
  }

  ngOnInit(): void {
    
  }

  user = {
    username: "",
    password: "",
    birthdate: "",
    age: 0,
    email: "",
    valid: false
  };

  errorMessage = "";
  
  loginClicked() {
    //#####################################################
    console.log("Login Clicked")

    this.httpClient.post<any>('http://localhost:3000/api', JSON.stringify(this.user) , {headers: {  //{"username":"sam","password":"123"}
      'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/json'
    }}).subscribe(
      res => {
        if (res.valid = true){
          console.log(res.username, res.birthdate, res.valid)

          if (typeof(Storage) !== "undefined"){
            let ageString = this.user.age.toString(8)
            //#####################################################
            console.log("AgeString: " + ageString)
            let validString = res.valid

            sessionStorage.setItem("username", res.username)
            sessionStorage.setItem("birthdate", res.birthdate)
            sessionStorage.setItem("age", res.age)
            sessionStorage.setItem("email", res.email)
            
            sessionStorage.setItem("valid", validString)
          
            //#####################################################
            console.log(sessionStorage)
            this.NavigateTo("account");
        }
          

        } else {
          this.errorMessage = "Invalid Login Details!"
        }
        
        
        /* alert(res)
        if (res.valid == false || res.valid == undefined){
          //this.NavigateTo("account");
          alert(res.age)
        } else {
          alert("good")
          //this.NavigateTo("");
        }; */
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
      }
    );  
    
      /* var i= 0;
      var success = false;

      for (i=0; i < this.validUsers.length; i++) {
          if (this.validUsers[i].login == this.user.login) {
              if (this.validUsers[i].upwd == this.user.upwd) {
                success = true;
              }
          }
      }

      if (success == false) {
        this.errorMessage = "Invalid Login Details!"
      } else {
        
        if (typeof(Storage) !== "undefined"){
            sessionStorage.setItem("username", this.user.login)
            sessionStorage.setItem("upwd", this.user.upwd)
            sessionStorage.setItem("isLoggedIn", "true")
        } */
        
        //this.errorMessage = "Correct!"
      }
  }


