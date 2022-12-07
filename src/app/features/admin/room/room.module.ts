import { MaterialModule } from 'src/app/shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { RoomFormComponent } from './components/room-form/room-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RoomComponent, RoomFormComponent],
  imports: [
    CommonModule,
    RoomRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class RoomModule {}
