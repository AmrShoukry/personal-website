import { Component, Input } from '@angular/core';

import { ButtonComponent } from '../../components/general/button/button.component';

interface dataType {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-pages-landing',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './pages-landing.component.html',
  styleUrl: './pages-landing.component.scss',
})
export class PagesLandingComponent {
  @Input() data: dataType = { title: '', description: '', image: '' };
  @Input() local: boolean = false;
  @Input() href: string = '/';
}
