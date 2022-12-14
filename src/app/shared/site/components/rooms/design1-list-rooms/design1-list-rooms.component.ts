import { Component, Input, OnInit } from '@angular/core';
import { RoomsModal } from 'src/app/core/models/site/rooms/rooms';
import { RoomsService } from 'src/app/core/services/site/rooms/rooms.service';

@Component({
  selector: 'app-design1-list-rooms',
  templateUrl: './design1-list-rooms.component.html',
  styleUrls: ['./design1-list-rooms.component.scss']
})
export class Design1ListRoomsComponent implements OnInit {

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
