import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  @Output() appClickOutside = new EventEmitter<void>();

  constructor(private _elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    // Check if the clicked element is inside the directive's host element
    console.log('ss');
    if (!this._elementRef.nativeElement.contains(event.target)) {
      this.appClickOutside.emit();
    }
  }
}
