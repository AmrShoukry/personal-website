import { Component, signal } from '@angular/core';

import { ClickOutsideDirective } from '../../../directives/click-outside.directive';
import { CommonModule } from '@angular/common';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [LinkComponent, CommonModule, ClickOutsideDirective],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss',
})
export class LinksComponent {
  expanded = signal<boolean>(false);

  toggleExpanded() {
    this.expanded.update((oldValue) => !oldValue);
  }
  closeNavbar() {
    this.expanded.update(() => false);
  }
}
