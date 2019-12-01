import { NgModule }              from '@angular/core';
import { ModalFactoryModule }    from './modal/modal.factory.module';
import { ModalServiceModule }    from './modal/modal.service.module';
import { SocialLoginModule }     from 'angularx-social-login';
import { AuthUserService }       from './auth/auth-user.service';
import { ApiService }            from './api/api.service';
import { HTTP_INTERCEPTORS }     from '@angular/common/http';
import { HttpClientInterceptor } from './api/api.interceptor';

@NgModule({
  imports: [
    ModalServiceModule,
    ModalFactoryModule,
    SocialLoginModule
  ],
  providers: [
    ApiService,
    AuthUserService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true}
  ]
})
export class ServicesModule {
}
