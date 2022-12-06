import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { User } from 'src/app/core/models/user';
import {
  UserForm,
  UsersService,
} from 'src/app/core/services/users/users.service';

export interface Profil {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  editMode = false;
  profils: Profil[] = [
    { value: 'hotel-manager', viewValue: 'Directrice de l’hôtel' },
    {
      value: 'hotel-reservations-manager',
      viewValue: 'Responsable des réservations de l’hôtel',
    },
    { value: 'project-manager', viewValue: 'Chef de projet' },
  ];
  form!: FormGroup;
  durationInSeconds = 2;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private usersService: UsersService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.editMode = !!this.data;
    this.initForm();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      firstName: [this.data?.firstName, Validators.required],
      lastName: [this.data?.lastName, Validators.required],
      email: [this.data?.email, Validators.required],
      phone: [this.data?.phone, Validators.required],
      role: [this.data?.role, Validators.required],
    });
  }

  onSubmit() {
    if (!this.editMode) {
      const userDataForm: UserForm = {
        ...this.form.value,
      };

      this.usersService.addUser(userDataForm).subscribe((user) => {
        this.openSnackBar('Utilisateur creer avec succes');
        this.onNoClick();
      });
    } else {
      console.log('Update user');
      const userDataForm: UserForm = {
        ...this.form.value,
      };
      this.usersService.update(this.data.id, userDataForm).subscribe((user) => {
        this.openSnackBar('Utilisateur Modifier avec succes');
        this.onNoClick();
      });
    }

    this.form.reset();
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
