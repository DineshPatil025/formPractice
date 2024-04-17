import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, debounceTime, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private sendConvertedCurr$: Subject<any> = new Subject()
  sendConvertedCurrAsObs$ = this.sendConvertedCurr$.asObservable()



  baseUrl: string = "https://v6.exchangerate-api.com/v6/8b94496b33cb6b07f623eaeb/latest"
  convUrl: string = `https://v6.exchangerate-api.com/v6/8b94496b33cb6b07f623eaeb/pair`
  // basecodefrom: string = "USD"
  // basecodeto!: string;

  constructor(private _http: HttpClient) { }

  getCountrylistfrom(basecode: string = "USD"): any {
    return this._http.get(`${this.baseUrl}/${basecode}`)
      .pipe(map((res: any) => {

        return Object.keys(res.conversion_rates)
      }))
  }

  getConvertedRate(from: string, to: string, amount: number) {
    let finUrl = `${this.convUrl}/${from}/${to}/${amount}`
    return this._http.get(finUrl)
   

    // this.sendConvertedCurr$.next(res.conversion_result)
  }


}
