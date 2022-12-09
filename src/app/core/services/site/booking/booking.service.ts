import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, of } from 'rxjs';
import { BookingModel } from 'src/app/core/models/site/booking/booking';
import { RoomsModal } from 'src/app/core/models/site/rooms/rooms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  apiUrl = environment.apiURL;
  reservation!: any;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(
    private http: HttpClient
  ) { }


  getAllRoomByType(roomType: string): Observable<RoomsModal[]> {

    const room = this.http.get<RoomsModal[]>(this.apiUrl + '/rooms/?typeRoom=' + roomType  + '&' + 'available=' + 0);
    if (!room) {
      throw new Error('Oups ! cette chambre n\'existe pas !');
    } else {
      return room;
    }
  }

  // Recupere tous les chambres disponibles
  getAllRoomByAvailable(): Observable<RoomsModal[]> {
    const room = this.http.get<RoomsModal[]>(this.apiUrl + '/rooms/?available=' + 0);
  
    if (!room) {
      throw new Error('Oups ! cette chambre n\'existe pas !');
    } else {
      return room;
    }
  }


  registerReservation(dataForm: any): Observable<boolean> {

    const reservation: BookingModel = {
      ...dataForm,
      status: 'pending'
    }

    return this.http.post<any>(this.apiUrl + '/reservations', reservation).pipe(
      map((res: any) => {
        return res;
      })
    );

  }


  // available from the room
  availableFromRoom(dataForm: any): Observable<any> {

    let reservation = this.http.get<BookingModel[]>(this.apiUrl + '/reservations/?start=' + dataForm.start + '&' + 'end=' + dataForm.end + '&' + 'roomId=' + dataForm.roomId)
      .pipe(
        map((res: any) => {
          return res;
        })
      );

    return reservation;

  }



  getAllRoomById(roomId: any): Observable<RoomsModal[]> {
    const room = this.http.get<RoomsModal[]>(this.apiUrl + '/rooms/?id=' + roomId);
    if (!room) {
      throw new Error('Oups ! cette chambre n\'existe pas !');
    } else {
      return room;
    }
  }

  //change room availability
  updateRoomAvailability(data : Partial<RoomsModal>  , id: any) : Observable<any> {
    return this.http.put(`${this.apiUrl}/rooms/${id}`, data);
  }

}
