import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [

  {
    path:"main-dash",
    component:AppComponent
  },
 
  {
    path:"emp-details",
    loadChildren:() => import("./modules/emps/emps.module").then(m => m.EmpsModule),
    title:"Home-Employee Details"
  },
  {
    path:"stop-watch",
    loadChildren:() => import("./modules/stop-watch/stop-watch.module").then(m => m.StopWatchModule),
    title:"Home-Stop Watch"
  },
  {
    path:"user-details",
    loadChildren:() => import("./modules/users/users.module").then(m => m.UsersModule),
    title:"Home-User Details"
  },
  {
    path:"counter",
    loadChildren:() => import("./modules/counter/counter.module").then(m => m.CounterModule),
    title:"Home-Counter"
  },
  {
    path:"axit",
    loadChildren:() => import("./modules/axit/axit.module").then(m => m.AxitModule),
    title:"Home-Axit Layout"
  },
  {
    path:"tdform",
    loadChildren:() => import("./modules/td-form/td-form.module").then(m =>m.TdFormModule ),
    title:"Home-Template-Driven Form"
  },
  {
    path:"currencyexchange",
    loadChildren: () => import("./modules/currency-exchange/currency-exchange.module").then(m=>m.CurrencyExchangeModule),
    title:"Home-Currency Exchange"
  },
  {
    path:"jobfair",
    loadChildren: () => import("./modules/job-fair/job-fair.module").then(m=>m.JobFairModule),
    title:"Home-Job Fairs"
  },
  {
    path:"digwatch",
    loadChildren:()=> import('./modules/dig-watch/dig-watch.module').then(m=>m.DigWatchModule),
    title:"Home-Digital Watch"
  },
  {
    path:"generatecaptcha",
    loadChildren:()=> import('./modules/generatecaptcha/generatecaptcha.module').then(m=>m.GeneratecaptchaModule),
    title:"Home-Generate Captcha"
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
