import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectiveColor]'
})
export class DirectiveColorDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = "red";
    el.nativeElement.style.fontWeight = "bolder";
    el.nativeElement.style.border = "2px double black";
  } 

}
