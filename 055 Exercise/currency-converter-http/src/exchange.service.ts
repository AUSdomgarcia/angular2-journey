import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ExchangeService {

  supportedCurrencies = ['EUR', 'GBP', 'USD'];

  private apiUrl = 'http://api.fixer.io';  
  private exchangeRates = new Map<string, number>();

  constructor(private http: Http) {
    for (const baseCurrency of this.supportedCurrencies) {
      this.loadRates(baseCurrency);
    }
  }

  getExchangeRate(baseCurrency: string, targetCurrency: string): number {
    if (baseCurrency === targetCurrency) {
      return 1;
    }
    return this.exchangeRates.get(`${baseCurrency}/${targetCurrency}`);
  }

  private loadRates(baseCurrency: string) {
    const targetCurrencies = this.supportedCurrencies.filter(currency => currency !== baseCurrency);
    this.http.get(`${this.apiUrl}/latest?base=${baseCurrency}&symbols=${targetCurrencies}`)
      .toPromise()
      .then(response => {
        const rates = response.json().rates;
        for (const targetCurrency in rates) {
          this.exchangeRates.set(`${baseCurrency}/${targetCurrency}`, rates[targetCurrency]);
        }
      });    
  }

}
