import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Rooms4Component } from './rooms4.component';


const routes: Routes = [
  { path: '', component: Rooms4Component, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Rooms4RoutingModule { }
