import { NgModule }           from '@angular/core';
import { ModalFactoryModule } from './modal/modal.factory.module';
import { ModalServiceModule } from './modal/modal.service.module';

@NgModule({
  imports: [
    ModalServiceModule,
    ModalFactoryModule
  ]
})
export class ServicesModule {
}
