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
import { DetailRomsComponent } from 'src/app/shared/site/components/rooms/detail-roms/detail-roms.component';
import { BookingSharedComponent } from 'src/app/shared/site/components/booking-shared/booking-shared.component';
import { RoomsComponent } from './rooms/rooms.component';
import { Design1ListRoomsComponent } from 'src/app/shared/site/components/rooms/design1-list-rooms/design1-list-rooms.component';
import { Design2ListRoomsComponent } from 'src/app/shared/site/components/rooms/design2-list-rooms/design2-list-rooms.component';
import { Design2BookingComponent } from 'src/app/shared/site/components/design2-booking/design2-booking.component';
import { Rooms4Component } from './rooms4/rooms4.component';
import { RoomSuiteComponent } from './room-suite/room-suite.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SiteComponent } from './site.component';
import { SiteLayoutComponent } from 'src/app/layouts/site-layout/site-layout.component';


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
   DetailRomsComponent,
   BookingSharedComponent,
   RoomsComponent,
   Design1ListRoomsComponent,
   Design2ListRoomsComponent,
   Design2BookingComponent,
   Rooms4Component,
   RoomSuiteComponent,
   SiteComponent,
   SiteLayoutComponent


   
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
