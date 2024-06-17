import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (!this.authService.login(this.username)) {
      this.errorMessage = 'User does not exist'
    }
    else {
      this.errorMessage = '';
    }
  }

  onRegister() {
    this.authService.register();
  }
}
