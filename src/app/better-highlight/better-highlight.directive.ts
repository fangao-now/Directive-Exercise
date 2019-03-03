import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'palegreen');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }

  constructor(private elementRef: ElementRef, private render: Renderer2) { }

  ngOnInit() {
    // this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'palegreen');
  }
}
