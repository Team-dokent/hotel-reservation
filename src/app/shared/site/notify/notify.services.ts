import { Injectable } from "@angular/core";
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root',
})

// npm install sweetalert2 @sweetalert2/ngx-sweetalert2
export class NotifyService {
    constructor(
    ) {}

    
  sweetAlertSuccess(data:string){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: data,
      toast : true,
      showConfirmButton: false,
      timer: 1500
    })
  }

//   'Suppression effectuée avec succès'
  sweetAlertDelete(data:string){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: data,
      toast : true,
      showConfirmButton: false,
      timer: 1500
    })
  }
  sweetAlertError(data:string){
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: data,
      toast : true,
      showConfirmButton: false,
      timer: 1500
    })
  }
  
}
  