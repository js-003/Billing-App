import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
show = true;
loginobj = new LoginModel();
  constructor(private router: Router) {

  }
  login() : void{
    const User = localStorage.getItem('angular17users');

      this.router.navigateByUrl("/home");

  }

}
export class LoginModel {
  email: string;
  password: string;
  constructor(){
    this.email = "";
    this.password = "";
  }
}


