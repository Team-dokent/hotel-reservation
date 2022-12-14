import { Component,  Input,  OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RoomsModal } from 'src/app/core/models/site/rooms/rooms';
import { BookingService } from 'src/app/core/services/site/booking/booking.service';
import { RoomsService } from 'src/app/core/services/site/rooms/rooms.service';
// import Swiper core and required modules
import SwiperCore, {Autoplay,EffectCube, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// install Swiper modules
SwiperCore.use([Autoplay,EffectCube,Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation : ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  @Input() listRooms!: RoomsModal[];
  @Input() typeRom!: string;
 
  rooms! : RoomsModal[];
  typeRoom2 = "rooms2Person";
  typeSuite = "suite";

  roomsBooking! : RoomsModal[];

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private apiService: RoomsService,
    private apiBooking : BookingService
  ) { }

  ngOnInit(): void {

    this.handleGetAllRooms();

  }

  handleGetAllRooms(){

    this.apiService.getAllRooms().subscribe({
      next : (data) => {
        this.rooms = data;
      },
      error : (err) => {
        console.log( err);
      }
    })
  }


}
