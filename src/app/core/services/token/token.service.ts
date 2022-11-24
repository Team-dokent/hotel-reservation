import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // isLogged(): boolean {
  //   const token = localStorage.getItem('token')
  //   return !! token
  // }

  isLogged(): boolean {
    const user = localStorage.getItem('user');
    if (user) {
      return true;
    } else {
      return false;
    }
    // return !! user
  }

  clearToken(): void {
    localStorage.removeItem('token');
  }
}
