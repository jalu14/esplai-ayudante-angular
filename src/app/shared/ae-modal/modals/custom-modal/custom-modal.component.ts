import { Component, Injector, OnInit, TemplateRef } from '@angular/core';
import { ModalService }                             from '../../../../services/modal/modal.service';
import { ModalConfig }                              from '../../../../core/models';

@Component({
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent {

  public entity: any;
  public modalConfig: ModalConfig;
  public title: string;
  public internalModal: TemplateRef<any>;

  constructor(private modal: ModalService,
              private injector: Injector) {
    this.internalModal = this.injector.get('modal');
    this.entity = this.injector.get('entity');
    this.modalConfig = this.injector.get('config');
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

}
