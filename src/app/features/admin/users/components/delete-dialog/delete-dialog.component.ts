import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { User } from 'src/app/core/models/user';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent {
  durationInSeconds = 2;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    private usersService: UsersService,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private _snackBar: MatSnackBar
  ) {}

  confirmeDialog() {
    this.deleteUser(this.data.id);
  }

  deleteUser(id: string | number) {
    this.usersService.deleteUser(id).subscribe((response) => {
      this.openSnackBar('Utilisateur supprimer avec succes');
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
