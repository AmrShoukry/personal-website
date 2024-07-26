import {
  certificatesArray,
  certificatesData,
  certificatesSkillsArray,
} from '../../../../data';

import { Component } from '@angular/core';
import { PagesLandingComponent } from '../../sections/pages-landing/pages-landing.component';
import { SectionComponent } from '../../sections/section/section.component';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [SectionComponent, PagesLandingComponent],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss',
})
export class CertificatesComponent {
  certificatesData = certificatesData;
  certificatesSkillsArray = certificatesSkillsArray;
  certificatesArray = certificatesArray;
}
