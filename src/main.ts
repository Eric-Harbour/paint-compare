import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

bootstrapApplication(App, {
  providers: [
    provideRouter(routeConfig)
  ],
})
  .catch((err) => console.error(err));
