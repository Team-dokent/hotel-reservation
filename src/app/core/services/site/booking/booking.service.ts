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

    const room = this.http.get<RoomsModal[]>(this.apiUrl + '/rooms/?typeRoom=' + roomType);
    if (!room) {
      throw new Error('Oups ! cette chambre n\'existe pas !');
    } else {
      return room;
    }
  }


  registerReservation(dataForm: any): Observable<boolean> {

    return this.http.post<any>(this.apiUrl + '/reservations', dataForm).pipe(
      map((res: any) => {
        return res;
      })
    );

  }


  // available from the room
  availableFromRoom(dataForm: any): Observable<any> {

    let reservation = this.http.get<BookingModel[]>(this.apiUrl + '/reservations/?dateStart=' + dataForm.start + '&' + 'dateEnd=' + dataForm.end + '&' + 'id=' + dataForm.roomId)
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
  updateRoomAvailability(id: any) {

    let room = this.getAllRoomById(id);


    console.log("Update " + room.subscribe());


    // const room: RoomsModal = {
    //   id: data.id,

    // };

    // return this.http.put(this.apiUrl , student, { headers: this.headers }).pipe(
    //   map((res: any) => {
    //     return res;
    //   })
    // );

  }

}
