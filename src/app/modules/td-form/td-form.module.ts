import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  {
    path:"",
    component:LoginFormComponent
  },
  // {
  //   path:"home",
  
  // }
]

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class TdFormModule { }
