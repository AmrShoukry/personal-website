import {
  educationArray,
  educationData,
  educationProjectsArray,
  syllabusArray,
} from '../../../../data';

import { Component } from '@angular/core';
import { PagesLandingComponent } from '../../sections/pages-landing/pages-landing.component';
import { SectionComponent } from '../../sections/section/section.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [PagesLandingComponent, SectionComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  educationData = educationData;
  educationArray = educationArray;
  syllabusArray = syllabusArray;
  educationProjectsArray = educationProjectsArray;
}
