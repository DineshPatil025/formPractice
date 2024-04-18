import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ifair } from '../shared/jf';

@Component({
  selector: 'app-jf-card',
  templateUrl: './jf-card.component.html',
  styleUrls: ['./jf-card.component.scss']
})
export class JfCardComponent implements OnInit {

@Input() jobfair !:Ifair;
@Output() sendJobFair:EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    
  }

  sendFair(){
    this.sendJobFair.emit(this.jobfair)
    // console.log("card clicked");
    
  }

}
