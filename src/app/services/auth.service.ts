import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  isAuthenticated = false;
  userName: string;
  redirectUrl: string;

  constructor(private router: Router) { }

    login(userName, password): void {
      if (userName === password) {
         this.isAuthenticated = true;
         this.router.navigate(['/products']);
         return this.userName = userName;
         } else { alert('Įveskite teisingus slaptažodžius!'); }
    }

    logout(): void {
        this.isAuthenticated = false;
    }

    isLoggedIn(): boolean {
        return this.isAuthenticated;
    }

}
