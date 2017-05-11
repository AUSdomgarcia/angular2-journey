import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[myModel]'
})
export class MyModelDirective {

  private element: HTMLInputElement;

  constructor(elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }

  @Input('myModel') set model(value) {
    this.element.value = value;
  }

}
