import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormValues } from 'src/app/shared/interfaces/login/login';
import { User } from '../../models/user';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService
  ) {}

  message!: string;

  login(data: LoginFormValues) {
    this.http
      .get<User[]>('http://localhost:3000/users')
      .subscribe((users: User[]) => {
        const user = users.find(
          (user: User) =>
            user.email === data.email && user.password === data.password
        );

        if (user) {
          this.tokenService.saveToken(user);
          this.router.navigate(['admin/dashboard']);
        } else {
          this.message = "Cet utilisateur n'existe pas";
        }
      });
  }
}
