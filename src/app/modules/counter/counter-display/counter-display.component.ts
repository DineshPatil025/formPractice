import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.scss']
})
export class CounterDisplayComponent implements OnInit {


  @Input() counter !: number ;
  constructor() { }

  ngOnInit(): void {}

}
