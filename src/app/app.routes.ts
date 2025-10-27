import { Routes } from '@angular/router';
import { CoursesPage } from './courses/courses-page';
import { UsersPage } from './users/users-page';

export const routes: Routes = [
  { path: '', component: CoursesPage },
  {
    path: 'users',
    component: UsersPage,
  },
];