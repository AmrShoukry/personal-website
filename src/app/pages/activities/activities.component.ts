import {
  activitiesArray,
  activitiesData,
  activitiesSkillsArray,
} from '../../../../data';

import { Component } from '@angular/core';
import { PagesLandingComponent } from '../../sections/pages-landing/pages-landing.component';
import { SectionComponent } from '../../sections/section/section.component';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [SectionComponent, PagesLandingComponent],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss',
})
export class ActivitiesComponent {
  activitiesData = activitiesData;
  activitiesSkillsArray = activitiesSkillsArray;
  activitiesArray = activitiesArray;
}
