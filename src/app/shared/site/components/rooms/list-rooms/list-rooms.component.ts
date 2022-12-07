import { Component, Input, OnInit } from '@angular/core';
import { RoomsModal } from 'src/app/core/models/site/rooms/rooms';
import { RoomsService } from 'src/app/core/services/site/rooms/rooms.service';

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.scss']
})
export class ListRoomsComponent implements OnInit {

  //injection du model
  @Input() 
  listRooms! : RoomsModal[]
  @Input() typeRom!: string;

  constructor(
    private apiService: RoomsService
  ) { }

  ngOnInit(): void {

  }


}
