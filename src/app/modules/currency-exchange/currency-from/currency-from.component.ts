import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/shared/services/currency.service';

@Component({
  selector: 'app-currency-from',
  templateUrl: './currency-from.component.html',
  styleUrls: ['./currency-from.component.scss']
})
export class CurrencyFromComponent implements OnInit {

  constructor(private _currencyService:CurrencyService) { }

  ngOnInit(): void {
    // this._currencyService.getExchangeRates()
  }

}
