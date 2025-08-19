import { Routes } from '@angular/router';
import { ErrorPage } from './pages/error-page/error-page';

export const routes: Routes = [
  { path: 'not-found', component: ErrorPage, data: { code: 404 } },
  { path: 'forbidden', component: ErrorPage, data: { code: 403 } },
  { path: 'unauthorized', component: ErrorPage, data: { code: 401 } },
  { path: 'server-error', component: ErrorPage, data: { code: 500 } },
  { path: '**', redirectTo: 'not-found' }
];