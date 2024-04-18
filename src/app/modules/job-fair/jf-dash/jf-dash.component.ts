import { Component, OnInit } from '@angular/core';
import { Ifair } from '../shared/jf';
import { fairsArr } from '../shared/jf-data';

@Component({
  selector: 'app-jf-dash',
  templateUrl: './jf-dash.component.html',
  styleUrls: ['./jf-dash.component.scss']
})
export class JfDashComponent implements OnInit {

  constructor() { }

  fairdetails!:Ifair

  jobfairsArr!:Array<Ifair>;

  ngOnInit(): void {

    this.jobfairsArr = fairsArr;
    this.fairdetails = this.jobfairsArr[0]
    // console.log(this.jfArr);
    
  }

  getjobFair(jf:Ifair){
    // console.log(jf);
    this.fairdetails = jf;
    
  }

}
