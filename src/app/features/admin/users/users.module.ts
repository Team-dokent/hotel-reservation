import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { UserFormComponent } from './components/user-form/user-form.component';

@NgModule({
  declarations: [UsersComponent, UserFormComponent],
  imports: [CommonModule, UsersRoutingModule, MaterialModule],
})
export class UsersModule {}
