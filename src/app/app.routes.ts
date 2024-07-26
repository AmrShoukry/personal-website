import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  Routes,
  withInMemoryScrolling,
} from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';
import { EducationComponent } from './pages/education/education.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'certificates', component: CertificatesComponent },
  { path: 'about', component: AboutComponent },
  { path: '*', component: NotfoundComponent },
  { path: '**', component: NotfoundComponent },
];

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

export const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);
