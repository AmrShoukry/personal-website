import { Component, Input, effect } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SvgComponent } from '../svg/svg.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() type: 'link' | 'button' = 'link';
  @Input() href: string = '/';
  @Input() variant: 'fill' | 'outline' | 'outline-icon' = 'outline';
  @Input() content: string = 'Learn More';
  @Input() local: boolean = false;
  @Input() anchor: boolean = false;

  constructor() {
    effect(() => {
      console.log(this.variant);
    });
  }
}
