import { Component } from '@angular/core';

@Component({
  selector: 'currency-converter',
  template: `
    <input type="number" [value]="baseAmount"
      (input)="update($event.target.value)"> USD =
    <strong>{{targetAmount}}</strong> GBP
  `,
  styles: [`
    input[type=number] {
      width: 10ex;
      text-align: right;
    }
  `]
})
export class AppComponent {

  exchangeRate = 0.70;
  baseAmount = 1;
  targetAmount = this.exchangeRate;

  update(baseAmount) {
    this.targetAmount = parseFloat(baseAmount) * this.exchangeRate;
  }

}
