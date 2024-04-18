import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dig-watch',
  templateUrl: './dig-watch.component.html',
  styleUrls: ['./dig-watch.component.scss'],
  standalone:true,
})
export class DigWatchComponent implements OnInit {


  time!:string
  date!: string;


  newTime!: string;
  constructor() { }

  ngOnInit(): void {
    this.getTime()
    setInterval(() => {
      this.getTime()
    }, 1000);
    
  }

  getTime() {
    // this.hour = new Date().getHours()
    // this.min = new Date().getMinutes()
    // this.sec = new Date().getSeconds()
    this.date = new Date().toLocaleDateString('en-GB',)
    // let momentVariable = moment(dateString, 'MM-DD-YYYY');
    this.time = new Date().toLocaleTimeString()
  }

  // updateTime(){
  //   this.newTime = new Date().toLocaleTimeString()
  // }

}
