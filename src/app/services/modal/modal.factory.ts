import { ComponentFactoryResolver, Injectable, Injector, TemplateRef } from '@angular/core';
import { ModalService }                                                from './modal.service';
import { Observable }                                                  from 'rxjs';
import { ModalConfig }                                                 from '../../core/models';

@Injectable({providedIn: 'root'})
export class ModalFactory {
  constructor(private modal: ModalService,
              private resolver: ComponentFactoryResolver) {
  }

  public information(type: 'primary' | 'warning' | 'error', title: string) {
    return this.modal.open(
      'information',
      {
        size: 'md',
        ignoreBackDropClick: true,
        params: {
          type: type,
          title: title
        }
      });
  }

  public confirm(type: 'primary' | 'warning' | 'error', title: string) {
    return this.modal.open(
      'confirmation',
      {
        size: 'md',
        ignoreBackDropClick: true,
        params: {
          type: type,
          title: title
        }
      });
  }

  public custom(component: any, config: ModalConfig, entity: any, params?: any): Observable<any> {
    const parsedComponent = this.getComponentFactory(component);
    return this.modal.open(
      'custom',
      {
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

  private getComponentFactory(component: any) {
    return this.resolver.resolveComponentFactory(component);
  }
}
