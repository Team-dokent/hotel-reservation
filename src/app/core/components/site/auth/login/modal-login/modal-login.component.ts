import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalRegisterComponent } from '../../register/modal-register/modal-register.component';
@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {

  signin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });
  hide = true;
  get emailInput() { return this.signin.get('email'); }
  get passwordInput() { return this.signin.get('password'); }  

  constructor(
    public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
  }


  handleRegister(): void {
   // alert("salut");
    //this.dialog.closeAll(ModalRegisterComponent);
   

    // this.dialogRef.close();

    this.dialog.open(ModalRegisterComponent);

  }

}
