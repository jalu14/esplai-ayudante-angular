import { Routes }          from '@angular/router';
import { MainComponent }   from './main/main.component';
import { DetailComponent } from './detail/detail.component';

export const eventRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: ':id',
    component: DetailComponent,
  },
];
