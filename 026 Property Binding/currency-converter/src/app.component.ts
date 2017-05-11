import { Component } from '@angular/core';

@Component({
  selector: 'currency-converter',
  template: `
    <input type="number" [value]="baseAmount"> USD =
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

  baseAmount = 1;
  targetAmount = 0.70;

}
