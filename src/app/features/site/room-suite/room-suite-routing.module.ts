import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomSuiteComponent } from './room-suite.component';


const routes: Routes = [
  { path: '', component: RoomSuiteComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomSuiteRoutingModule { }
