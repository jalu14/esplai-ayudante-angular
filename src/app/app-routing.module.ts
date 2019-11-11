import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'events',
    loadChildren: () => import('./base/events/events.module').then(m => m.EventsModule)
  },
  {
    path: 'members',
    loadChildren: () => import('./base/members/members.module').then(m => m.MembersModule)
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
