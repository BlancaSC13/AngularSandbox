import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { PlaneComponent } from './app/plane/plane.component';

bootstrapApplication(PlaneComponent, appConfig).catch((err) =>
  console.error(err)
);
