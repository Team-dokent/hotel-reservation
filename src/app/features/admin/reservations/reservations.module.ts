import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationsComponent } from './reservations.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { UpdateReservationComponent } from './components/update-reservation/update-reservation/update-reservation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReservationsComponent, UpdateReservationComponent],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ReservationsModule {}
