import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationsComponent } from './reservations.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [ReservationsComponent],
  imports: [CommonModule, ReservationsRoutingModule, MaterialModule],
})
export class ReservationsModule {}
