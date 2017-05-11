import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  template: `
    <h1>Login</h1>
    <div>
      <input type="text" [(ngModel)]="user" placeholder="User">
      <input type="password" [(ngModel)]="password" placeholder="Password">
      <button (click)="login()" class="btn btn-primary">Login</button>
    </div>
  `
})
export class LoginFormComponent {

  user = '';
  password = '';

  constructor(private router: Router,
              private loginService: LoginService) { }

  login() {
    if (this.loginService.login(this.user, this.password)) {
      this.router.navigate(['/']);
    }
  }

}
