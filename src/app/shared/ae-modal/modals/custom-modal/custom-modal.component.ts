import { Component, ComponentFactoryResolver, Injector, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService }                                                                            from '../../../../services/modal/modal.service';
import { ModalConfig }                                                                             from '../../../../core/models';

@Component({
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent {
  @ViewChild('modalContent', {static: false, read: ViewContainerRef}) public modalContent: ViewContainerRef;

  public entity: any;
  public modalConfig: ModalConfig;
  public title: string;
  public internalModal: any;

  constructor(private modal: ModalService,
              private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector) {
    this.internalModal = this.injector.get('modal');
    this.entity = this.injector.get('entity');
    this.modalConfig = this.injector.get('config');
    setTimeout(_ => this.loadInnerComponent());
  }

  public onAction(action: 'accept' | 'close') {
    if (action === 'accept') {
      this.accept();
    } else {
      this.close();
    }
  }

  public accept() {
    this.modal.close({message: 'success', entity: this.entity});
  }

  public close() {
    this.modal.close({message: 'closed', entity: this.entity});
  }

  private loadInnerComponent() {
    setTimeout(async () => {
      const viewContainerRef = this.modalContent;
      if (!this.modalContent) return;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(this.internalModal);
      (<any>componentRef.instance).entity = this.entity;
    });
  }
}
