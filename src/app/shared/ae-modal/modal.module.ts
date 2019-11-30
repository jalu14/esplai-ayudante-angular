import { CommonModule }               from '@angular/common';
import { NgModule }                   from '@angular/core';
import { RouterModule }               from '@angular/router';
import { CustomModalComponent }       from './modals/custom-modal/custom-modal.component';
import { FullWidthFooterComponent }   from './partials/footers/full-width-footer/full-width-footer.component';
import { ConfirmationModalComponent } from './modals/confirmation-modal/confirmation-modal.component';
import { InformationModalComponent }  from './modals/information/information-modal.component';
import { TranslateModule }            from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
  ],
  declarations: [
    CustomModalComponent,
    ConfirmationModalComponent,
    InformationModalComponent,
    FullWidthFooterComponent
  ],
  entryComponents: [
    CustomModalComponent,
    ConfirmationModalComponent,
    InformationModalComponent,
  ],
})
export class ModalModule {
}
