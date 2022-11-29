import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalLoginComponent } from './components/site/auth/login/modal-login/modal-login.component';
import { ModalResetComponent } from './components/site/auth/reset/modal-reset/modal-reset.component';





@NgModule({
  declarations: [
    ModalLoginComponent,
    ModalResetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
