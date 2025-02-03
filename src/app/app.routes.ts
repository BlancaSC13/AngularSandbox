import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { HomeComponent } from './home/home.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlaneComponent } from './plane/plane.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirige a home
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'first-child', component: FirstChildComponent },
      { path: 'second-child', component: SecondChildComponent },
    ],
  }, // Ruta home
  {
    path: 'student-add',
    component: StudentAddComponent,
    children: [{ path: 'planes-child', component: PlaneComponent }],
  },
  { path: '**', component: PageNotFoundComponent },
];
