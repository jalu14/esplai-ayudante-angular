import { Component }     from '@angular/core';
import { ModalTemplate } from '../../../../core/template/modal-template';
import { EventEntity }   from '../../../../core/entities';

@Component({
  templateUrl: './create-event.modal.html'
})
export class CreateEventModal extends ModalTemplate {
  public entity: EventEntity
}
