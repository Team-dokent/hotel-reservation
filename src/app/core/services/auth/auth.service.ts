import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
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
    private tokenService: TokenService,
    private _snackBar: MatSnackBar
  ) {}

  durationInSeconds = 2;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

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
          this.openSnackBar('Connection avec success');
          this.router.navigate(['admin/users']);
        } else {
          this.openSnackBar("Cet utilisateur n'existe pas");
        }
      });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'x', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }
}
