import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    // Typescript Syntax sugar: make elementRef an attribute of the directive without declaring it by adding 
    // "private" in front of the constructor parameter
    constructor(private elementRef: ElementRef) {
    }

    // not a good practive to set the native element here
    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'lightblue';
    }
}