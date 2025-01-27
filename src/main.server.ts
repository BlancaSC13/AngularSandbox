import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { PlaneComponent } from './app/plane/plane.component';

const bootstrap = () => bootstrapApplication(PlaneComponent, config);

export default bootstrap;
