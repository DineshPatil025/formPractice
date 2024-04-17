import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './modules/users/users.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { EmpsModule } from './modules/emps/emps.module';
import { CounterModule } from './modules/counter/counter.module';
import { StopWatchModule } from './modules/stop-watch/stop-watch.module';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { LoaderInterceptor } from './shared/services/loader.interceptor';
import { HeaderInterceptor } from './shared/services/header.interceptor';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    // FilterPipe,


    // BgColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    HttpClientModule,
    FormsModule
   


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HeaderInterceptor,
    //   multi:true
    // }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    // console.log("app module loaded");
  }
}
