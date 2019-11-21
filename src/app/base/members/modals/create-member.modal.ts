import { Component }     from '@angular/core';
import { ModalTemplate } from '../../../core/template/modal-template';
import { EventEntity }   from '../../../core/entities';

@Component({
  template: `
    <ng-template #template let-entity>
      <div class="flex flex-wrap py-3 px-3">
        <div class="w-full mb-1 mt-2">
          <ae-input [model]="entity"
                    key="name"
                    [required]="true"
                    minLength="5"
                    [placeholder]="'Next week meeting'">
          </ae-input>
        </div>
        <div class="w-8/12 md:w-1/2 mb-1 mt-2 pr-2">
          <ae-datepicker [model]="entity" key="startDate"></ae-datepicker>
        </div>
        <div class="w-4/12 md:w-1/2 mb-1 mt-2 pl-2">
          <ae-switch [model]="entity" key="endsSameDay"></ae-switch>
        </div>
        <div [hidden]="identity(entity).endsSameDay" class="w-8/12 md:w-1/2 mb-1 mt-2">
          <ae-datepicker [model]="entity" key="endDate" [minDate]="identity(entity).startDate"></ae-datepicker>
        </div>
        <div class="w-full mb-1 mt-2">
          <ae-text-area [model]="entity"
                        key="description"
                        [placeholder]="'Short description'">
          </ae-text-area>
        </div>
      </div>
    </ng-template>`
})
export class CreateEventModal extends ModalTemplate {
  public identity(entity): EventEntity {
    return entity;
  }
}
