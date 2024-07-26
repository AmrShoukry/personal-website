import { inMemoryScrollingFeature, routes } from './app/app.routes';

import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes, inMemoryScrollingFeature)],
}).catch((err) => console.error(err));
