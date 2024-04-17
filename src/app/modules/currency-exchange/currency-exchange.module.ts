import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyDashComponent } from './currency-dash/currency-dash.component';
import { CurrencyFromComponent } from './currency-from/currency-from.component';
import { CurrencyToComponent } from './currency-to/currency-to.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes =[
  {
    path:"", component:CurrencyDashComponent
  }
]

@NgModule({
  declarations: [
    CurrencyDashComponent,
    CurrencyFromComponent,
    CurrencyToComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CurrencyExchangeModule { }
