import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
const routes: Routes = [

  {
    path:"",
    component:EmployeesComponent
  },
  {
    path:'home',
    component:AppComponent
  }
  
];


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    EmployeesComponent
  ]
})
export class EmpsModule { }
