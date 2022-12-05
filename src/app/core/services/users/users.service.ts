import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { v4 as uuidv4 } from 'uuid';

export interface UserForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  addUser(data: UserForm): Observable<User> {
    const id = uuidv4();
    const user: User = {
      ...data,
      id,
      isActive: true,
      password: 'password',
    };
    return this.http.post<User>(`${this.baseUrl}/users`, user);
  }

  updateUser(courseId: string | number, changes: Partial<User>) {
    return this.http.put('/api/course/' + courseId, changes);
  }

  update(id: number, user: User): Observable<any> {
    // return this.http.put(
    //   this.apiURL + '/posts/' + id,
    //   JSON.stringify(user),
    //   this.httpOptions
    // );

    return this.http.put(`${this.baseUrl}/users/${id}`, JSON.stringify(user));

    // .pipe(
    //   catchError(this.errorHandler)
    // )
  }

  deleteUser(id: string | number) {
    return this.http.delete(`${this.baseUrl}/users/${id}`);
  }

  // deleteUser(id: string): Observable<boolean>
}
