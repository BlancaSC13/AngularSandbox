import { Routes } from '@angular/router';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentUpdateComponent } from './student-update/student-update.component';

export const routes: Routes = [
  { path: 'student-add', component: StudentAddComponent },
  {
    path: 'students',
    component: StudentListComponent,
    data: { title: 'Student List' },
  },
  {
    path: 'student-details/:id',
    component: StudentDetailsComponent,
    data: { title: 'Student Detail' },
  },
  {
    path: 'student-update/:id',
    component: StudentUpdateComponent,
    data: { title: 'Student Update' },
  },
];
