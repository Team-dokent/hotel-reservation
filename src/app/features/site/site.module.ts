import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HomeComponent } from './home/home.component';
import { SwiperModule } from 'swiper/angular';
import { HeaderComponent } from 'src/app/core/components/site/header/header.component';
import { FooterComponent } from 'src/app/core/components/site/footer/footer.component';


@NgModule({
  declarations: [
   HomeComponent,
   HeaderComponent,
   FooterComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    MaterialModule,
    SwiperModule

   
  ]
})
export class SiteModule { }
