import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RoomsModal } from 'src/app/core/models/site/rooms/rooms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  apiUrl = environment.apiURL

  constructor(
    private http : HttpClient
  ) { }


  getAllRooms() : Observable<RoomsModal[]>{

    return this.http.get<RoomsModal[]>(this.apiUrl + '/rooms')

  }

  getRoomById(roomId: number): Observable<RoomsModal>{

    // var API_URL = `${this.apiUrlDB}/${id}`;
    // return this.http.delete(API_URL).pipe(catchError(this.handleError));


    const room = this.http.get<RoomsModal>(this.apiUrl + '/rooms/' + roomId );
    if (!room) {
        throw new Error('Oups ! cette chambre n\'existe pas !');
    } else {
        return room;
    }
  }

}
