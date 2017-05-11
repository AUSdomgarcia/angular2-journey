import { Directive, ElementRef, EventEmitter,
         HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[myModel]',
  exportAs: 'myModel'
})
export class MyModelDirective {

  @Input() required;
  @Output('myModelChange') modelChange = new EventEmitter();

  invalid = false;

  private element: HTMLInputElement;

  constructor(elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }

  @Input('myModel') set model(value) {
    this.element.value = value;
    this.validate();
  }

  @HostListener('input') onInput() {
    this.modelChange.emit(this.element.value);
    this.validate();
  }

  private validate() {
    if (this.required === undefined || this.element.value) {
      this.element.classList.remove('my-invalid');
      this.element.classList.add('my-valid');
      this.invalid = false;
    } else {
      this.element.classList.remove('my-valid');
      this.element.classList.add('my-invalid');
      this.invalid = true;
    }
  }

}
