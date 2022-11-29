import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { User } from 'src/app/core/models/user';

export interface DialogData {
  animal: string;
  name: string;
}

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  foods: Food[] = [
    { value: 'hotel-manager', viewValue: 'Directrice de l’hôtel' },
    {
      value: 'hotel-reservations-manager',
      viewValue: 'Responsable des réservations de l’hôtel',
    },
    { value: 'project-manager', viewValue: 'Chef de projet' },
  ];
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.form.value;
    console.log(this.form.value);
    this.form.reset();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
