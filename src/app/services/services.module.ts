import { NgModule }           from '@angular/core';
import { ModalFactoryModule } from './modal/modal.factory.module';
import { ModalServiceModule } from './modal/modal.service.module';
import { SocialLoginModule }  from 'angularx-social-login';
import { AuthUserService }    from './auth/auth-user.service';

@NgModule({
  imports: [
    ModalServiceModule,
    ModalFactoryModule,
    SocialLoginModule
  ],
  providers: [AuthUserService]
})
export class ServicesModule {
}
