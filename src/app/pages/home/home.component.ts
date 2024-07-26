import {
  activitiesArray,
  certificatesArray,
  educationArray,
  projectsArray,
  sectionNames,
} from '../../../../data';

import { Component } from '@angular/core';
import { LandingComponent } from '../../sections/landing/landing.component';
import { SectionComponent } from '../../sections/section/section.component';
import { SliderComponent } from '../../sections/slider/slider.component';
import { skillsArray } from '../../../../data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LandingComponent, SectionComponent, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  educationArray = educationArray;
  projectsArray = projectsArray;
  certificatesArray = certificatesArray;
  activitiesArray = activitiesArray.slice(0, 2);
  skillsArray = skillsArray;
  sectionNames = sectionNames;
}
