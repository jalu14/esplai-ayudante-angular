import { Routes }        from '@angular/router';
import { MainComponent } from './main/main.component';

export const adminRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
  },
  {
    path: '**',
    redirectTo: ''
  }
];
