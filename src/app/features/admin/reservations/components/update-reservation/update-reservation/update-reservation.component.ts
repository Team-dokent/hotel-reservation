import { Reservation } from './../../../../../../core/models/reservation.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationsService } from 'src/app/core/services/reservations/reservations.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.scss'],
})
export class UpdateReservationComponent implements OnInit {
  form!: FormGroup;
  durationInSeconds = 2;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(
    public dialogRef: MatDialogRef<UpdateReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Reservation,
    private formBuilder: FormBuilder,
    private reservationsService: ReservationsService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      status: [this.data?.status, Validators.required],
    });
  }

  foods: Food[] = [
    { value: 'pending', viewValue: 'En Attente' },
    { value: 'rejected', viewValue: 'Rejeter' },
    { value: 'validated', viewValue: 'Valider' },
  ];

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    const reservation = {
      ...this.data,
      status: this.form.value.status,
    };

    this.reservationsService
      .updateReservation(this.data.id, reservation)
      .subscribe(() => {
        this.openSnackBar('Reseration Modifier avec succes');
        this.onNoClick();
      });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'x', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }
}
