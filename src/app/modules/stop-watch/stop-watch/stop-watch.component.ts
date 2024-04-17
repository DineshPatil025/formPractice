import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.scss']
})
export class StopWatchComponent implements OnInit {

  timer: number = 0;
  min: number = 0
  timerId: any;

  constructor() { }

  ngOnInit(): void {
  }

  startStopTimer() {

    if (this.timerId) {
      clearInterval(this.timerId)
      this.timerId = null
    } else {
      this.timerId = setInterval(() => {
        this.timer++

        if (this.timer === 60) {
          this.min++;
          this.timer = 0
        }
      }, 100)
    }
  }
  startTimer() {
    this.startStopTimer()

  }

  stopTimer() {
    clearInterval(this.timerId)
    this.timerId = null;

  }

  resetTimer() {
    this.timer = 0;
    this.min = 0
    clearInterval(this.timerId)
    this.timerId = null;
  }

}
