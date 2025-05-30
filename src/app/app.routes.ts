import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'contato',
    loadComponent: () => import('./contato/contato.page').then( m => m.ContatoPage)
  },
  {
    path: 'termino',
    loadComponent: () => import('./termino/termino.page').then( m => m.TerminoPage)
  },
];
