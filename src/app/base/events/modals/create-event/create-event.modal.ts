import { Component }     from '@angular/core';
import { ModalTemplate } from '../../../../core/template/modal-template';
import { EventEntity }   from '../../../../core/entities';

@Component({
  template: `
    <ng-template #template let-entity>
      <div class="flex flex-wrap py-3">
        <div class="w-full px-3 mb-1 mt-2">
          <ae-input [model]="entity"
                    key="name"
                    [required]="true"
                    minLength="10"
                    maxLength="5"
                    [placeholder]="'Next week meeting'">
          </ae-input>
        </div>
        <div class="w-1/2 px-3 mb-1 mt-2">
          <ae-datepicker [model]="entity" key="startDate"></ae-datepicker>
        </div>
        <div class="w-1/2 px-3 mb-1 mt-2">
          <ae-datepicker [model]="entity" key="endDate" [minDate]="identity(entity).startDate"></ae-datepicker>
        </div>
      </div>
      <pre>{{entity | json}}</pre>
    </ng-template>`
})
export class CreateEventModal extends ModalTemplate {
  public identity(entity): EventEntity {
    return entity;
  }
}
