import { Component }     from '@angular/core';
import { ModalTemplate } from '../../../core/template/modal-template';

@Component({
  template: `
    <ng-template #template let-entity>
      <div class="w-full px-2 mt-2">
        <div class="flex flex-wrap -mx-2">
          <div class="w-full md:w-1/2 lg:w-1/3 px-2">
            <ae-input [model]="entity"
                      key="givenName"
                      [required]="true"
                      minLength="5"
                      [placeholder]="'Jose pepe'">
            </ae-input>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-2">
            <ae-input [model]="entity"
                      key="middleName"
                      [required]="true"
                      minLength="5">
            </ae-input>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-2">
            <ae-input [model]="entity"
                      key="surName"
                      [required]="true"
                      minLength="5">
            </ae-input>
          </div>

          <div class="w-full px-2">
            <ae-select [model]="entity"
                       key="allergyList"
                       type="tag"
                       [multiple]="true"
                       [closeOnSelect]="false">
            </ae-select>
          </div>
        </div>
        <pre class="w-full">{{entity | json}}</pre>
      </div>
    </ng-template>`,
})
export class CreateMemberModal extends ModalTemplate {
}
