import { Component, Injector } from '@angular/core';
import { ModalService }        from '../../../../services/modal/modal.service';

@Component({
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent {

  public type: string;
  public title: string;

  constructor(private modal: ModalService,
              private injector: Injector) {
    this.type = this.injector.get('type');
    this.title = this.injector.get('title');
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
