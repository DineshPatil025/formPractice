import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigWatchComponent } from './dig-watch/dig-watch.component';
import { RouterModule, Routes } from '@angular/router';
import { DigWatchDashComponent } from './dig-watch-dash/dig-watch-dash.component';



const routes:Routes =[
  {
    path:"",
    component:DigWatchComponent
  }
]

@NgModule({
  declarations: [
    // DigWatchComponent
  
    // DigWatchDashComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DigWatchComponent

  ],
  // exports:[
  //   DigWatchComponent
  // ]
//  
})
export class DigWatchModule { }
