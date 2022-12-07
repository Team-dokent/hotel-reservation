import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailRomsComponent } from 'src/app/shared/site/components/rooms/detail-roms/detail-roms.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'room/:id', component: DetailRomsComponent },
  { path: 'rooms', component: RoomsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
