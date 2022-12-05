import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HomeComponent } from './home/home.component';
import { SwiperModule } from 'swiper/angular';
import { HeaderComponent } from 'src/app/core/components/site/header/header.component';
import { FooterComponent } from 'src/app/core/components/site/footer/footer.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ModalLoginComponent } from 'src/app/core/components/site/auth/login/modal-login/modal-login.component';
import { ModalResetComponent } from 'src/app/core/components/site/auth/reset/modal-reset/modal-reset.component';
import { ContactComponent } from './contact/contact.component';
import { ContactSharedComponent } from 'src/app/shared/site/components/contact-shared/contact-shared.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
   HomeComponent,
   HeaderComponent,
   FooterComponent,
   RestaurantComponent,
   ModalLoginComponent,
   ModalResetComponent,
   ContactComponent,
   ContactSharedComponent,

   
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    MaterialModule,
    SwiperModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    SweetAlert2Module,

   
  ],
  providers: [
  
  ],
})
export class SiteModule { }
