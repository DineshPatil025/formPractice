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
    loadChildren:() => import("./modules/emps/emps.module").then(m => m.EmpsModule)
  },
  {
    path:"stop-watch",
    loadChildren:() => import("./modules/stop-watch/stop-watch.module").then(m => m.StopWatchModule)
  },
  {
    path:"user-details",
    loadChildren:() => import("./modules/users/users.module").then(m => m.UsersModule)
  },
  {
    path:"counter",
    loadChildren:() => import("./modules/counter/counter.module").then(m => m.CounterModule)
  },
  {
    path:"axit",
    loadChildren:() => import("./modules/axit/axit.module").then(m => m.AxitModule)
  },
  {
    path:"tdform",
    loadChildren:() => import("./modules/td-form/td-form.module").then(m =>m.TdFormModule )
  },
  {
    path:"currencyexchange",
    loadChildren: () => import("./modules/currency-exchange/currency-exchange.module").then(m=>m.CurrencyExchangeModule),
    title:"Currency Exchange"
  },
  {
    path:"jobfair",
    loadChildren: () => import("./modules/job-fair/job-fair.module").then(m=>m.JobFairModule),
    title:"Job Fairs"
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
