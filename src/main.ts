import { inMemoryScrollingFeature, routes } from './app/app.routes';

import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        // console.log(
        //   'Service Worker registered with scope:',
        //   registration.scope
        // );
      })
      .catch((error) => {
        // console.error('Service Worker registration failed:', error);
      });
  });
}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes, inMemoryScrollingFeature)],
}).catch((err) => console.error(err));
