import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateCaptchaComponent } from './generate-captcha/generate-captcha.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes =[
  {path:"", component:GenerateCaptchaComponent}
]

@NgModule({
  declarations: [
    GenerateCaptchaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GeneratecaptchaModule { }
