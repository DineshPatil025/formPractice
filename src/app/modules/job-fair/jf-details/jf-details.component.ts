import { Component, Input, OnInit } from '@angular/core';
import { Ifair } from '../shared/jf';

@Component({
  selector: 'app-jf-details',
  templateUrl: './jf-details.component.html',
  styleUrls: ['./jf-details.component.scss']
})
export class JfDetailsComponent implements OnInit {

  @Input() getFairDetails!:Ifair

  constructor() { }

  ngOnInit(): void {
    
  }

}
