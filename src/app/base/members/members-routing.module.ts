import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent}        from './main/main.component';
import { DetailComponent }    from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: ':id',
    component: DetailComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRouting {
}
