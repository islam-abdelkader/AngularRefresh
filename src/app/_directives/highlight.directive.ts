import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(public element: ElementRef) {
    this.element.nativeElement.style.color = '#FF0';
    this.element.nativeElement.style.background = '#ddd';
  }
}
