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



@NgModule({
  declarations: [
   HomeComponent,
   HeaderComponent,
   FooterComponent,
   RestaurantComponent,
   ContactSharedComponent,
   ModalLoginComponent,
   ModalResetComponent,
   ContactComponent
   
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    MaterialModule,
    SwiperModule

   
  ]
})
export class SiteModule { }
