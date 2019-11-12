import { ModuleWithProviders, NgModule } from '@angular/core';
import { ModalFactory }                  from './modal.factory';

@NgModule({
  providers: [
    ModalFactory,
  ]
})
export class ModalFactoryModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ModalFactoryModule,
      providers: [
        ModalFactory
      ]
    };
  }
}
