import { Component, Input } from '@angular/core';

import { ButtonComponent } from '../../components/general/button/button.component';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../../components/general/image/image.component';

interface SectionElement {
  title?: string;
  text?: string;
  image?: string;
  bullets?: string[];
  link?: string;
  grade?: string;
}

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ImageComponent],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
})
export class SectionComponent {
  @Input() type: string = 'secondary';
  @Input() variant: string = 'one';
  @Input() head: string = '';
  @Input() elements: SectionElement[] = [];
  @Input() href: string = '/';
  @Input() link: boolean = true;
  @Input() local: boolean = false;
  @Input() groups: boolean = false;
  @Input() stop: number = Infinity;
}
