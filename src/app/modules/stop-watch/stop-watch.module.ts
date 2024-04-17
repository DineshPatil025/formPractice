import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopWatchComponent } from './stop-watch/stop-watch.component';
import { BgColorDirective } from 'src/app/shared/directives/bg-color.directive';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path:"",
    component:StopWatchComponent
  }
]

@NgModule({
  declarations: [
    StopWatchComponent,
    BgColorDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    StopWatchComponent
  ]
})
export class StopWatchModule { }
