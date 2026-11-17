import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appColorCardDirectiveTs]',
  host: {
    '(click)': 'onMouseClick()'
  }
})
export class ColorCardDirectiveTs {
  private el = inject(ElementRef);

  onMouseClick() {
    this.loadDefaultColor();
  }

  private loadDefaultColor() {
    console.log(this.el.nativeElement);
  }
  
}
