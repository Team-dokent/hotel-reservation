import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/site/auth/modal/login/login.component';
import { ModalLoginComponent } from './components/site/auth/login/modal-login/modal-login.component';
import { ModalResetComponent } from './components/site/auth/reset/modal-reset/modal-reset.component';
import { ModalRegisterComponent } from './components/site/auth/register/modal-register/modal-register.component';




@NgModule({
  declarations: [

  
    LoginComponent,
         ModalLoginComponent,
         ModalResetComponent,
         ModalRegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
