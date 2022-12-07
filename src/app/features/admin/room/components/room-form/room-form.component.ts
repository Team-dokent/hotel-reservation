import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface DialogData {
  animal: string;
  name: string;
}

export interface Room {
  id: number;
  title: string;
  image: string;
  description: string;
  pricePerNight: number;
  adult: number;
  children: number;
  typeRoom: string;
  createdAt: string;
  placeNumber: number;
}

interface TypeRoom {
  value: string;
  viewValue: string;
}

// rooms-for-4-people
@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.scss'],
})
export class RoomFormComponent implements OnInit {
  roomForm!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<RoomFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.roomForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      pricePerNight: new FormControl('', [Validators.required]),
      typeRoom: new FormControl('', [Validators.required]),
      placeNumber: new FormControl('', [Validators.required]),
      image: new FormControl(''),
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

  onSubmit(): void {
    console.log(this.roomForm.value);
    this.roomForm.reset();
  }
}
