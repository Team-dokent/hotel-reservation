import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from '../../models/room.model';
import { Observable } from 'rxjs';
import { FormValue } from 'src/app/features/admin/room/components/room-form/room-form.component';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.baseUrl}/rooms`);
  }

  addRoom(data: FormValue): Observable<Room> {
    const id = uuidv4();
    const room: Room = {
      ...data,
      id,
      adult: 2,
      children: 2,
      createdAt: new Date(),
    };

    return this.http.post<Room>(`${this.baseUrl}/rooms`, room);
  }

  updateRoom(id: number | string, changes: Partial<Room>): Observable<Room> {
    return this.http.put<Room>(`${this.baseUrl}/rooms/${id}`, changes);
  }

  deleteRoom(id: string | number) {
    return this.http.delete(`${this.baseUrl}/rooms/${id}`);
  }
}
