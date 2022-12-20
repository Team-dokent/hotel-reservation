import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/features/admin/room/components/room-form/room-form.component';

@Component({
  selector: 'app-go-home-modal',
  templateUrl: './go-home-modal.component.html',
  styleUrls: ['./go-home-modal.component.scss'],
})
export class GoHomeModalComponent {
  constructor(
    public dialogRef: MatDialogRef<GoHomeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
