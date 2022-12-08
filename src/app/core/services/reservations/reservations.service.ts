import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../../models/reservation.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.baseUrl}/reservations`);
  }

  updateReservation(
    id: number | string,
    reservation: Reservation
  ): Observable<Reservation> {
    return this.http.put<Reservation>(
      `${this.baseUrl}/reservations/${id}`,
      reservation
    );
  }
}
