import { ComponentFactoryResolver, Injectable, Injector, TemplateRef } from '@angular/core';
import { ModalService }                                                from './modal.service';
import { Observable }                                                  from 'rxjs';
import { ModalConfig }                                                 from '../../core/models';

@Injectable()
export class ModalFactory {
  constructor(private modal: ModalService,
              private resolver: ComponentFactoryResolver) {
  }

  public custom(component: any, config: ModalConfig, entity: any, params?: any): Observable<any> {
    const parsedComponent = this.getTemplateRef(component);
    return this.modal.open({
      size: config.size,
      ignoreBackDropClick: true,
      params: {
        modal: parsedComponent,
        config: config,
        entity: entity,
        modalParams: params
      }
    });
  }

  private getTemplateRef(component: any): TemplateRef<any> {
    if (!component) return;
    let injector = Injector.create({providers: []});
    let factory: any = this.resolver.resolveComponentFactory(component);
    let componentInstance = factory.create(injector);
    return componentInstance.instance.templateRef;
  }
}
