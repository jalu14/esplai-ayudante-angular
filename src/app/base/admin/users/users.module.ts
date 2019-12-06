import { CommonModule }       from '@angular/common';
import { NgModule }           from '@angular/core';
import { RouterModule }       from '@angular/router';
import { MainComponent }      from './main/main.component';
import { ModalFactoryModule } from '../../../services/modal/modal.factory.module';
import { SharedModule }       from '../../../shared/shared.module';
import { usersRoutes }        from './users.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes),
    ModalFactoryModule.forRoot(),
    SharedModule,
  ],
  declarations: [
    MainComponent,
  ],
})
export class UsersModule {
}
