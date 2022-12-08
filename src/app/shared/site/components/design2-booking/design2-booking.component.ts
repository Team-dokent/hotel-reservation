import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { NotifyService } from '../../notify/notify.services';
import { BookingService } from 'src/app/core/services/site/booking/booking.service';
import { BookingModel } from 'src/app/core/models/site/booking/booking';
import { RoomsModal } from 'src/app/core/models/site/rooms/rooms';




const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
@Component({
  selector: 'app-design2-booking',
  templateUrl: './design2-booking.component.html',
  styleUrls: ['./design2-booking.component.scss']
})
export class Design2BookingComponent implements OnInit {

  formBooking!: FormGroup;

  @Input() typeRom!: string;


  dataNotify !: string;


  myControl = new FormControl('');
  rooms! : RoomsModal[];


  constructor(
    private formBuilder : FormBuilder,
    private sweteAlert  : NotifyService,
    private apiBooking : BookingService,

  ) { }

  ngOnInit(): void {

    this.formBooking = this.formBuilder.group({

      start:['',Validators.required],
      end: ['', Validators.required],
      adult : ['', Validators.required],
      roomId : ['', Validators.required],
      phone : ['',
        [
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.minLength(10),
        ]
      ],
      email: ['',
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
          ]
      ],


    });

    this.handleGetAllRoomsByType();
  }



  // Get all bookings by type room
  handleGetAllRoomsByType(){
    this.apiBooking.getAllRoomByType(this.typeRom).subscribe({
      next : (data) => {
        this.rooms = data;
        console.log(data);
      },
      error : (err) => {
        this.dataNotify = "Oups ! échec d'envoie de message";
        this.sweteAlert.sweetAlertError(this.dataNotify);
        return;
      }

    });

  }


  // Getter method to access formcontrols
  get myFormControls(){
    return this.formBooking.controls;
  }

  handleOnSubmit(){

    console.log(JSON.stringify(this.formBooking.value, null, 2));

    if (this.formBooking.invalid) {
      this.dataNotify = "Oups ! erreur de champ"
      this.sweteAlert.sweetAlertError(this.dataNotify);
      return;
    }

    this.apiBooking.availableFromRoom(this.formBooking.value).subscribe({
        next : (data) => {
          if(Object.keys(data).length > 0){

            this.dataNotify = "Oups ! cette chambre est dégà occupée";
            this.sweteAlert.sweetAlertError(this.dataNotify);
            return;

          }else{

            this.apiBooking.registerReservation(this.formBooking.value).subscribe(
              res => {
                  this.dataNotify  = "Reservation éffectuée avec succès";


                  //this.apiBooking.updateRoomAvailability(this.formBooking.value.id);

                  this.sweteAlert.sweetAlertSuccess(this.dataNotify);
              },
              err => {
                this.dataNotify = "Oups ! une erreur";
                this.sweteAlert.sweetAlertError(this.dataNotify);
              })
          }
      },
      error : (err) => {
        this.dataNotify = "Oups ! une erreur";
        this.sweteAlert.sweetAlertError(this.dataNotify);
      }

    })
  }




}
