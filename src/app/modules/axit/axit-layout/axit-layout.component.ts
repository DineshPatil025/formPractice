import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-axit-layout',
  templateUrl: './axit-layout.component.html',
  styleUrls: ['./axit-layout.component.scss']
})
export class AxitLayoutComponent implements OnInit, OnDestroy {


  intrvl!: Subscription;
  constructor() { }

  ngOnInit(): void {

    this.intrvl = interval(1000).subscribe(res => {
      console.log(res);

    })
    console.log(this.intrvl);


  }

  ngOnDestroy(): void {
    this.intrvl.unsubscribe();
  }

}
