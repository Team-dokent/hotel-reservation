import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {ContactModel } from 'src/app/core/models/site/contact/contact';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiURL = environment.apiURL;

  constructor(
    private http: HttpClient
  ) { }

  sendContact(data : ContactModel): Observable <ContactModel> {
    
    const contact: ContactModel =  {
      sujet : data.sujet,
      message : data.message,
      email : data.email,
      date : data.date
      
    }

    return this.http.post<ContactModel>(this.apiURL + "/contact", contact).pipe(map(
      (res:any) => {
          return res;
      }
    ))

  }
}
