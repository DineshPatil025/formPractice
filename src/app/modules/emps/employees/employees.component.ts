import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,

})
export class EmployeesComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  empName: string = "Emp1"
  

  empArr = [
    {fname:'emp1', age:1},
    {fname:'emp2', age:2},
    {fname:'emp3', age:3}
  ]

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {}

  ngDoCheck(): void {}

  ngAfterContentInit(): void {}
  ngAfterContentChecked(): void { }

  ngAfterViewInit(): void {}
  ngAfterViewChecked(): void {}
  ngOnDestroy(): void {}

}
