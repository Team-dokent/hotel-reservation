import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initFormGroup();
  }

  private initFormGroup(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }

  getFormControlErrorText(abstractControl: AbstractControl): string {
    if (abstractControl.hasError('required')) {
      return 'Ce champ est requis';
    } else if (abstractControl.hasError('email')) {
      return "Merci d'entrer une adresse mail valide";
    } else if (abstractControl.hasError('minlength')) {
      return 'Ce numéro de téléphone ne contient pas assez de chiffres';
    } else if (abstractControl.hasError('maxlength')) {
      return 'Ce numéro de téléphone contient trop de chiffres';
    } else {
      return 'Ce champ contient une erreur';
    }
  }
}
