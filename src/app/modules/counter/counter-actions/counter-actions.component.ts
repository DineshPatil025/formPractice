import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-actions',
  templateUrl: './counter-actions.component.html',
  styleUrls: ['./counter-actions.component.scss']
})
export class CounterActionsComponent implements OnInit {

  @Output() increment: EventEmitter<any> = new EventEmitter()
  @Output() decrement: EventEmitter<any> = new EventEmitter()
  @Output() reset: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onIncrement() {
    this.increment.emit()
  }
  onDecrement() {
    this.decrement.emit()
  }

  onReset() {
    this.reset.emit()
  }

}
