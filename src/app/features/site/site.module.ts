import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HomeComponent } from './home/home.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
   HomeComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    MaterialModule,
    SwiperModule

   
  ]
})
export class SiteModule { }
