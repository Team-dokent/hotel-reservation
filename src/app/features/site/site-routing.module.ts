import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailRomsComponent } from 'src/app/shared/site/components/rooms/detail-roms/detail-roms.component';
import { SiteComponent } from './site.component';


const routes: Routes = [

  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: SiteComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'restaurant',
        loadChildren: () =>
          import('./restaurant/restaurant.module').then((m) => m.RestaurantModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./contact/contact.module').then((m) => m.ContactModule),
      },
      {
        path: 'rooms2Persons',
        loadChildren: () =>
          import('./rooms/rooms.module').then((m) => m.RoomsModule),
      },
      {
        path: 'rooms4Persons',
        loadChildren: () => import('./rooms4/rooms4.module').then((m) => m.Rooms4Module),
      },
      {
        path: 'roomsSuite',
        loadChildren: () => import('./room-suite/room-suite.module').then((m) => m.RoomSuiteModule),
      },
    ],
  },
  { path: 'room/:id', component: DetailRomsComponent },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
