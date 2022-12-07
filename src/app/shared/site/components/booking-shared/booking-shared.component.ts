import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking-shared',
  templateUrl: './booking-shared.component.html',
  styleUrls: ['./booking-shared.component.scss']
})
export class BookingSharedComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
