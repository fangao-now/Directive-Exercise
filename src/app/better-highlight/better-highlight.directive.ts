import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'palegreen';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'palegreen');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

  constructor(private elementRef: ElementRef, private render: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'palegreen');
  }
}
