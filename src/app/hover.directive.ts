import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private ele: ElementRef) { }

  @HostListener('mouseenter') onmouseenter() {
    this.ele.nativeElement.style.backgroundColor = 'grey';
    this.ele.nativeElement.style.fontWeight = '500';
  }

  @HostListener('mouseleave') onmouseleave() {
    this.ele.nativeElement.style.backgroundColor = 'initial';
    this.ele.nativeElement.style.fontWeight = 'normal';
  }
}
