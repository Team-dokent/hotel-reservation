import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoomService } from 'src/app/core/services/room/room.service';
import { Room } from 'src/app/core/models/room.model';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

export interface DialogData {
  animal: string;
  name: string;
}

export interface FormValue {
  title: string;
  description: string;
  pricePerNight: number;
  typeRoom: string;
  placeNumber: number;
  image: string;
}

interface TypeRoom {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.scss'],
})
export class RoomFormComponent implements OnInit {
  editMode: boolean = false;
  roomForm!: FormGroup;
  durationInSeconds = 2;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(
    public dialogRef: MatDialogRef<RoomFormComponent>,
    private roomService: RoomService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Room
  ) {}

  ngOnInit(): void {
    this.editMode = !!this.data;
    this.initForm();
  }

  initForm() {
    this.roomForm = new FormGroup({
      title: new FormControl(this.data ? this.data.title : '', [
        Validators.required,
      ]),
      description: new FormControl(this.data ? this.data.description : '', [
        Validators.required,
      ]),
      pricePerNight: new FormControl(this.data ? this.data.pricePerNight : '', [
        Validators.required,
      ]),
      typeRoom: new FormControl(this.data ? this.data.typeRoom : '', [
        Validators.required,
      ]),
      placeNumber: new FormControl(this.data ? this.data.placeNumber : '', [
        Validators.required,
      ]),
      image: new FormControl(this.data ? this.data.image : '', [
        Validators.required,
      ]),
    });
  }

  typeRooms: TypeRoom[] = [
    { value: 'rooms-for-2-people', viewValue: 'Chambres pour 2 personnes ' },
    { value: 'rooms-for-4-people', viewValue: 'Chambres pour 4 personnes' },
    { value: 'sequels', viewValue: 'suite' },
  ];

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (!this.editMode) {
      this.roomService.addRoom(this.roomForm.value).subscribe((res) => {
        this.openSnackBar('Chambre creer avec succes');
        this.roomForm.reset();
        this.onNoClick();
      });
    } else {
      this.roomService
        .updateRoom(this.data.id, this.roomForm.value)
        .subscribe(() => {
          this.openSnackBar('Chambre Modifier avec succes');
          this.roomForm.reset();
          this.onNoClick();
        });
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'x', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }
}
