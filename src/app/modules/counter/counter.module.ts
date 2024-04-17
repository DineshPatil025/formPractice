import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterDashComponent } from './counter-dash/counter-dash.component';
import { CounterActionsComponent } from './counter-actions/counter-actions.component';
import { CounterDisplayComponent } from './counter-display/counter-display.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path:"",
    component:CounterDashComponent
  }
]

@NgModule({
  declarations: [
    CounterDashComponent,
    CounterActionsComponent,
    CounterDisplayComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
   
  ],
  exports:[
    CounterDashComponent
  ]
})
export class CounterModule { }
