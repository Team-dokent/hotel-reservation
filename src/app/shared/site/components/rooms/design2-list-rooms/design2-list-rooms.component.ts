import { Component, Input, OnInit } from '@angular/core';
import { RoomsModal } from 'src/app/core/models/site/rooms/rooms';
import { BookingService } from 'src/app/core/services/site/booking/booking.service';
import { NotifyService } from '../../../notify/notify.services';

@Component({
  selector: 'app-design2-list-rooms',
  templateUrl: './design2-list-rooms.component.html',
  styleUrls: ['./design2-list-rooms.component.scss']
})
export class Design2ListRoomsComponent implements OnInit {

   //injection du model
   @Input() 
   listRooms! : RoomsModal[]
   @Input() typeRom!: string;

   dataNotify! : string ;
 
   constructor(
     private apiBooking : BookingService,
     private sweteAlert  : NotifyService,
   ) { }

  ngOnInit(): void {

  }


}
