import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/shared/services/currency.service';

@Component({
  selector: 'app-currency-dash',
  templateUrl: './currency-dash.component.html',
  styleUrls: ['./currency-dash.component.scss']
})
export class CurrencyDashComponent implements OnInit {

  countrylist!: Array<any>
  currvaluelist!: Array<any>
  fromcountry!: string;
  tocountry!: string;
  fromcurrency!: number;
  convertedcurrency!: number;
  istoDisabled: boolean = false
  isFromDisabled: boolean = true;

  constructor(private _currService: CurrencyService) { }

  ngOnInit(): void {
    this._currService.getCountrylistfrom().subscribe((res: any) => {
      this.countrylist = res;
    })


  }

  countrySelectedfrom(value: string) {
    this.fromcountry = value
    console.log(value);


  }
  countrySelectedto(value: string) {
    console.log(value);

    this.tocountry = value
    // this.isFromDisabled = !this.isFromDisabled;
  }

  fromValu(value: string) {

    this.fromcurrency = +value;
    console.log(this.fromcurrency);

    // this._currService.getConvertedRate(this.fromcountry, this.tocountry, this.fromcurrency)
    // .subscribe((res:any) => {
    //   this.convertedcurrency = res.conversion_result.toFixed(2);
    // })
  }

  convercurrency() {

    if (this.fromcountry === undefined || this.tocountry === undefined || this.fromcurrency === undefined) {
      alert("Enter All Values")
    } else {
      this._currService.getConvertedRate(this.fromcountry, this.tocountry, this.fromcurrency)
        .subscribe((res: any) => {
          this.convertedcurrency = res.conversion_result.toFixed(2);
        })
    }
  }
}
