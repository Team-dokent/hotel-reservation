import { Component, Input, OnInit } from '@angular/core';
import { RoomsModal } from 'src/app/core/models/site/rooms/rooms';
import { RoomsService } from 'src/app/core/services/site/rooms/rooms.service';

@Component({
  selector: 'app-rooms4',
  templateUrl: './rooms4.component.html',
  styleUrls: ['./rooms4.component.scss']
})
export class Rooms4Component implements OnInit {

    
  @Input() listRooms!: RoomsModal[];
  @Input() typeRom!: string;
 
  rooms! : RoomsModal[];
  typeRoom4 = "rooms4Person";

  constructor(
    private apiService: RoomsService
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
