import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginFormValues } from 'src/app/shared/interfaces/login/login';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data: LoginFormValues) {
    this.http
      .get<User[]>('http://localhost:3000/users')
      .subscribe((users: User[]) => {
        const user = users.find(
          (user: User) =>
            user.email === data.email && user.password === data.password
        );

        if (user) {
          alert('success');
          localStorage.setItem('user', JSON.stringify(user));
        } else {
          alert('failed');
        }
      });
  }
}
