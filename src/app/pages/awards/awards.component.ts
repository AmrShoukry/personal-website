import { Component } from '@angular/core';
import { SectionComponent } from '../../sections/section/section.component';
import { PagesLandingComponent } from '../../sections/pages-landing/pages-landing.component';
import { awardsArray, awardsData } from '../../../../data';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [SectionComponent, PagesLandingComponent],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss',
})
export class AwardsComponent {
  awardsData = awardsData;
  awardsArray = awardsArray;
}
