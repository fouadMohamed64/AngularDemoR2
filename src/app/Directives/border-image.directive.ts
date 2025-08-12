import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[BorderImage]',
  standalone: true
})
export class BorderImageDirective implements OnChanges {

  @Input() defaultColor: string = 'orange';
  @Input('BorderImage') mainColor: string = 'gold'

  constructor(public eleRef: ElementRef) { 
    console.log('inside constructor')
  }

  // ngOnInit(){
  //   console.log('inside onInit')
  // }

  ngOnChanges() {
    this.eleRef.nativeElement.style.border = `5px solid ${this.mainColor}`;
    console.log('indide onChanges')
  }


  @HostListener('mouseover') onHover() {
    this.eleRef.nativeElement.style.border = `10px solid ${this.defaultColor}`
    this.eleRef.nativeElement.style.transform = 'scale(1.1)'
  }

  @HostListener('mouseleave') onLeave() {
    this.eleRef.nativeElement.style.border = `5px solid ${this.mainColor}`
    this.eleRef.nativeElement.style.transform = 'scale(1)'
  }


}
