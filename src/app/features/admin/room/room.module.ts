import { MaterialModule } from 'src/app/shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { RoomFormComponent } from './components/room-form/room-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [RoomComponent, RoomFormComponent, ConfirmDialogComponent],
  imports: [
    CommonModule,
    RoomRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class RoomModule {}
