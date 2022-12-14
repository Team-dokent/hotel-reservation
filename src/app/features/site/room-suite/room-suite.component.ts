import { Component, Input, OnInit } from '@angular/core';
import { RoomsModal } from 'src/app/core/models/site/rooms/rooms';
import { RoomsService } from 'src/app/core/services/site/rooms/rooms.service';

@Component({
  selector: 'app-room-suite',
  templateUrl: './room-suite.component.html',
  styleUrls: ['./room-suite.component.scss']
})
export class RoomSuiteComponent implements OnInit {

  
  @Input() listRooms!: RoomsModal[];
  @Input() typeRom!: string;
 
  rooms! : RoomsModal[];
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
