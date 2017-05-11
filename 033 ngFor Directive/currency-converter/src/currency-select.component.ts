import { Component, Input } from '@angular/core';
import { ExchangeService } from './exchange.service';

@Component({
  selector: 'currency-select',
  template: `
    <select [ngModel]="selected">
      <option *ngFor="let currency of supportedCurrencies" [value]="currency">
        {{currency}}
      </option>
    </select>
  `
})
export class CurrencySelectComponent {

  @Input() selected: string;

  supportedCurrencies: string[];

  constructor(exchangeService: ExchangeService) {
    this.supportedCurrencies = exchangeService.supportedCurrencies;
  }

}
