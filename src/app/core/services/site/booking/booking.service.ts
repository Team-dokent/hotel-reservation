import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from 'src/app/core/models/site/booking/booking';

import { catchError } from 'rxjs/operators';
import { Observable, throwError, map } from 'rxjs';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  apiUrl: string = 'http://localhost:3000/booking';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  createBooking(data:any) : Observable<Booking> {

    const booking: Booking = {
      id: UUID.UUID(),
      dateStart : data.dateStart,
      dateEnd : data.dateEnd,
      adult : data.adult,
      child : data.child,
      roms : data.roms,
      idUser : data.idUser || "1",

    }

    return this.http.post<any>('http://localhost:3000/booking', booking).pipe(
        map((res: any) => {
          return res;
        })
    );

  }

}
