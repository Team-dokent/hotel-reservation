import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { HeaderComponent } from './core/components/site/header/header.component';
import { FooterComponent } from './core/components/site/footer/footer.component';
import { SiteModule } from './features/site/site.module';


@NgModule({
    declarations: [
      AppComponent, 
      HeaderComponent, 
      FooterComponent
     
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        SiteModule
    ]
})
export class AppModule {}
