import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageComponent } from '../../components/general/image/image.component';
import { SvgComponent } from '../../components/general/svg/svg.component';
import { aboutData } from '../../../../data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ImageComponent, CommonModule, SvgComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  aboutData = aboutData;
}
