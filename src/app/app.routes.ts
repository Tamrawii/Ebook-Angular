import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'ebooks',
    loadChildren: () => import('./ebooks/ebooks-module').then((m) => m.EbooksModule),
  },
];
