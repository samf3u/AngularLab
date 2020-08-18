import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validUsers = [{login: "abc", upwd: "123"}, {login: "def", upwd: "123"}, {login: "ghi", upwd: "123"}];
 
  

  constructor() { }
  
  

  ngOnInit(): void {
  }
  username = "";
  upwd = "";
  errorMessage = "";
  loginClicked() {
      var i;
      var success = false;

      for (i=0; i < this.validUsers.length; i++) {
          if (this.validUsers[i].login == this.username) {
              if (this.validUsers[i].upwd == this.upwd) {
                success = true;
              }
          }
      }

      if (success == false) {
        this.errorMessage = "Invalid Login Details!"
      } else {
        this.errorMessage = "Correct!"
      }
  }

}
