import { Component, Input, OnInit } from '@angular/core';
import { RoomsModal } from 'src/app/core/models/site/rooms/rooms';
import { RoomsService } from 'src/app/core/services/site/rooms/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  
  @Input() listRooms!: RoomsModal[];
  @Input() typeRom!: string;
 
  rooms! : RoomsModal[];
  typeRoom2 = "rooms2Person";
  typeSuite = "suite";

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
