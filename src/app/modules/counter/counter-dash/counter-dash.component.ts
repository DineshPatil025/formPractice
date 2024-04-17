import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-dash',
  templateUrl: './counter-dash.component.html',
  styleUrls: ['./counter-dash.component.scss']
})
export class CounterDashComponent implements OnInit {

  counter: number = 0;

  constructor() { }

  ngOnInit(): void { }


  onIncremet() {
    this.counter++
  }

  onDecrement() {
    this.counter = this.counter - 1
  }

  onReset() {
    this.counter = 0;
  }
}
