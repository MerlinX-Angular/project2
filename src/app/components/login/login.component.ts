import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  pageTitle = 'Login';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

   login(loginForm) {
      if (loginForm && loginForm.valid) {
        const userName = loginForm.form.value.userName;
        const password = loginForm.form.value.password;
          this.authService.login(userName, password);
      }
    }
}
