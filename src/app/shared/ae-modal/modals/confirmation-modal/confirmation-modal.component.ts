import { Component, Injector, OnInit, TemplateRef } from '@angular/core';
import { ModalService }                             from '../../../../services/modal/modal.service';
import { ModalConfig }                              from '../../../../core/models';

@Component({
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent {

  public modalConfig: ModalConfig;
  public title: string;

  constructor(private modal: ModalService,
              private injector: Injector) {
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
    this.modal.close({message: 'success', entity: null});
  }

  public close() {
    this.modal.close({message: 'closed', entity: null});
  }

}
