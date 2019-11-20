import { CommonModule }       from '@angular/common';
import { NgModule }           from '@angular/core';
import { SharedModule }       from '../../shared/shared.module';
import { ModalFactoryModule } from '../../services/modal/modal.factory.module';
import { RouterModule }       from '@angular/router';
import { loginRoutes }        from './login.routing';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes),
    ModalFactoryModule.forRoot(),
    SharedModule,
  ],
  declarations: [
    MainComponent
  ],
})
export class LoginModule {
}
