import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private render: Renderer2) { }

  ngOnInit() {
    this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'palegreen');
  }
}
