import { Component, Input } from '@angular/core';

@Component({
  selector: 'currency-select',
  template: `
    <select>
      <option>{{selected}}</option>
    </select>
  `
})
export class CurrencySelectComponent {

  @Input() selected: string;

}
