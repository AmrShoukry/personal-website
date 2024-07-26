import {
  projectsArray,
  projectsData,
  projectsSkillsArray,
} from '../../../../data';

import { Component } from '@angular/core';
import { PagesLandingComponent } from '../../sections/pages-landing/pages-landing.component';
import { SectionComponent } from '../../sections/section/section.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionComponent, PagesLandingComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projectsArray = projectsArray;
  projectsSkillsArray = projectsSkillsArray;
  projectsData = projectsData;
}
