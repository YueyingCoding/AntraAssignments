import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = ['user1', 'user2', 'user3'];
  constructor(private router: Router) {  }

  login(username: string): boolean {
    if (this.users.includes(username)) {
      this.router.navigate(['/home']);
      return true;
    }
    return false;
  }
  register() {
    this.router.navigate(['register']);
  }
}
