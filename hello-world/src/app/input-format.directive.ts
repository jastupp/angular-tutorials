import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  private m_format: string;

  // Constructor
  constructor(private m_elemnet: ElementRef ) { }


  @Input('appInputFormat') get format() { return this.m_format; }
  // set format(value) { this.m_format = value; }


  @HostListener('blur') onBlur() {
    const value: string = this.element.nativeElement.value;

    if (this.format === 'lowercase') {
      this.element.nativeElement.value = value.toLowerCase();
    } else {
      this.element.nativeElement.value = value.toUpperCase();
    }
  }


  private get element() { return this.m_elemnet; }

}
