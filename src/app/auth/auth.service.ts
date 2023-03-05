import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;
  private role = '';

  constructor() {}

  get isLoggedIn() {
    return this.loggedIn;
  }

  getRole() {
    return this.role;
  }

  login(username: string, password: string) {
    if (username && password) {
      this.loggedIn = true;
      if (username === 'admin') this.role = 'admin';
    }
    console.log('My role ', this.role);
  }

  logout() {
    this.loggedIn = false;
    this.role = '';
  }
}
