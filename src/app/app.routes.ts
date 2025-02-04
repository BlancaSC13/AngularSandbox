import { Routes } from '@angular/router';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'student-add', component: StudentAddComponent },
  {
    path: 'students',
    component: StudentListComponent,
    data: { title: 'Student List' },
  },
  { path: 'student-details/:id', component: StudentDetailsComponent },
  { path: 'student-update/:id', component: StudentUpdateComponent },
  { path: '**', component: PageNotFoundComponent },
];
