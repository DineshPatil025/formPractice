import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { JfDashComponent } from './jf-dash/jf-dash.component';
import { JfCardComponent } from './jf-card/jf-card.component';
import { JfDetailsComponent } from './jf-details/jf-details.component';

const routes:Routes = [
  {path:"", component:JfDashComponent}
]

@NgModule({
  declarations: [
    JfDashComponent,
    JfCardComponent,
    JfDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    
  ]
})
export class JobFairModule { }
