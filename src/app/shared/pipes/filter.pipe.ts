import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchVal: string): any {


    if (!value) return null;
    if (!searchVal) return value;

    searchVal = searchVal.toLowerCase();
    let filtVal = value.filter((ele: any) => {
      return ele.email.toLowerCase().includes(searchVal)
    })
    // console.log(filtVal);


    return filtVal;
  }

}
