import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedGuard }          from './shared/guards/logged.guard';
import { PermissionGuard }      from './shared/guards/permission.guard';


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./base/admin/admin.module').then(m => m.AdminModule),
    canActivate: [PermissionGuard],
    data: {perms: []}
  },
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
export class AppRouting { }
