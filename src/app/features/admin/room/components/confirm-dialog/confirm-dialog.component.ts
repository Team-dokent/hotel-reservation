import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Room } from 'src/app/core/models/room.model';
import { RoomService } from 'src/app/core/services/room/room.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent {
  durationInSeconds = 2;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    private roomService: RoomService,
    @Inject(MAT_DIALOG_DATA) public data: Room,
    private _snackBar: MatSnackBar
  ) {}

  confirmeDialog() {
    this.deleteRoom(this.data.id);
  }

  deleteRoom(id: string | number) {
    this.roomService.deleteRoom(id).subscribe(() => {
      this.openSnackBar('Chambre supprimer avec succes');
    });
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'x', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }
}
