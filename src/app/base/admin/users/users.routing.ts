import { Routes }        from '@angular/router';
import { MainComponent } from './main/main.component';

export const usersRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
