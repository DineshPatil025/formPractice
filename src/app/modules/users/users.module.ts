import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';

const routes : Routes = [
  {
    path:"",
    component:UserDashboardComponent
  }
]

@NgModule({
  declarations: [
    UserDashboardComponent,
    UserFormComponent,
    UserListComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    UserDashboardComponent
  ]
})
export class UsersModule {

  constructor() {
    // console.log("user module loaded");

  }

}
