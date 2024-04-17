import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";


@Directive({
    selector: '[bgColorDirective]'
})

export class BgColorDirective implements OnInit {

    @HostBinding('bgColor') bgColor = 'gold'

    constructor(private ele: ElementRef, private rendered: Renderer2) { }
    ngOnInit(): void {

    }

    @HostListener('mouseenter')
    onMouseEnter() {
        // (this.ele.nativeElement as HTMLElement).style.backgroundColor = 'orange';
        // (this.ele.nativeElement as HTMLElement).style.color = 'black'

        this.rendered.setStyle(this.ele, 'background-color', 'orange')
        this.rendered.setStyle(this.ele, 'color', 'black')
    }
    @HostListener('mouseleave')
    onMouseLeave() {
        (this.ele.nativeElement as HTMLElement).style.backgroundColor = 'black';
        (this.ele.nativeElement as HTMLElement).style.color = 'orange'
    }


}