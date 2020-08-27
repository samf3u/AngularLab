import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week4tut';

  constructor(private route: Router) {}

  public NavigateTo(page: string)  {
    this.route.navigate(['/' + page]);
  }

  logoutClicked(){
    sessionStorage.removeItem("username")
    sessionStorage.removeItem("birthdate")
    sessionStorage.removeItem("age")
    sessionStorage.removeItem("email")
    //sessionStorage.removeItem("valid")
    sessionStorage.setItem("valid", "false")
    this.NavigateTo("login");
  }
}
