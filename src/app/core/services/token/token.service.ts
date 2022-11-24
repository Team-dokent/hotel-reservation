import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private router: Router) {}

  saveToken(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  isLogged(): boolean {
    const user = localStorage.getItem('user');
    return !!user;
  }

  clearToken(): void {
    localStorage.removeItem('user');
  }
}
