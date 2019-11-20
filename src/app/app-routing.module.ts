import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedGuard }          from './logged-guard.service';


const routes: Routes = [
  {
    path: 'events',
    loadChildren: () => import('./base/events/events.module').then(m => m.EventsModule),
    canActivate: [LoggedGuard]
  },
  {
    path: 'members',
    loadChildren: () => import('./base/members/members.module').then(m => m.MembersModule),
    canActivate: [LoggedGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./base/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '**',
    redirectTo: 'events'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
