import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'palegreen');
    this.backgroundColor = 'palegreen';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }

  constructor(private elementRef: ElementRef, private render: Renderer2) { }

  ngOnInit() {
    // this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'palegreen');
  }
}
